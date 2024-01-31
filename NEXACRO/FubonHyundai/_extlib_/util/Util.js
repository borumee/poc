/***************************************************************************************
 * 업무명 		: 공통
 * 파일명 		: Util.js
 * 작성자 		: consulting
 * 작성일 		: 2022/11/04
 * 설  명		: Util 관련 공통 함수 모음
 *---------------------------------------------------------------------------------------
 * 변경일		변경자			변경내역
 *---------------------------------------------------------------------------------------
 *  2022/11/04  consulting		최초 프로그램 작성
 *---------------------------------------------------------------------------------------
 ****************************************************************************************/
/*
 ===============================================================================
 == 폼과 관련된 공통함수들은 여기에 작성한다.
 ===============================================================================
 ● gfn_isFunction               : value의 Function 여부 반환.
 ● gfn_isArray                  : value의 Array 여부 반환.
 ● gfn_isXComponent             : value의 nexacro component 여부 반환.
 ● gfn_isObject                 : value의 Object 여부 반환.
 ● gfn_isString                 : 문자형 여부 체크
 ● gfn_isEmpty                  : value의 Empty 여부 반환. 
 ● gfn_isNull                   : 값이 존재하는지 여부 체크
 ● gfn_nvl                      : 입력값을 체크하여 Null인경우 지정한 값을 리턴
 ● gfn_isBoolean                : 입력값이 Boolean 값인지 여부를 판별한다.
 ● gfn_decode                   : Grid에서 expression으로  표현할때 decode 문처럼 사용할 수 있는 기능
 ● gfn_trim                     : 정규식을 이용한 trim 구현 - 문자열 양 옆의 공백 제거
 ● gfn_trimAll                  : 정규식을 이용한 trim 구현 - 문자열 전체의 공백 제거
 ● gfn_left                     : 문자열의 좌측부터 지정한 길이만큼 가져오는 함수
 ● gfn_right                    : 문자열의 우측부터 지정한 길이만큼 가져오는 함수
 ● gfn_length                   : 입력값 형태에 따라서 길이 또는 범위를 구하는 함수
 ● gfn_lengthByte               : 문자 전체 길이를 계산
 ● gfn_posReverse               : 문자열의 위치를 대소문자 구별하여 거꾸로 부터 찾아 첫번째 나온 index 반환
 ● gfn_appendComma              : 입력받은 Number에 컴마를 추가한다.
 ● gfn_removeComma              : 입력받은 Number에 컴마를 제거한다.
 ● gfn_getDigit                 : 입력 문자열중 숫자값만 남긴다.
 ● gfn_removeSpecialChar        : 특수문자를 제거한다
 ● gfn_removeHtmlTag            : HTML TAG 제거 함수
 ● gfn_isExistInArray           : 배열에 해당 값이 존재하는지 확인한다.
 ● gfn_10To16                   : 입력된 10진수를 16진수로 변환하는 함수
 ● gfn_16To10                   : 입력된 16진수를 10진수로 변환하는 함수
 ● gfn_typeOf                   : 주어진 nexacro 개체의 type 을 반환
 ● gfn_isNexaComponent          : nexacro Component 여부 Check
 ● gfn_objView                  : object의 내용을 trace로 출력
 ● gfn_lookup                   : 대상에서 오브젝트 반환
 ● gfn_lastIndexOfProp          : 지정된 속성의 값이 처음으로 일치하는 객체의 배열 위치를 뒤에서부터 찾아 반환한다.
 ● gfn_removeAt                 : 원하는 위치의 항목을 배열에서 삭제 처리한다.
 ● gfn_getUniqueId              : prefix separator 를 사용하여 ID 생성
 ● gfn_convertXY                : Component 기준의 XY좌표를 XCompA 기준의 XY좌표로 변환.
 ● gfn_getScrollLeft            : 수평스크롤바의 trackbar 위치를 반환한다.
 ● gfn_getScrollTop             : 수직스크롤바의 trackbar 위치를 반환한다.
 ● gfn_copyProperties           : object에 argument로 주어진 object의 모든 속성값을 복사한다.
 ● gfn_getSequenceId            : Form 내에서 지정된 접두문자열에 순번이 붙여진 ID 를 반환
 ● gfn_each                     : object 속성값들을 주어진 함수로 처리한다.
 ● gfn_getTopLevelForm          : 주어진 Form 을 포함하는 최상위 Form을 찾는다.
 ● gfn_contains                 : 지정된 항목이 배열에 포함되어 있는지 확인한다.
 ● gfn_indexOf                  : 지정된 항목이 처음 나오는 배열 위치를 반환한다. 
 ● gfn_postSearch               : 행정안전부 우편번호 검색
 ● gfn_webPost_onusernotify     : 우편번호 WebBrowser 에 로드된 웹페이지에서 nexacro 쪽으로 정보를 전달할 때 발생하는 이벤트
 ● gfn_postSearchDaum           : 다음 우편번호 검색
 ● gfn_isDate                   : 날짜 여부를 확인(년월 or 년월일)
 ● gfn_isYMD                    : 날짜 여부(년월일)를 확인한다.
 ● gfn_isYM                     : 날짜 여부(년월)를 확인한다.
 ● gfn_isTime                   : 시간 형식에 맞는지 Check 한다.
 ● gfn_getDate                  : 현재일자를 구한다.
 ● gfn_getLastDate              : 년월을 입력받아 마지막 일를 반환한다(년월)
 ● gfn_getFirstDate             : 현재월 1일 만들기.
 ● gfn_getDay                   : 입력된 날자로부터 요일을 구함
 ● gfn_getDiffDate              : 두 일자간의 차이 일수 계산
 ● gfn_getDiffMonth             : 두 일자간의 차이 일수 계산.단, sStartDate, sEndDate의 일은 포함하지 않고 계산된다.
 ● gfn_addDate                  : 입력된 날짜에 OffSet 으로 지정된 만큼의 날짜를 더함
 ● gfn_getMonthLastDate         : 입력일자 해당월의 마지막 일
 ● gfn_addMonth                 : 입력된 월에 OffSet 으로 지정된 만큼의 월을 더함
 ● gfn_getHolidays              : 법정공휴일 구하기
 ● gfn_solarToLunar             : 양력을 음력으로 변환해주는 함수
 ● gfn_lunarToSolar             : 음력을 양력으로 변환.
 ● gfn_solarBase                : 각 월별 음력 기준 정보 (처리가능 기간  1841 - 2043년)
 ● gfn_strToDate                : 문자를 날짜로 변환
 ● gfn_dateToStr                : Date Type을 String으로 변환
 ● gfn_getWeek                  : 년월일(yyyyMMdd)을 입력하면 해당 주차를 리턴한다.
 ● gfn_getBirthDateBySSN        : 주민등록번호로 생년월일을 구한다.
 ● gfn_getBirthYear             : 주민번호 뒷 첫번째 자리로 년대를 return 한다.
 ● gfn_getAge                   : 기준년월일 기준으로 만나이를 구한다.
 ● gfn_getObjType               : nexacro 객체의 type 반환
 ● gfn_divSearchEnterKeyEvent	 : 조회영역 엔터키 이벤트 핸들러
 ● gfn_divSearchOnkeyup         : 엔터키 이벤트시 공통조회함수 호출
 ● gfn_getGdsUserInfo           : 로그인 사용자 정보 조회 
 ● gfn_lpad                     : 문자열을 지정된 길이만큼 좌측부터 채우는 함수
 ● gfn_rpad                     : 문자열을 지정된 길이만큼 우측부터 채우는 함수
 ● gfn_getCompByPathName        : container component에서 문자열로 된 경로에 해당하는 nexacro component 객체를 얻는다.
 ● gfn_getDateFormat            : 날짜 포멧을 양식에 맞게 변경한다.
 ● gfn_getTimeFormat            : 시간 포멧을 양식에 맞게 변경한다.
 ● gfn_insKeyChk                : 입력된 KeyCode값이 Edit Box에 영향을 주는 Key인지 체크 한다. 영향을 주는 Key일 경우 True 아닌 경우 false를 돌려준다.
 ● gfn_setRed                   : 글자 색 변경한다.
 ● gfn_toUpper                  : 입력값의 영문을 대문자 처리
 ● gfn_toLower                  : 입력값의 영문을 소문자 처리
 ● gfn_getEncryptText           : 입력된 문자를 Sha256방식으로 암호화
 ● gfn_dsIsDelete           	 : dataset의 Row 중에서 변경된 내용이 있는지 여부를 판단하는 함수
 ● gfn_getWeekSunDay          	 : 년월일(yyyyMMdd)을 입력하면 해당 주차를 리턴한다 (해당주 일요일)
 ● gfn_getWeekSatDay          	 : 년월일(yyyyMMdd)을 입력하면 해당 주차를 리턴한다 (해당주 토요일)
 ● gfn_dsIsUpdated          	 : dataset의 Row 중에서 변경된 내용이 있는지 여부를 판단하는 함수
 ● gfn_textSize      		     : 텍스트 폰트계산한 문자의 가로 길이 조회
 ● gfn_textReSize     		     : 텍스트 최대길이를 넘으면 ...으로 뒷부분 줄임
 ● gfn_isRuntime     		     : Runtime 여부 체크
 ● gfn_getUUID	     		     : crypto를 사용하여 UUID 생성
 */
var pForm = nexacro.Form.prototype;

pForm.UP_TRIANGEL = '▲';
pForm.DW_TRIANGEL = '▼';

/************************************************************************************************
* String 및 Util 관련
************************************************************************************************/

/**
 * value의 Function 여부 반환.
 * @param {*} value 확인할 value.
 * @return {boolean} Function 여부.
 */
pForm.gfn_isFunction = function(value)
{
	return Object.prototype.toString.call( value ) === '[object Function]';
}

 /**
 * value의 Array 여부 반환.
 * @param {*} value 확인할 value.
 * @return {boolean} Array 여부.
 */
pForm.gfn_isArray = function(value)
{
	if (Array.isArray)
	{
		return Array.isArray(value);
	}
	else
	{
		return Object.prototype.toString.call(value) === '[object Array]';
	}
}

/**
 * value의 nexacro component 여부 반환.
 * @param {*} value 확인할 value.
 * @return {boolean} nexacro component 여부.
 * @example
 * var a = new Button();
 * trace(this.gfnIsXComponent(a));	// output : true
 *
 * var a = new Dataset();
 * trace(this.gfnIsXComponent(a));	// output : false
 *
 * var a = new String();
 * trace(this.gfnIsXComponent(a));	// output : false
 */
pForm.gfn_isXComponent = function(value) 
{
	if ( value === null || value === undefined  ) return false;	
	return value instanceof nexacro.Component;
}

/**
 * value의 Object 여부 반환.
 * @param {*} value 확인할 value.
 * @return {boolean} Object 여부.
 * @example
 * var o = new Object();
 * trace(this.gfn_isObject(o));	// output : true
 * 
 * var o = {};
 * trace(this.gfn_isObject(o));	// output : true
 *
 * var o = [1,2,3];
 * trace(this.gfn_isObject(o));	// output : false
 *
 * var o = new Button();
 * trace(this.gfn_isObject(o));	// output : false
 *
 * var o = new Rect();
 * trace(this.gfn_isObject(o));	// output : false
 */
pForm.gfn_isObject = function(value)
{
	if ( value === null || value === undefined ) return false;

	// nexacro Component
	if (this.gfn_isXComponent(value)) return false;

	// nexacro Object (e.g. Dataset)
	if( value instanceof nexacro.Object ) return false;

	return typeof value == "object" && 
		'constructor' in value &&
		value.constructor === Object;
}

/**
 * @class 문자형 여부 체크 <br>
 * @param {String} val - 문자열
 * @return {Boolean}
 */
pForm.gfn_isString = function(val) {
	return typeof val == "string";
}

 /**
 * value의 Empty 여부 반환.
 * @param {*} value 확인할 value.
 * @return {boolean} Empty 여부.
 */
pForm.gfn_isEmpty = function(value)
{
	// null, undefined ==> true
	if ( value == null ) return true;
	
	// String, Array ==> length == 0
	if ( this.gfn_isString(value) )
	{
		return value.trim().length == 0 ? true : false;
	}
	else if ( this.gfn_isArray(value) )
	{
		return value.length == 0 ? true : false;
	}
	else if ( this.gfn_isObject(value) )
	{
		for (var p in value) 
		{
			if ( value.hasOwnProperty(p) )
			{
				return false;
			}
		}
		return true;
	}
	
	return false;
}

/**
 * @desc 값이 존재하는지 여부 체크 <br>
 * @param {String} sValue	
 * @return {Boolean} true/false
 * @example
 * var bNull = this.gfn_isNull("aaa");	// false
 */
pForm.gfn_isNull = function(sValue)
{
    if (new String(sValue).valueOf() == "undefined") return true;
    if (sValue == null) return true;
    
    var ChkStr = new String(sValue);

    if (ChkStr == null) return true;
    if (ChkStr.toString().length == 0 ) return true;
    return false;

};

/**
 * @desc 입력값을 체크하여 Null인경우 지정한 값을 리턴 <br>
 * @param {String} inVal
 * @param {String} nullVal	- Null인경우 대치값
 * @return {String} 입력값이 Null인경우 지정한값, Null이 아닌경우 입력값
 */
pForm.gfn_nvl = function(inVal, nullVal)
{
	if(inVal == null || new String(inVal).valueOf() == "undefined") {
		inVal = nullVal;
	}
	return inVal;
};

/**
 * @desc	입력값이 Boolean 값인지 여부를 판별한다.
 * @param 	{object}  판별대상 Object
 * @return 	{boolean} boolean 이면 true 아니면 false 를 리턴한다.
*/
pForm.gfn_isBoolean = function(obj)
{
    var strvalue = obj+"";

    if( strvalue == "true" || strvalue == "false" )
        return true;
    else
        return false;

};

