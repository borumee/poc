(function(){return function(_a){var _b;this.registerScript(_a,function(){this.Dataset_SaveWithDelimeter=function(_c,_d,_e,_f){var _g,_h;var _i="";var _j;if(_d==true){for(_g=0;_g<_c.getColCount();_g++ ){if(_g==0){_i=_i+'"'+_c.getColID(_g)+'"';}else{_i=_i+_e+'"'+_c.getColID(_g)+'"';}}_i=_i+_f;}for(_g=0;_g<_c.getRowCount();_g++ ){for(_h=0;_h<_c.getColCount();_h++ ){_j=_c.getColumn(_g,_c.getColID(_h));if(_h==0){_j=this.m2n_replace(_j,"\"","\"\"");_i=_i+'"'+_j+'"';}else{_j=this.m2n_replace(_j,"\"","\"\"");_i=_i+_e+'"'+_j+'"';}}_i=_i+_f;}return _i;};this.Dataset_LoadWithDelimeter=function(_c,_d,_e,_f,_g){var _h,_i;var _j,_k,_l,_m;var _n;var _o;var _p;var _q=new Array(2);var _r=new Array(2);if(_e==true){_c.clear();}_j=0;_l=0;while(1){_q=this.m2n_lookupPath("Str_Token")(_d,_g,_j,'"');_h=_q[0];if("x"+_h=="x"){break;}_j=_q[1];_k=0;_m=0;while(1){_r=this.m2n_lookupPath("Str_Token")(_h,_f,_k,'"');_i=_r[0];if(_k>=this.m2n_length(_h)){break;}_k=_r[1];if(_i[0]=='"'){_i=this.m2n_subString(_i,1,this.m2n_length(_i)-2);_i=this.m2n_replace(_i,"\"\"","\"");}if(_e==true&&_l==0){_c.addColumn(_i,"STRING",255);}else{if(_m==0){_n=_c.addRow();}_c.setColumn(_n,_c.getColID(_m),_i);}_m++ ;}_l++ ;}_c.row=0;return 0;};this.Dataset_SaveXls=function(_c,_d){var _e=this.m2n_chr(9);var _f=this.m2n_chr(13)+this.m2n_chr(10);return this.Dataset_SaveWithDelimeter(_c,_d,_e,_f);};this.Dataset_LoadXls=function(_c,_d,_e){var _f=this.m2n_chr(9);var _g=this.m2n_chr(13)+this.m2n_chr(10);return this.Dataset_LoadWithDelimeter(_c,_d,_e,_f,_g);};this.Dataset_SaveCsv=function(_c,_d){var _e=",";var _f=this.m2n_chr(13)+this.m2n_chr(10);return this.Dataset_SaveWithDelimeter(_c,_d,_e,_f);};this.Dataset_LoadCsv=function(_c,_d,_e){var _f=",";var _g=this.m2n_chr(13)+this.m2n_chr(10);return this.Dataset_LoadWithDelimeter(_c,_d,_e,_f,_g);};this.Dataset_IsChanged=function(_c){var _d;for(_d=0;_d<_c.getRowCount();_d++ ){if(this.m2n_getRowType(_c,_d)!="normal"){return true;}}for(_d=0;_d<this.m2n_getORgBuffCount(_c);_d++ ){if(_c.GetOrgBuffType(_d)!="normal"){return true;}}return false;};this.Dataset_GetRowTypeCount=function(_c,_d){var _e;var _f;if(_d!="normal"&&_d!="update"&&_d!="delete"&&_d!="insert"){return -1;}_f=0;for(_e=0;_e<_c.getRowCount();_e++ ){if(this.m2n_getRowType(_c,_e)==_d){_f++ ;}}if(_d=="delete"){for(_e=0;_e<this.m2n_getORgBuffCount(_c);_e++ ){if(_c.GetOrgBuffType(_e)==_d){_f++ ;}}}return _f;};this.Dataset_ChkSelect=function(_c,_d,_e,_f){var _g;if(_d==true){_g=_c.findRow(_e,_f);if(_g>=0){if(_c.getSelect(_g)==true){return true;}}return false;}else{if(_c.getColumn(_c.row,_e)==_f){return true;}else{return false;}}};this.Csv2Ds=function(_c,_d){var _e,_f;var _g=new Array(-1);var _h=new Array(-1);_d.clearData();_g=this.m2n_split(_c,"\r\n");for(_e=0;_e<this.m2n_length(_g);_e++ ){_h=this.m2n_split(_g[_e],",");_d.addRow();for(_f=0;_f<this.m2n_length(_h);_f++ ){_d.setColumn(_e,_f,_h[_f]);}}_d.row=0;};this.ds_fn_IsExistColumn=function(_c,_d){var _e=false;for(var _f=0;_f<_c.getColCount();_f++ ){if(this.m2n_toUpper(_c.getColID(_f))==this.m2n_toUpper(_d)){_e=true;_f=_c.getColCount();}}return _e;};this.ds_fn_AppendRow=function(_c,_d,_e,_f){return this.ds_fn_SelectedRowCopy(_c,_d,_e,_f);};this.ds_fn_MoveRow=function(_c,_d,_e){_d=this.ds_fn_SelectedRowCopy(_c,_d,_e);_c=this.ds_fn_SelectedRowDelete(_c,_e);};this.ds_fn_CopyRow=function(_c,_d,_e){var _f;var _g;var _h;_d.clear();for(var _i=0;_i<_c.getColCount();_i++ ){_f=_c.getColID(_i);_g=this.m2n_getColType(_c,_f);_h=this.m2n_getColSize(_c,_f);_d.addColumn(_f,_g,_h);}return this.ds_fn_SelectedRowCopy(_c,_d,_e);};this.ds_fn_SelectedRowCopy=function(_c,_d,_e,_f){var _g;_d.set_enableevent(false);if(_c.findRow(_e,"1")<0){for(var _h=0;_h<_c.getRowCount();_h++ ){if(_c.getSelect(_h)==true){if(this.m2n_length(this.m2n_trim(_f))==0){_g=_d.addRow();_d.copyRow(_g,_c,_h);_d.setColumn(_g,_e,"0");}else{if(_d.findRow(_f,_c.getColumn(_h,_f))<0){_g=_d.addRow();_d.copyRow(_g,_c,_h);_d.setColumn(_g,_e,"0");}}}}}else{for(var _h=0;_h<_c.getRowCount();_h++ ){if(_c.getColumn(_h,_e)=="1"){if(this.m2n_length(this.m2n_trim(_f))==0){_g=_d.addRow();_d.copyRow(_g,_c,_h);_d.setColumn(_g,_e,"0");}else{if(_d.findRow(_f,_c.getColumn(_h,_f))<0){_g=_d.addRow();_d.copyRow(_g,_c,_h);_d.setColumn(_g,_e,"0");}}}}}_d.set_enableevent(true);return _d;};this.ds_fn_SelectedRowDelete=function(_c,_d){var _e;_c.set_enableevent(false);if(_c.findRow(_d,"1")<0){_c.DeleteSelected();}else{for(var _f=_c.findRow(_d,"1");_f>-1;_f=_c.findRow(_d,"1",_f)){_c.deleteRow(_f);}}_c.set_enableevent(true);return _c;};this.ds_fn_SetDataset=function(_c,_d,_e,_f){_c.clearData();var _g=this.m2n_split(_d,_e);for(var _i=0;_i<this.m2n_length(_g);_i++ ){_c.addRow();var _h=this.m2n_split(_g[_i],_f,"webstyle");for(var _j=0;_j<this.m2n_length(_h);_j++ ){_c.setColumn(_i,_c.getColID(_j),_h[_j]);}}};this.ds_fn_DistinctData=function(_c,_d){var _e=this.ds_fn_DistinctDataset(_c,_d);return _e.saveCSV();};this.DS_OBJ_DISTINCT_DATA="";this.ds_fn_DistinctDataset=function(_c,_d){if(!this.m2n_isValidObject(this.DS_OBJ_DISTINCT_DATA)){this.m2n_create(this,"Dataset","ds_DistinctData");this.DS_OBJ_DISTINCT_DATA=this.m2n_getObject("ds_DistinctData");}this.DS_OBJ_DISTINCT_DATA.set_enableevent(false);this.DS_OBJ_DISTINCT_DATA.clear();var _e=_c.getColCount();var _f;var _g;var _h;for(var _k=0;_k<_e;_k++ ){_f=_c.getColID(_k);_g=this.m2n_getColType(_c,_k);_h=this.m2n_getColSize(_c,_k);this.DS_OBJ_DISTINCT_DATA.addColumn(_f,_g,_h);}var _i;var _j=_c.getRowCount();for(var _k=0;_k<_j;_k++ ){if(this.DS_OBJ_DISTINCT_DATA.findRow(_d,_c.getColumn(_k,_d))<0){_i=this.DS_OBJ_DISTINCT_DATA.addRow();this.DS_OBJ_DISTINCT_DATA.copyRow(_i,_c,_k);}}this.DS_OBJ_DISTINCT_DATA.set_enableevent(true);return this.DS_OBJ_DISTINCT_DATA;};this.ds_fn_SetSingleCheck=function(_b,_c,_d,_e){_b.set_enableevent(false);for(var _f=0;_f<_b.getRowCount();_f++ ){if(_f!=_c&&_b.getColumn(_f,_d)==1){_b.setColumn(_f,_d,_b.getOrgColumn(_f,_d));}}_b.set_enableevent(true);};this.ds_fn_DSPrint=function(_c){var _d=_c.getColCount();var _e=_c.getRowCount();var _f;var _g="";var _h="UnKnown Dataset";_h=_c.id;trace(">>>>    Dataset ("+_h+") Tracing   ");trace(">>>> "+"Col Cnt:"+_d+" /  Row Cnt:"+_e);for(var _j=0;_j<_d;_j++ ){_g+="["+_c.getColID(_j)+"] ";}trace(">>>> COL ID : "+_g);var _i="";for(var _k=0;_k<_e;_k++ ){_i=this.m2n_getRowType(_c,_k)+"::";for(var _j=0;_j<_d;_j++ ){_i+=_c.getColID(_j)+"["+_c.getColumn(_k,_c.getColID(_j))+"] ";}trace(">>>> "+_i);}trace(">>>> "+"---------------------------------------------------");};});this.loadIncludeScript(_a);_b=null;};})();