/**
/***************************************************************************************
 * 업무명 		: 공통
 * 파일명 		: DataObject.js
 * 작성자 		: TOBESOFT
 * 작성일 		: 2022/11/15
 *
 * 설  명		: DataObject 관련 공통 함수 모음
 *---------------------------------------------------------------------------------------
 * 	변경일		변경자			변경내역
 *---------------------------------------------------------------------------------------
 *  2022/11/15  TOBESOFT		최초 프로그램 작성
 *---------------------------------------------------------------------------------------
 ****************************************************************************************/
 /* 
 ===============================================================================
 == 폼과 관련된 공통함수들은 여기에 작성한다.
 ===============================================================================
    ==== DataObject 관련	
 ● gfn_dsRequestSync		 		: Dataset의 값을 갱신하기 위한 서비스를 Sync(동기) 방식으로 호출하고, 통신이 완료되면 콜백함수를 수행하는 함수
 ● gfn_dsRequestAsync			 	: Dataset의 값을 갱신하기 위한 서비스를 Async(비동기) 방식으로 호출하고, 통신이 완료되면 콜백함수를 수행하는 함수
 ● gfn_dsRequest			 		: Dataset 의 값을 갱신하기 위한 서비스를 호출하고, 통신이 완료되면 콜백함수를 수행하는 함수
 ● _gfn_executeCallbackDataObject 	: (내부함수) DataObject 공통 콜백 함수 
 ● _gfn_parseResponseHeader    	: (내부함수) DataObject response header 를 파싱하는 함수
 ● _gfn_parseResponseData    		: (내부함수) DataObject response data 를 파싱하는 함수
 ● _gfn_getHeaders    				: (내부함수) DataObject request header 를 공통으로 설정
 
    ==== Dataset 자동매핑 관련
 ● gfn_datasetRow2QueryString 		: Dataset 을 queryString 으로 변환한다.
 ● _gfn_makeQueryString			: (내부함수) strInDs 를 이용해 queryString 을 생성하는 함수
 ● _gfn_makePostData				: (내부함수) strInDs, strArg 를 이용해 {Object} requestBody 를 리턴하는 함수
 ● _gfn_setKeyValue			 	: (내부함수) key 위치에 value 값을 추가하는 함수

    ==== Dataset & JSON 관련
 ● gfn_object2QueryString    		: Object 를 queryString 으로 변환한다.
 ● gfn_datasetRow2Object    		: Dataset 특정 Row를 Object으로 변환한다.
 ● gfn_dataset2ObjectList    		: Dataset 을 조건에 맞춰 ObjectList로 변환한다. (_rowtype 필드 적용)
 ● gfn_changedDataset2ObjectList   : Dataset 의 변경된 데이터를 조건에 맞춰 { I:ObjectList, U:ObjectList, D:ObjectList }로 변환한다. (_rowtype 필드 미적용)
 ● gfn_mergeObject    				: 원본 object에 object를 Merge한다 
 ● gfn_object2Dataset    			: JSON Data 를 Dataset에 입력한다.
 ● gfn_addRowFromObject    		: JSON Data 에 포함된 정보를 Dataset에 입력
 ● gfn_isExitColumn    			: Dataset에 column 이 없으면 ? true : false 를 반환
 ● gfn_addSetColumnRow				: Dataset에 column 추가, value 입력
 ● gfn_addSetColumn    			: Dataset column 에 value 입력 (column 없을시 추가)
 ● gfn_addColumn    				: Dataset에 column 정보 추가
*/

var pForm = nexacro.Form.prototype;

/******************************************************************************************************
 * @class 서비스 호출 공통함수 <br>
 * Dataset의 값을 갱신하기 위한 서비스를 Sync(동기) 방식으로 호출하고, 통신이 완료되면 콜백함수를 수행하는 함수
 * @param {Object}  objData - api request 관련 object
 * @return N/A
*****************************************************************************************************/
pForm.gfn_dsRequestSync = function (objData) {	
	this.gfn_dsRequest(objData, false);
}

/******************************************************************************************************
 * @class 서비스 호출 공통함수 <br>
 * Dataset의 값을 갱신하기 위한 서비스를 Async(비동기) 방식으로 호출하고, 통신이 완료되면 콜백함수를 수행하는 함수
 * @param {Object}  objData - api request 관련 object
 * @return N/A
*****************************************************************************************************/
pForm.gfn_dsRequestAsync = function (objData) {	
	this.gfn_dsRequest(objData, true);
}