/**
 * @desc  Grid에서 expression으로  표현할때 decode 문처럼 사용할 수 있는 기능
 * @param  N/A 
 * @return  {String} varRtnValue - 반환된 무자열
 * @example
 * this.gfn_decode();	
 */
pForm.gfn_decode = function ()
{
	var varRtnValue = null;

	var arrArgument = this.gfn_decode.arguments;
	var varValue = arrArgument[0];
	var bIsDefault = false;
	var nCount = 0;

	if ((arrArgument.length % 2) == 0) 
	{
		nCount = arrArgument.length - 1;
		bIsDefault = true;
	}
	else 
	{
		nCount = arrArgument.length;
		bIsDefault = false;
	}

	for (var i = 1; i < nCount; i += 2) 
	{
		if (varValue == arrArgument[i]) 
		{
			varRtnValue = arrArgument[i + 1];
			i = nCount;
		}
	}

	if (varRtnValue == null && bIsDefault) 
	{
		varRtnValue = arrArgument[arrArgument.length - 1];
	}

	return varRtnValue;
};

/**
 * @desc 정규식을 이용한 trim 구현 - 문자열 양 옆의 공백 제거 <br>
 * @param {String} sValue - 변경하려는 값
 * @return {String} 문자열
 */
pForm.gfn_trim = function(sValue)
{
    if (this.gfn_isNull(sValue)) return "";
	return nexacro.trim(sValue);
};

/**
 * @desc 정규식을 이용한 trim 구현 - 문자열 전체의 공백 제거 <br>
 * @param {String} sValue - 변경하려는 값
 * @return {String} 문자열
*/
pForm.gfn_trimAll = function(sValue)
{
    var objValue = new String(sValue);
    var sRtnValue="";
    var i;

    if ( sValue != null ) {
        for ( var i = 0; i < objValue.length; i++ ) {
            if ( objValue.charAt(i) != " " ) {
                sRtnValue = sRtnValue + objValue.charAt(i);
            }
        }
    } else {
        return -1;
    }
    
    return sRtnValue;
};


/**
 * @desc 문자열의 좌측부터 지정한 길이만큼 가져오는 함수
 * @param {String} sOrg - 원본 문자열
 * @param {Number} nSize - 얻어올 크기. [Default Value = 0]
 * @return {String} 문자열
 */
pForm.gfn_left = function (sOrg, nSize)
{
	return new String(sOrg).substr(0, nSize);
}

/**
 * @desc 문자열의 우측부터 지정한 길이만큼 가져오는 함수 <br>
 * @param {String} sOrg - 원본 문자열
 * @param {Number} nSize - 출력될 문자열의 길이
 * @return {String} 결과값
 */
pForm.gfn_right = function(sOrg, nSize)
{
	if ( this.gfn_isNull(sOrg) || this.gfn_isNull(nSize) )	return "";

	if ( sOrg.length < nSize )
		return sOrg;
	else
		return sOrg.substr(sOrg.length-nSize, nSize);
};

/**
 * @desc 입력값 형태에 따라서 길이 또는 범위를 구하는 함수
 * @param {object} 객체, 문자열, 배열
 * @return {string} Type에 따라 구해진 길이 또는 범위
 * @example
 */
pForm.gfn_length = function (Val)
{
	return String(Val).length;
}

/**
 * @desc 문자 전체 길이를 계산
 * @param {String} sVal - 문자열
                   - 문자, 숫자, 특수문자 : 1 로 Count
                   - 그외 한글/한자 : 2 로 count 되어 합산 
 * @return {Integer} Type에 따라 구해진 길이
 */
pForm.gfn_lengthByte = function (sVal)
{
	var lengthByte = 0;

	if (this.gfn_isNull(sVal)) {
		return -1;
	}

	for (var i = 0; i < sVal.length; i++)
	{
		if (sVal.charCodeAt(i) > 127) {
			lengthByte += 2;
		}
		else {
			lengthByte += 1;
		}
	}

	return lengthByte;
}

/**
 * @desc 문자열의 위치를 대소문자 구별하여 거꾸로 부터 찾아 첫번째 나온 index 반환<br>
 * @param {String} sOrg - 원래 문자열( 예 : "aaBBbbccBB" )
 * @param {String} sFind - 찾고자 하는 문자열( 예 : "BB" )
 * @param {Number} nStart - 검색 시작위치 (옵션 : Default=문자열의 끝 )
 * @return {Number}
 * @example
 * var nPos = this.gfn_posReverse("aaBBbbccBB", "BB"); <br>
 * 성공 = 찾고자 하는 문자열의 시작위치 ( 예 : 8 ) <br>
 * 실패 = -1 <br>
 */
pForm.gfn_posReverse = function (sOrg, sFind, nStart)
{
	var pos;

	if (this.gfn_isNull(sOrg) || this.gfn_isNull(sFind)) 
	{
		return -1;
	}
	if (this.gfn_isNull(nStart)) 
	{
		nStart = sOrg.length - 1;
	}

	for (pos = nStart; pos >= 0; pos--) 
	{
		if (sOrg.substr(pos, sFind.length) == sFind) 
		{
			break;
		}
	}

	return pos;
};

/**
 * @desc 입력받은 Number에 컴마를 추가한다. <br>
 * @param {Number} nNumber - 숫자
 * @param {Number} [nDetail] - 반올림할 소숫점 이하의 자릿수.
 * @return {String} Comma 가 포함하고 있는 숫자
 */
pForm.gfn_appendComma = function(nNumber,nDetail)
{
	if (nNumber == null)	return "";
	if (nDetail	== null)	nDetail	= 0;
	
	nNumber				= parseFloat(nNumber);
	nNumber				= nexacro.round(nNumber, nDetail);
	
	var strNumber		= new String(nNumber);
	var arrNumber		= strNumber.split(".");
	var strFormatNum	= "";
	var j = 0;
	
	for ( i = arrNumber[0].length - 1; i >= 0; i--)
	{
		if (i != strNumber.length && j == 3)
		{
			strFormatNum = arrNumber[0].charAt(i) + "," + strFormatNum;
			j = 0;
		}
		else
		{
			strFormatNum = arrNumber[0].charAt(i) + strFormatNum;
		}
		j++;
	}
	
	if (arrNumber.length > 1)	strFormatNum = strFormatNum + "." + arrNumber[1];
	
	return strFormatNum;
};

/**
 * @desc 입력받은 Number에 컴마를 제거한다. <br>
 * @param {String} strValue - 컴마가 포함된 스트링
 * @return {String} 컴마가 제거된 스트링이 반환된다.
 */
pForm.gfn_removeComma = function(strValue)
{
	return strValue.replace(/\,/g, "");
};

/**
 * @desc 입력 문자열중 숫자값만 남긴다. <br>
 * @param {String} strValue - 입력문자열
 * @return {String} 숫자문자열
 */
pForm.gfn_getDigit = function(strValue)
{
	var regExp = new RegExp("\\D","g");
	var strRet = strValue.replace(regExp,"");

	return strRet;
};

/**
 * @desc 특수문자를 제거한다 <br>
 * @param {String} strValue
 * @return {String} 특수문자를 제거한 문자열
 */
pForm.gfn_removeSpecialChar = function(strValue)
{
   var strSpecial = "~!@#$%^&*-+./=_`{|}()\\?<>";
   
   for (i = 0; i < strValue.length; i++) {
      for (j = 0; j < strSpecial.length; j++) {
        if (strValue.charAt(i) == strSpecial.charAt(j))
	      strValue = strValue.replace(strValue.charAt(i), "");
      }
   }

   return strValue;
};

/** 
 * @desc HTML TAG 제거 함수 <br>
 * @param {String} sHtml - 제거대상 문자열
 * @param {String} sTag - 제거할 tag(없으면 전체 tag제거)
 * @return {String}
 * @example
 * var str = this.gfn_removeHtmlTag("정상적으로<BR>처리되었습니다.");
 */
pForm.gfn_removeHtmlTag = function(sHtml, sTag)
{
	if(this.gfn_isNull(sTag))
	{
	    sHtml = nexacro.replaceAll(sHtml, "<br>","\n");	
		sHtml = nexacro.replaceAll(sHtml, "<BR>","\n");	
	    var regExp = new RegExp("<(/)?([0-9a-zA-Z]*)(\\s[0-9a-zA-Z]*=[^>]*)?(\\s)*(/)?>","g"); 
	    sHtml = sHtml.replace(regExp, "");
	} 
	else if(sTag.toUpperCase() == "<BR>")
	{
	    sHtml = nexacro.replaceAll(sHtml, "<br>","\n");	
		sHtml = nexacro.replaceAll(sHtml, "<BR>","\n");	
	}
	else
	{
	    sHtml = nexacro.replaceAll(sHtml, sTag.toUpperCase(),"");	
		sHtml = nexacro.replaceAll(sHtml, sTag.toLowerCase(),"");	
	}
	return sHtml;
};

/**
 * @desc 배열에 해당 값이 존재하는지 확인한다. <br>
 * @param {Array} arrVal
 * @param {String} varVal - 값
 * @return {Boolean} 배열에 존재여부
 */
pForm.gfn_isExistInArray = function(arrVal, varVal) 
{
	var retVal = false;
	var nCnt = arrVal.length;
	for(var i=0; i<nCnt; i++) {
		if (arrVal[i] == varVal) {
			retVal = true;
			break;
		}
	}

	return retVal;
};

/**
 * @desc 입력된 10진수를 16진수로 변환하는 함수 <br>
 * @param {Number} nVal - 10진수
 * @return {String} 16진수 문자열
 */
pForm.gfn_10To16 = function(nVal)
{
	var n;
	n = (nVal).toString(16);

	return n;
};

/**
 * @desc 입력된 16진수를 10진수로 변환하는 함수
 * @param {String} strVal - 16진수 문자열
 * @return {Number} 10진수 숫자
 */
pForm.gfn_16To10 = function(strVal)
{
	var n;
	n = (strVal).toString(10);
	
	return n;
};

/**
* @desc 주어진 nexacro 개체의 type 을 반환 <br>
* @param {*} obj Object, Component, Frame, .. 등 nexacro 모든 개체
* @return {String} 개체의 type
* @example
* trace(this.gfn_typeOf(Button00));	// output : Button
* trace(this.gfn_typeOf(Tab00));	// output : Tab
* trace(this.gfn_typeOf(Tab00.tabpage1));	// output : Tabpage
* trace(this.gfn_typeOf(Dataset00));	// output : Dataset
*/
pForm.gfn_typeOf = function(obj)
{
	var type;
	if ( obj && (typeof obj == "object"))
	{
		var s = obj.toString();
		if(s == "[object Object]") return type;
		
		type = s.substr(8, s.length-9);
	}
	else {
		type = typeof(obj)
	}
	return type;
};

/**
 * @desc nexacro Component 여부 Check <br>
 * @param {Object} value - 체크할 Object	
 * @return {boolean}
 */
pForm.gfn_isNexaComponent = function(value) 
{
	if ( value === null || value === undefined  ) return false;
	
	return value instanceof nexacro.Component;
};

 /**
 * @desc object의 내용을 trace로 출력
 * @param {Object} objArg - 대상 Object
 * @param {String} [sName]  - key 값
 * @return N/A
 */
pForm.gfn_objView = function (objArg, sName)
{
	for (var name in objArg)
	{
		if (this.gfn_isNull(sName) == false)
		{
			if (name == sName) {
				trace("name : " + name + " / value : " + objArg[name]);
			}
		}
		else {
			trace("name : " + name + " / value : " + objArg[name]);		
		}
	}
};

/**
 * @desc   대상에서 오브젝트 반환
 * @param 	{Object} p - 오브젝트를 찾을 대상
 * @param 	{String} name - 오브젝트네임
 * @return  {Object} 오브젝트
 * @example
 * this.gfn_lookup(this, "dsList");	
 */
pForm.gfn_lookup = function(p, name)
{
	var o;
	while (p)
	{		
		o = p.components;
		if ( o && o[name] ) return o[name];
		
		o = p.objects;
		if ( o && o[name] ) return o[name];
		
		p = p.parent;
	}
	return null;
};

/**
 * @desc  지정된 속성의 값이 처음으로 일치하는 객체의 배열 위치를 뒤에서부터 찾아 반환한다.<br>
 * 배열의 각 항목은 하나 이상의 속성을 가진 객체이다.<br> 
 * @param {Array} array 대상 Array.
 * @param {String} prop 기준 속성.
 * @param {String} item 기준 값.
 * @param {Number} from 검색 시작 위치(default: 0).
 * @param {Boolean} strict true: 형변환 없이 비교('==='), false: 형변환 후 비교('==') (default: false).
 * @return {Number} 검색된 배열 위치. 없다면 -1 리턴.
 * @example
 * var users = [];
 * users[0] = {id:"milk", name:"park", age:33};
 * users[1] = {id:"apple", name:"kim"};
 * users[2] = {id:"oops", name:"joo", age:44};
 * users[3] = {id:"beans", name:"lee", age:50};
 * users[4] = {id:"zoo", age:65};
 * users[5] = {id:"milk", name:"", age:33};
 * users[6] = {id:"milk", name:"lee", age:33};
 * var index = this.gfn_lastIndexOfProp(users, "name", "lee");
 * trace("index==>" + index);	// output : index==>6
 * var index = this.gfn_lastIndexOfProp(users, "name", "lee", 5);
 * trace("index==>" + index);	// output : index==>3
*/
pForm.gfn_lastIndexOfProp = function(array, prop, item, from, strict)
{
	var i, obj, 
		propValue;
	
	if (from == null)
	{
		from = array.length - 1;
	}
	else if (from < 0)
	{
		from = Math.max(0, array.length + from);
	}
	
	var strict = strict || false;
	
	if (strict)
	{
		for (i=from; i>=0; i--)
		{
			if (i in array && array[i])
			{
				obj = array[i],
				propValue = obj[prop];
				
				if (propValue === item)
				{
					return i;
				}
			}
		}
	}
	else
	{
		for (i=from; i>=0; i--)
		{
			if (i in array && array[i])
			{
				obj = array[i],
				propValue = obj[prop];
				
				if (propValue == item)
				{
					return i;
				}
			}
		}
	}
	
	return -1;
};


