(function(){return function(_a){var _b;this.registerScript(_a,function(){this.gfn_validation=function(_c){var _d=this.m2n_lookupPath("ds_service").findRow("svcId",_c);if(_d<0){this.alert(_c+"은(는) 없는 svcId입니다.");return false;}var _e=this.m2n_lookupPath("ds_service").getColumn(_d,"validation");if(this.gfn_validationIsEmpty(_e)){return true;}this.m2n_destroy("tds_validation");this.m2n_create(this,"Dataset","tds_validation");var _f=this.m2n_split(_e,";");for(var _g=0;_g<_f.length;_g++ ){this.gfn_setValidationDataset(_f[_g]);}for(var _g=0;_g<this.m2n_lookupPath("tds_validation").getRowCount();_g++ ){if(!this.gfn_execValidation(_g)){return false;}}return true;};this.gfn_validationIsEmpty=function(_c){if(this.m2n_isNull(_c)==true||this.m2n_isNull(this.m2n_trim(_c))==true||this.m2n_length(this.m2n_trim(_c))==0){return true;}return false;};this.gfn_validationIsDigit=function(_c){if(this.gfn_validationIsEmpty(_c)){return false;}if(this.m2n_lengthb(_c)>1&&this.m2n_indexOf(_c,"-")==0){return nexacro.isNumeric(this.m2n_subString(this.m2n_trim(_c),1));}else{return nexacro.isNumeric(this.m2n_trim(_c));}};this.gfn_validationIsDate=function(_c){if(this.m2n_length(_c)<1){return false;}this.m2n_lookupPath("sYmd")=this.gfn_dateConvert(_c);if(nexacro.isNumeric(_c)==false){return false;}if(this.m2n_length(_c)!=8){return false;}var _d=nexacro.toNumber(this.m2n_subString(_c,0,4));var _e=nexacro.toNumber(this.m2n_subString(_c,4,2));var _f=nexacro.toNumber(this.m2n_subString(_c,6,2));if((_e<1)||(_e>12)){return false;}if(this.m2n_getDay(_c)<0){return false;}return true;};this.gfn_validationIsEmail=function(_c){return this.gfn_IsCheckEmail(_c);};this.gfn_validationIsSid=function(_c){if(this.gfn_CheckRegNo(_c,"JUMIN")){return true;}if(this.gfn_CheckRegNo(_c,"FORE")){return true;}return false;};this.gfn_setValidationDataset=function(_c){var _d=this.m2n_split2(_c,",",":");var _e=this.m2n_getObject("tds_validation");_e.addColumn("id");_e.addColumn("name");_e.addColumn("type");_e.addColumn("required");_e.addColumn("reqgrp");_e.addColumn("minl","Int");_e.addColumn("maxl","Int");_e.addColumn("min","Decimal");_e.addColumn("max","Decimal");_e.addColumn("cop");_e.addColumn("ctgt");_e.addColumn("value");var _f=_e.addRow();var _g="";for(var _i=0;_i<_d.length;_i++ ){var _h=_d[_i];if(_h[0]=="required"){_e.setColumn(_f,_h[0],"true");}else if(_h[0]=="minl"||_h[0]=="maxl"){_e.setColumn(_f,_h[0],parseInt(_h[1]));}else if(_h[0]=="min"||_h[0]=="max"){_e.setColumn(_f,_h[0],nexacro.toNumber(_h[1]));}else{if(_h[0]=="id"){_g=_h[1];}_e.setColumn(_f,_h[0],_h[1]);}}if(this.m2n_subString(_g,0,3)!="ds_"){_e.setColumn(_f,"value",this.m2n_trim(this.m2n_getObject(_g).value));}};this.gfn_execValidation=function(_c){var _d=this.m2n_getObject("tds_validation");var _e=_d.getColumn(_c,"id");var _f=this.gfn_getValidationInfo(_e,"name");var _g=this.gfn_getValidationInfo(_e,"type");var _h=this.gfn_getValidationInfo(_e,"required");var _i=this.gfn_getValidationInfo(_e,"reqgrp");var _j=this.gfn_getValidationInfo(_e,"minl");var _k=this.gfn_getValidationInfo(_e,"maxl");var _l=this.gfn_getValidationInfo(_e,"max");var _m=this.gfn_getValidationInfo(_e,"min");var _n=this.gfn_getValidationInfo(_e,"cop");var _o=this.gfn_getValidationInfo(_e,"ctgt");var _p="";var _q=1;var _r=null;var _s=null;if(this.m2n_subString(_e,0,3)=="ds_"){_r=this.m2n_split(_e,".");_s=this.m2n_getObject(_r[0]);_q=_s.getRowCount();}for(var _y=0;_y<_q;_y++ ){if(this.m2n_isNull(_s)!=true){if(this.m2n_getRowType(_s,null)!="Insert"&&this.m2n_getRowType(_s,null)!="Upadate"){continue;}}if(this.m2n_subString(_e,0,3)!="ds_"){_p=this.gfn_getValidationInfo(_e,"value");}else{_p=_s.getColumn(_y,_r[1]);}if(_h&&this.gfn_validationIsEmpty(_p)){this.gfn_valAlertAndFocus(_e,_f+"은(는) 필수입니다.");return false;}if(!_h&&!this.gfn_validationIsEmpty(_i)&&this.gfn_validationIsEmpty(_p)){if(!this.gfn_validationIsEmpty(_i)){var _t=_d.findRow("reqgrp",_i);var _u="";var _v=false;while(_t>-1){if(!this.gfn_validationIsEmpty(_u)){_u+=", ";}_u+=_d.getColumn(_t,"name");this.m2n_lookupPath("requiredGroupValue")=_d.getColumn(_t,"value");if(!this.gfn_validationIsEmpty(this.m2n_lookupPath("requiredGroupValue"))){_v=true;break;}_t=_d.findRow("reqgrp",_i,_t+1);}if(!_v){this.gfn_valAlertAndFocus(_e,_u+" 중 하나는 필수입니다.");return false;}}}if(!_h&&this.gfn_validationIsEmpty(_p)){return true;}if(this.m2n_isNull(_p)!=true){if(_g=="숫자"){if(!this.gfn_validationIsDigit(_p)){this.gfn_valAlertAndFocus(_e,_f+"이(가) 숫자가 아닙니다.");return false;}}else if(_g=="날짜"){if(!this.gfn_validationIsDate(_p)){this.gfn_valAlertAndFocus(_e,_f+"이(가) 날짜형식이 아닙니다.");return false;}}else if(_g=="통화"){if(!this.gfn_validationIsDigit(_p)){this.gfn_valAlertAndFocus(_e,_f+"이(가) 통화형식이 아닙니다.");return false;}}else if(_g=="이메일"){if(!this.gfn_validationIsEmail(_p)){this.gfn_valAlertAndFocus(_e,_f+"이(가) 이메일형식이 아닙니다.");return false;}}else if(_g=="주민번호"){if(!this.gfn_validationIsSid(_p)){this.gfn_valAlertAndFocus(_e,_f+"이(가) 주민번호형식이 아닙니다.");return false;}}else if(_g=="정수"){if(!this.gfn_validationIsDigit(_p)||this.m2n_indexOf(_p,".")>-1){this.gfn_valAlertAndFocus(_e,_f+"이(가) 정수가 아닙니다.");return false;}}else if(_g=="양수"){if(!this.gfn_validationIsDigit(_p)||nexacro.toNumber(_p)<0){this.gfn_valAlertAndFocus(_e,_f+"이(가) 양수가 아닙니다.");return false;}}else if(_g=="음수"){if(!this.gfn_validationIsDigit(_p)||nexacro.toNumber(_p)>0){this.gfn_valAlertAndFocus(_e,_f+"이(가) 음수가 아닙니다.");return false;}}if(this.m2n_isNull(_j)!=true&&_j>this.m2n_lengthb(_p)){this.gfn_valAlertAndFocus(_e,_f+"은(는) "+_j+"자 이상이어야 합니다.");return false;}if(this.m2n_isNull(_k)!=true&&_k<this.m2n_lengthb(_p)){this.gfn_valAlertAndFocus(_e,_f+"은(는) "+_k+"자 이하이어야 합니다.");return false;}if(this.m2n_isNull(_m)!=true&&_m>nexacro.toNumber(_p)){this.gfn_valAlertAndFocus(_e,_f+"은(는) "+_m+" 이상이어야 합니다.");return false;}if(this.m2n_isNull(_l)!=true&&_l<nexacro.toNumber(_p)){this.gfn_valAlertAndFocus(_e,_f+"은(는) "+_l+" 이하이어야 합니다.");return false;}if(this.m2n_isNull(_n)!=true&&this.m2n_isNull(_o)!=true){var _w=this.gfn_getValidationInfo(_o,"name");var _x=this.gfn_getValidationInfo(_o,"value");if(_n=="＜"){if(_p>=_x){this.gfn_valAlertAndFocus(_e,_f+"은(는) "+_w+"보다 작아야 합니다.");return false;}}else if(_n=="≤"){if(_p>_x){this.gfn_valAlertAndFocus(_e,_f+"은(는) "+_w+"보다 작거나 같아야 합니다.");return false;}}else if(_n=="＞"){if(_p<=_x){this.gfn_valAlertAndFocus(_e,_f+"은(는) "+_w+"보다 커야 합니다.");return false;}}else if(_n=="≥"){if(_p<_x){this.gfn_valAlertAndFocus(_e,_f+"은(는) "+_w+"보다 크거나 같아야 합니다.");return false;}}else if(_n=="＝"){if(_p!=_x){this.gfn_valAlertAndFocus(_e,_f+"이(가) "+_w+"와(과) 같지 않습니다.");return false;}}}}if(this.m2n_isNull(_s)!=true&&_y+1<_q){_p=_s.getColumn(_y+1,_r[1]);}}return true;};this.gfn_getValidationInfo=function(_c,_d){var _e=this.m2n_getObject("tds_validation");var _f=_e.findRow("id",_c);if(_d=="required"){if(_e.getColumn(_f,_d)=="true"){return true;}else{return false;}}else{return _e.getColumn(_f,_d);}};this.gfn_valAlertAndFocus=function(_c,_d){this.alert(_d);if(this.m2n_subString(_c,0,3)!="ds_"){this.m2n_getObject(_c).setFocus();}};});this.loadIncludeScript(_a);_b=null;};})();