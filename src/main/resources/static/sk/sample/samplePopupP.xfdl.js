(function(){return function(){if(!this._is_form){return;}var _a=null;this.on_create=function(){this.set_name("samplePopupP");this.set_titletext("팝업샘플용화면");if(Form==this.constructor){this._setFormPosition(700,394);}_a=new Dataset("dsGrid",this);_a._setContents("<ColumnInfo><Column id=\"ID\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/><Column id=\"DEPARTMENT\" type=\"STRING\" size=\"256\"/><Column id=\"DESCRIPTION\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"ID\">aaaaaaaaa</Col><Col id=\"NAME\">김영수</Col><Col id=\"DEPARTMENT\">사업컨설팅팀</Col><Col id=\"DESCRIPTION\">책임</Col></Row><Row><Col id=\"ID\">bbbbbbbb</Col><Col id=\"NAME\">최희영</Col><Col id=\"DEPARTMENT\">프리세일즈팀</Col><Col id=\"DESCRIPTION\">수석</Col></Row><Row><Col id=\"ID\">ccccccccc</Col><Col id=\"NAME\">최택수</Col><Col id=\"DEPARTMENT\">재무회계팀</Col><Col id=\"DESCRIPTION\">선임</Col></Row><Row><Col id=\"ID\">dddddddd</Col><Col id=\"NAME\">소희진</Col><Col id=\"DEPARTMENT\">공시팀</Col><Col id=\"DESCRIPTION\">책임</Col></Row><Row><Col id=\"ID\">eeeeeeeee</Col><Col id=\"NAME\">김나라</Col><Col id=\"DEPARTMENT\">인사총무팀</Col><Col id=\"DESCRIPTION\">책임</Col></Row><Row><Col id=\"ID\">ffffffffffff</Col><Col id=\"NAME\">박찬수</Col><Col id=\"DEPARTMENT\">영업팀</Col><Col id=\"DESCRIPTION\">수석</Col></Row><Row><Col id=\"ID\">gggggggg</Col><Col id=\"NAME\">허소진</Col><Col id=\"DEPARTMENT\">사업지원팀</Col><Col id=\"DESCRIPTION\">수석</Col></Row><Row><Col id=\"ID\">hhhhhhhh</Col><Col id=\"NAME\">김철수</Col><Col id=\"DEPARTMENT\">개발지원팀</Col><Col id=\"DESCRIPTION\">선임</Col></Row></Rows>");this.addChild(_a.name,_a);_a=new Div("divSearch","25","20",null,"54","25",null,null,null,null,null,this);_a.set_taborder("0");_a.set_cssclass("div_WF_Search");_a.set_text("");this.addChild(_a.name,_a);_a=new Static("Static00","0","12","86","28",null,null,null,null,null,null,this.divSearch.form);_a.set_taborder("0");_a.set_text("조회구분");_a.set_cssclass("sta_WF_SchLabel");_a.set_fittocontents("width");this.divSearch.addChild(_a.name,_a);_a=new Edit("Edit00","208","12","140","28",null,null,null,null,null,null,this.divSearch.form);_a.set_taborder("1");this.divSearch.addChild(_a.name,_a);_a=new Button("btnSearch",null,"12","48","28","25",null,null,null,null,null,this.divSearch.form);_a.set_taborder("2");_a.set_text("조회");_a.set_cssclass("btn_WF_Search");this.divSearch.addChild(_a.name,_a);_a=new Radio("Radio00","86","12","122","28",null,null,null,null,null,null,this.divSearch.form);_a.set_taborder("3");_a.set_codecolumn("codecolumn");_a.set_datacolumn("datacolumn");_a.set_columncount("-1");_a.set_rowcount("-1");var _b=new nexacro.NormalDataset("divSearch_form_Radio00_innerdataset",_a);_b._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">명칭</Col></Row><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">코드</Col></Row></Rows>");_a.set_innerdataset(_b);this.divSearch.addChild(_a.name,_a);_a=new Static("staTitle","25","divSearch:0",null,"43","25",null,null,null,null,null,this);_a.set_taborder("1");_a.set_text("팝업 샘플용 화면");_a.set_cssclass("sta_WF_Title");this.addChild(_a.name,_a);_a=new Static("Static04","190","74","30","43",null,null,null,null,null,null,this);_a.set_taborder("2");_a.set_cssclass("sta_WF_GSize");_a.set_visible("false");_a.set_text("H43");this.addChild(_a.name,_a);_a=new Static("Static04_01","0","0","25",null,null,"0",null,null,null,null,this);_a.set_taborder("3");_a.set_cssclass("sta_WF_GSize");_a.set_visible("false");_a.set_text("W 25");this.addChild(_a.name,_a);_a=new Static("Static04_01_00",null,"0","25",null,"0","0",null,null,null,null,this);_a.set_taborder("4");_a.set_cssclass("sta_WF_GSize");_a.set_visible("false");_a.set_text("W 25");this.addChild(_a.name,_a);_a=new Static("Static04_00","166","0","30","20",null,null,null,null,null,null,this);_a.set_taborder("5");_a.set_cssclass("sta_WF_GSize");_a.set_visible("false");_a.set_text("H20");this.addChild(_a.name,_a);_a=new Grid("grdMain","25","staTitle:0",null,null,"25","68",null,null,null,null,this);_a.set_taborder("6");_a.set_autofittype("col");_a.set_binddataset("dsGrid");_a._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/></Columns><Rows><Row size=\"37\" band=\"head\"/><Row size=\"37\"/></Rows><Band id=\"head\"><Cell text=\"아이디\"/><Cell col=\"1\" text=\"성명\"/><Cell col=\"2\" text=\"부서\"/><Cell col=\"3\" text=\"직급\"/></Band><Band id=\"body\"><Cell text=\"bind:ID\" displaytype=\"text\"/><Cell col=\"1\" text=\"bind:NAME\" displaytype=\"text\"/><Cell col=\"2\" text=\"bind:DEPARTMENT\" displaytype=\"text\"/><Cell col=\"3\" text=\"bind:DESCRIPTION\" displaytype=\"text\"/></Band></Format></Formats>");this.addChild(_a.name,_a);_a=new Static("Static04_00_00_00","615",null,"30","20",null,"48",null,null,null,null,this);_a.set_taborder("7");_a.set_cssclass("sta_WF_GSize");_a.set_visible("false");_a.set_text("H20");this.addChild(_a.name,_a);_a=new Button("btnCancel",null,null,"50","28","76","20",null,null,null,null,this);_a.set_taborder("8");_a.set_text("취소");_a.set_fittocontents("width");this.addChild(_a.name,_a);_a=new Button("btnOk",null,null,"48","28","25","20",null,null,null,null,this);_a.set_taborder("9");_a.set_text("확인");_a.set_fittocontents("width");_a.set_cssclass("btn_WF_Crud");this.addChild(_a.name,_a);_a=new Static("Static04_00_00","612",null,"30","20",null,"0",null,null,null,null,this);_a.set_taborder("10");_a.set_cssclass("sta_WF_GSize");_a.set_visible("false");_a.set_text("H20");this.addChild(_a.name,_a);_a=new Layout("default","",0,0,this.divSearch.form,function(_c){});this.divSearch.form.addLayout(_a.name,_a);_a=new Layout("default","",700,394,this,function(_c){});_a.set_mobileorientation("landscape");this.addLayout(_a.name,_a);};this.loadPreloadList=function(){};this.registerScript("samplePopupP.xfdl",function(){this.form_onload=function(_a,_b){this.gfnFormOnload(_a,_b);var _c=this.getOwnerFrame();trace("전달받은 파라미터 1.pvString : "+_c.pvString+" 2. pvNumber : +"+_c.pvNumber+" 3. pvDataset : "+_c.pvDataset.name);this.dsGrid.set_rowposition(0);};this.fnClosePopup=function(){var _b=this.dsGrid.rowposition;var _c=this.dsGrid.getColumn(_b,"ID");var _d=this.dsGrid.getColumn(_b,"NAME");var _e=this.dsGrid.getColumn(_b,"DEPARTMENT");var _f=this.dsGrid.getColumn(_b,"DESCRIPTION");var _g={rtnId:_c,rtnName:_d,rtnDepartment:_e,rtnDescription:_f};this.gfnClosePopup(JSON.stringify(_g));};this.btnCancel_onclick=function(_a,_b){this.gfnClosePopup(null);};this.btnOk_onclick=function(_a,_b){this.fnClosePopup();};this.grdMain_oncelldblclick=function(_a,_b){this.fnClosePopup();};});this.on_initEvent=function(){this.addEventHandler("onload",this.form_onload,this);this.grdMain.addEventHandler("oncelldblclick",this.grdMain_oncelldblclick,this);this.btnCancel.addEventHandler("onclick",this.btnCancel_onclick,this);this.btnOk.addEventHandler("onclick",this.btnOk_onclick,this);};this.loadIncludeScript("samplePopupP.xfdl");this.loadPreloadList();_a=null;};})();