/**
 * @desc  원하는 위치의 항목을 배열에서 삭제 처리한다.
 * @param {Array} array remove 대상 Array.
 * @param {Number} index remove하고자 하는 item index.
 * @example
 * var mon = ["Jan","Feb","Mar","Apr"];
 * trace("mon==>" + mon);	// output : mon==>["Jan","Mar","Apr"]
*/
pForm.gfn_removeAt = function(array, index) 
{
	array.splice(index, 1);
};

/**
 * @desc  alphabet character code.
 * charvalue값 => [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, a, b, c, d, e, f]
*/
pForm._ALPHA_CHAR_CODES = [48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 97, 98, 99, 100, 101, 102]

/**
 * @desc prefix separator 를 사용하여 ID 생성
 * @param {String} prefix id 앞에 붙일 문자열
 * @param {String} separator id 생성시 구분용 문자(default: '-' ).
 * @return {String} id
 * @example
 * trace(this.gfn_getUniqueI()); 
 * // output : 3e52d1f6-f0d2-4970-a590-ba7656b07859
 * 
 * trace(this.gfn_getUniqueI("Button_")); 
 * // output : Button_4e601da1-63f4-4cfa-849b-01b8a7f14d40
 * 
 * trace(this.gfn_getUniqueI("", "_")); 
 * // output : 4e601da1_63f4_4cfa_849b_01b8a7f14d40
 * 
 * trace(this.gfn_getUniqueId("Button_", "_")); 
 * // output : Button_4e601da1_63f4_4cfa_849b_01b8a7f14d40
*/
pForm.gfn_getUniqueId = function(prefix, separator)
{
	if ( this.gfn_isNull(prefix) ) prefix = "";
	if ( this.gfn_isNull(separator) ) {
		separator = 45;
	} else {
		separator = separator.charCodeAt(0);
	}
	
	var pThis = this,
		charcode = this._ALPHA_CHAR_CODES,
		math = Math;
	var seq = 0;
	var seq0;
	var tmpArray = new Array(36);
	var idx = -1;
	
	while (seq < 8) 
	{
		tmpArray[++idx] = charcode[math.random() * 16 | 0];
		seq++;
	}
	seq = 0;
	while (seq < 3) 
	{
		tmpArray[++idx] = separator;//45 => "-", 95=> "_"
		seq0 = 0;
		while (seq0 < 4) 
		{
			tmpArray[++idx] = charcode[math.random() * 16  | 0];
			seq0++;
		}
		seq++;
	}
	tmpArray[++idx] = separator; //45 => "-", 95=> "_"
	
	var tmpStr = (new Date()).getTime();
	tmpStr = ("0000000" + tmpStr.toString(16)).substr(-8);
	seq = 0;
	while (seq < 8) 
	{
		tmpArray[++idx] = tmpStr.charCodeAt(seq);
		seq++;
	}
	seq = 0;
	while (seq < 4) 
	{
		tmpArray[++idx] = charcode[math.random() * 16 | 0];
		seq++;
	}
	return prefix + String.fromCharCode.apply(null, tmpArray);
};

/**
 * @desc Component 기준의 XY좌표를 XCompA 기준의 XY좌표로 변환.
 * @param {Object} Component.
 * @param {Array} xy XCompB기준의 XY좌표.
 * @param {Object} XCompB XComponent.
 * @return {Array} XCompA기준의 좌표. [ x좌표, y좌표]
 * @example
 * Form에 아래와 같이 Button00이 존재 할 경우
 *
 * |---------------------------------------------------------|  ^
 * |  Form                                                   |  |
 * |                                                         |  |
 * |                                                         | 300
 * |                                                         |  |
 * |                                     //(0,0)             |  v
 * |                                       *-----------      | 
 * |                                       | Button00 |      | 
 * |                                       ------------      | 
 * |                                                         | 
 * |---------------------------------------------------------| 
 * <--------------- 900 ------------------>	
 *		 
 * trace(this.gfn_convertXY(this,[0,0], Button00)); //output: [900,300]
 * //Button00을 기준으로 한 0,0 좌표는
 * //form 기준으로 했을 때 900, 300이 된다.
*/				
pForm.gfn_convertXY = function(XCompA, xy, XCompB)
{
	var tempX, tempY;
	var x, y;
	if ( XCompB )
	{
		tempX = system.clientToScreenX(XCompB, xy[0]);
		tempY = system.clientToScreenY(XCompB, xy[1]);
		x = system.screenToClientX(XCompA, tempX) + this.gfn_getScrollLeft(XCompA);
		y = system.screenToClientY(XCompA, tempY) + this.gfn_getScrollTop(XCompA);				
	}
	else
	{
		x = xy[0];
		y = xy[1];
	}
	
	return [x, y];
};

/**
 * @desc  수평스크롤바의 trackbar 위치를 반환한다.
 * @param  {Object} Component.
 * @return {Number} 수평스크롤바의 trackbar 위치(수평스크롤바가 없을때는 0).
 * @example
 * trace(this.gfn_getScrollLeft(Div01)); //output: 10
 * trace(this.gfn_getScrollLeft(Div01)); //output: 0
*/
pForm.gfn_getScrollLeft = function(XComp)
{
	if(XComp instanceof nexacro.Div){
		XComp = XComp.form;
	}
	return (XComp.hscrollbar && XComp.hscrollbar.visible ? XComp.hscrollbar.pos : 0);
};

/**
 * @desc  수직스크롤바의 trackbar 위치를 반환한다.
 * @param  {Object} Component.
 * @return {Number} 수직스크롤바의 trackbar 위치(수직스크롤바가 없을때는 0).
 * @example
 * trace(this.gfn_getScrollTop(Div01)); //output: 20
 * trace(this.gfn_getScrollTop(Div01)); //output: 0
 */
pForm.gfn_getScrollTop = function(XComp)
{
	if(XComp instanceof nexacro.Div){
		XComp = XComp.form;
	}
	return (XComp.vscrollbar && XComp.vscrollbar.visible ? XComp.vscrollbar.pos : 0);
};

/**
 * @desc object에 argument로 주어진 object의 모든 속성값을 복사한다.<br>
 * object, function, date, array Type은 reference가 복사된다.
 * @param {Object} tarobject target 객체.
 * @param {Object} srcobject source 객체.
 * @example
 * var target = {};
 * this.gfn_copyProperties(target, {a: 1, b: "2", c: {"A": "3", "B": 4}});
 * for(var p in target)
 * {
 * 	trace(p + ":" + target[p]);
 *	// output : a:1
 *	// output : b:2
 *	// output : c:[object Object]
 * }
*/
pForm.gfn_copyProperties = function(tarobject, srcobject)
{
	if (tarobject && srcobject) 
	{
		var p, value;
		
		for (p in srcobject)
		{
			if (srcobject.hasOwnProperty(p))
			{
				value = srcobject[p];
				tarobject[p] = value;
			}
		}
	}
};	


/**
 * @desc  Form 내에서 지정된 접두문자열에 순번이 붙여진 ID 를 반환
 * @param {Object} prefix 순번 앞에 붙일 문자열
 * @param {String} prefix 순번 앞에 붙일 문자열
 * @return {String} id
 * @example
 * // this = Form
 * trace(this.gfn_getSequenceId(this, "Button")); // output : Button0
 * trace(this.gfn_getSequenceId(this, "Button")); // output : Button1
 * // this = Form
 * trace(this.gfn_getSequenceId(this, "chk_")); // output : chk_0
 * trace(this.gfn_getSequenceId(this, "chk_")); // output : chk_1
*/		
pForm.gfn_getSequenceId = function(form, prefix)
{
	if ( this.gfn_isNull(form) ) 
	{
		trace("getSequenceId :: 1st argument doesn't exist !!");
		return null;
	}
	
	if ( this.gfn_isNull(prefix) ) 
	{
		trace("getSequenceId :: 2nd argument doesn't exist !!");
		return null;
	}
	
	if ( !(form instanceof Form) ) 
	{				
		trace("getSequenceId :: 1st argument must be a Form !!");
		return null;
	}
	
	var cache = form._sequenceIdCache;
	if ( this.gfn_isNull(cache) )
	{
		cache = form._sequenceIdCache = {};
	}
	
	var sequence = cache[prefix];
	if ( this.gfn_isNull(sequence) )
	{
		sequence = -1;
	}
	sequence++;
	
	cache[prefix] = sequence;
	
	return prefix + sequence;
};

/**
 * @desc object 속성값들을 주어진 함수로 처리한다.<br>
 * 주어진 함수에서 return false를 하면 반복이 멈춘다.
 * @param {Object} object 대상 object.
 * @param {Function} func callback 함수. 
 * @param {String} func.prop object property name.
 * @param {Object} func.val object property value.
 * @param {Object} func.object object 그 자체.
 * @param {Object} scope callback 함수에 대한 수행 scope.
 * @example
 * var datas = {code: "001", userId: "", name: "pete"};
 * this.gfn_each(datas, function(prop, val, object) {
 * 	var result = "";
 * 	if ( !val )
 * 	{
 * 		result = prop + " must have not a non-empty value!"
 * 		st_result03.text += result;
 * 		trace(result);	// output : userId must have not a non-empty value!
 * 		return false;
 * 	}
 * 	result = prop + ":" + val;
 * 	st_result03.text += result + "  ";
 * 	trace(result);	// output : code:001
 * }, this);
*/
pForm.gfn_each = function(object, func, scope)
{
	var p,
		scope = scope || object;
	for (p in object)
	{
		if (object.hasOwnProperty(p))
		{
			if (func.call(scope, p, object[p], object) === false)
			{
				return;
			}
		}
	}
};

/**
 * @desc 주어진 Form 을 포함하는 최상위 Form을 찾는다.
 * @param  {Object} curForm 검색 시작 Form.
 * @return {Object} 최상위 Form.
 * @example
 * trace(this.gfn_getTopLevelForm(this));	// output : [object Form]
*/		
pForm.gfn_getTopLevelForm = function(curForm)
{
	var p = curForm;
	while (p && !(p instanceof ChildFrame))
	{
		p = p.parent;
	}
	return p.form;
};

/**
 * @desc 지정된 항목이 배열에 포함되어 있는지 확인한다.
 * @param {Array} array 검색 대상 Array.
 * @param {Object} item 찾고자 하는 Item.
 * @param {Boolean} strict true: 형변환 없이 비교('==='), false: 형변환 후 비교('==') (default: false).
 * @return {Boolean} 포함되어 있다면 true, 없다면 false를 리턴.
 * @example
 * var mon = ["Jan","Feb","Mar","Apr"];
 * var contain = this.gfn_contains(mon, "Mar");
 * trace("contain==>" + contain);	// output : contain==>true
 * var contain = this.gfn_contains(mon, "May");
 * trace("contain==>" + contain);	// output : contain==>false
*/
pForm.gfn_contains = function(array, item, strict) 
{
	if (this.gfn_indexOf(array, item, null, strict) === -1) 
	{
		return false;
	}
	else
	{
		return true;
	}
};

/**
 * @desc 지정된 항목이 처음 나오는 배열 위치를 반환한다. 
 * @param {Array} array 검색 대상 Array.
 * @param {Object} item 찾고자 하는 Item.
 * @param {Number} from 검색의 시작 위치 (default: 0).
 * @param {Booleans} strict true: 형변환 없이 비교('==='), false: 형변환 후 비교('==') (default: false).
 * @return {Number} 검색된 배열 위치. 없다면 -1 리턴.
 * @example
 * var mon = ["Jan","Feb","Mar","Apr"];
 * var index = this.gfn_indexOf(mon, "Mar");
 * trace("index==>" + index);	// output : index==>2
 * var index = this.gfn_indexOf(mon, "May");
 * trace("index==>" + index);	// output : index==>-1
*/
pForm.gfn_indexOf = function(array, item, from, strict) 
{
	var len = array.length;
	if ( from == null ) from = 0;;
	strict == !!strict;
	from = (from < 0) ? Math.ceil(from) : Math.floor(from);
	if (from < 0)
	{
		from += len;
	}
	
	if (strict)
	{
		for (; from < len; from++) 
		{
			if ( array[from] === item)
			{
				return from;
			}
		}
	}
	else
	{
		for (; from < len; from++) 
		{
			if ( array[from] == item)
			{
				return from;
			}
		}
	}
	
	return -1;
};


/************************************************************************************************
* 외부연동 관련 Util
************************************************************************************************/
/**
* @desc 행정안전부 우편번호 검색 <br>
* @param {Object} obj - Button Component
* @return N/A - 웹브라우져 onusernotify에서 (식별자 ::: 주소1 ::: 주소2 ::: 상세주소 :::  우편번호) 형태로 전달
* @example 
* this.gfn_postSearch(obj);
*/
pForm.gfn_postSearch = function(obj)
{
	var objApp = nexacro.getApplication();	

	if (!this.components[obj.name+"_webPost"]) {
		var objWeb = new WebBrowser();  
		objWeb.init(obj.name+"_webPost", obj.left, obj.top+obj.height+10, 500, 500, null, null);

		// Add Object to Parent Form  
		this.addChild(obj.name+"_webPost", objWeb);
		 
		// Show Object
		objWeb.show();
	}
	else {
		var objWeb = this.components[obj.name+"_webPost"];
	}
	
	var sUrl = nexacro.getEnvironment().services["svcUrl"].url+"external/PostCall.jsp";
	objWeb.set_url(sUrl);
	
	// onusernotify 이벤트 추가
	objWeb.addEventHandler("onusernotify", this.gfn_webPost_onusernotify, this);	
};