/******************************************************************************************************
 * @class 서비스 호출 공통함수 <br>
 * Dataset의 값을 갱신하기 위한 서비스를 호출하고, 통신이 완료되면 콜백함수를 수행하는 함수
 * @param {object} objData - Transaction data Object
 * 				{String} objData.svcId    - [필수] 통신을 구분하기위한 고유ID
 * 				{String} objData.url   	  - [필수] method::그룹::uri
 * 				{String} objData.inDs     - [옵션] dataset  입력 ([key=]inDS:{sType||rownum}) (GET 메소드 사용시 queryString으로 변환)
 * 				{String} objData.outDs    - [옵션] dataset  출력 (outDS=key)
 * 				{String} objData.args     - [옵션] argument 입력 (key=val)
 * 				{String} objData.callback - [옵션] 콜백함수 (기본 fn_apiCallback)
 * @param  {Boolean} bAsync - 동기/비동기 여부
 * @return {Boolean} true/false
 * @example
 * var objData = {"svcId"	   : "search"
 * 				  , "url"  	   : "POST::boiler::board"		
 * 				  , "inDs"     : "key=ds:U"				
 * 				  , "outDs"    : "ds=key"
 * 				  , "args"	   : "key=val"
 * 				  , "callback" : "fn_callback"
 * };
 * this.gfn_dsRequest(objData, bAsync);
*****************************************************************************************************/
pForm.gfn_dsRequest = function (objData, bAsync) {

	if(!objData) {
		alert("Error : Please check dsRequest arguments");
		return false;
	}

	if(this.gfn_isNull(objData.svcId) || this.gfn_isNull(objData.url)) {
		alert("Error : dsRequest() 함수의 인자값이 부족합니다.");
		return false;
	}
	
	var arrUrl = objData.url.split('::');	
	if(arrUrl.length < 3) {
		alert('Error : wrong url format!!')
		return false;
	}		
						
	var app           = nexacro.getApplication();
    var pThis         = this;
    pThis.setWaitCursor(true, true);
	
    var dataobj 	  = this.gdo_cmm;
	if(!dataobj) {
		dataobj = new DataObject("gdo_cmm", this);
		this.addChild(dataobj.name, dataobj);
	}		
	
    var objHeader 	  = this._gfn_getHeaders();
    var strMethod	  = this.gfn_trim(this.gfn_nvl(arrUrl[0], "POST")).toUpperCase();
	var group         = this.gfn_trim(this.gfn_nvl(arrUrl[1], "")    ).toLowerCase();
    var strRequestUrl = this.gfn_trim(			   arrUrl[2]         );

    var strServiceid  = objData.svcId;	
	var strInputDs    = this.gfn_trim(this.gfn_isEmpty(objData.inDs    )? "" : objData.inDs);
	var strOutputDs   = this.gfn_trim(this.gfn_isEmpty(objData.outDs   )? "" : objData.outDs);
	var strArgument   = this.gfn_trim(this.gfn_isEmpty(objData.args    )? "" : objData.args);
	var fncCallback   = this.gfn_isEmpty(objData.callback)? "fn_apiCallback" : objData.callback;
    var boolAsync 	  = this.gfn_nvl(bAsync, false);
	
	dataobj._gfn_strOutputDs = dataobj._gfn_strOutputDs || {};
	dataobj._gfn_strOutputDs[strServiceid] = strOutputDs;
	
	/*  Url 설정  */
	var strUrl;	
	if("http" == this.gfn_left(strRequestUrl, 4)) { // 전체도메인
		strUrl = strRequestUrl;
	} 
	else { // 도메인 설정	
		var nRow      = app.gds_domain.findRow('group', group);
		var strMode   = app.gds_domain.getColumn(nRow, 'mode');
		var strDomain = app.gds_domain.getColumn(nRow, strMode);
		
		if(this.gfn_isNull(strDomain)) {
			trace("dataObject :: group 정보 미입력");
		}
		
		strUrl = strDomain + strRequestUrl;
	}
	
	/*  request data 설정  */
    var objParam = {
        httpheader : objHeader,
        async      : boolAsync
    };
	if(strMethod == "GET" || strMethod == "HEAD") {
		// make query string
		var strQueryString = this._gfn_makeQueryString(pThis, strInputDs);
		if(!this.gfn_isEmpty(strQueryString)) {
			if(strUrl.includes('?')) {
				strUrl += '&' + strQueryString;
			} else {
				strUrl += '?' + strQueryString;
			}
		}
	} else {
		// make request body
		var objPostData = this._gfn_makePostData(pThis, strArgument, strInputDs);			
		objParam["postdata"] = JSON.stringify(objPostData);		
	}
    
	// request 성공시 이벤트
    dataobj.setEventHandler("onsuccess", function (_obj, _e) {		
		var elapsedTime = nexacro.round((new Date() - _obj._startTime) / 1000, 3);
		
        pThis.setWaitCursor(false, true);
        var objResponseHeader = this._gfn_parseResponseHeader(_obj);
        var objResponseData   = this._gfn_parseResponseData(_obj);		
        var objResolve = {
            url    : _e.url,
            status : _e.statuscode,
            data   : objResponseData,
			header : objResponseHeader
        };
		
		// DataObject.data load 처리
		_e.preventDefault();
		
		var strOutputDs = _obj._gfn_strOutputDs[_e.serviceid];
		delete _obj._gfn_strOutputDs[_e.serviceid];
		
		//
		var s = new Date();
		
		
		// Dataset에 출력 -> "ds4=key4 ds5=key5 ds6=key6"
		var arrOutDs = [];	
		if(strOutputDs.length > 0) {
			arrOutDs = strOutputDs.split(' ')
		}
		arrOutDs.map(function(e) {	
			var arrNode = pThis.gfn_trim(e).split('=');
			
			var dsName;
			var keyName;
			if(arrNode.length < 2) {
				dsName = arrNode[0];
			} else {
				dsName = arrNode[0];
				keyName = arrNode[1];
			}
			
			var objData = objResponseData;
			if(!pThis.gfn_isNull(keyName)) {
				var arrKey = keyName.split('.');
				for(var i=0; i<arrKey.length; i++) {
					objData = objData[arrKey[i]];
				}
			}
			var objDs;
			if(dsName.indexOf('gds_') == -1) {
				objDs = pThis[dsName];
			} else {
				objDs = app[dsName];
			}
			
			if(objDs && !pThis.gfn_isEmpty(objData)) {
				//pThis.gfn_object2Dataset(objData, objDs);	
				pThis.gfn_object2DatasetADV(objData, objDs);	
			}			
		});		
		
		//console.log(nexacro.round((new Date() - s) / 1000, 3));
		
        pThis._gfn_executeCallbackDataObject(pThis, _e.serviceid, 0, objResolve, fncCallback, elapsedTime);
    }, pThis);

	// request 실패시 이벤트
    dataobj.setEventHandler("onerror", function (_obj, _e) {
        pThis.setWaitCursor(false, true);
        var objResponseHeader = this._gfn_parseResponseHeader(_obj);
        var objResponseData   = this._gfn_parseResponseData(_obj);
        var objResolve = {
            url    : _e.requesturi,
            status : _e.statuscode,
            data   : objResponseData,
			header : objResponseHeader
        };
		
		delete _obj._gfn_strOutputDs[_e.errordata];
		
		/*		에러 메시지     */
        var errMsg =               _e.errormsg             + "\n\n";
           errMsg += 'code: '    + objResponseData.code    + "\n\n";
           errMsg += 'message: ' + objResponseData.message + "\n\n";
           errMsg += 'detail: '  + objResponseData.detail  + "\n";
        alert(errMsg)		
		
        pThis._gfn_executeCallbackDataObject(pThis, _e.errordata, -1, objResolve, fncCallback);
    }, pThis);


	/*  trace   */
	var traceParam = {};
	traceParam.serviceid = strServiceid;
	if(!this.gfn_isEmpty(objParam.httpheader)) { 		traceParam.httpheader = objParam.httpheader; 			}
	if(!this.gfn_isEmpty(objParam.async))	   {		traceParam.async 	  = objParam.async;					}
	if(!this.gfn_isEmpty(objParam.postdata))   {		traceParam.postdata   = JSON.parse(objParam.postdata);	}
	//trace('API DS_REQUEST >>>>>>>>>>>>>>>>>>>>\n', strMethod+"::"+strUrl+'\n', JSON.stringify(traceParam,null,4));

	/*   통신   */
	dataobj._startTime = new Date();
    dataobj.request(strServiceid, strMethod, strUrl, objParam);
}

