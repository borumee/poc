(function(){return function(_a){var _b;this.registerScript(_a,function(){this.gv_ScrollMargin=16;this.gv_OrgIsMin=false;this.gv_DefaultSize=9;this.gv_DelayTimem=10;this.gv_bResizeFont=true;this.gnTimem="";this.gfn_FormInitSizeReg=function(_b,_c,_d,_e){this.gnTimem=this.m2n_timen();_b.m2n_addVariable("lv_OrgW",_c,"Local");_b.m2n_addVariable("lv_OrgH",_d,"Local");_b.m2n_addVariable("lb_OrgIsMin",this.gv_OrgIsMin);if(this.m2n_isNull(_e)!=true){_b.lb_OrgIsMin=_e;}if(_b.getEventHandler("onload",0)!="gfn_AddResizeFormPre"&&this.m2n_length(_b.getEventHandler("onload",0))>0){}this.gfn_AddResizeFormPre(_b);if(_b.getEventHandler("ontimer",0)!="gfn_FormResizeTimer"&&this.m2n_length(_b.getEventHandler("ontimer",0))>0){_b.m2n_addVariable("lv_OnTimer",_b.getEventHandler("ontimer",0),"Local");}_b.setEventHandlerLookup("ontimer","gfn_FormResizeTimer",this);};this.gfn_AddResizeFormPre=function(_b){_b.setTimer(-1004,this.gv_DelayTimem);};this.gfn_AddResizeForm=function(_b){var _c=_b.getOffsetWidth();var _d=_b.getOffsetHeight();var _e=_b;var _f=-1;if(_e.getEventHandler("onsize",0)!="gfn_FormResizeEvent"&&this.m2n_length(_e.getEventHandler("onsize",0))>0){_e.m2n_addVariable("lv_OnSize",_e.getEventHandler("onsize",0),"Local");}_e.setEventHandlerLookup("onsize","gfn_FormResizeEvent",this);if(this.m2n_toLower(this.m2n_getType(_e))=="form"){_c-=4;_d-=4;}_e.m2n_addVariable("lv_isOnLoad",false,"Local");_e.m2n_addVariable("lv_ArrComp",new Array());if(this.gv_bResizeFont){_e.m2n_addVariable("lv_ArrOrgP",new Array());}_e.m2n_addVariable("lv_ArrOrgH",new Array());_e.m2n_addVariable("lv_ArrOrgW",new Array());_e.m2n_addVariable("lv_ArrOrgX",new Array());_e.m2n_addVariable("lv_ArrOrgY",new Array());_e.m2n_addVariable("lv_ArrOrgLst",new Array());_e.m2n_addVariable("lv_ArrOrgCnts",new Array());_e.m2n_addVariable("lb_ReSetSize",false);_e.m2n_addVariable("lv_ArrParentIdx",new Array());_e.m2n_addVariable("lv_ArrSkip",new Array());_e.m2n_addVariable("lv_RateX",1);_e.m2n_addVariable("lv_RateY",1);_e.m2n_addVariable("lv_RateP",1);this.gfnGetComponents(_e,_e,"");if(this.m2n_isExistVariable("lb_OrgIsMin","Local")==false){_e.m2n_addVariable("lb_OrgIsMin",this.gv_OrgIsMin);}if(_e.lb_OrgIsMin==false){this.gv_ScrollMargin=0;}if(this.m2n_isExistVariable("lv_OrgW","Local")==false){_e.m2n_addVariable("lv_OrgW",_c);}if(this.m2n_isExistVariable("lv_OrgH","Local")==false){_e.m2n_addVariable("lv_OrgH",_d);}for(var _k=0;_k<_e.lv_ArrComp.length;_k++ ){var _g=this.m2n_getObject(_e,_e.lv_ArrComp[_k]);_f++ ;if(this.m2n_isValidObject(_g)==false){continue;}var _h=this.m2n_toLower(this.m2n_getType(_g));var _i=0;var _j=0;if(_h!="form"){_i=_g.getOffsetLeft();_j=_g.getOffsetTop();}_e.lv_ArrOrgH[_f]=_g.getOffsetHeight();_e.lv_ArrOrgW[_f]=_g.getOffsetWidth();_e.lv_ArrOrgX[_f]=_i;_e.lv_ArrOrgY[_f]=_j;if(this.gv_bResizeFont){if(_h=="shape"||_h=="axmsie"){_e.lv_ArrOrgP[_f]="";}else{_e.lv_ArrOrgP[_f]=_g.DisplayFontSize;if(_h=="tab"||_h=="multilinetab"){_e.lv_ArrOrgLst[_f]=this.gfn_GetFontSize(_g,_g.SelectFont);}}}if(_h=="grid"){_e.lv_ArrOrgCnts[_f]=this.gfn_GetRateContents(_g,_g.Contents,1,-1);_e.lv_ArrOrgLst[_f]=_g.HeadHeight+":"+_g.RowHeight+":";}else if(_h=="radio"){_e.lv_ArrOrgCnts[_f]=_g.Contents;}}_e.lv_isOnLoad=true;if(_e.lv_OrgW!=_c||_e.lv_OrgH!=_d){this.gfn_FormResizeEvent(_e,_c,_d,"");}if(this.m2n_getType(_e)=="Form"){if(this.m2n_length(_e.lv_OnLoadCompleted)>0){}}};this.fv_resizeW=0;this.gfn_FormResizeEvent=function(_b,_c,_d,_e){_b.killTimer(-1005);if(_b.lv_isOnLoad!=true){return;}if(_e=="Minimize"){return;}if((this.m2n_isNull(_c)!=true&&_c<=4)||(this.m2n_isNull(_d)!=true&&_d<=4)){return;}this.fv_resizeW=0;if(_c<_b.lv_OrgW&&_d<_b.lv_OrgH){return;}else if(_c>_b.lv_OrgW&&_d<_b.lv_OrgH){_d=_b.lv_OrgH;}else if(_c<_b.lv_OrgW&&_d>_b.lv_OrgH){_c=_b.lv_OrgW;}_c-=18;this.fv_resizeW=_c-_b.lv_OrgW;var _f=this.m2n_timen();_b.set_visible(false);var _g=_b;var _h;var _i;var _j;var _k;var _l=0;var _m=0;var _n=1;var _o=1;var _p=1;var _q=_g.lb_OrgIsMin;var _r=false;var _s=this.gv_ScrollMargin;if(this.m2n_isNull(_c)==true){_c=_g.getOffsetWidth();}if(this.m2n_isNull(_d)==true){_d=_g.getOffsetHeight();}if(_g.lb_ReSetSize){_q=false;_s=0;}if(_c<_g.lv_OrgW||((_d<_g.lv_OrgH)&&(_c-this.gv_ScrollMargin<_g.lv_OrgW))){_l=_s;}if(_d-_l<_g.lv_OrgH){_m=_s;}_n=(_c-_m)/_g.lv_OrgW;_o=(_d-_l)/_g.lv_OrgH;if(_n<_o){_p=_n;}else{_p=_o;}if(_q&&_c<_g.lv_OrgW){_n=1;}if(_q&&_d<_g.lv_OrgH){_o=1;}if(_q&&(_n==1||_o==1)){_p=1;}if(_g.lb_ReSetSize){_g.lv_OrgW=_c;_g.lv_OrgH=_d;_p=1;}_g.lv_RateX=_n;_g.lv_RateY=_o;_g.lv_RateP=_p;for(var _v=0;_v<_g.lv_ArrComp.length;_v++ ){var _t=this.m2n_getObject(_g,_g.lv_ArrComp[_v]);if(this.m2n_isValidObject(_t)==false||_t.visible==false){_g.lv_ArrSkip[_v]=true;_r=true;continue;}if(this.m2n_toLower(this.m2n_getType(_t))=="tabpage"){var _u=_t.parent;if(this.m2n_getItem(_u,_u.tabindex)!=_t){_g.lv_ArrSkip[_v]=true;_r=true;continue;}}if(_g.lv_ArrParentIdx[_v]>=0){if(_g.lv_ArrSkip[_g.lv_ArrParentIdx[_v]]==true){_g.lv_ArrSkip[_v]=true;_r=true;continue;}}_g.lv_ArrSkip[_v]=false;this.gfn_ReSizeComp(_g,_t,_v);}_g.set_visible(true);_g.resetScroll();if(this.m2n_isExistVariable("lv_OnSize","Local")){this.m2n_callScript(_g.lv_OnSize+"("+_b+","+_c+","+_d+",'"+_e+"')");}if(_r){_g.setEventHandlerLookup("ontimer","gfn_FormResizeTimer",this);_g.setTimer(-1005,this.gv_DelayTimem);}};this.gfn_ReSizeComp=function(_c,_d,_e){var _f=this.m2n_toLower(this.m2n_getType(_d));var _g=_c.lv_RateX;var _h=_c.lv_RateY;var _i=_c.lv_RateP;_h=1;if(_f!="shape"&&_f!="axmsie"){if(_f=="grid"){var _j=this.m2n_split(_c.lv_ArrOrgLst[_e],":");}if(this.gv_bResizeFont){if(_f=="tab"||_f=="multilinetab"){}}}var _k=_c.lv_ArrOrgX[_e]* _g;var _l=_c.lv_ArrOrgY[_e]* _h;var _m;var _n;if(_f=="button"&&this.m2n_isNull(_d.ImageID)!=true&&this.m2n_left(_d.userdata,1)!="R"){_m=_c.lv_ArrOrgW[_e];_n=_c.lv_ArrOrgH[_e];if(_c.lv_ArrOrgX[_e]==0){_k=_c.lv_ArrOrgX[_e];}else{_k=_c.lv_ArrOrgX[_e]+this.fv_resizeW;}}else{_m=_c.lv_ArrOrgW[_e]* _g;if(_m<0){_m=0;}_n=_c.lv_ArrOrgH[_e]* _h;if(_n<0){_n=0;}}if(_f!="tabpage"){this.m2n_moveWindow(_d,_k,_l,_m,_n);}if(_c.lb_ReSetSize){_c.lv_ArrOrgX[_e]=_k;_c.lv_ArrOrgY[_e]=_l;_c.lv_ArrOrgW[_e]=_m;_c.lv_ArrOrgH[_e]=_n;}};this.gfn_FormResizeTimer=function(_b,_c){if(_c==-1004){_b.killTimer(_c);if(this.m2n_isExistVariable("lv_OnTimer","Local")){_b.setEventHandlerLookup("ontimer",_b.lv_OnTimer,this);}this.gfn_AddResizeForm(_b);}else if(_c==-1005){_b.killTimer(_c);if(this.m2n_isExistVariable("lv_OnTimer","Local")){_b.setEventHandlerLookup("ontimer",_b.lv_OnTimer,this);}for(var _d=0;_d<_b.lv_ArrComp.length;_d++ ){if(_b.lv_ArrSkip[_d]==true){this.gfn_ReSizeComp(_b,this.m2n_getObject(_b,_b.lv_ArrComp[_d]),_d);}}}if(this.m2n_isExistVariable("lv_OnTimer","Local")){this.m2n_callScript(_b.lv_OnTimer+"("+_b+","+_c+")");}};this.gfnGetComponents=function(_c,_d,_e,_f){for(var _j=0;_j<_d.all.m2n_length(_d.all);_j++ ){var _g=this.m2n_toLower(this.m2n_getType(_d.all[_j]));var _h=_d.all[_j];if(_g=="dataset"||_g=="popupdiv"||_g=="file"||_g=="filedialog"){continue;}var _i=this.m2n_length(_c.lv_ArrComp);_c.lv_ArrComp[_i]=_e+_h.id;_c.lv_ArrParentIdx[_i]=_f;if(this.m2n_isComposite(_h)&&this.m2n_trim(_h.Contents)!="<Contents></Contents>"){this.gfnGetComponents(_c,_h,_e+_h.id+".",_i);}}};this.gfn_ChangeContents=function(_c,_d){for(var _f=0;_f<_c.lv_ArrComp.length;_f++ ){if(this.m2n_toLower(_d)==this.m2n_toLower(_c.lv_ArrComp[_f])){var _e=this.m2n_getObject(_c,_d);_c.lv_ArrOrgCnts[_f]=this.gfn_GetRateContents(_e,_e.Contents,1,-1);}}};this.gfn_GetRateContents=function(_c,_d,_e,_f){if(this.m2n_isNull(_d)==true){return "";}var _g=" width=";var _h="";var _i=this.m2n_pos(this.m2n_toLower(_d),_g);var _j=0;var _k="";var _l=1;if(this.gv_bResizeFont){_l=2;}for(var _m=0;_m<_l;_m++ ){_h="";while(_i>0){_i+=this.m2n_length(_g)+1;_h+=this.m2n_mid(_d,_j,_i-_j);_k=this.m2n_mid(_d,_i-1,1);_j=this.m2n_pos(_d,_k,_i+1);if(_m==0){_h+=(nexacro.toNumber(this.m2n_mid(_d,_i,_j-_i))* _e);}else if(this.m2n_mid(_d,_i+1,5)=="expr:"){}else{_h+=this.gfn_GetRateFont(_c,this.m2n_mid(_d,_i,_j-_i),"",_f);}_i=this.m2n_pos(this.m2n_toLower(_d),_g,_i+1);}_h+=this.m2n_mid(_d,_j);_d=_h;_g="font=";_i=this.m2n_pos(this.m2n_toLower(_d),_g);_j=0;_k="";}return _h;};this.gfn_GetFontSize=function(_c,_d){var _e=this.m2n_split(_d,",");if(nexacro.toNumber(_e[1])<-1){return _e[1];}var _f=this.m2n_toLower(this.m2n_getType(_c));if(nexacro.toNumber(_e[1])==-1&&this.m2n_isComposite(_c)&&_f!="tab"&&_f!="multilinetab"&&_f!="form"){return _e[1];}var _g=-1;var _h=_c;var _i;while(_h!=null&&_g<0){_i=_h.font;_h.set_font(_d);_g=_h.DisplayFontSize;_h.set_font(_i);if(this.m2n_toLower(this.m2n_getType(_h))=="form"&&_g<0){_g=this.gv_DefaultSize;}_h=_h.parent;}return (_g);};this.gfn_GetRateFont=function(_c,_d,_e,_f){var _g=this.m2n_split(_d,",");var _h;if(_e=="-1"){return _d;}if(_f==-1){_e=this.gfn_GetFontSize(_c,_d);_f=1;}if(this.m2n_isNull(_e)==true){_e=_g[1];}if(this.m2n_toLower(this.m2n_getType(_c))=="grid"&&_g[0]=="Default"){_h=_c.DisplayFontName+",";}else{_h=_g[0]+",";}_h+=(nexacro.toNumber(_e)* _f);for(var _i=2;_i<this.m2n_length(_g);_i++ ){_h+=","+_g[_i];}return _h;};});this.loadIncludeScript(_a);_b=null;};})();