/**
* @desc 우편번호 WebBrowser 에 로드된 웹페이지에서 nexacro 쪽으로 정보를 전달할 때 발생하는 이벤트 <br>
* @param {Object} obj - Nexacro Web Browser Component
* @param {WebUserNotifyEventInfo} e - WebUserNotifyEventInfo
* @return N/A - 웹브라우져 onusernotify에서 (식별자 ::: 주소1 ::: 주소2 ::: 상세주소 :::  우편번호) 형태로 전달
* @example 
* this.gfn_postSearch(obj);
*/
pForm.gfn_webPost_onusernotify = function(obj, e)
{
	var strPost = e.userdata;

	if (strPost.indexOf("OK!!!:::") == 0) 
	{
		// e.userdata ==>(식별자 ::: 주소1 ::: 주소2 ::: 상세주소 :::  우편번호)
		var aAddr = strPost.split(":::");

		// form에 callback 함수가 있을때
		if (this["fn_postCallBack"]) this.lookupFunc("fn_postCallBack").call((obj.name).replace("_webPost",""), aAddr);
	}
};

/**
* @desc 다음 우편번호 검색 <br>
* @param {Object} obj - WebBrowser Component
* @return N/A - 웹브라우져 onusernotify에서 (식별자 ::: 구우편번호 앞 3자리 ::: 구우편번호 뒷 3자리 :::  신규우편번호 ::: 도로명주소 ::: 지번 주소 ::: 조합형 주소여부에 따른 주소) 형태로 전달
* @example 
* this.gfn_postSearchDaum(obj);
*/
pForm.gfn_postSearchDaum = function(obj)
{
	var sUrl;
	sUrl = nexacro.getEnvironment().services["svcUrl"].url+"external/PostPopWeb.html";
	obj.set_url(sUrl);
};

/************************************************************************************************
* Date 관련 Util
************************************************************************************************/

/**
 * @desc 날짜 여부(년월 or 년월일)를 확인한다. <br>
 * @param {String} strDate - 입력스트링(YYYYMM or YYYYMMDD)
 * @return {Boolean}
 */
pForm.gfn_isDate = function(strDate)
{
	if (this.gfn_isNull(strDate)) return false;
	
	var retVal;
	switch(strDate.length)
	{
		case 6://년월
			retVal =  this.gfn_isYM(strDate);
			break;
		case 8://년월일
			retVal =  this.gfn_isYMD(strDate);
			break;
		default:
			retVal = false; 
			break;
	}

	return retVal;
};

/**
 * @desc 날짜 여부(년월일)를 확인한다. <br>
 * @param {String} strDate - 8자리의 숫자로 된 날짜(YYYYMMDD)
 * @return {Boolean}
 */
pForm.gfn_isYMD = function(strDate)
{
	var retVal = this.gfn_getDigit(strDate);
	
	if (retVal.length != 8) {
		return false;
	}

	var strYM = strDate.substr(0,6);	//년월
	if (!this.gfn_isYM(strYM)) {
		return false;
	}
	var nDay   = Number(strDate.substr(6,2));	// 일자
	var nLastDay = Number(this.gfn_getLastDate(strYM).substr(6,2));//gfn_getLastDay에서 전체 20170331값이 넘어와서 .substr(6,2)추가 20170313
	if (nDay < 1 || nDay > nLastDay) {
		return false;
	}
	return true;
};

/**
 * @desc 날짜 여부(년월)를 확인한다. <br>
 * @param {String} strDate - 6자리의 숫자로 된 날짜(YYYYMM)
 * @return {Boolean}
 */
pForm.gfn_isYM = function(strDate)
{
var retVal = this.gfn_getDigit(strDate);
	
	var retVal = this.gfn_getDigit(strDate);

	if (retVal.length != 6) {
		return false;
	}

	var nYear  = Number(strDate.substr(0,4));	//년도값을 숫자로
	var nMonth = Number(strDate.substr(4,2));	//월을 숫자로

	if((nMonth < 1) || (nMonth > 12)) {
		return false;
	}

	return true;
};

/**
 * @desc 시간 형식에 맞는지 Check 한다. <br>
 * @param {String} strTime - 6자리의 숫자로 된 내부시간형식(HHMMSS)
 * @return {Boolean}
 */
pForm.gfn_isTime = function(strTime)
{
	if (strTime.length != 6 || isNumber(strTime)) {
		return false;
	}
	
	var t01 = Number(strTime.slice(0, 2));
	var t02 = Number(strTime.slice(2, 2));
	var t03 = Number(strTime.slice(4, 2));

	if((t01 < 0 || t01 > 23) || (t02 < 0 || t02 > 59) || (t03 < 0 || t03 > 59)) {
		return false;
	} else {
		return true;
	}
};

/**
 * @desc 현재일자를 구한다. <br>
 * @param {String} [sGubn] - date/null : 일자, time : 일자+시간, milli : Milliseconds
 * @return {String} 8자리 날짜(YYYYMMMDD)문자열
 */
pForm.gfn_getDate = function(sGubn) 
{
	if(this.gfn_isNull(sGubn)) sGubn = "date";
	var d = new Date();
	
	var s;
	
	if (sGubn == "date") {
		s = d.getFullYear()
			  + ((d.getMonth() + 1) + "").padLeft(2, '0')
			  + (d.getDate() + "").padLeft(2, '0');
	}
	else if (sGubn == "time") {
		s = d.getFullYear()
	      + ((d.getMonth() + 1) + "").padLeft(2, '0')
	      + (d.getDate() + "").padLeft(2, '0')
	      + (d.getHours() + "").padLeft(2, '0')
	      + (d.getMinutes() + "").padLeft(2, '0')
	      + (d.getSeconds() + "").padLeft(2, '0');
	}
	else if (sGubn == "milli") {
		s = d.getFullYear()
	      + ((d.getMonth() + 1) + "").padLeft(2, '0')
	      + (d.getDate() + "").padLeft(2, '0')
	      + (d.getHours() + "").padLeft(2, '0')
	      + (d.getMinutes() + "").padLeft(2, '0')
	      + (d.getSeconds() + "").padLeft(2, '0')
		  + (d.getMilliseconds() + "").padLeft(3, '0');
	}
	return (s);
};

/**
 * @desc 년월을 입력받아 마지막 일를 반환한다(년월) <br>
 * @param {String} strDate - 6 / 8 자리의 숫자로 된 날짜(YYYYMM)
 * @return {String} 해당월의 마지막날 8자리
 */
pForm.gfn_getLastDate = function(strDate)
{
	var s = "";
    if (strDate == null) {
	    var date = (new Date()).addMonth(1);
    }
    else {
	    var date = new Date(parseInt(strDate.substr(0,4)),parseInt(strDate.substr(4,2)),1);
    }

	date = (new Date(date)).addDate((new Date(date)).getDate()*-1);

	s = (new Date(date)).getFullYear()
	  + (((new Date(date)).getMonth() + 1) + "").padLeft(2, '0')
	  + ((new Date(date)).getDate() + "").padLeft(2, '0');

	return (s);
};

/**
 * @desc 현재월 1일 만들기. <br>
 * @param {String} strDate - Date Format YYYYMM / YYYYMMDD
 * @return {String} date
 */
pForm.gfn_getFirstDate = function(strDate)
{
    var s = "";

    if (strDate == null) {
	    s = this.gfn_getDate().substr(0,6) + "01";
    }
    else {
	    var date = new Date(parseInt(strDate.substr(0,4)),parseInt(strDate.substr(4,2))-1,1);
	    s = (new Date(date)).getFullYear()
	      + (((new Date(date)).getMonth()+1)+ "").padLeft(2, '0')
	      + ((new Date(date)).getDate() + "").padLeft(2, '0');

    }
    
	return (s);
};

/**
 * @desc 입력된 날자로부터 요일을 구함 <br>
 * @param {String} strDate - 'yyyyMMdd' 형태로 표현된 날짜.
 * @return {Number} 0 = 일요일 ~ 6 = 토요일. 오류가 발생할 경우 -1 Return.
 */
pForm.gfn_getDay = function(strDate)
{
    var date = new Date();

    var iYear = parseInt(strDate.substr(0, 4));
    var iMonth = parseInt(strDate.substr(4, 2) - 1);
    var iDate = parseInt(strDate.substr(6, 2));
    
	date.setFullYear(iYear,iMonth,iDate);
    return date.getDay();
};

/**
 * @desc 입력된 날자로부터 요일을 구함 <br>
 * @param {String} strDate - 'yyyyMMdd' 형태로 표현된 날짜.
 * @return {Number} 일요일 ~ 월요일
 */
pForm.gfn_getDayStr = function(strDate)
{
    var ret = this.gfn_getDay(strDate);
	var sDay = "";
	switch(ret) {
	case 0:
		sDay = "일"
		break;
	case 1:
		sDay = "월"
		break;
	case 2:
		sDay = "화"
		break;
	case 3:
		sDay = "수"
		break;
	case 4:
		sDay = "목"
		break;
	case 5:
		sDay = "금"
		break;
	case 6:
		sDay = "토"
		break;
	default:
	}
    return sDay;
};

/**
 * @desc 두 일자간의 차이 일수 계산 <br>
 * @param {String} sStartDate - yyyyMMdd형태의 From 일자 ( 예 : "20121122" )
 * @param {String} sEndDate - yyyyMMdd형태의 To 일자   ( 예 : "20121202" )
 * @return {Number} 숫자 형태의 차이일수( 예 : 10 ) 단, sEndDate < sStartDate이면 음수가 return된다.
 */
pForm.gfn_getDiffDate = function(sStartDate, sEndDate)
{
    var vFromDate = new Date(parseInt(sEndDate.substr(0,4),  10), parseInt(sEndDate.substr(4,2)-1,  10), parseInt(sEndDate.substr(6,2), 10));
    var vToDate = new Date(parseInt(sStartDate.substr(0,4),  10), parseInt(sStartDate.substr(4,2)-1,  10), parseInt(sStartDate.substr(6,2), 10));
	
    return parseInt((vFromDate - vToDate)/(1000*60*60*24));
	
};

/**
 * @desc 두 일자간의 차이 일수 계산. 단, sStartDate, sEndDate의 일은 포함하지 않고 계산된다. <br>
 * @param {String} sStartDate - yyyyMMdd형태의 From 일자 ( 예 : "20121122" )
 * @param {String} sEndDate - yyyyMMdd형태의 To 일자   ( 예 : "20121202" )
 * @return {Number} 숫자 형태의 차이월수 ( 예 : 10 ) 단, sEndDate < sStartDate이면 음수가 return된다.
 */
pForm.gfn_getDiffMonth = function(sStartDate, sEndDate)
{
	var nStartMon, nEndMon;
	
	nStartMon = parseInt(sStartDate.substr(0,4), 10)*12 + parseInt(sStartDate.substr(4,2), 10);
	nEndMon = parseInt(sEndDate.substr(0,4), 10)*12 + parseInt(sEndDate.substr(4,2), 10);
	
	return (nEndMon - nStartMon);
};

/**
 * @desc 입력된 날짜에 OffSet 으로 지정된 만큼의 날짜를 더함 <br>
 * @param {String} strDate - 'yyyyMMdd' 형태로 표현된 날짜.
 * @param {Number} nOffSet - 날짜로부터 증가 감소값.
 * @return {String} date의 문자열 (ex. 20080821)
 */
pForm.gfn_addDate = function(strDate, nOffSet)
{
	var date = new Date();
	
    var iYear = parseInt(strDate.substr(0, 4));
    var iMonth = parseInt(strDate.substr(4, 2) - 1);
    var iDate = parseInt(strDate.substr(6, 2)-(nOffSet*-1));
    
	date.setFullYear(iYear,iMonth,iDate);	
	
	return this.gfn_dateToStr(date);
};

/**
 * @desc 입력일자 해당월의 마지막 일 <br>
 * @param {String} strMonth - 'yyyyMMdd' 형태로 표현된 날짜.
 * @return {Number} 해당월의 마지막일자 2자리
 */
pForm.gfn_getMonthLastDate = function(strMonth) {
	var iLastDay;
	var iYear  = parseInt(strMonth.substr(0, 4),10) ;
	var iMonth = parseInt(strMonth.substr(4, 2),10);
	switch(iMonth)
	{
		case 2 :
			if( ((iYear%4)==0) && ((iYear%100)!=0) || ((iYear%400)==0) )
				iLastDay = 29;
			else
				iLastDay = 28;			
			break;
		case 4 :
		case 6 :
		case 9 :
		case 11 :
			iLastDay = 30;
			break;
		default:
			iLastDay = 31;
			break;
	}
	
	return iLastDay;
};
	
/**
 * @desc 입력된 월에 OffSet 으로 지정된 만큼의 월을 더함 <br>
 * @param {String} strDate - String Date Format
 * @param {Number} OffSet - Integer Format
 * @return {String} date
 */