/******************************************************************************************************
 * @class DataObject 공통 콜백 함수
 * @param {object} objForm - Form Object
 * @param {String} strSvcId - serviceid
 * @param {String} nErrorcode
 * @param {object} objResolve
 * @param {String | function} fncCallback - callback 콜백함수
 * @return N/A
*****************************************************************************************************/
pForm._gfn_executeCallbackDataObject = function (objForm, strSvcId, statuscode, objResolve, fncCallback, elapsedTime) {
    //에러가 발생해도 각 Form 의 callbackk은 호출한다
    if (this.gfn_isEmpty(fncCallback)) 
        return;
		
    if (typeof fncCallback == "function") {
        fncCallback.call(objForm, strSvcId, statuscode, objResolve, elapsedTime);
    } else if (typeof fncCallback == "string") {
        if (!objForm.gfn_isFunction(objForm[fncCallback])) 
            return;        
        objForm[fncCallback].call(objForm, strSvcId, statuscode, objResolve, elapsedTime);
    }
}

/******************************************************************************************************
 * @class DataObject response header 를 파싱하는 함수
 * @param {naxacomp} dtObj	- DataObject
 * @return {object} responseData
*****************************************************************************************************/
pForm._gfn_parseResponseHeader = function (dtObj) {
    return dtObj.getAllResponseHeaders();
}

