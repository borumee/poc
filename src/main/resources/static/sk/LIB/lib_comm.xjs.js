(function(){return function(_a){var _b;this.registerScript(_a,function(){this.CO_MENU_ID="mnuId";this.CO_MENU_NAME="mnuNm";this.CO_MENU_LEVEL="mnuLvlCnt";this.CO_FORM_URL="pgmUrlNm";this.gfn_MenuOpenWindow=function(_c,_d,_e){if(this.m2n_isNull(_d)==true){_d=nexacro.getApplication().gds_menu;}var _f=this.m2n_allWindows()[_c];if(this.m2n_isNull(_f)!=true){_f[0].setFocus();}else{var _g=_d.findRow(this.CO_MENU_ID,_c);var _h=this.m2n_trim(_d.getColumn(_g,this.CO_FORM_URL));var _i=this.m2n_trim(_d.getColumn(_g,this.CO_MENU_NAME));if(this.m2n_length(_h)==0){return;}var _j="pUrl="+nexacro.wrapQuote(_h);_j+=" pMenuId="+nexacro.wrapQuote(_c);_j+=" pTitle="+nexacro.wrapQuote(_i);_j+=" pType="+nexacro.wrapQuote("M");_j+=" "+_e;var _k=this.m2n_newWindow(_c,"MAIN::fmComFormX.xfdl",_j,1052,848,"OpenStyle=Max Scroll=true titlebar=true");return _k;}};this.gfn_FormOpenWindow=function(_c,_d,_e){var _f;if(this.m2n_isNull(_c)==true){return;}var _g=_c;var _h=nexacro.getApplication().gds_menu.findRow(this.CO_FORM_URL,_c);if(_h>-1){if(this.m2n_length(_d)==0){_d=nexacro.getApplication().gds_menu.getColumn(_h,this.CO_MENU_NAME);}_g=nexacro.getApplication().gds_menu.getColumn(_h,this.CO_MENU_ID);_f=this.m2n_allWindows()[_g];}else{for(var _k=0;_k<this.m2n_length(nexacro.getApplication().windows);_k++ ){if(_g==nexacro.getApplication().windows[_k].name){_f=this.m2n_allWindows()[_g];_f[0].setFocus();return _f[0].GetHandle();}}}if(this.m2n_isNull(_f)!=true){_f[0].setFocus();return _f[0].GetHandle();}var _i="pUrl="+nexacro.wrapQuote(_c);_i+=" pMenuId="+nexacro.wrapQuote(_g);_i+=" pTitle="+nexacro.wrapQuote(_d);_i+=" pType="+nexacro.wrapQuote("F");_i+=" "+_e;var _j=this.m2n_newWindow(_g,"MAIN::fmComForm.xfdl",_i,804,573,"OpenStyle=Max");return _j;};this.gfn_FormOpenChk=function(_c,_d){if(this.m2n_isNull(_c)==true){return;}_d=this.m2n_decode(_d,null,false,"",false,_d);var _e=nexacro.getApplication().gds_menu.findRow(this.CO_FORM_URL,_c);var _f;var _g;if(_e>-1){_f=nexacro.getApplication().gds_menu.getColumn(_e,this.CO_MENU_ID);_g=this.m2n_allWindows()[_f];if(this.m2n_isNull(_g)!=true){if(_d){_g[0].setFocus();}return _g[0].GetHandle();}}else{_f=_c;for(i=0;i<this.m2n_length(nexacro.getApplication().windows);i++ ){if(_f==nexacro.getApplication().windows[i].name){_g=this.m2n_allWindows()[_f];if(_d){_g[0].setFocus();}return _g[0].GetHandle();}}}return 0;};this.gfn_getMenuId=function(_c){if(this.m2n_isNull(_c)==true){return;}var _d=nexacro.getApplication().gds_menu.findRow(this.CO_FORM_URL,_c);if(_d>-1){return nexacro.getApplication().gds_menu.getColumn(_d,this.CO_MENU_ID);}else{return _c;}};this.gfn_OpenWindowByFormId=function(_c){var _d=this.m2n_allWindows()[_c];if(this.m2n_isNull(_d)!=true){_d[0].setFocus();}};this.gfn_CloseWindowByFormId=function(_c){var _d=this.m2n_allWindows()[_c];if(this.m2n_isNull(_d)!=true){_d[0].m2n_close(null);}};this.gfn_SplitOnSize=function(_c,_d,_b,_e,_f,_g){var _h=false;_b.splHorz.set_enableredraw(false);_b.splVert.set_enableredraw(false);if(this.m2n_isNull(_b.splHorz)!=true){_b.splHorz.userdata=_e-_c.getOffsetWidth();_b.splHorz.setOffsetLeft(_e);}if(this.m2n_isNull(_b.splVert)!=true){_b.splVert.userdata=_f-_d.getOffsetHeight();_b.splVert.setOffsetTop(_f);}_b.splHorz.set_enableredraw(true);_b.splVert.set_enableredraw(true);_b.resetScroll();_b.divApp.resetScroll();if(_h){_b.resetScroll();}};this.gfn_SetResize=function(_b,_c){var _d="";var _e="";var _f="";var _g="";this.m2n_create(_b,"split","splHorz","BKColor='red'  Direct='HORZ' Height='66' Left='955' Top='448' Visible='true' Width='2'");this.m2n_create(_b,"split","splVert","BKColor='blue' Direct='VERT' Height='2' Left='905' Top='514' Visible='true' Width='50'");if(this.m2n_length(_c)>0){var _h=this.m2n_split(_c," ");for(var _l=0;_l<_h.length;_l++ ){var _i=this.m2n_split(_h[_l],":");this.m2n_lookupPath("oComp")=_i[0];if(this.m2n_isNull(this.m2n_lookupPath("oComp"))==true){continue;}if(_i[1]=="H"){_f+="		<Bind BindType="+nexacro.wrapQuote(this.m2n_decode(_i[2],'R','Resize','Move'))+" CompID="+nexacro.wrapQuote(_i[0])+"/>";}else if(_i[1]=="W"){_g+="		<Bind BindType="+nexacro.wrapQuote(this.m2n_decode(_i[2],'R','Resize','Move'))+" CompID="+nexacro.wrapQuote(_i[0])+"/>";}else{_f+="		<Bind BindType="+nexacro.wrapQuote(this.m2n_decode(_i[2],'R','Resize','Move'))+" CompID="+nexacro.wrapQuote(_i[0])+"/>";_g+="		<Bind BindType="+nexacro.wrapQuote(this.m2n_decode(_i[2],'R','Resize','Move'))+" CompID="+nexacro.wrapQuote(_i[0])+"/>";}}}else{var _j;var _k;for(var _l=0;_l<_b.all.m2n_length(_b.all);_l++ ){_j=_b.all[_l];if(this.m2n_isNull(_j)==true){continue;}_k=this.gfn_getUserData(_j,true);if(this.m2n_left(_k,1)=="H"||this.m2n_left(_k,1)=="W"||this.m2n_left(_k,1)=="A"){var _i=this.m2n_split2(_k," ",":");for(var _m=0;_m<this.m2n_length(_i);_m++ ){if(_i[_m][0]=="H"){_f+="		<Bind BindType="+nexacro.wrapQuote(this.m2n_decode(_i[_m][1],'R','Resize','Move'))+" CompID="+nexacro.wrapQuote(_j.id)+"/>";}else if(_i[_m][0]=="W"){_g+="		<Bind BindType="+nexacro.wrapQuote(this.m2n_decode(_i[_m][1],'R','Resize','Move'))+" CompID="+nexacro.wrapQuote(_j.id)+"/>";}else{_f+="		<Bind BindType="+nexacro.wrapQuote(this.m2n_decode(_i[_m][1],'R','Resize','Move'))+" CompID="+nexacro.wrapQuote(_j.id)+"/>";_g+="		<Bind BindType="+nexacro.wrapQuote(this.m2n_decode(_i[_m][1],'R','Resize','Move'))+" CompID="+nexacro.wrapQuote(_j.id)+"/>";}}}}}_d="<Contents><LeftOrTop>";_d+=_f;_d+="</LeftOrTop><RightOrBottom></RightOrBottom></Contents>";_e="<Contents><LeftOrTop>";_e+=_g;_e+="</LeftOrTop><RightOrBottom></RightOrBottom></Contents>";this.m2n_setContents(_b.splHorz,_d);this.m2n_setContents(_b.splVert,_e);this.gfn_OnSize(_b,this.m2n_lookupPath("g_nX"),this.m2n_lookupPath("g_nY"));_b.setEventHandlerLookup("onsize","gfn_OnSize",this);};this.gfn_OnSize=function(_b,_c,_d,_e){if(_c<this.FORM_POSX||_d<this.FORM_POSY){return;}this.gfn_SplitOnSize(_b.splHorz,_b.splVert,_b,_c,_d,_e);};});this.loadIncludeScript(_a);_b=null;};})();