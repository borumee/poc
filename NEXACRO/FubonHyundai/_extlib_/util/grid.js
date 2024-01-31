var pForm = nexacro.Form.prototype;
pForm.bOrdAsc = false; // 정렬 오름차순 여부
pForm.bOrdDesc = false; // 정렬 내림차순 여부
pForm._gridOrgSelectType = ""; // 그리드 selectType
var _pGrid = nexacro.Grid.prototype;

pForm.COL_SEPERATOR = "\t"; // 복사/붙여넣기 Col
pForm.ROW_SEPERATOR = "\r\n"; // 복사/붙여넣기 Row

pForm.fv_originFormats; // 그리드 원본 포맷 (개인화)
pForm.fv_originRowSizeList // 그리드 Row Size 정보 (개인화)

pForm.bOrgDs;
pForm.excelUrl = "svcUrl::XExportImport.do";
pForm.ParentForm;
pForm.parentGrid;

/*
 *  this.gfn_setGrid
 *	그리드 팝업세팅
 */
pForm.gfn_setGrid = function (objGrid)
{
	var grid = objGrid;
	var form = grid.parent;//this
	this.ParentForm = form;
	var sName = grid.name;
	var arrOption = grid.option;
	var nApp = nexacro.getApplication();
	
	if (this.gfn_isNull(arrOption)) return;

	var objPopupGds = nApp.gds_GridPopupMenu;
	
	var name = "popup_" + grid.name + "_" + form.name; // 팝업명 ex) popup_grd_Master_Module
	var sPopupDsMenu = "dsPopupMenu_" +  sName + "_" + form.name; // 그리드명 ex) dsPopupMenu_grd_Master_Module
	
	var objPopupDs = new Dataset(sPopupDsMenu); // 새 데이터셋 생성
	objPopupDs.copyData(objPopupGds);
	
	var i;
	for (i = (objPopupDs.rowcount-1); i >= 0; i--) 
	{
		var sModuleId = objPopupDs.getColumn(i, "id");
		var nIdx = sModuleId.indexOf("_");
		
		if (nIdx > -1) {
			sModuleId = sModuleId.substr(0, nIdx);
		}
		
		sModuleId = sModuleId.toLowerCase();
		arrOption = arrOption.toLowerCase();
		//trace("arrOption.indexOf(sModuleId) = " + sModuleId + ", " +  + arrOption.indexOf(sModuleId));
		
		// option 값을 못찾았으면
		if ((arrOption.indexOf(sModuleId) < 0) && arrOption != "all") { // sModuleId != arrOption
			objPopupDs.deleteRow(i);
		}
	}

	var pmnu = new PopupMenu();
	pmnu.init(name, 0, 0, 100, 100);
	form.addChild(pmnu.name, pmnu);
	pmnu.set_innerdataset(objPopupDs);
	pmnu.set_idcolumn("id");
	pmnu.set_captioncolumn("caption");
	pmnu.set_levelcolumn("level");
	
	pmnu.set_enablecolumn("enable");
	pmnu.addEventHandler("onmenuclick", this.gfn_popupMenuOnMenuClickHandler, form);
	pmnu.show();
	pmnu.grid = grid; // 그리드 세팅
	
	grid.rClickPopupMenu = pmnu; // 그리드 팝업 세팅
	grid.PopupDs = objPopupDs; // 그리드 팝업 데이터셋 세팅
	grid.orgFormat = grid.getFormatString();
	grid.orgSelectType = grid.selecttype;
	grid.orgAutoFitType = grid.autofittype;
	
	// 그리드에 이벤트 추가
	grid.addEventHandler("onrbuttondown", this.gfn_Grid_onrbuttondown, this);
	grid.addEventHandler("onsize", this.gfn_Grid_onsize, this);
	
	// 그리드 개인화
	this.fv_originFormats = grid.getFormatString();
	this.fv_originRowSizeList = grid._rowSizeList.slice();
	
	var getFormat = this.ParentForm.name + "." + grid.id + "." + "format";
	var getRowSize = this.ParentForm.name + "." + grid.id + "." + "rowsize";
	
	var grid_format = nexacro.getPrivateProfile(getFormat),
		grid_rowsize = nexacro.getPrivateProfile(getRowSize);
	
	if (grid_format) {
		grid.set_formats(grid_format);
	}
	
	if (grid_rowsize) {
		var rowSize = grid_rowsize.split(",");
		var i;
		
		for (i = 0, len = rowSize.length; i < len; i++) 
		{
			grid.setRealRowSize(i, Number(rowSize[i]));
		}
	}
};