/******************************************************************************************************
 * @class DataObject response data 를 파싱하는 함수
 * @param {naxacomp} dtObj	- DataObject
 * @return {object} responseData
*****************************************************************************************************/
pForm._gfn_parseResponseData = function (dtObj) {
    var objResponseData = dtObj.getResponse();
    if (objResponseData) {
		try {
			objResponseData = JSON.parse(objResponseData);
		} catch (e) {
			alert(e);
		}
    }
    return objResponseData;
}

/******************************************************************************************************
 * @class DataObject request header 를 공통으로 설정
 * @param 
 * @return {object} httpheader
*****************************************************************************************************/
pForm._gfn_getHeaders = function () {
    var objApp = nexacro.getApplication();
    var accessToken = objApp.gv_accessToken;
	
    var objRtn = {
        "Content-Type": "application/json; charset=UTF-8"
    };
    if (!this.gfn_isEmpty(accessToken))
        objRtn["Token"] = accessToken;

    return objRtn;
}


/******************************************************************************************************
 * @class Dataset 을 queryString 으로 변환한다.
 * @param {naxacomp} objDs    - Dataset
 * @param {number}   nRow
 * @param {string}   strColList - 변경대상 컬럼
 * @return {string} queryString
*****************************************************************************************************/ 
pForm.gfn_datasetRow2QueryString = function(objDs, nRow, strColList)
{
	var arrColId = new Array();
	
	if (!this.gfn_isEmpty(strColList))
	{
		arrColId = strColList.split(",");
	}
	else
	{
		for (var j = 0; j < objDs.getColCount(); j++)
		{
			arrColId.push(objDs.getColID(j));
		}
	}
	
	nRow = this.gfn_nvl(nRow, 0);
	
	if (arrColId.length <= 0 || objDs.getRowCount() <= nRow)	return;
	
	var arrRowData = new Array();
	
	for (var j = 0; j <arrColId.length; j++)
	{
		var strColId = this.gfn_trim(arrColId[j]);
		arrRowData[j] = strColId + "=" + this.gfn_nvl(objDs.getColumn(nRow, strColId), "");
	}
	
	return arrRowData.join("&");
}

/******************************************************************************************************
 * @class (내부함수) strInDs 를 이용해 queryString 을 생성하는 함수
 * @param {naxacomp} objForm - DataObject
 * @param {string}   strInDs - input Dataset
 * @return {object}  requestBody
*****************************************************************************************************/
pForm._gfn_makeQueryString = function(objForm, strInDs)
{
	var arrParam = [];
	
	/*   datasets => "ds1 ds2:0"   */
	var arrDs = [];
	if(strInDs.length > 0) {
		arrDs = strInDs.split(' ')
	}
	arrDs.map(function(e) {
		var arrNode = pForm.gfn_trim(e).split('=');
		var key;
		var val;
		if(arrNode.length < 2) {
			val = arrNode[0];
		} else {
			key = arrNode[0];
			val = arrNode[1];
		}
		
		var arrVal = val.split(':');
		var objDs;
		var objVal;
		
		if(arrVal.length == 1) { // ds option 없음 -> 0 row
			objDs = objForm.all[arrVal[0]];
			if(objDs)
				arrParam.push(pForm.gfn_datasetRow2QueryString(objDs, 0));
		} 
		else if (arrVal.length == 2) { // ds option 있음 -> 숫자 옵션만 처리
			objDs = objForm.all[arrVal[0]];
			if(objDs) {
				var option = arrVal[1];
				if(isNaN(option)) {	// string data
					trace('잘못된 Dataset 옵션 : query string 을 생성할 수 없습니다.')
				} else {			// num data
					arrParam.push(pForm.gfn_datasetRow2QueryString(objDs, arrVal[1]));					
				}					
			}
		}
	});

	return arrParam.join('&');
};