pForm.gfn_addMonth = function(strDate, OffSet) 
{	
	var date, d, s, mon, val;
    if (strDate) {
        date = this.gfn_strToDate(strDate);
        d = (new Date(date)).addMonth(OffSet);
    } else {
    	date = this.gfn_strToDate(this.gfn_getDate());
		d = (new Date(date)).addMonth(OffSet);
    }
    
    if (this.gfn_getMonthLastDate(strDate) == date.getDate()) {
    	var sY = new Date(d).getFullYear();
    	var sM = new Date(d).getMonth();
    	var eY = date.getFullYear();
    	var eM = date.getMonth();
    	
    	mon = -((eY - sY)* 12 + (eM - sM));
    	
    	if (mon != OffSet) {
   			val = OffSet - mon;
    		d = (new Date(d)).addMonth(-1);
    	}
    	
    	var ld = new Date((new Date(d)).getFullYear() 
    			, (new Date(d)).getMonth()
    			, this.gfn_getMonthLastDate(this.gfn_dateToStr(new Date(d))));
    	
    	s = (new Date(ld)).getFullYear()
		   + (((new Date(ld)).getMonth() + 1) + "").padLeft(2, '0')
		   + (((new Date(ld)).getDate()) + "").padLeft(2, '0');
    } else {
    	s = (new Date(d)).getFullYear()
		   + (((new Date(d)).getMonth() + 1) + "").padLeft(2, '0')
		   + (((new Date(d)).getDate()) + "").padLeft(2, '0');
    }
	
	return (s);
};

/**
 * @desc 법정공휴일 구하기 <br>
 * @param {Number} nYear - yyyy
 * @return {Array} 휴일정보
 * @example : 
 */
pForm.gfn_getHolidays = function(nYear)
{
	var nYear;
	var aHoliday = new Array();

	/////// 음력 체크
	// 구정
	aHoliday[0] = this.gfn_lunarToSolar((nYear-1) + "1230", false);// + "설날";
	aHoliday[1] = this.gfn_addDate(aHoliday[0].substring(0, 8), 1);// + "설날";
	aHoliday[2] = this.gfn_addDate(aHoliday[1].substring(0, 8), 1);// + "설날";
	// 석가탄신일
	aHoliday[3] = this.gfn_lunarToSolar(nYear + "0408", false);// + "석가탄신일";
	// 추석
	aHoliday[4] = this.gfn_lunarToSolar(nYear + "0814", false);// + "추석";
	aHoliday[5] = this.gfn_addDate(aHoliday[4].substring(0, 8), 1);// + "추석";
	aHoliday[6] = this.gfn_addDate(aHoliday[5].substring(0, 8), 1);// + "추석";	

	/////// 양력 체크
	aHoliday[7] = nYear+"0101";// + "신정";
	aHoliday[8] = nYear+"0301";// + "삼일절";
	aHoliday[9] = nYear+"0505";// + "어린이날";	
	aHoliday[10] = nYear+"0606";// + "현충일";		
	aHoliday[11] = nYear+"0815";// + "광복절";	
	aHoliday[12] = nYear +"1003";// + "개천절";
	aHoliday[13] = nYear +"1009";// + "한글날";
	aHoliday[14] = nYear+"1225";// + "성탄절";			
	
	return aHoliday.sort();
};

/**
 * @desc 양력을 음력으로 변환해주는 함수.<br>
 * [주의사항]<br>
 *  1. return값이 8자리가 아니고 9자리임에 주의<br>
 *  2. 처리가능 기간  1841 - 2043년
 * @param {String | Date} value - yyyyMMdd형태의 양력일자 ( 예 : "20121122" )
 * @return {String} Flag(평달 = "0", 윤달 = "1") + 'yyyyMMdd'형태의 음력일자
 * @example
 * var dt = this.gfn_str2Date("20130331");
 * var str = this.solarToLunar(dt);
 * trace(str); // output : 020130220
 * var str1 = "20130331";
 * var str = this.solarToLunar(str1);
 * trace(str); // output : 020130220
 */		
pForm.gfn_solarToLunar =  function(value) 
{
	var sMd         = "31,0,31,30,31,30,31,31,30,31,30,31";
	var arrMd       = [];
	var arrBaseInfo = [];
	var arrDt       = [];	// 매년의 음력일수를 저장할 배열 변수
	var nTd;		    			// 음력일을 계산하기 위해 양력일과의 차이를 저장할 변수
	var nTd1;			    		// 1840년까지의 날수
	var nTd2;				    	// 현재까지의 날수
	var nTemp;					    // 임시변수
	var nLy, nLm, nLd;			    // 계산된 음력 년, 월, 일을 저장할 변수
	var sLyoon;					    // 현재월이 윤달임을 표시

	var nY, nM, nD;

	nY = parseInt(value.substr(0,4), 10);
	nM = parseInt(value.substr(4,2), 10);
	nD = parseInt(value.substr(6,2), 10);
	
	
	if (nY < 1841 || nY > 2043)	
	{
		return null;
	}

	arrBaseInfo = this.gfn_solarBase();
	arrMd       = sMd.split(",");
	arrMd[1]    = 28;
		
	//윤년여부 확인
	if ((nY % 4) == 0) 
	{
		if ((nY % 100) != 0 || (nY % 400) == 0)
		{ 
			arrMd[1] = 29;
		}
	} 

	// 672069 = 1840 * 365 + 1840/4 - 1840/100 + 1840/400 + 23  //1840년까지 날수
	nTd1 = 672069; 	 
		
	// 1841년부터 작년까지의 날수
	nTd2 = (nY - 1) * 365 + parseInt((nY - 1)/4) - parseInt((nY - 1)/100) + parseInt((nY - 1)/400);
		
	// 전월까지의 날수를 더함
	for (var i = 0; i <= nM - 2; i++)
	{
		nTd2 = nTd2 + parseInt(arrMd[i]);
	}

	// 현재일까지의 날수를 더함
	nTd2 = nTd2 + nD;

	// 양력현재일과 음력 1840년까지의 날수의 차이
	nTd = nTd2 - nTd1 + 1;
	
	// 1841년부터 음력날수를 계산
	for (var i = 0; i <= nY - 1841; i++)
	{
		arrDt[i] = 0;
		for (var j = 0; j <= 11; j++)
		{
			switch (parseInt(arrBaseInfo[i * 12 + j]))
			{
				case 1 : nTemp = 29;
						 break;
				case 2 : nTemp = 30;
						 break;				
				case 3 : nTemp = 58;	// 29 + 29
						 break;				
				case 4 : nTemp = 59;	// 29 + 30
						 break;				
				case 5 : nTemp = 59;	// 30 + 29
						 break;				
				case 6 : nTemp = 60;	// 30 + 30
						 break;				
			}
			
			arrDt[i] = arrDt[i] + nTemp;
		}
	}
		
	// 1840년 이후의 년도를 계산 - 현재까지의 일수에서 위에서 계산된 1841년부터의 매년 음력일수를 빼가면수 년도를 계산
	nLy = 0;
	do
	{
		nTd = nTd - arrDt[nLy];
		nLy = nLy + 1;
	}
	while(nTd > arrDt[nLy]);
	
	nLm    = 0;
	sLyoon = "0";	// 현재월이 윤달임을 표시할 변수 - 기본값 평달
	do
	{

		if (parseInt(arrBaseInfo[nLy * 12 + nLm]) <= 2)
		{
			nTemp = parseInt(arrBaseInfo[nLy * 12 + nLm]) + 28;
			if (nTd > nTemp)
			{
				nTd = nTd - nTemp;
				nLm = nLm + 1;
			}
			else
			{
				break;
			}
		}
		else
		{
			switch (parseInt(arrBaseInfo[nLy * 12 + nLm]))
			{
				case 3 :
					m1 = 29;
					m2 = 29;
					break;
				case 4 : 
					m1 = 29;
					m2 = 30;
					break;					
				case 5 : 
					m1 = 30;
					m2 = 29;
					break;					
				case 6 : 
					m1 = 30;
					m2 = 30;
					break;					
			}

			if (nTd > m1)
			{
				nTd = nTd - m1;
				if (nTd > m2)
				{
					nTd = nTd - m2;
					nLm = nLm + 1;
				}
				else
				{
					sLyoon = "1";
				}
			}
			else
			{
				break;
			}
		}
	}
	while(1);
	
	nLy = nLy + 1841;
	nLm = nLm + 1;
	nLd = nTd;

	var sRtn = sLyoon + nLy; 
	sRtn = sRtn + nLm.toString().padLeft(2, "0"); 
	sRtn = sRtn + nLd.toString().padLeft(2, "0");    
	return sRtn;
};		

/**
 * @desc 음력을 양력으로 변환. <br>
 * @param {String | Date} value - yyyyMMdd형태의 음력일자 ( 예 : "20121122" ).
 * @param {Boolean} leapMonth - 윤달 여부.
 * @return {String} 'yyyyMMdd'형태의 양력일자
 */
pForm.gfn_lunarToSolar = function(value, leapMonth)
{

	var sMd         = "31,0,31,30,31,30,31,31,30,31,30,31";
	var arrMd       = [];	
	var arrBaseInfo = [];
	var nTd         = 0;
	var nSy, nSm, nSd;			    // 계산된 양력 년, 월, 일을 저장할 변수
	var nY1, nM1, nY2, nY3, nTemp;	// 임시변수	
	var nLeap;    
		
	var nLy, nLm, nLd;

	nLy = parseInt(value.substr(0,4), 10);
	nLm = parseInt(value.substr(4,2), 10);
	nLd = parseInt(value.substr(6,2), 10);
	

	if (nLy < 1841 || nLy > 2043)	
	{
		return null;
	}	

	arrBaseInfo = this.gfn_solarBase();
	arrMd       = sMd.split(",");
	arrMd[1]    = 28;
	
	//윤년여부 확인
	if ((nLy % 4) == 0) 
	{
		if ((nLy % 100) != 0 || (nLy % 400) == 0)
		{ 
			arrMd[1] = 29;
		}
	} 
		
	nY1   = nLy - 1841; //176
	nM1   = nLm - 1; //02
	nLeap = 0;
	
	if (parseInt(arrBaseInfo[nY1 * 12 + nM1]) > 2)
	{
		//윤년여부 확인
		if ((nLy % 4) == 0) 
		{
			if ((nLy % 100) != 0 || (nLy % 400) == 0)
			{ 
				nLeap = 1;
			}
		} 
	}
	if (nLeap == 1)
	{
		switch (parseInt(arrBaseInfo[nY1 * 12 + nM1]))
		{
			case 3 : nTemp = 29;
					 break;
			case 4 : nTemp = 30;
					 break;			
			case 5 : nTemp = 29;
					 break;			
			case 6 : nTemp = 30;
					 break;
		}
	}
	else
	{
		switch (parseInt(arrBaseInfo[nY1 * 12 + nM1]))
		{
			case 1 : nTemp = 29;
					 break;			
			case 2 : nTemp = 30;
					 break;			
			case 3 : nTemp = 29;
					 break;			
			case 4 : nTemp = 29;
					 break;			
			case 5 : nTemp = 30;
					 break;			
			case 6 : nTemp = 30;
					 break;			
		}
	}
	
	var tempY1 = nY1 - 1;
	for (var i = 0; i <= tempY1; i++)
	{
		for (var j = 0; j <= 11; j++)
		{
			switch (parseInt(arrBaseInfo[i * 12 + j]))
			{
				case 1 : nTd = nTd + 29;
						 break;
				case 2 : nTd = nTd + 30;
						 break;				
				case 3 : nTd = nTd + 58;
						 break;				
				case 4 : nTd = nTd + 59;
						 break;				
				case 5 : nTd = nTd + 59;
						 break;				
				case 6 : nTd = nTd + 60;
						 break;				
			}
		}
	}

	var tempM1 = nM1 - 1;
	for (var j = 0; j <= tempM1; j++)
	{
		switch (parseInt(arrBaseInfo[nY1 * 12 + j]))
		{
			case 1 : nTd = nTd + 29;
					 break;			
			case 2 : nTd = nTd + 30;
					 break;						
			case 3 : nTd = nTd + 58;
					 break;						
			case 4 : nTd = nTd + 59;
					 break;						
			case 5 : nTd = nTd + 59;
					 break;						
			case 6 : nTd = nTd + 60;
					 break;						
		}
	}

	if (nLeap == 1)
	{
		switch (parseInt(arrBaseInfo[nY1 * 12 + nM1]))
		{
			case 3 : nTemp = 29;
					 break;						
			case 4 : nTemp = 29;
					 break;						
			case 5 : nTemp = 30;
					 break;						
			case 6 : nTemp = 30;
					 break;						
		}
	}
	
	nTd = nTd + nLd + 22;
	
	if (leapMonth)
	{
		switch (parseInt(arrBaseInfo[nY1 * 12 + nM1]))
		{
			case 3 : nTd = nTd + 29;
					 break;						
			case 4 : nTd = nTd + 30;
					 break;						
			case 5 : nTd = nTd + 29;
					 break;						
			case 6 : nTd = nTd + 30;
					 break;						
		}
	}
	
	nY1 = 1840;
	do
	{
		nY1 = nY1 + 1;
		
		nLeap = 0;
		
		//윤년여부 확인
		if ((nY1 % 4) == 0) 
		{
			if ((nY1 % 100) != 0 || (nY1 % 400) == 0)
			{ 
				nLeap = 1;
			}
		} 

		if (nLeap == 1)
		{
			nY2 = 366;
		}
		else
		{
			nY2 = 365;
		}

		if( nTd <= nY2 )
		{
			break;
		}
			
		nTd = nTd - nY2;
	}
	while(1);

	nSy      = nY1;
	arrMd[1] = nY2 - 337;
	nM1      = 0;
	
	do
	{
		nM1 = nM1 + 1;
		if (nTd <= parseInt(arrMd[nM1-1]))
		{
			break;
		}
		nTd = nTd - parseInt(arrMd[nM1-1]);
	}
	while(1);
	
	nSm = nM1;
	nSd = nTd;
	nY3 = nSy;
	nTd = nY3 * 365 + parseInt(nY3/4) - parseInt(nY3/100) + parseInt(nY3/400);
	
	var tempSm = nSm - 1;
	for (var i = 0; i <= tempSm; i++)
	{
		nTd = nTd + parseInt(arrMd[i]);
	}

	nTd = nTd + nSd;

	var sRtn = nY3;
	sRtn = sRtn + nSm.toString().padLeft(2, "0"); 
	sRtn = sRtn + nSd.toString().padLeft(2, "0");    

	return sRtn;	
};