/*
 *  this.gfn_Grid_onsize
 *	그리드 onsize
 */
pForm.gfn_Grid_onsize = function (objGrid, e)
{
}

/*
 *  this.gfn_Grid_onrbuttondown
 *	그리드 팝업 rbutton 이벤트
 */
pForm.gfn_Grid_onrbuttondown = function (objGrid, e) // grid, mouseevent
{
	var nRow = e.row
	var ds = objGrid.PopupDs;
 	var pmnu = objGrid.rClickPopupMenu;
	var sBandType = "";
	
	pmnu.cellindex = e.cell;
	pmnu.rowindex = e.row;
	pmnu.colindex = e.col;
	
	if (nRow < -1) return;
	if (nRow == -1) sBandType = "head";
	else if(nRow == -2) sBandType = "summary";
	else sBandType = "body";
	
	ds.filter("type == '" + sBandType + "' ");
	
	// 숫자 컬럼만 소계 기능 활성화하기 - Start
	this.vCurrCol = e.col;
	this.fixClickRow = nRow;
	this.vBodyCellID = objGrid.getBindColumnNameByIndex(this.vCurrCol);
	//trace("this.vBodyCellID = " + this.vBodyCellID);
	
	var nRow = ds.findRow("id", "subsum");
	var objBindDs = objGrid.getBindDataset();
	
// 	if(objBindDs.getColumnInfo(this.vBodyCellID).type == "BIGDECIMAL" || objBindDs.getColumnInfo(this.vBodyCellID).type == "INT" || objBindDs.getColumnInfo(this.vBodyCellID).type == "FLOAT")
// 	{
// 		ds.setColumn(nRow, "enable", true);
// 	}
// 	else
// 	{
// 		ds.setColumn(nRow, "enable", false);
// 	}	
	// 숫자 컬럼만 소계 기능 활성화하기 - End
	
	if (ds.rowcount > 0) {
		pmnu.trackPopupByComponent(objGrid, e.canvasx, e.canvasy);
	}
};

/*
 *  this.gfn_popupMenuOnMenuClickHandler
 *	그리드 팝업 메뉴클릭 이벤트
 */