/******************************************************************************************************
 * @class (내부함수) strInDs, strArg 를 이용해 {Object} requestBody 를 리턴하는 함수
 * @param {naxacomp} objForm - DataObject
 * @param {string}   strArg	 - input argument
 * @param {string}   strInDs - input Dataset
 * @return {object}  requestBody
*****************************************************************************************************/
pForm._gfn_makePostData = function(objForm, strArg, strInDs)
{
	var objPostData = {};
	
	/*   arguments => "key1=val1 key2=val2 key3=val3"   */
	var arrArg = [];
	if(strArg.length > 0) {
		arrArg = strArg.split(' ')
	}
	arrArg.map(function(e) {
		var arrNode = pForm.gfn_trim(e).split('=');
		var key = arrNode[0];
		var val = arrNode[1];
		objPostData = pForm._gfn_setKeyValue(objPostData, key, val);
	});
	
	/*   datasets => "key1=ds1:U key2=ds2:A key3=ds3:N"   */
	var arrDs = [];
	if(strInDs.length > 0) {
		arrDs = strInDs.split(' ')
	}
	arrDs.map(function(e) {
		var arrNode = pForm.gfn_trim(e).split('=');
		var key;
		var val;
		if(arrNode.length < 2) {
			val = arrNode[0];
		} else {
			key = arrNode[0];
			val = arrNode[1];
		}
		
		var arrVal = val.split(':');
		var objDs;
		var objVal;
		
		if(arrVal[0].indexOf('gds_') == -1) {
			objDs = objForm.all[arrVal[0]];
		} else {
			objDs = nexacro.getApplication().all[arrVal[0]];
		}
		
		if(arrVal.length == 1) { // ds option 없음 -> N
			if(objDs)
				objVal = pForm.gfn_dataset2ObjectList(objDs, "N");
		} 
		else if (arrVal.length == 2) { // ds option 있음 -> :U 갱신된 정보, :A 모든정보, N:삭제한데이터를 제외한정보
			if(objDs) {
				var option = arrVal[1];
				if(isNaN(option)) {	// string data
					objVal = pForm.gfn_dataset2ObjectList(objDs, arrVal[1]);		
				} else {			// num data
					objVal = pForm.gfn_datasetRow2Object(objDs, arrVal[1]);						
				}
					
			}
		}

		objPostData = pForm._gfn_setKeyValue(objPostData, key, objVal);

	});

	return objPostData;
};

/******************************************************************************************************
 * @class (내부함수) key 위치에 value 값을 추가하는 함수
 * @param {object} objData - object
 * @param {string} strKey  - key값 (. 문법으로 원하는위치에 추가 ex>node.node1.node2)
 * @param {string|object} objVal  - value값
 * @return {object}  object
*****************************************************************************************************/
pForm._gfn_setKeyValue = function(objData, strKey, objVal)
{
	// key 값이 없을경우
	if(this.gfn_isEmpty(strKey)) {	
		objData = objVal;
	} 
	// key 값에 . 연산자가 포함될 경우
	else if (this.gfn_contains(strKey, '.')) {	
		var objDest = objData;
		var arrKey = strKey.split('.');
		for(var i=0; i<arrKey.length-1; i++) {
			if(!objDest[arrKey[i]]) {
				objDest[arrKey[i]] = {};
			}
			objDest = objDest[arrKey[i]];
		}
		objDest[arrKey[arrKey.length-1]] = objVal;
	} 
	// key 값이 있을경우
	else {	
		objData[strKey] = objVal;
	}	
	
	return objData;
};

/******************************************************************************************************
 * @class Object 를 queryString 으로 변환한다.
 * @param {object} objData
 * @return {string} queryString
*****************************************************************************************************/
pForm.gfn_object2QueryString = function (objData) {
    if (this.gfn_isEmpty(objData))
        return "";

    return Object
        .entries(objData)
        .map(function (entry) {
            return entry[0] + "=" + (entry[1] || "");
        }).join("&");
}

/******************************************************************************************************
 * @class Dataset 특정 Row를 Object으로 변환한다.
 * @param {naxacomp} objDs    - Dataset
 * @param {number}   nRow
 * @param {string || Array}   colList - 변경대상 컬럼
 * @return {object} JSON Object
*****************************************************************************************************/
pForm.gfn_datasetRow2Object = function (objDs, nRow, colList) {

    var arrColId = new Array();

    if (!this.gfn_isEmpty(colList)) {
		if (this.gfn_isArray(colList)) {
			arrColId = colList;
		}
		else if (this.gfn_isString(colList)) {
			arrColId = colList.split(",");
		}
    } else {
        for (var j = 0; j < objDs.getColCount(); j++) {
            arrColId.push(objDs.getColID(j));
        }
    }

    nRow = this.gfn_nvl(nRow, 0);

    if (arrColId.length <= 0 || objDs.getRowCount() <= nRow) 
        return;
    
    var objRowData = new Object();

    for (var j = 0; j < arrColId.length; j++) {
        var strColId = this.gfn_trim(arrColId[j]);
        objRowData[strColId] = this.gfn_nvl(objDs.getColumn(nRow, strColId), "");
    }

    return objRowData;
}