/**
 * @desc 각 월별 음력 기준 정보 (처리가능 기간  1841 - 2043년) <br>
 * @return {String}
 */	 
pForm.gfn_solarBase = function ()
{
	var sBase;
			
	//1841
	sBase = "1,2,4,1,1,2,1,2,1,2,2,1,";
	sBase += "2,2,1,2,1,1,2,1,2,1,2,1,";
	sBase += "2,2,2,1,2,1,4,1,2,1,2,1,";
	sBase += "2,2,1,2,1,2,1,2,1,2,1,2,";
	sBase += "1,2,1,2,2,1,2,1,2,1,2,1,";
	sBase += "2,1,2,1,5,2,1,2,2,1,2,1,";
	sBase += "2,1,1,2,1,2,1,2,2,2,1,2,";
	sBase += "1,2,1,1,2,1,2,1,2,2,2,1,";
	sBase += "2,1,2,3,2,1,2,1,2,1,2,2,";
	sBase += "2,1,2,1,1,2,1,1,2,2,1,2,";
	//1851
	sBase += "2,2,1,2,1,1,2,1,2,1,5,2,";
	sBase += "2,1,2,2,1,1,2,1,2,1,1,2,";
	sBase += "2,1,2,2,1,2,1,2,1,2,1,2,";
	sBase += "1,2,1,2,1,2,5,2,1,2,1,2,";
	sBase += "1,1,2,1,2,2,1,2,2,1,2,1,";
	sBase += "2,1,1,2,1,2,1,2,2,2,1,2,";
	sBase += "1,2,1,1,5,2,1,2,1,2,2,2,";
	sBase += "1,2,1,1,2,1,1,2,2,1,2,2,";
	sBase += "2,1,2,1,1,2,1,1,2,1,2,2,";
	sBase += "2,1,6,1,1,2,1,1,2,1,2,2,";
	//1861
	sBase += "1,2,2,1,2,1,2,1,2,1,1,2,";
	sBase += "2,1,2,1,2,2,1,2,2,3,1,2,";
	sBase += "1,2,2,1,2,1,2,2,1,2,1,2,";
	sBase += "1,1,2,1,2,1,2,2,1,2,2,1,";
	sBase += "2,1,1,2,4,1,2,2,1,2,2,1,";
	sBase += "2,1,1,2,1,1,2,2,1,2,2,2,";
	sBase += "1,2,1,1,2,1,1,2,1,2,2,2,";
	sBase += "1,2,2,3,2,1,1,2,1,2,2,1,";
	sBase += "2,2,2,1,1,2,1,1,2,1,2,1,";
	sBase += "2,2,2,1,2,1,2,1,1,5,2,1,";
	//1871
	sBase += "2,2,1,2,2,1,2,1,2,1,1,2,";
	sBase += "1,2,1,2,2,1,2,1,2,2,1,2,";
	sBase += "1,1,2,1,2,4,2,1,2,2,1,2,";
	sBase += "1,1,2,1,2,1,2,1,2,2,2,1,";
	sBase += "2,1,1,2,1,1,2,1,2,2,2,1,";
	sBase += "2,2,1,1,5,1,2,1,2,2,1,2,";
	sBase += "2,2,1,1,2,1,1,2,1,2,1,2,";
	sBase += "2,2,1,2,1,2,1,1,2,1,2,1,";
	sBase += "2,2,4,2,1,2,1,1,2,1,2,1,";
	sBase += "2,1,2,2,1,2,2,1,2,1,1,2,";
	//1881
	sBase += "1,2,1,2,1,2,5,2,2,1,2,1,";
	sBase += "1,2,1,2,1,2,1,2,2,1,2,2,";
	sBase += "1,1,2,1,1,2,1,2,2,2,1,2,";
	sBase += "2,1,1,2,3,2,1,2,2,1,2,2,";
	sBase += "2,1,1,2,1,1,2,1,2,1,2,2,";
	sBase += "2,1,2,1,2,1,1,2,1,2,1,2,";
	sBase += "2,2,1,5,2,1,1,2,1,2,1,2,";
	sBase += "2,1,2,2,1,2,1,1,2,1,2,1,";
	sBase += "2,1,2,2,1,2,1,2,1,2,1,2,";
	sBase += "1,5,2,1,2,2,1,2,1,2,1,2,";
	//1891
	sBase += "1,2,1,2,1,2,1,2,2,1,2,2,";
	sBase += "1,1,2,1,1,5,2,2,1,2,2,2,";
	sBase += "1,1,2,1,1,2,1,2,1,2,2,2,";
	sBase += "1,2,1,2,1,1,2,1,2,1,2,2,";
	sBase += "2,1,2,1,5,1,2,1,2,1,2,1,";
	sBase += "2,2,2,1,2,1,1,2,1,2,1,2,";
	sBase += "1,2,2,1,2,1,2,1,2,1,2,1,";
	sBase += "2,1,5,2,2,1,2,1,2,1,2,1,";
	sBase += "2,1,2,1,2,1,2,2,1,2,1,2,";
	sBase += "1,2,1,1,2,1,2,5,2,2,1,2,";
	//1901
	sBase += "1,2,1,1,2,1,2,1,2,2,2,1,";
	sBase += "2,1,2,1,1,2,1,2,1,2,2,2,";
	sBase += "1,2,1,2,3,2,1,1,2,2,1,2,";
	sBase += "2,2,1,2,1,1,2,1,1,2,2,1,";
	sBase += "2,2,1,2,2,1,1,2,1,2,1,2,";
	sBase += "1,2,2,4,1,2,1,2,1,2,1,2,";
	sBase += "1,2,1,2,1,2,2,1,2,1,2,1,";
	sBase += "2,1,1,2,2,1,2,1,2,2,1,2,";
	sBase += "1,5,1,2,1,2,1,2,2,2,1,2,";
	sBase += "1,2,1,1,2,1,2,1,2,2,2,1,";
	//1911
	sBase += "2,1,2,1,1,5,1,2,2,1,2,2,";
	sBase += "2,1,2,1,1,2,1,1,2,2,1,2,";
	sBase += "2,2,1,2,1,1,2,1,1,2,1,2,";
	sBase += "2,2,1,2,5,1,2,1,2,1,1,2,";
	sBase += "2,1,2,2,1,2,1,2,1,2,1,2,";
	sBase += "1,2,1,2,1,2,2,1,2,1,2,1,";
	sBase += "2,3,2,1,2,2,1,2,2,1,2,1,";
	sBase += "2,1,1,2,1,2,1,2,2,2,1,2,";
	sBase += "1,2,1,1,2,1,5,2,2,1,2,2,";
	sBase += "1,2,1,1,2,1,1,2,2,1,2,2,";
	//1921
	sBase += "2,1,2,1,1,2,1,1,2,1,2,2,";
	sBase += "2,1,2,2,3,2,1,1,2,1,2,2,";
	sBase += "1,2,2,1,2,1,2,1,2,1,1,2,";
	sBase += "2,1,2,1,2,2,1,2,1,2,1,1,";
	sBase += "2,1,2,5,2,1,2,2,1,2,1,2,";
	sBase += "1,1,2,1,2,1,2,2,1,2,2,1,";
	sBase += "2,1,1,2,1,2,1,2,2,1,2,2,";
	sBase += "1,5,1,2,1,1,2,2,1,2,2,2,";
	sBase += "1,2,1,1,2,1,1,2,1,2,2,2,";
	sBase += "1,2,2,1,1,5,1,2,1,2,2,1,";
	//1931
	sBase += "2,2,2,1,1,2,1,1,2,1,2,1,";
	sBase += "2,2,2,1,2,1,2,1,1,2,1,2,";
	sBase += "1,2,2,1,6,1,2,1,2,1,1,2,";
	sBase += "1,2,1,2,2,1,2,2,1,2,1,2,";
	sBase += "1,1,2,1,2,1,2,2,1,2,2,1,";
	sBase += "2,1,4,1,2,1,2,1,2,2,2,1,";
	sBase += "2,1,1,2,1,1,2,1,2,2,2,1,";
	sBase += "2,2,1,1,2,1,4,1,2,2,1,2,";
	sBase += "2,2,1,1,2,1,1,2,1,2,1,2,";
	sBase += "2,2,1,2,1,2,1,1,2,1,2,1,";
	//1941
	sBase += "2,2,1,2,2,4,1,1,2,1,2,1,";
	sBase += "2,1,2,2,1,2,2,1,2,1,1,2,";
	sBase += "1,2,1,2,1,2,2,1,2,2,1,2,";
	sBase += "1,1,2,4,1,2,1,2,2,1,2,2,";
	sBase += "1,1,2,1,1,2,1,2,2,2,1,2,";
	sBase += "2,1,1,2,1,1,2,1,2,2,1,2,";
	sBase += "2,5,1,2,1,1,2,1,2,1,2,2,";
	sBase += "2,1,2,1,2,1,1,2,1,2,1,2,";
	sBase += "2,2,1,2,1,2,3,2,1,2,1,2,";
	sBase += "2,1,2,2,1,2,1,1,2,1,2,1,";
	//1951
	sBase += "2,1,2,2,1,2,1,2,1,2,1,2,";
	sBase += "1,2,1,2,4,2,1,2,1,2,1,2,";
	sBase += "1,2,1,1,2,2,1,2,2,1,2,2,";
	sBase += "1,1,2,1,1,2,1,2,2,1,2,2,";
	sBase += "2,1,4,1,1,2,1,2,1,2,2,2,";
	sBase += "1,2,1,2,1,1,2,1,2,1,2,2,";
	sBase += "2,1,2,1,2,1,1,5,2,1,2,2,";
	sBase += "1,2,2,1,2,1,1,2,1,2,1,2,";
	sBase += "1,2,2,1,2,1,2,1,2,1,2,1,";
	sBase += "2,1,2,1,2,5,2,1,2,1,2,1,";
	//1961
	sBase += "2,1,2,1,2,1,2,2,1,2,1,2,";
	sBase += "1,2,1,1,2,1,2,2,1,2,2,1,";
	sBase += "2,1,2,3,2,1,2,1,2,2,2,1,";
	sBase += "2,1,2,1,1,2,1,2,1,2,2,2,";
	sBase += "1,2,1,2,1,1,2,1,1,2,2,1,";
	sBase += "2,2,5,2,1,1,2,1,1,2,2,1,";
	sBase += "2,2,1,2,2,1,1,2,1,2,1,2,";
	sBase += "1,2,2,1,2,1,5,2,1,2,1,2,";
	sBase += "1,2,1,2,1,2,2,1,2,1,2,1,";
	sBase += "2,1,1,2,2,1,2,1,2,2,1,2,";
	//1971
	sBase += "1,2,1,1,5,2,1,2,2,2,1,2,";
	sBase += "1,2,1,1,2,1,2,1,2,2,2,1,";
	sBase += "2,1,2,1,1,2,1,1,2,2,2,1,";
	sBase += "2,2,1,5,1,2,1,1,2,2,1,2,";
	sBase += "2,2,1,2,1,1,2,1,1,2,1,2,";
	sBase += "2,2,1,2,1,2,1,5,2,1,1,2,";
	sBase += "2,1,2,2,1,2,1,2,1,2,1,1,";
	sBase += "2,2,1,2,1,2,2,1,2,1,2,1,";
	sBase += "2,1,1,2,1,6,1,2,2,1,2,1,";
	sBase += "2,1,1,2,1,2,1,2,2,1,2,2,";
	//1981
	sBase += "1,2,1,1,2,1,1,2,2,1,2,2,";
	sBase += "2,1,2,3,2,1,1,2,2,1,2,2,";
	sBase += "2,1,2,1,1,2,1,1,2,1,2,2,";
	sBase += "2,1,2,2,1,1,2,1,1,5,2,2,";
	sBase += "1,2,2,1,2,1,2,1,1,2,1,2,";
	sBase += "1,2,2,1,2,2,1,2,1,2,1,1,";
	sBase += "2,1,2,2,1,5,2,2,1,2,1,2,";
	sBase += "1,1,2,1,2,1,2,2,1,2,2,1,";
	sBase += "2,1,1,2,1,2,1,2,2,1,2,2,";
	sBase += "1,2,1,1,5,1,2,1,2,2,2,2,";
	//1991
	sBase += "1,2,1,1,2,1,1,2,1,2,2,2,";
	sBase += "1,2,2,1,1,2,1,1,2,1,2,2,";
	sBase += "1,2,5,2,1,2,1,1,2,1,2,1,";
	sBase += "2,2,2,1,2,1,2,1,1,2,1,2,";
	sBase += "1,2,2,1,2,2,1,5,2,1,1,2,";
	sBase += "1,2,1,2,2,1,2,1,2,2,1,2,";
	sBase += "1,1,2,1,2,1,2,2,1,2,2,1,";
	sBase += "2,1,1,2,3,2,2,1,2,2,2,1,";
	sBase += "2,1,1,2,1,1,2,1,2,2,2,1,";
	sBase += "2,2,1,1,2,1,1,2,1,2,2,1,";
	//2001
	sBase += "2,2,2,3,2,1,1,2,1,2,1,2,";
	sBase += "2,2,1,2,1,2,1,1,2,1,2,1,";
	sBase += "2,2,1,2,2,1,2,1,1,2,1,2,";
	sBase += "1,5,2,2,1,2,1,2,2,1,1,2,";
	sBase += "1,2,1,2,1,2,2,1,2,2,1,2,";
	sBase += "1,1,2,1,2,1,5,2,2,1,2,2,";
	sBase += "1,1,2,1,1,2,1,2,2,2,1,2,";
	sBase += "2,1,1,2,1,1,2,1,2,2,1,2,";
	sBase += "2,2,1,1,5,1,2,1,2,1,2,2,";
	sBase += "2,1,2,1,2,1,1,2,1,2,1,2,";
	//2011
	sBase += "2,1,2,2,1,2,1,1,2,1,2,1,";
	sBase += "2,1,6,2,1,2,1,1,2,1,2,1,";
	sBase += "2,1,2,2,1,2,1,2,1,2,1,2,";
	sBase += "1,2,1,2,1,2,1,2,5,2,1,2,";
	sBase += "1,2,1,1,2,1,2,2,2,1,2,2,";
	sBase += "1,1,2,1,1,2,1,2,2,1,2,2,";
	sBase += "2,1,1,2,3,2,1,2,1,2,2,2,";
	sBase += "1,2,1,2,1,1,2,1,2,1,2,2,";
	sBase += "2,1,2,1,2,1,1,2,1,2,1,2,";
	sBase += "2,1,2,5,2,1,1,2,1,2,1,2,";
	//2021
	sBase += "1,2,2,1,2,1,2,1,2,1,2,1,";
	sBase += "2,1,2,1,2,2,1,2,1,2,1,2,";
	sBase += "1,5,2,1,2,1,2,2,1,2,1,2,";
	sBase += "1,2,1,1,2,1,2,2,1,2,2,1,";
	sBase += "2,1,2,1,1,5,2,1,2,2,2,1,";
	sBase += "2,1,2,1,1,2,1,2,1,2,2,2,";
	sBase += "1,2,1,2,1,1,2,1,1,2,2,2,";
	sBase += "1,2,2,1,5,1,2,1,1,2,2,1,";
	sBase += "2,2,1,2,2,1,1,2,1,1,2,2,";
	sBase += "1,2,1,2,2,1,2,1,2,1,2,1,";
	//2031
	sBase += "2,1,5,2,1,2,2,1,2,1,2,1,";
	sBase += "2,1,1,2,1,2,2,1,2,2,1,2,";
	sBase += "1,2,1,1,2,1,5,2,2,2,1,2,";
	sBase += "1,2,1,1,2,1,2,1,2,2,2,1,";
	sBase += "2,1,2,1,1,2,1,1,2,2,1,2,";
	sBase += "2,2,1,2,1,4,1,1,2,1,2,2,";
	sBase += "2,2,1,2,1,1,2,1,1,2,1,2,";
	sBase += "2,2,1,2,1,2,1,2,1,1,2,1,";
	sBase += "2,2,1,2,5,2,1,2,1,2,1,1,";
	sBase += "2,1,2,2,1,2,2,1,2,1,2,1,";
	//2041
	sBase += "2,1,1,2,1,2,2,1,2,2,1,2,";
	sBase += "1,5,1,2,1,2,1,2,2,2,1,2,";
	sBase += "1,2,1,1,2,1,1,2,2,1,2,2";
	
	var arrBase = [];
	arrBase = sBase.split(",");
	
	return arrBase;
};