pForm.gfn_popupMenuOnMenuClickHandler = function(objPopMenu, e)
{
	if (this.gfn_isNull(objPopMenu)) return;
	
    var sPopupMenuId = e.id; // 팝업메뉴 id
	var sModuleId = ""; // 모듈 id
	var sModuleOption = ""; // 모듈 option
    var grid = objPopMenu.grid; // 그리드 설정
	var ds = objPopMenu.grid.PopupDs; // 데이터셋 설정
	var orgFormat = objPopMenu.grid.orgFormat; // 그리드 포맷
	var objBindDs = grid.getBindDataset(); // 그리드 바인딩 데이터셋
	this.bOrgDs = objBindDs;
	var nCellIdx = objPopMenu.cellindex;
	var nRowIdx  = objPopMenu.rowindex;
	var nColIdx = objPopMenu.colindex;	
	
	var nIdx = sPopupMenuId.indexOf("_");
	if (nIdx > -1) {
		sModuleId = sPopupMenuId.substr(0, nIdx); // select_multirow -> select
		sModuleOption = sPopupMenuId.substr(nIdx+1, sPopupMenuId.length); // select_multirow -> multirow
	} else {
		sModuleId = sPopupMenuId;
		sModuleOption = sPopupMenuId;
	}
	
	switch(sModuleId)
	{
		// 열고정
		case "colfix":
			this.gfn_GridColFix(grid, nCellIdx);
			break;
		// 열고정 해제
		case "colfixclear":
			this.gfn_GridColFixClear(grid, nCellIdx);
			break;
		// 헤더정렬사용
		case "sort":
			this.gfn_GridSort(grid);
			break;			
		// 헤더정렬사용안함
		case "sortnone":
			this.gfn_GridSortNone(grid);
			break;
		// 컬럼 숨기기/보이기
		case "colhide":
			this.gfn_GridColHideShow(grid, nCellIdx);
			break;
		// Copy & Paste 사용
		case "cellcopypaste":
			this.gfn_GridCellCopyPaste(grid);
			break;
		// Copy & Paste 사용 안함
		case "cellcopypastenone":
			this.gfn_GridCellCopyPasteNone(grid);
			break;						
		// 그리드필터
		case "filter":
			this.gfn_GridFilter(grid);
			break;
		// 그리드필터 해제
		case "filterclear":
			this.gfn_GridFilterClear(grid);
			break;
		// 그리드 개인화 저장
		case "personalized" :
			var formatString = grid.getCurFormatString(),
				rowSizeList = grid._rowSizeList.toString();
			
			var setFormat = this.ParentForm.name + "." + grid.id + "." + "format";
			var setRowSize = this.ParentForm.name + "." + grid.id + "." + "rowsize";
			
			nexacro.setPrivateProfile(setFormat, formatString);
			nexacro.setPrivateProfile(setRowSize, rowSizeList);
			
			alert("Changes saved.");			
			break;
		// 그리드 설정 초기화
		case "init":
			this.gfn_GridInit(grid);
			break;			
		// 행고정
		case "rowfix":
			grid.fixedRow = nRowIdx;
			this.gfn_GridRowFix(grid);
			break;
		// 행고정 해제
		case "rowfixclear":
			grid.fixedRow = -1;
			this.gfn_GridRowFix(grid);
			break;
		// 데이터 찾기
		case "find":
			this.gfn_GridTextFind(grid, nCellIdx, nRowIdx);
			break;
		// 스크롤
		case "scroll":
			this.gfn_GridFastvscrolltype(grid, sModuleOption);
			break;
		// 셀선택
		case "select":
			this.gfn_GridSelecttype(grid, sModuleOption);
			break;
		// 그리드 합계처리
		case "total":
			if (sModuleOption == "top") {
				this.gfn_GridSumTop(grid);
			} else if (sModuleOption == "bottom") {
				this.gfn_GridSumBottom(grid);
			} else {
				grid.deleteContentsRow("summary", 0);
			}
			break;
		// 그리드 소계 처리	
		case "subsum" :
			if (sModuleOption == "set") 
			{
				var vColumnId  = grid.getBindColumnNameByIndex(nCellIdx);
				
				// 콤보 cell subress 처리 => 예시) <Cell col="2" textAlign="left" suppress="1" text="bind:Company"/>
				grid.setCellProperty("body", grid.getCellPos(), "suppress", "1");
				
				// 데이터셋 column 처리 => 예시) keystring="G:+Company"
				objBindDs.set_keystring("G:+" + vColumnId);
			}
			else 
			{
				var i;
				for (i = 0 ; i < grid.getCellCount("head"); i++)
				{
					// 전체컬럼에 대해서 supress를 "" 처리
					grid.setCellProperty("body", i, "suppress", "");
				}
				
				// 데이터셋 키스트링값 지우기 ==> sort도 지워진다
				objBindDs.set_keystring("");				
			}
			break;
		// 그리드 엑셀 내보내기/가져오기
		case "excel":
			this.parentGrid = grid;
			if (sModuleOption == "export") {
				 this.gfn_Export(grid);
			} else {
				this.gfn_Import("Sheet1", "A1", objBindDs);
			}
			break;
	}
};

/*
 *	this.gfn_GridColFix
 *	열 고정
 */
pForm.gfn_GridColFix = function (objGrid, nCellIdx)
{
	var nCol = nexacro.toNumber(objGrid.getCellProperty("head", nCellIdx, "col"));
	var nColSpan = nexacro.toNumber(objGrid.getCellProperty("head", nCellIdx, "colspan"));
	var nRowSpan = nexacro.toNumber(objGrid.getCellProperty("head", nCellIdx, "rowspan"));
	var nMaxCol = 0;
	
	objGrid.set_enableredraw(false);
	objGrid.setFormatColProperty(0, "band", "body");
	
	if (nMaxCol < (nCol + nColSpan)) {
		nMaxCol = nCol + nColSpan;
	}
	
	objGrid.setFormatColProperty(nMaxCol-1, "band", "left");
	
	var i;
	for (i = 0; i < objGrid.getCellCount("head"); i++) 
	{
		if (i >= 0 && i < nMaxCol) {
			objGrid.setCellProperty("head", i, "background", "#A598EF");
		} else {
			objGrid.setCellProperty("head", i, "background", "");
		}
	}
	
	objGrid.set_enableredraw(true);
};

/*
 *	this.gfn_GridColFixClear
 *	열 고정해제
 */
pForm.gfn_GridColFixClear = function (objGrid, nCellIdx)
{
	objGrid.set_enableredraw(false);
	objGrid.setFormatColProperty(0, "band", "body");
	
	var i;
	for (i = 0; i < objGrid.getCellCount("head"); i++) 
	{
		objGrid.setCellProperty("head", i, "background", "");
	}
	
	objGrid.set_enableredraw(true);
};