/******************************************************************************************************
 * @class Dataset 을 조건에 맞춰 ObjectList로 변환한다.
 * @param {naxacomp} objDs - Dataset
 * @param {string} sType - U, A, N
						"U" I, U, D, Status
						"A" I, U, D, N, Status
						"N" I, U, N
 * @param {string} strColList - 변경대상 컬럼
 * @return {Array} JSON - Object
 * @example
 * arrList = this.gfn_dataset2ObjectList(objDs, "A", "column1,column2");
 * arrList = this.gfn_dataset2ObjectList(objDs, "U");
 * arrList = this.gfn_dataset2ObjectList(objDs, "N");
 * arrList = this.gfn_dataset2ObjectList(objDs);
*****************************************************************************************************/
pForm.gfn_dataset2ObjectList = function (objDs, sType, strColList) {
    // strColList 처리
    var arrColId = new Array();

    if (!this.gfn_isEmpty(strColList)) {
        arrColId = strColList.split(",");
    } else {
        for (var j = 0; j < objDs.getColCount(); j++) {
            arrColId.push(objDs.getColID(j));
        }
    }

    if (arrColId.length <= 0)// || objDs.getRowCount() <= 0) 
        return;
    
    // sType 처리
    if (this.gfn_isNull(sType)) {
        sType = "U";
    } else {
        sType = sType.toUpperCase();
    }

    var objRowData = new Object();
    var arrListData = new Array();

    //삭제데이터
    if (sType != "N") {
        var nDelCnt = objDs.getDeletedRowCount();
		
        for (var i = 0; i < nDelCnt; i++) {
			objRowData = new Object();
            
			for (var j = 0; j < arrColId.length; j++) {
                var strColId = this.gfn_trim(arrColId[j]);
				objRowData[strColId] = this.gfn_nvl(objDs.getDeletedColumn(i, strColId), "");
            }

            objRowData["_rowtype"] = "D";
            arrListData.push(objRowData);
        }
    }

    //삭제 외 데이터
    for (var i = 0; i < objDs.rowcount; i++) {
        var nType = objDs.getRowType(i);

        if (nType == Dataset.ROWTYPE_INSERT) { //추가데이터
            objRowData = this.gfn_datasetRow2Object(objDs, i, arrColId);
			objRowData["_rowtype"] = "I";

            arrListData.push(objRowData);

        } else if (nType == Dataset.ROWTYPE_UPDATE) { //수정데이터
            objRowData = this.gfn_datasetRow2Object(objDs, i, arrColId);
			objRowData["_rowtype"] = "U";

            arrListData.push(objRowData);

        } else if (nType == Dataset.ROWTYPE_NORMAL) { // 초기행
            if (sType != "U") {
                objRowData = this.gfn_datasetRow2Object(objDs, i, arrColId);
				objRowData["_rowtype"] = "N";
                arrListData.push(objRowData);
            }
        }
    }

    return arrListData;
}

/******************************************************************************************************
 * @class Dataset 의 변경된 데이터를 조건에 맞춰 { I:ObjectList, U:ObjectList, D:ObjectList }로 변환한다.
 * @param {naxacomp} objDs - Dataset
 * @param {string} strColList - 변경대상 컬럼
 * @return {Array} JSON - Object
 * @example
 * arrList = this.gfn_changedDataset2ObjectList(objDs, "column1,column2");
 * arrList = this.gfn_changedDataset2ObjectList(objDs);
*****************************************************************************************************/
pForm.gfn_changedDataset2ObjectList = function (objDs, strColList) {
    // strColList 처리
    var arrColId = new Array();

    if (!this.gfn_isEmpty(strColList)) {
        arrColId = strColList.split(",");
    } else {
        for (var j = 0; j < objDs.getColCount(); j++) {
            arrColId.push(objDs.getColID(j));
        }
    }

    if (arrColId.length <= 0)// || objDs.getRowCount() <= 0) 
        return;

    // ds 처리
    var arrListInsertData = new Array();
    var arrListUpdateData = new Array();
    var arrListDeleteData = new Array();
    var objRowData;

    // 삭제 데이터
	var nDelCnt = objDs.getDeletedRowCount();	
	for (var i = 0; i < nDelCnt; i++) {
		objRowData = new Object();
		for (var j = 0; j < arrColId.length; j++) {
			var strColId = this.gfn_trim(arrColId[j]);

			objRowData[strColId] = this.gfn_nvl(objDs.getDeletedColumn(i, strColId), "");
		}

		arrListDeleteData.push(objRowData)
	}
	// 삭제 이외 데이터
	for (var i = 0; i < objDs.rowcount; i++) {
		var nType = objDs.getRowType(i);
		
		//추가데이터
		if (nType == Dataset.ROWTYPE_INSERT) {
			objRowData = this.gfn_datasetRow2Object(objDs, i, arrColId);
			arrListInsertData.push(objRowData);
		} 
		//수정데이터
		else if (nType == Dataset.ROWTYPE_UPDATE) {
			objRowData = this.gfn_datasetRow2Object(objDs, i, arrColId);
			arrListUpdateData.push(objRowData)
		}
	}

    return {
		I : arrListInsertData,
		U : arrListUpdateData,
		D : arrListDeleteData
	};
}