/**
 * @desc 문자를 날짜로 변환. <br>
 * @param {String} strDate - String Date Format
 * @return {Date} date
 */
pForm.gfn_strToDate = function(inDate)
{
  var date =  new Date(parseInt(inDate.substr(0,4)),parseInt(inDate.substr(4,2))-1,parseInt(inDate.substr(6,2)));
  return date;
};

/**
 * @desc Date Type을 String으로 변환 <br>
 * @param {Date} date
 * @return {String} 'yyyyMMdd' 형태로 표현된 날짜
 */
pForm.gfn_dateToStr = function(date)
{
	var strYear = date.getYear().toString();
	var strMonth = (date.getMonth()+1).toString();
	var strDate = date.getDate().toString();
	
	if(strYear.length==2)
		strYear = '19'+strYear;
	else if(strYear.length==1)
		strYear = '190'+strYear;
		
	if(strMonth.length==1)
		strMonth = '0'+strMonth;
	if(strDate.length==1)
		strDate = '0'+strDate;
	
	return strYear+strMonth+strDate;
};

/**
 * @desc 년월일(yyyyMMdd)을 입력하면 해당 주차를 리턴한다. <br>
 * @param {String} strDate - 8자리 년월일(yyyyMMdd)
 * @return {String} 6자리 년도주차(yyyyWW)
 */
pForm.gfn_getWeek = function(strDate) 
{
	if (strDate.length != 8 || !this.gfn_isDigit(strDate)) {
		return "";
	}
	
	var year  = parseInt(strDate.substr(0,4));
	var month = parseInt(strDate.substr(4,2));
	var day   = parseInt(strDate.substr(6,8));

	var startAt = 1; ///////////// 일요일 표시 부분 / 0 : 일요일(일월화...) / 1 : 월요일(...금토일)

	if(startAt == 0) {
		day = day + 1;
	}

	var a    = Math.floor((14-month) / 12);
	var y    = year + 4800 - a;
	var m    = month + (12 * a) - 3;
	var b    = Math.floor(y/4) - Math.floor(y/100) + Math.floor(y/400);
	var J    = day + Math.floor(((153 * m) + 2) / 5) + (365 * y) + b - 32045;
	var d4   = (((J + 31741 - (J % 7)) % 146097) % 36524) % 1461;
	var L    = Math.floor(d4 / 1460);
	var d1   = ((d4 - L) % 365) + L;
	var week = Math.floor(d1/7) + 1;
		week = week.toString();
	return year+week.padLeft(2,"0");			
};

/**
 * @desc 주민등록번호로 생년월일을 구한다. <br>
 * @param {String} ssn - 주민등록번호/외국인등록번호 13자리중 최소 7자 입력
 * @return {String} 8자리 날짜(YYYYMMMDD)문자열
 */
pForm.gfn_getBirthDateBySSN = function(ssn)
{
	var retVal;

	ssn = ssn.replace("-", ""); //하이픈제거
	
	if (isNumber(ssn) || ssn.length < 6) {
		return retVal;
	}

	var yymmdd = ssn.substr(0, 6);
	var century;
	if (ssn.length > 6) {
		var genderFlag = Number(ssn.substr(6, 1));
		
		switch(genderFlag) {
			case 1:
			case 2:
			case 5:
			case 6:
				century = "19";
				break;
			case 3:
			case 4:
			case 7:
			case 8:
				century = "20";
				break;
			case 9:
			case 0:
				century = "18";
				break;
		}
	} else {
		var sTemp = this.gfn_getDate();
		if (sTemp.substr(2, 6) <= yymmdd) {
			century = "19";
		} else {
			century = "20";
		}
	}

	retVal = century + yymmdd;
	
	if (!this.gfn_isDate(retVal)) {
		retVal = null;
	}
	
	return retVal;	
};

/**
 * @desc 주민번호 뒷 첫번째 자리로 년대를 return 한다. <br>
 * @param {String} sJuminNo	생년 월일 또는 주민 번호
 * @return {String} 주민번호 뒷 첫번째 자리로 년대를 return 한다.
 */
pForm.gfn_getBirthYear = function(sJuminNo)
{
	if (sJuminNo.toString().length != 13){
		return "N";
	}
	
	if (!(sJuminNo).match(/^\d{6}\d{7}$/)){
		return "N";
	}

	var vGb = sJuminNo.substr(6,1);

	if (vGb == '1' || vGb == '2' || vGb == '5' || vGb == '6') {
		return '19';
	} else if (vGb == '3' || vGb == '4' || vGb == '7' || vGb == '8') {
		return '20';
	}
};

/**
 * @desc 기준년월일 기준으로 만나이를 구한다. <br>
 * @param {String} brtYmd - 생년월일
 * @param {String} stdYmd - 기준일자[생략시 현재일자]
 * @return {Number} 숫자형 나이
 */
pForm.gfn_getAge = function(brtYmd, stdYmd)
{
	var retVal = -1;
	
	if (this.gfn_isEmpty(stdYmd)) {
		stdYmd = gfn_getDate();
	}

	if (this.gfn_isDate(brtYmd) && this.gfn_isDate(stdYmd)) {
		var yDiff 	= Number(stdYmd.substr(0, 4)) - Number(brtYmd.substr(0, 4));
		var mdDiff	= Number(stdYmd.substr(4, 4)) - Number(brtYmd.substr(4, 4));
		   
		retVal = yDiff;
		if( mdDiff < 0 ) {	//before
			retVal = retVal - 1;
		}
	}

	return retVal;	
};

/**
 * @desc nexacro 객체의 type 반환
 * @param {*} obj Object, Component, Frame, .. 등 nexacro platform 모든 개체.
 * @return {string} 객체 type.
 */
pForm.gfn_getObjType = function(obj)
{
	var type;
	if ( obj && (typeof obj == "object"))
	{
		var s = obj.toString();
		if(s == "[object Object]") return type;
		
		type = s.substr(8, s.length-9);
	}
	return type;
}
	

/**
 * @desc 조회영역 엔터키 이벤트 핸들러
 * @param {div obj} 엔터키 이벤트 적용할 div form object
 * @return N/A
 */
pForm.gfn_divSearchEnterKeyEvent = function(obj)
{	
	for(var i=0; i<obj.components.length; i++)
	{
 		var prop = this.gfn_getObjType(obj.components[i]);	
 		{
 			if( prop == "Combo" 	||
 				prop == "Edit" 		||
 				prop == "MaskEdit" 	||
 				prop == "Radio" 	||
 				prop == "CheckBox" 	||
 				prop == "ListBox" 	||
 				prop == "Spin" 		||
 				prop == "Calendar")	
 			{
 				obj.components[i].addEventHandler('onkeyup', this.gfn_divSearchOnkeyup, this);
 			}	
 		}
	}
}

/**
 * @desc 엔터키 이벤트시 공통조회함수 호출
 * @param {div obj} 엔터키 이벤트 적용할 div form object, event
 * @return N/A
 */
pForm.gfn_divSearchOnkeyup = function(obj, e)
{
 	if(e.keycode == 13)
 	{		
		this.lookupFunc("cfn_search").call();
 	}
}

/**
 * @desc 로그인 사용자 정보 조회 
 * @param {String} GDS_UserInfo columnId
 * @return N/A
 */
pForm.gfn_getGdsUserInfo = function(sColumnId)
{
 	//GDS_USER
	if(this.gfn_isNull(sColumnId)) 
	{
		trace("ColumnId 누락");
		return
	}
	
	var oApp = nexacro.getApplication();
	var colData = oApp.gds_UserInfo.getColumn(oApp.gds_UserInfo.rowposition,sColumnId);
	return colData;
}

/**
 * 문자열을 지정된 길이만큼 좌측부터 채우는 함수
 * @param {String} sOrg        원본 문자열
 * @param {Number} nCnt        출력될 문자열의 길이(default=1)
 * @param {String} sPad        왼쪽에 채울 문자(default=" ")
 * @return {String} 결과값
 * @example gfn_lpad(sOrg, " ", 2)
 */
pForm.gfn_lpad = function (sOrg, nCnt, sPad)
{
	if (typeof (sOrg) !== "string")
	{
		sOrg = String(sOrg).valueOf();
	}

	var i,sRet = "";

	if ( this.gfn_isNull(sOrg) )
	{
		return "";
	}
	if ( this.gfn_isNull(sPad) )
	{
		sPad = " ";
	}
	if ( this.gfn_isNull(nCnt) )
	{
		nCnt = sOrg.length;
	}

	for (i = 0; i < nCnt - sOrg.length; i++)
	{
		sRet += sPad;
	}
	sRet += sOrg;

	return sRet;
}

/**
 * 문자열을 지정된 길이만큼 우측부터 채우는 함수
 * @param {String} sOrg        원본 문자열
 * @param {Number} nCnt        출력될 문자열의 길이
 * @param {String} sPad        오른쪽에 채울 문자
 * @return {String} 결과값
 * @example gfn_rpad("2", "0", 2)
 */
pForm.gfn_rpad = function (sOrg, nCnt, sPad)
{
	if (typeof (sOrg) !== "string")
	{
		sOrg = String(sOrg).valueOf();
	}

	var i,sRet = "";

	if ( this.gfn_isNull(sOrg) && this.gfn_isNull(sPad) )
	{
		return "";
	}
	if ( this.gfn_isNull(sPad) )
	{
		sPad = " ";
	}
	if ( this.gfn_isNull(nCnt) )
	{
		nCnt = sOrg.length;
	}

	sRet += sOrg;

	for (i = 0; i < ( nCnt - sOrg.length ); i++)
	{
		sRet += sPad;
	}

	return sRet;
}

/**
 * @desc  container component에서 문자열로 된 경로에 해당하는 nexacro component 객체를 얻는다.
 * @param  {XComp}  p  container component.
 * @param  {String} pathName 경로 문자열(ex: form.div_search.form.cbo_SysSecd).
 * @return {XComp}  obj nexacro component.
 * @example this.gfn_getCompByPathName("form.div_search.form.cbo_SysSecd", this);
 */
pForm.gfn_getCompByPathName = function (p, pathName)
{
	var comps = [],
		i, len, 
		comp;
		
	comps = pathName.split(".");
	
	for (i = 0, len = comps.length; i < len ; i++ )
	{
		comp = comps[i];
		p = p[comp];
		if (!p) break;
	}
	
	return p;
}