/*
 *	this.gfn_GridSort
 *	헤더정렬
 */
pForm.gfn_GridSort = function (objGrid)
{
	objGrid.addEventHandler('onheadclick', this.gfn_Grid_onheadclick, this);
}

pForm.gfn_Grid_onheadclick = function (objGrid, e)
{
	var ds = objGrid.getBindDataset();
	var sText = objGrid.getCellProperty("body", e.cell, "text");
	var columnid = "";

	if (!this.gfn_isNull(sText))
	{
		if (sText.search(/^BIND\(/) > -1 ) 
		{	
			columnid = sText.replace(/^BIND\(/, "");
			columnid = columnid.substr(0, columnid.length-1);
		} 
		else if (sText.search(/^bind:/) > -1 ) 
		{
			columnid = sText.replace(/^bind:/, "");
		}
	}
	
	var i;
	for (i = 0; i < objGrid.getCellCount("head"); i++) 
	{
 		if (i == e.cell) {
			objGrid.setCellProperty("head", i, "expandsize", 24);
			objGrid.setCellProperty("head", i, "expandshow", "show");
		} else {
			objGrid.setCellProperty("head", i, "expandsize", 0);
			objGrid.setCellProperty("head", i, "expandshow", "hide");
		}
 	}

	// 오름차순으로 정렬
	if (this.bOrdAsc == false) 
	{
		objGrid.setCellProperty("head", e.cell, "expandimage", "imagerc::img_WF_flowTop.png");
		ds.set_keystring("S:+" + columnid);
		this.bOrdAsc = true;
	}
	// 내림차순으로 정렬
	else if (this.bOrdAsc == true && this.bOrdDesc == false)
	{
		objGrid.setCellProperty("head", e.cell, "expandimage", "imagerc::img_WF_flowBottom.png");
		ds.set_keystring("S:-" + columnid);
		this.bOrdDesc = true;
	} 
	else
	{
		objGrid.setCellProperty("head", e.cell, "expandshow", "hide");
		ds.set_keystring("");
		this.bOrdAsc = false;
		this.bOrdDesc = false;
	}
};

/*
 *	this.gfn_GridSortNone
 *	헤더정렬 사용 안함
 */
pForm.gfn_GridSortNone = function (objGrid)
{
	var i;
	for (i = 0; i < objGrid.getCellCount("head"); i++) 
	{
		objGrid.setCellProperty("head", i, "expandshow", "hide");
	}
	
	var ds = objGrid.getBindDataset();
	ds.set_keystring("");
	objGrid.removeEventHandler( "onheadclick", this.gfn_Grid_onheadclick, this);
};

/*
 *	this.gfn_GridColHideShow
 *	컬럼 숨기기/보이기
 */
pForm.gfn_GridColHideShow = function (objGrid, nCellIdx)
{
 	var nLeft = objGrid.getOffsetLeft();
 	var nTop = objGrid.getOffsetTop();
	var objChildFrame = new ChildFrame();
	
    objChildFrame.init("POP_GridColHideShow"
                      , nLeft
                      , nTop
                      , 300
                      , 400
                      , null
                      , null
                      , "Comm::GridColHideShow.xfdl");

    objChildFrame.set_dragmovetype("all");
    objChildFrame.set_openalign("center middle");
    objChildFrame.set_overlaycolor("RGBA(196,196,196,0.5)")
    objChildFrame.set_showtitlebar(true);
    objChildFrame.set_titlebarheight(30);
	
    var oArg = {"grid":objGrid}; // 변수넘기기
    objChildFrame.showModal(this.getOwnerFrame()
                          , oArg
                          , this
                          , "fn_PopupCallback");
};

/*
 *	this.gfn_GridCellCopyPaste
 *	Copy & Paste 사용
 */
pForm.gfn_GridCellCopyPaste = function (objGrid)
{
	var form = objGrid.parent;
	
	objGrid.set_selecttype("area");
	objGrid.addEventHandler("onkeydown", this.gfn_Grid_copyonkeydown, form);
	
	form.addEventHandler("ontimer", this.grid_Grid_copyontimer, form);
};

/*
 *	this.gfn_GridCellCopyPasteNone
 *	Copy & Paste 사용 안함
 */
pForm.gfn_GridCellCopyPasteNone = function (objGrid)
{
	var form = objGrid.parent;
	
	objGrid.set_selecttype("row");
	objGrid.removeEventHandler("onkeydown", this.gfn_Grid_copyonkeydown, form);
	
	form.removeEventHandler("ontimer", this.grid_Grid_copyontimer, form);
};

/*
 *	this.gfn_GridInit
 *  그리드 설정 초기화
 */
pForm.gfn_GridInit= function (objGrid)
{
	objGrid.set_enableredraw(false);
	objGrid.set_formats(this.fv_originFormats);
	
	var i;
	for (i = 0, len = this.fv_originRowSizeList.length; i < len; i++) 
	{
		objGrid.setRealRowSize(i, Number(this.fv_originRowSizeList[i]));
	}
	objGrid.set_enableredraw(true);
	
	objGrid.set_formats(objGrid.orgFormat);
	objGrid.set_selecttype("row");
// 	this.fv_originFormats = objGrid.orgFormat;
// 	this.fv_originRowSizeList = objGrid._rowSizeList.slice();
	
	var setFormat = this.ParentForm.name + "." + objGrid.id + "." + "format";
	var setRowSize = this.ParentForm.name + "." + objGrid.id + "." + "rowsize";
			
	nexacro.setPrivateProfile(setFormat, "");
	nexacro.setPrivateProfile(setRowSize, "");
	
	this.gfn_GridFilterClear(objGrid);
};

/*
 *	this.gfn_GridFilter
 *  그리드필터
 */
pForm.gfn_GridFilter = function (objGrid)
{
 	var nLeft = objGrid.getOffsetLeft();
 	var nTop = objGrid.getOffsetTop();
	var orgselecttype = objGrid.selecttype;
	var objChildFrame = new ChildFrame();
	
    objChildFrame.init("POP_GridFilter"
                      , nLeft
                      , nTop
                      , 620
                      , 500
                      , null
                      , null
                      , "Comm::GridFilter.xfdl");

    objChildFrame.set_dragmovetype("all");
    objChildFrame.set_openalign("center middle");
    objChildFrame.set_overlaycolor("RGBA(196,196,196,0.5)")
    objChildFrame.set_showtitlebar(true);
    objChildFrame.set_titlebarheight(20);
	
    var oArg = {"grid":objGrid}; // 변수넘기기
    objChildFrame.showModal(this.getOwnerFrame()
                          , oArg
                          , this
                          , "fn_PopupCallback");
};

/*
 *	this.gfn_GridFilterClear
 *  그리드필터 해제
 */
pForm.gfn_GridFilterClear = function (objGrid)
{
	var ds = objGrid.getBindDataset();
	var i;
	for (i = 0; i < objGrid.getCellCount("head"); i++) 
	{
		objGrid.setCellProperty("head", i, "expandsize", 0);
		objGrid.setCellProperty("head", i, "expandshow", "hide");
 	}
	
	ds.set_filterstr("");
};

/*
 *	this.gfn_GridRowFix
 *	행 고정
 */
pForm.gfn_GridRowFix = function (objGrid)
{
	var clname = "Cell_WF_Fixed";
	clname = nexacro.wrapQuote(clname); // 전달된 문자열의 양쪽 끝에 큰따옴표를 붙여 반환합니다.
			
	objGrid.set_enableredraw(false);
	var sCss = "";
	var i;
	for (i = 0; i < objGrid.getFormatColCount(); i++)
	{
		var expr = "";
		if (objGrid.fixedRow >= 0) {
			expr = "expr:comp.fixedRow==currow?" + clname + ":''";
		}

		sCss = objGrid.getCellProperty("body", i, "cssclass");
		objGrid.setCellProperty("body", i, "cssclass", expr);
	}
	
	objGrid.set_enableredraw(true);
	objGrid.setFixedRow(objGrid.fixedRow);
};

/*
 *	this.gfn_GridRowFixClear
 *	그리드 행 고정해제
 */
pForm.gfn_GridRowFixClear = function (objGrid)
{	
	// 초기화
	objGrid.setFixedRow(-1);
};

/*
 *	this.gfn_GridTextFind
 *  그리드 데이터 찾기
 */
pForm.gfn_GridTextFind = function (objGrid, nCellIndex, nRowIndex)
{
 	var nLeft = objGrid.getOffsetLeft();
 	var nTop = objGrid.getOffsetTop();
	var orgselecttype = objGrid.selecttype;
	var objChildFrame = new ChildFrame();
	
    objChildFrame.init("POP_GridTextFind"
                      , nLeft
                      , nTop
                      , 400
                      , 240
                      , null
                      , null
                      , "Comm::GridTextFind.xfdl");

    objChildFrame.set_dragmovetype("all");
    objChildFrame.set_openalign("center middle");
    objChildFrame.set_overlaycolor("transparent")
    objChildFrame.set_showtitlebar(true);
	
    var oArg = {"grid":objGrid, "cellIndex":nCellIndex, "rowIndex":nRowIndex, "selectType":orgselecttype}; // 변수넘기기
    objChildFrame.showModal(this.getOwnerFrame()
                          , oArg
                          , this
                          , "fn_PopupCallback");
};

/*
 *	this.gfn_GridFastvscrolltype
 *  그리드 스크롤 옵션 설정
 */
pForm.gfn_GridFastvscrolltype = function (objGrid, type)
{
	objGrid.set_fastvscrolltype(type);
};

/*
 *	this.gfn_GridSelecttype
 *  그리드 셀선택 옵션 설정
 */
pForm.gfn_GridSelecttype = function (objGrid, type)
{
	objGrid.set_selecttype(type);
};

/*
 *	this.gfn_GridSumTop
 *	합계(상단)
 */
pForm.gfn_GridSumTop = function (objGrid)
{
	var i;
	var objBindDs = objGrid.getBindDataset();
	objGrid.set_summarytype("top");
	
	if (objGrid.getCellCount("summary") < 1)
	{
		var nRow = objGrid.insertContentsRow("summary",0);
		
		for (i = 0 ; i < objGrid.getCellCount("head") ; i++)
		{
			vBodyCellID = objGrid.getBindColumnNameByIndex(i);
			
			if (vBodyCellID == "No") continue; //#### 하드코딩 ,, 공통에서 판단할 수 없는 영역
			
			//데이타셋의 숫자컬림인 경우만 summary 해준다.
			if (objBindDs.getColumnInfo(vBodyCellID).type == "BIGDECIMAL" || objBindDs.getColumnInfo(vBodyCellID).type == "INT" || objBindDs.getColumnInfo(vBodyCellID).type == "FLOAT" )
			{
				objGrid.setCellProperty("summary", i, "expr", "dataset.getSum('" + vBodyCellID + "')");
				objGrid.setCellProperty("summary", i, "displaytype", objGrid.getCellProperty("body", i, "displaytype"));
				objGrid.setCellProperty("summary", i, "textAlign", "right");
			}
		}
		
		objGrid.setFormatRowProperty( 2,"size",34 );
	}
};

/*
 *	this.gfn_GridSumBottom
 *	합계(하단)
 */
pForm.gfn_GridSumBottom = function (objGrid)
{
	var i;
	var objBindDs = objGrid.getBindDataset();
	var vBodyCellID;
	
	objGrid.set_summarytype("default");
	
	if (objGrid.getCellCount("summary") < 1)
	{
		var nRow = objGrid.insertContentsRow("summary",0);
			
		for (i = 0 ; i < objGrid.getCellCount("head"); i++)
		{
			vBodyCellID = objGrid.getBindColumnNameByIndex(i);
			
			if (vBodyCellID == "No") continue; //#### 하드코딩 ,, 공통에서 판단할 수 없는 영역
			
			//데이타셋의 숫자컬림인 경우만 summary 해준다.
			if (objBindDs.getColumnInfo(vBodyCellID).type == "BIGDECIMAL" || objBindDs.getColumnInfo(vBodyCellID).type == "INT" || objBindDs.getColumnInfo(vBodyCellID).type == "FLOAT")
			{
				objGrid.setCellProperty("summary", i, "expr", "dataset.getSum('"+vBodyCellID+"')");
				objGrid.setCellProperty("summary", i, "displaytype", objGrid.getCellProperty("body", i, "displaytype"));
				objGrid.setCellProperty("summary", i, "textAlign", "right");
			}
		}
		
		objGrid.setFormatRowProperty( 2,"size",34 );
	}
};

/**
* 엑셀 Export
* @param {Grid} grid 대상 Grid Component
*/
pForm.gfn_Export = function(objGrid)
{
    if (this.gfn_isNull(this.ExcelExportObject00) == true)
    {
        this.ExcelExportObject00 = new ExcelExportObject();
		
        this.ExcelExportObject00.addEventHandler("onsuccess", this.ExcelExportObject00_onsuccess, this);
        this.ExcelExportObject00.addEventHandler("onerror", this.ExcelExportObject00_onerror, this);
        
		this.ExcelExportObject00.set_exportactivemode("active");
        this.ExcelExportObject00.set_exportmessageprocess("%d [ %d / %d ]");
        this.ExcelExportObject00.set_exportuitype("exportprogress");
        this.ExcelExportObject00.set_exporteventtype("itemrecord");
        this.ExcelExportObject00.set_exporttype(nexacro.ExportTypes.EXCEL2007);
    }
    else
    {
        this.ExcelExportObject00.clear();
    }
	
	var ret = this.ExcelExportObject00.addExportItem( nexacro.ExportItemTypes.GRID, objGrid, "Sheet1!A1", "nohead,nosumm", "allrecord", "suppress", "allstyle", "none", "color", "both");
	
    this.ExcelExportObject00.set_exportfilename(this.titletext + "_" + objGrid.name + "_Export");
    this.ExcelExportObject00.set_exporturl(this.excelUrl);
    this.ExcelExportObject00.exportData();
};

/**
* 엑셀 Import
* @param {strSheetName} Sheet 명
* @param {strSheetArea} Sheet 정보
* @param {strDsName} Grid Binding Dataset Object
*/
pForm.gfn_Import = function (strSheetName, strSheetArea, strDsName)
{
	var ds = new Dataset;
	this.ParentForm.addChild("dsTemp", ds);
	this.ParentForm.dsTemp.assign(strDsName);
	
	var importObjExcel;
	var param2 = strSheetName + "!" + strSheetArea;
	var param3 = "dsTemp=output";

	importObjExcel = new ExcelImportObject("Import00", this);
	importObjExcel.set_importtype(nexacro.ImportTypes.EXCEL2007);
	importObjExcel.set_importfilemode("local");
	importObjExcel.set_importurl(this.excelUrl);
	
	importObjExcel.addEventHandler("onsuccess", this.fn_ImportOnSuccess, this);
	importObjExcel.addEventHandler("onerror", this.fn_ImportOnError, this);
	
	importObjExcel.importData("", param2, param3);
	importObjExcel = null;
};

pForm.fn_ImportOnSuccess = function(obj,e)
{
	this.parentGrid.set_binddataset("");
	this.ParentForm.bOrgDs.clearData();
	
	var cnt = this.parentGrid.getCellCount("head");
	
	for (var i = 0; i < cnt; i++)
	{
		var colId = this.parentGrid.getCellProperty("body", i, "text" );
		this.dsTemp.updateColID(i, colId.split(":")[1].trim());
	}
	
	for (var j = 0; j < this.dsTemp.getRowCount(); j++)
	{
		var nRow = this.ParentForm.bOrgDs.addRow();
		this.ParentForm.bOrgDs.copyRow(nRow, this.dsTemp, j);
	}
	
	this.parentGrid.set_binddataset(this.ParentForm.bOrgDs);
	this.ParentForm.removeChild("dsTemp");
};

/**
* copy & paste 처리
* @param {Grid} obj Event가 발생한 Grid Component
* @param {KeyEventInfo} e KeyEventInfo
*/
pForm.gfn_Grid_copyonkeydown = function(obj, e) 
{
	var keycode = e.keycode;
	var form = obj.parent;
	var sGrdSelectType = obj.selecttype;

	if (system.navigatorname != "nexacro")
	{
		if (e.ctrlkey) 
		{
			if (keycode == 67) //WRE COPY
			{
				form.targetGrid = undefined;

				var startrow = nexacro.toNumber(obj.selectstartrow);
				var endrow = nexacro.toNumber(obj.selectendrow);
				var startcol = nexacro.toNumber(obj.selectstartcol);
				var endcol = nexacro.toNumber(obj.selectendcol);
				
				var clipText = "";
				var value = "";

				//그리드에 rowspan한 행이 없는 경우
				for (var i = startrow; i <= endrow; i++) 
				{
					for (var j = startcol; j <= endcol; j++) 
					{
						value = "";

						if (!this.gfn_isNull(obj.getCellValue(i, j))) {
							value += obj.getCellValue(i, j);
						} else {
							value += "";
						}
						
						clipText += value;

						if (j < endcol) {
							clipText += this.COL_SEPERATOR;
						} else {
							clipText += this.ROW_SEPERATOR;
						}						
					}
				}

				form.targetGrid = obj;
 				var ta = this._createTextarea(clipText);
				form.targetGrid["ta"] = ta;
				form.setTimer(777, 100);
				e.stopPropagation();

				alert("Data copy complete.");
			}
			else if (keycode == 86) //WRE 붙여넣기
			{
				form.targetGrid = obj;
				form.targetEvent = e;

				var ta = this._createTextarea('');
				form.targetGrid["ta"] = ta;

				form.setTimer(888, 100);

				e.stopPropagation();

				alert("Pasting of data is complete.");
			}
		}
	}
};

/**
* 붙여넣기
* @param {Form} form Form object
* @param {string} clipText 붙여 넣을 텍스트
* @memberOf nxlib.grid
*/
pForm.pasteData = function(form, clipText) 
{
	var obj = form.targetGrid;

	obj.set_enableevent(false);
	obj.set_enableredraw(false);

	var ds = obj.getBindDataset();
	ds.set_enableevent(false);

	var grdCellCount = obj.getCellCount("body");
	var rowCount = ds.getRowCount();
	var startrow = nexacro.toNumber(obj.selectstartrow)
	  , endrow = nexacro.toNumber(obj.selectendrow)
	  , startcol = nexacro.toNumber(obj.selectstartcol)
	  , endcol = nexacro.toNumber(obj.selectendcol);

	var currRow = startrow;
	var cellIndex = startcol;

	copyData = clipText;

	var rowData = copyData.split(/[\n\f\r]/);
	var rowDataCount = rowData.length - 1;

	var checkIndex = {};

	for (var i = 0; i < rowDataCount; i++) 
	{
		if (rowCount <= currRow) {
			ds.addRow();
		}

		var columnData = rowData[i].split(this.COL_SEPERATOR);
		var columnLoopCount = cellIndex + columnData.length;

		if (columnLoopCount > grdCellCount) {
			columnLoopCount = grdCellCount;
		}

		var k = 0;
		for (var j = cellIndex; j < columnLoopCount; j++) 
		{
			if (!checkIndex[j]) {
				checkIndex[j] = 1;
			}

			var colid = obj.getCellProperty("body", j, "text").substr(5);
			var tempValue = columnData[k];
			if (!this.gfn_isEmpty(tempValue) && tempValue != "undefined") {
				ds.setColumn(currRow, colid, tempValue);
			}

			k++;
		}

		currRow++;
	}

	ds.rowposition = currRow;

	endrow = endrow + rowDataCount - 1;
	endcol = columnLoopCount - 1;

	obj.set_enableredraw(true);
	obj.set_enableevent(true);
	ds.set_enableevent(true);

	obj.selectArea(startrow, startcol, endrow, endcol);
};
			
/*
 *	this.fn_PopupCallback
 *	팝업콜백
 */
pForm.fn_PopupCallback = function (sId)
{
	// trace("sId = " + sId);
};

/**
 * body cell index로 binding 된 컬럼명을 얻어온다.
 * @param {number} index body cell index
 */
_pGrid.getBindColumnNameByIndex = function(index)
{
	var text = "";
	var columnid = "";
	var subCell = this.getCellProperty("body", index, "subcell");

	if (subCell > 0) {
		text = this.getSubCellProperty("body", index, 0, "text");
	} else {
		text = this.getCellProperty("body", index, "text");
	}

	if (!pForm.gfn_isEmpty(text))
	{
		if (text.search(/^BIND\(/) > -1) {
			columnid = text.replace(/^BIND\(/, "");
			columnid = columnid.substr(0, columnid.length - 1);
		} else if (text.search(/^bind:/) > -1) {
			columnid = text.replace(/^bind:/, "");
		}
	}

	return columnid;
};

/* Textarea 생성 함수
* @param {String} innerText 복사할 텍스트
* @memberOf nxlib.grid
*/
pForm._createTextarea = function(innerText) 
{
	var ta = document.createElement('textarea');
	ta.style.position = 'absolute';
	ta.style.left = '-1000px';
	ta.style.top = document.body.scrollTop + 'px';
	ta.value = innerText;
	document.body.appendChild(ta);
	ta.select();
	
	return ta;
};

/**
* 그리드 복사 타이머 이벤트
* @param {Form} obj Event가 발생한 Form Component
* @param {TimerEventInfo} e TimerEventInfo
* @memberOf nxlib.grid
*/
pForm.grid_Grid_copyontimer = function(obj, e) 
{
	if (system.navigatorname != "nexacro" || system.navigatorname != "IE") 
	{
		var timerid = e.timerid;
		obj.killTimer(timerid);
		
		if (timerid == 777) 
		{
			var ta = obj.targetGrid["ta"];

			if (!ta) return;

			document.body.removeChild(ta);
			obj.targetGrid["ta"] = undefined;
		} 
		else if (timerid == 888) 
		{
			var ta = obj.targetGrid["ta"];

			if (!ta) return;

			var clipText = ta.value;
			document.body.removeChild(ta);
			this.pasteData(obj, clipText);

			obj.targetGrid["ta"] = undefined;
		}
	}
};