/******************************************************************************************************
 * @class 원본 object에 object를 Merge한다
 * @param {object} objTo - 원본 object
 * @param {object} objFrom - 추가 object
 * @param {String} bClear - Merge 전 원본 Object 초기화여부
 * @return {object} Merge된 Object
*****************************************************************************************************/
pForm.gfn_mergeObject = function (objTo, objFrom, bClear) {
    if (bClear) {
        for (var strId in objTo) {
            objTo[strId] = null;
        }
    }

    for (var strId in objFrom) {
        objTo[strId] = objFrom[strId];
    }

    return objTo;
}


/******************************************************************************************************
 * @class JSON Data 를 loadJSON 방식으로 Dataset에 입력한다. 
 * @param {Object} objData - JSON Data
 * @param {naxacomp} objDs - Dataset
 * @param {Boolean} bCheckCol
 * @param {Boolean} bCtrlEnable
 * @return N/A
*****************************************************************************************************/
pForm.gfn_object2DatasetADV = function (objData, objDs, bCheckCol, bCtrlEnable) 
{
    bCtrlEnable = this.gfn_nvl(bCtrlEnable, true) == false ? false : true;
    var bEnableEvent = objDs.enableevent;

    if (bCtrlEnable == true && bEnableEvent == true) {
        objDs.set_enableevent(false);
    }
	
	if(objDs.useclientlayout == true) {
		objDs.clearData();
	} else {
		objDs.clear();
	}	

	// using Dataset.loadJSON()
	var oJson = {
		 "id": objDs.name,
		 "ColumnInfo" :
		 {
			  "Column":	objDs.useclientlayout ? pForm.getDsColumnInfo(objDs) : pForm.serializeColumnInfo(objData)
		 },
		 "Rows": pForm.serializeRowData(objData)
	}
	
	objDs.loadJSON(JSON.stringify(oJson));	
	
    objDs.set_rowposition(0);

    if (bCtrlEnable == true && bEnableEvent == true) {
        objDs.set_enableevent(true);
    }
	
}


/******************************************************************************************************
 * @class Dataset 에서 ColumnInfo 를 추출한다.
 * @param {dataset} objDs - Dataset
 * @return N/A
*****************************************************************************************************/
pForm.getDsColumnInfo = function(objDs)
{
	var arrColumnInfo = [];
	for(var i=0; i<objDs.colinfos.length; i++) {
		arrColumnInfo.push(objDs.colinfos[i]);
	}
	return arrColumnInfo;
};

/******************************************************************************************************
 * @class 전체 JSON DATA 에서 key 정보를 읽어들인다.
 * @param {Object} objData - JSON Data
 * @return N/A
*****************************************************************************************************/
pForm.serializeColumnInfo = function(objData)
{
	var arrColumnInfo = [];
	var columnKeys = {};
	
	if(pForm.gfn_isArray(objData)) {
		
		for(var i=0; i<objData.length; i++) {
		
			if (!this.gfn_isObject(objData[i]) || this.gfn_isEmpty(objData[i])) 
				continue;
				
			for(var key in objData[i]) {
				columnKeys[key] = '';
			}
		}
		
	} else {
		
		for(var key in objData) {
			columnKeys[key] = '';
		}
		
	}
	
	
	for(var key in columnKeys) {
		objColumnInfo = {
			"id" : key
			, type : "STRING"
			, size : "256"
		}
		arrColumnInfo.push(objColumnInfo);
	}
	
	return arrColumnInfo;
};

/******************************************************************************************************
 * @class 전체 JSON DATA 에서 rowData 정보를 읽어들인다.
 * @param {Object} objData - JSON Data
 * @return N/A
*****************************************************************************************************/
pForm.serializeRowData = function(objData)
{
	if(pForm.gfn_isArray(objData)) {
		return objData;
	} else {
		return [objData];
	}
};