/**
 * @desc   날짜 포멧을 양식에 맞게 변경한다.
 * @param  {String} sDate : 날짜문자열(yyyymmdd)
 * @param  {String} sChar : 구분자("-", "/")
 * @return {String} sDate : yyyy-mm-dd || yyyy/mm/dd
 * @example 
 * this.gfn_GetDateFormat("20200804","-");
 */
pForm.gfn_getDateFormat = function (sDate, sChar)
{
    try {
		if ( !this.gfn_isNull(sDate) ) {
			sDate = sDate + "";
			sDate = sDate.substr(0, 4) + sChar + sDate.substr(4, 2) + sChar + sDate.substr(6, 2);
		} else {
			sDate = "";
		}
        return sDate;
	} catch(err) {
		return "";
		//trace(err.message);
    }
}


/**
 * @desc   시간 포멧을 양식에 맞게 변경한다.
 * @param  {String} strTime  : 시간문자열(hhmmss)
 * @param  {String} sChar    : 구분자(":", " ")
 * @return {String} strTime  : hh:mm:ss || hh mm ss
 * @example 
 * this.gfn_getTimeFormat("235959",":");
 */
pForm.gfn_getTimeFormat = function (strTime, sChar)
{
    try {
        if ( !this.gfn_isNull(strTime) ) {
			strTime = strTime + "";
			strTime = strTime.substr(0, 2) + sChar + strTime.substr(2, 2) + sChar + strTime.substr(4, 2);
		} else {
			strTime = "";
		}
        return strTime;
	} catch(err) {
		return "";
    }
}

/**
 * 설명 		: 상위메뉴를 배열에 담는다.
 * 파라미터	: objGrd : 이동시킬그리드,  nRow : 부모인덱스를 찾을 메뉴의 인덱스, arry: 부모인덱스가 담겨져있는 배열
 * 사용예  	: fn_parentRow(objGrd,nRow,arry)
 */
pForm.gfn_parentRow = function (objGrd, nRow, arry)
{
	// 상위메뉴의 인덱스를 찾는다.
	var nParentIdx = objGrd.getTreeParentRow(nRow);
	if (nParentIdx > -1) 
	{
		// parent row 가 존재할 경우
		arry.push(nParentIdx);
		// 상위메뉴가 존재하지 않을때 까지 반복 수행.
		this.gfn_parentRow(objGrd, nParentIdx, arry);
	}
};

/** 
 * 설명 		: 입력한 메뉴ID에 해당하는 행으로 포커스 이동
 * 파라미터	: objGrd : 포커스를 줄 그리드, objDs : 참조할 데이터셋, strColumnValue : 메뉴ID
 * 사용예  	: btn_Search_onclick(Button, ClickEventInfo)
 */
pForm.gfn_FocusOnSearching = function (objGrd, strColumn, strColumnValue)
{
	var objDs = objGrd.getBindDataset();
	objDs.set_updatecontrol(false);
	objDs.set_enableevent(false);
	var nRow = 0;
	var nRowIndex = 0;
	var arry = [];
	var cellIdx = 0;

	if (this.gfn_isNull(strColumn) || this.gfn_isNull(strColumnValue)) 
	{
		return false;
	}
	
	// 입력된 strColumn, strColumnValue에 해당하는 nRow를 찾는다.
	//nRow = objDs.findRow(strColumn, strColumnValue);	
	nRow = objDs.findRowExpr(strColumn+".indexOf('"+strColumnValue+"') != -1");	
	
	// 상위메뉴의 인덱스를 찾아 배열에 저장한다.
	this.gfn_parentRow(objGrd, nRow, arry);
	// 최상위부터 해당Row의 TreeStatus를 Expand로 설정한다.
	
	for (var i = arry.length - 1; i > -1; i--) 
	{
		nRowIndex = objGrd.getTreeRow(arry[i]);
		objGrd.setTreeStatus(nRowIndex,true);
		objDs.setColumn(arry[i], "TREE_STATE", 1);
	}
	// 포커스를 준다.
	cellIdx = objGrd.getBindCellIndex("body", strColumn);
	objDs.set_rowposition(nRow);
	objGrd.setFocus();
	objGrd.setCellPos(cellIdx);
	objGrd.showEditor(true);
	objDs.set_updatecontrol(true);
	objDs.set_enableevent(true);
};


/**
 * @desc 입력된 KeyCode값이 Edit Box에 영향을 주는 Key인지 체크 한다. 영향을 주는 Key일 경우 True 아닌 경우 false를 돌려준다. <br>
 * @param {String} sValue 
 * @return {Boolean} true/false
 * @example
 * var bNull = gfn_insKeyChk(e.keycode); // true
 */
pForm.gfn_insKeyChk = function(sValue)
{
	var rtnValue = true;
	/* 입력 값을 변화시키지 않는 키값 해당 값에 포함되는  경우 false
	 * 12 = NUMLK  끄고 5 , 16 = SHIFT, 17 = CTRL, 18 = ALT, 19 = PAUSE, 20 = CAPS LK, 25 = 우측 CTRL
	 * 27 = ESC, 33 = PAGE UP, 34 = PAGE DOWN, 35 = END, 36 = HOME, 37 = 왼쪽, 38 = 위쪽, 39 = 오른쪽, 40 = 아래쪽
	 * 45 = INS, 91 = 윈도우키, 93 = 특수키, 112 = F1, 113 = F2, 114 = F3, 115 = F4, 116 = F5, 117 = F6, 118 = F7
	 * 119 = F8, 120 = F9, 121 = F10, 122 = F11, 123 = F12, 144 = NUM LK, 145 = SCR LK, 229 = 한영키
	*/
	var arrkeyValue = new Array(12,16,17,18,19,20,25,27,33,34,35,36,37,38,39,40,45,91,93,112,113,114,115,116,117,118,119,120,121,122,123,144,145,229);
	for(var i = 0;i < arrkeyValue.length; i++){
		if(arrkeyValue[i] == sValue){
			rtnValue = false;
		}
	}
};


/**
 * 설명 		: 상위메뉴를 배열에 담는다.
 * 파라미터	: objGrd : 이동시킬그리드,  nRow : 부모인덱스를 찾을 메뉴의 인덱스, arry: 부모인덱스가 담겨져있는 배열
 * 사용예  	: fn_parentRow(objGrd,nRow,arry)
 */
pForm.gfn_parentRow = function (objGrd, nRow, arry)
{
	// 상위메뉴의 인덱스를 찾는다.
	var nParentIdx = objGrd.getTreeParentRow(nRow);
	if (nParentIdx > -1) 
	{
		// parent row 가 존재할 경우
		arry.push(nParentIdx);
		// 상위메뉴가 존재하지 않을때 까지 반복 수행.
		this.gfn_parentRow(objGrd, nParentIdx, arry);
	}
};	


/**
 * 설명 		: 문자 색상 빨간색으로 변경
 * 파라미터	: 문자
 * 사용예  	: gfn_setRed(data)
 */
pForm.gfn_setRed = function(data)
{
	var color = '<fc v=' + "'red'>" + data + '</fc>';
	
	return color;
};


/**
 * 입력값의 영문을 대문자 처리
 * @param {String} sVal - 문자열
 * @return {String} 영문 대문자 처리 문자열
 */
pForm.gfn_toUpper = function(sVal)
{
	if(this.gfn_isNull(sVal)) return "";
	return String(sVal).toUpperCase();
};

/**
 * 입력값의 영문을 소문자 처리
 * @param {String} sVal - 문자열
 * @return {String} 영문 소문자 처리 문자열
 */
pForm.gfn_toLower = function(sVal)
{
	if(this.gfn_isNull(sVal)) return "";
	return String(sVal).toLowerCase();
};


/**
 * 입력된 문자를 Sha256방식으로 암호화. <br>
 * @param {String} sValue - 암호화 할 값
 * @return {String} 암호화된 값
 */
pForm.gfn_getEncryptText = function(sValue) 
{
	if(this.gfn_isNull(sValue)) return "";
	
	var objEnc = new jsSHA("SHA-256", "TEXT");
	objEnc.update(sValue);
	var sEnc = objEnc.getHash("HEX");
	
	return sEnc;
};
/**
 * @desc dataset의 Row 중에서 변경된 내용이 있는지 여부를 판단하는 함수
 * @param {object} objDs - dataset 
 * @return {boolean} 변경된 데이타가 있을 때(true), 없을 때(false)
 */  
pForm.gfn_dsIsDelete = function (objDs)
{

	for(var i=objDs.rowcount-1; i>=0; i--)
	{
		var chk =objDs.getColumn(i, "_CHK") ;
		if ( "1" == chk  )
		{
			return true;
		}
	}
	
	
	this.gfn_alert("msg.save.nodelete");		// 삭제할 데이터가 없습니다.
	return false;
};

/**
 * @class 년월일(yyyyMMdd)을 입력하면 해당 주차를 리턴한다. <br>
 * @param {String} strDate - 8자리 년월일(yyyyMMdd)
 * @return {String} 해당주 일요일(yyyyMMdd)
 */
pForm.gfn_getWeekSunDay = function(strDate)
{
	var nDay = this.gfn_getDay(strDate);
	return this.gfn_addDate(strDate, (nDay * -1));
};
/**
 * @class 년월일(yyyyMMdd)을 입력하면 해당 주차를 리턴한다. <br>
 * @param {String} strDate - 8자리 년월일(yyyyMMdd)
 * @return {String} 해당주 토요일(yyyyMMdd)
 */
pForm.gfn_getWeekSatDay = function(strDate)
{	
	var nDay = this.gfn_getDay(strDate);
	return this.gfn_addDate(strDate, (6 - nDay));
};
/**
 * @desc dataset의 Row 중에서 변경된 내용이 있는지 여부를 판단하는 함수
 * @param {object} objDs - dataset 
 * @return {boolean} 변경된 데이타가 있을 때(true), 없을 때(false)
 */  
pForm.gfn_dsIsUpdated = function (objDs)
{
	
	if (objDs.getDeletedRowCount() > 0) 
	{
		return true;
	}
	
	//수정-4, 추가-2 정보가 있으면 true
	if (objDs.findRowExpr("(dataset.getRowType(rowidx)==4)||(dataset.getRowType(rowidx)==2)") >= 0) 
	{
		return true;
	}
	return false;
};


/**
 * @desc 텍스트 폰트계산한 문자의 가로 길이 조회
 * @param {String} text - 길이측정 문자열, {String} font 폰트
 * @return {Number} 텍스트 길이
 * @example
 * var size = this.gfn_textSize("문자열길이", "12px/18px 'Malgun Gothic'");	// 60
 */
pForm.gfn_textSize = function(text, font)
{
	if(this.gfn_isNull(text) || this.gfn_isNull(font)) return 0;
	
	var textSize = nexacro.getTextSize(text, font);
	
    return textSize.nx;
};
/**
 * @desc 텍스트 최대길이를 넘으면 ...으로 뒷부분 줄임
 * @param {String} text - 사이즈변경 문자열, {String} font 폰트, {Number} 최대길이
 * @return {String} 변경후 텍스트
 * @example
 * var size = this.gfn_textReSize("문자열길이", "12px/18px 'Malgun Gothic'", 50);	// 문자열...
 */
pForm.gfn_textReSize = function(text, font, size)
{
	if(this.gfn_isNull(text) || this.gfn_isNull(font) || this.gfn_isNull(size)) return text;
	var textSize = nexacro.getTextSize(text, font);
	var reSizeText = text;
	if(textSize.nx > size)
	{
		var textLeng = this.gfn_length(text);
		for(var i = 0; i < textLeng; i++)
		{
			reSizeText = this.gfn_left(text, textLeng - i) + "...";
			var textReSize = nexacro.getTextSize(reSizeText, font);
			if(textReSize.nx < size)
			{
				i = textLeng;
			}
		}
	}
    return reSizeText;
};
/**
 * @desc Calendar 휴일 여부
 * @param {Object} obj	- 대상켈린더, {String} strDate - 8자리 년월일(yyyyMMdd)
 * @return {Boolean} 휴일여부 true/false
 * @example
 * var bool = this.gfn_calendarHoliday(this.calendar, "20221120");	// 문자열...
 */
pForm.gfn_calendarHoliday = function(obj, strDate)
{
	if(this.gfn_isNull(obj) || this.gfn_isNull(strDate)) return false;
	
	var result = false;
	var innerDataset = obj.getInnerDataset();
	var nday = this.gfn_getDay(strDate);
	//휴일관리 데이터셋이 없으면 주말만 계산
	if(this.gfn_isNull(innerDataset))
	{
		//0 일요일, 6 토요일
		if(0 == nday || 6 == nday)	result = true;
		else result = false;
	}
	else
	{
		//등록된 휴일 조회
		if(innerDataset.findRow("date", strDate) != -1)	result = true;
		else result = false;
		if(!result)
		{
			//0 일요일, 6 토요일
			if(0 == nday || 6 == nday)	result = true;
			else result = false;
		}
	}
	return result;
};

/**
 * @desc Runtime 여부
 * @param 
 * @return {Boolean} Runtime여부 true/false
 * @example
 * var bool = this.gfn_isRuntime();
 */
pForm.gfn_isRuntime = function()
{
	var result = false;
	var navigatorFullName = system.navigatorfullname;	
	if ( navigatorFullName === "Nexacro N Engine (x86)" || navigatorFullName === "Nexacro N Engine (x64)" ) {		
		result = true;
	}
	return result;
};

/**
 * @desc crypto를 사용하여 UUID 생성
 * @param 
 * @return {string} UUID
 * @example
 * var uuid = this.gfn_getUUID();
 */
pForm.gfn_getUUID = function()
{
	return ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, c => (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16));
};