/******************************************************************************************************
 * @class JSON Data 를 Dataset에 입력한다.
 * @param {Object} objData - JSON Data
 * @param {naxacomp} objDs - Dataset
 * @param {Boolean} bCheckCol
 * @param {Boolean} bCtrlEnable
 * @return N/A
*****************************************************************************************************/
pForm.gfn_object2Dataset = function (objData, objDs, bCheckCol, bCtrlEnable) 
{
    bCtrlEnable = this.gfn_nvl(bCtrlEnable, true) == false ? false : true;
    var bEnableEvent = objDs.enableevent;

    if (bCtrlEnable == true && bEnableEvent == true) {
        objDs.set_enableevent(false);
    }
	
	if(objDs.useclientlayout == true) {
		objDs.clearData();
	} else {
		objDs.clear();
	}	

    this.gfn_addRowFromObject(objDs, objData, bCheckCol);
    objDs.set_rowposition(0);

    if (bCtrlEnable == true && bEnableEvent == true) {
        objDs.set_enableevent(true);
    }
}

/**
 * @desc JSON Data 에 포함된 정보를 Dataset에 입력
 * @param {nexacomp} objDs - Dataset
 * @param {Object} objData
 * @param {Boolean} bCheckCol
 * @return N/A
 */
pForm.gfn_addRowFromObject = function (objDs, objData, bCheckCol) 
{
    var arrData = new Array();

    if (this.gfn_isArray(objData) == true) {
        arrData = objData;
    } else {
        arrData.push(objData);
    }

    for (var i = 0; i < arrData.length; i++) {
        if (!this.gfn_isObject(arrData[i]) || this.gfn_isEmpty(arrData[i])) 
            continue;
        
        var nRow = objDs.getRowCount();

        for (var strId in arrData[i]) {
            //if (bCheckCol != true || this.gfn_isExistColumn(objDs, strId) == true) {
                this.gfn_addSetColumnRow(objDs, nRow, strId, arrData[i][strId]);
            //}
        }
    }
}

/**
 * @desc Dataset에 column 이 없으면 ? true : false 를 반환
 * @param {nexacomp} objDs - Dataset
 * @param {String} strColId
 * @return {Boolean} true/false
 */
pForm.gfn_isExistColumn = function (objDs, strId) 
{
    return (objDs.getColumnInfo(strId) == null) ? true : false;
};

/**
 * @desc Dataset에 column 추가, value 입력
 * @param {nexacomp} objDs - Dataset
 * @param {String} strColId
 * @param {String} strValue
 * @return N/A
 */
pForm.gfn_addSetColumnRow = function (objDs, nRow, strColId, strValue) 
{
    this.gfn_addColumn(objDs, strColId, "string");
    objDs.set_updatecontrol(false);

    for (var i = objDs.getRowCount(); i <= nRow; i++) {
        nAddRow = objDs.addRow();
    }
	if(this.gfn_isNull(strValue)) {
        objDs.setColumn(nRow, strColId, undefined);	
	} else if (this.gfn_isObject(strValue)) {
        objDs.setColumn(nRow, strColId, JSON.stringify(strValue));
	} else {
        objDs.setColumn(nRow, strColId, strValue);
	}
		
    objDs.set_updatecontrol(true);
}

/**
 * @desc Dataset column 에 value 입력 (column 없을시 추가)
 * @param {nexacomp} objDs - Dataset
 * @param {String} strColId
 * @param {String} strColType
 * @param {Number} nColSize
 * @return N/A
 */
pForm.gfn_addSetColumn = function (objDs, strColId, strValue) 
{
    this.gfn_addColumn(objDs, strColId, "string");
    var nRow = 0;

    if (objDs.getRowCount() <= 0) {
        nRow = objDs.addRow();
    }
    objDs.setColumn(nRow, strColId, strValue);
}

/**
 * @desc Dataset에 column 정보 추가
 * @param {nexacomp} objDs - Dataset
 * @param {String} strColId
 * @param {String} strColType
 * @param {Number} nColSize
 * @return N/A
 */
pForm.gfn_addColumn = function (objDs, strColId, strColType, nColSize) 
{
    if (objDs.useclientlayout == false && objDs.getColumnInfo(strColId) == null && strColId != '_rowtype') {
        strColType = this.gfn_nvl(strColType, "string");
        nColSize = this.gfn_nvl(nColSize, 256);
        objDs.addColumn(strColId, strColType, nColSize);
    }
}








pForm = null;