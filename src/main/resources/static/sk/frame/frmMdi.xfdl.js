(function(){return function(){if(!this._is_form){return;}var _a=null;this.on_create=function(){this.set_name("frmMdi");this.set_titletext("MdiFrame");this.set_cssclass("frm_MDI_Bg");if(Form==this.constructor){this._setFormPosition(1070,42);}_a=new Dataset("dsTab",this);_a._setContents("<ColumnInfo><Column id=\"tabId\" type=\"STRING\" size=\"256\"/><Column id=\"title\" type=\"STRING\" size=\"256\"/><Column id=\"winId\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Static("Static00","0",null,null,"1","0","0",null,null,null,null,this);_a.set_taborder("1");_a.set_cssclass("sta_MDI_Line");this.addChild(_a.name,_a);_a=new Button("btnLeftMenuShowHide","0","0","20","42",null,null,null,null,null,null,this);_a.set_taborder("2");_a.set_cssclass("btn_MDI_Open");_a.set_text("");this.addChild(_a.name,_a);_a=new Button("btnHome","btnLeftMenuShowHide:0","0","42","42",null,null,null,null,null,null,this);_a.set_taborder("7");_a.set_cssclass("btn_MDI_Home");_a.set_text("");this.addChild(_a.name,_a);_a=new Button("btnPreMdi",null,"6","21","31","128",null,null,null,null,null,this);_a.set_taborder("5");_a.set_tooltiptext("이전 화면목록으로");_a.set_cssclass("btn_MDI_Left");this.addChild(_a.name,_a);_a=new Div("divTab","btnHome:0","0",null,"42","btnPreMdi:5",null,null,null,null,null,this);_a.set_taborder("0");_a.set_text("");_a.set_formscrollbartype("none none");_a.set_formscrolltype("none");this.addChild(_a.name,_a);_a=new Button("btnCloseAll",null,"6","31","31","40",null,null,null,null,null,this);_a.set_taborder("6");_a.set_tooltiptext("전체닫기");_a.set_cssclass("btn_MDI_CloseAll");this.addChild(_a.name,_a);_a=new Button("btnList",null,"6","31","31","btnCloseAll:0",null,null,null,null,null,this);_a.set_taborder("3");_a.set_tooltiptext("열린메뉴");_a.set_cssclass("btn_MDI_List");this.addChild(_a.name,_a);_a=new Button("btnNexMdi",null,"6","21","31","btnList:5",null,null,null,null,null,this);_a.set_taborder("4");_a.set_tooltiptext("다음 화면목록으로");_a.set_cssclass("btn_MDI_Right");this.addChild(_a.name,_a);_a=new PopupDiv("pdvOpenMenu","790","42","245","200",null,null,null,null,null,null,this);_a.set_visible("false");_a.set_cssclass("pdiv_MDI_Bg");this.addChild(_a.name,_a);_a=new Grid("grdOpenMenu","0","0",null,null,"0","0",null,null,null,null,this.pdvOpenMenu.form);_a.set_taborder("0");_a.set_autofittype("col");_a.set_binddataset("gdsOpenMenu");_a.set_cssclass("grd_MDI_List");_a._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/></Columns><Rows><Row size=\"28\"/></Rows><Band id=\"body\"><Cell text=\"bind:MENU_NM\" tooltiptext=\"bind:MENU_NM\"/></Band></Format></Formats>");this.pdvOpenMenu.addChild(_a.name,_a);_a=new Button("btnVoc",null,"6","31","31","10",null,null,null,null,null,this);_a.set_taborder("8");_a.set_tooltiptext("VOC등록");_a.set_cssclass("btn_MDI_Voc");this.addChild(_a.name,_a);_a=new Layout("default","",0,0,this.divTab.form,function(_b){});this.divTab.form.addLayout(_a.name,_a);_a=new Layout("default","",0,0,this.pdvOpenMenu.form,function(_b){});this.pdvOpenMenu.form.addLayout(_a.name,_a);_a=new Layout("default","",1070,42,this,function(_b){});this.addLayout(_a.name,_a);};this.loadPreloadList=function(){};this.registerScript("frmMdi.xfdl",function(){this.fvFirstGap=0;this.fvBtnGap=0;this.fvTabHeight=42;this.fvTabExtraRightGap=25;this.fvExtraWidth=25;this.fvExtraTop=8;this.fvExtraHeight=25;this.fvExtraBtnPrefix="EXTRA_";this.fvTabBtnPrefix="TAB_";this.bClose;this.objApp=nexacro.getApplication();this.form_onload=function(_a,_b){if(system.navigatorname!="nexacro"){var _c=nexacro.getEnvironment().services['svcUrl'].url+"thirdParty/js/";var _d="sha384-NaWTHo/8YCBYJ59830LTz/P4aQZK1sS0SneOgAvhsIl3zBu8r9RevNg5lHCHAuQ/";var _e="anonymous";if(system.navigatorname=="IE"){this.fnJsInclude(_c+"bluebird.js");}this.fnJsInclude(_c+"html2canvas.js");}};this.fnJsInclude=function(_b,_c,_d){var _e=document.createElement("script");_e.src=_b;if(_c){_e.integrity=_c;}if(_d){_e.crossOrigin=_d;}document.head.appendChild(_e);};this.form_onsize=function(_a,_b){this.fnRedrawTab();};this.fnMsgCallback=function(_b,_c){var _d=_b.split("^");if(_b=="confirm.before.removeallpage"){if(_c==true){this.fnCloseAll(false);}}else if(_d[0]=="confirm.before.movepage"){var _e=_d[1];if(_c==true){this.fnTabOnClose(_e);}}};this.fnRedrawTab=function(_b){if(this.gfnIsNull(_b)){_b="move";}this.fnSetTabSpinBtnShow();if(this.dsTab.rowcount<1){return;}var _c=this.fnFindObj(this.dsTab.getColumn(0,"tabId"));var _d=_c.getOffsetLeft();var _e=this.fnFindObj(this.dsTab.getColumn(this.dsTab.rowcount-1,"tabId"));var _f=_e.getOffsetRight();if(this.divTab.getOffsetWidth()>=(_f-_d)){this.fnMoveFirst(0);}else{if(_b=="add"){this.fnMoveFirst(this.fnGetFirstTabIndex()+1);}}};this.fnSetTabSpinBtnShow=function(){var _b;if(this.dsTab.rowcount==0){this.btnPreMdi.set_enable(false);this.btnNexMdi.set_enable(false);return;}_b=this.fnFindObj(this.dsTab.getColumn(this.dsTab.rowcount-1,"tabId"));if(this.divTab.getOffsetWidth()<_b.getOffsetRight()){this.btnNexMdi.set_enable(true);}else{this.btnNexMdi.set_enable(false);}_b=this.fnFindObj(this.dsTab.getColumn(0,"tabId"));if(_b.getOffsetLeft()<0){this.btnPreMdi.set_enable(true);}else{this.btnPreMdi.set_enable(false);}};this.fnSetStyle=function(_b){if(_b=="sub"){var _c=this.objApp.gvFrsWork.getActiveFrame().name;this.fnSetActive(this.fvTabBtnPrefix+_c.name);this.btnHome.set_cssclass("btn_MDI_Home");}else{this.btnHome.set_cssclass("btn_MDI_HomeS");this.fnSetActiveBtn("btnHome");}};this.fnSetEnableArrange=function(_b){this.btnCloseAll.set_enable(_b);};this.fnSetActive=function(_b){var _c=this.dsTab.findRow("tabId",_b);if(_c<0){return false;}this.dsTab.set_rowposition(_c);this.fnSetActiveBtn(_b);return true;};this.fnSetActiveBtn=function(_b){var _c;var _d;for(var _e=0;_e<this.dsTab.rowcount;_e++ ){_c=this.fnFindObj(this.dsTab.getColumn(_e,"tabId"));_d=this.fnFindObj(this.fvExtraBtnPrefix+this.dsTab.getColumn(_e,"tabId"));if(_b==this.dsTab.getColumn(_e,"tabId")){_c.set_cssclass("btn_MDI_MenuS");this.fnShowTabBtn(_e);}else{_c.set_cssclass("btn_MDI_Menu");}}};this.fnShowTabBtn=function(_b){var _c;var _d;var _e;var _f=this.fnFindObj(this.dsTab.getColumn(_b,"tabId"));_d=_f.getOffsetLeft();_e=_f.getOffsetRight();if(0<=_d&&this.divTab.getOffsetWidth()>=_e){return;}if(_d<0){this.fnMoveFirst(_b);return;}var _g=_b;for(var _h=this.fnGetFirstTabIndex()+1;_h<this.dsTab.rowcount;_h++ ){_f=this.fnFindObj(this.dsTab.getColumn(_h,"tabId"));if(_e-_f.getOffsetLeft()<=this.divTab.getOffsetWidth()){_g=_h;break;}}this.fnMoveFirst(_g);};this.fnFindObj=function(_b){return this.divTab.form.components[_b];};this.fnMoveFirst=function(_b){var _c;var _d;var _e;var _f;var _g;_c=this.fnGetFirstTabIndex();if(_c<0){return;}if(_b<0){return;}if(_b>=this.dsTab.rowcount){return;}_d=this.dsTab.getColumn(_c,"tabId");_g=this.fnFindObj(_d);_d=this.dsTab.getColumn(_b,"tabId");_e=this.fnFindObj(_d);var _h=_e.getOffsetLeft()-_g.getOffsetLeft();for(var _i=0;_i<this.dsTab.rowcount;_i++ ){_d=this.dsTab.getColumn(_i,"tabId");_e=this.fnFindObj(_d);_f=this.fnFindObj(this.fvExtraBtnPrefix+_d);_e.move(_e.getOffsetLeft()-_h,_e.getOffsetTop());if(this.gfnIsNull(_f)==false){_f.move(_f.getOffsetLeft()-_h,_f.getOffsetTop());}}};this.fnGetFirstTabIndex=function(){for(var _d=0;_d<this.dsTab.rowcount;_d++ ){var _b=this.dsTab.getColumn(_d,"tabId");var _c=this.fnFindObj(_b);if(this.gfnIsNull(_c)==false){if(0<=_c.getOffsetLeft()){return _d;}}}return -1;};this.isActiveFrame=function(_b){var _c=this.objApp.gvFrsWork.frames;if(this.gfnIsNull(_b)){return true;}if(_c[_b]){this.gfnSetSub();this.fnMoveTab(_b);_c[_b].setFocus();return true;}};this.fnMoveTab=function(_b){var _c=this.dsTab.findRow("winId",_b);if(_c<0){return _c;}var _d=this.fvTabBtnPrefix+_b;this.fnSetActive(_d);this.fnRedrawTab();};this.fnAddTab=function(_b,_c){var _d=this.dsTab.findRow("winId",_b);if(_d>-1){return _d;}var _e=this.fvTabBtnPrefix+_b;_d=this.dsTab.addRow();this.dsTab.setColumn(_d,"tabId",_e);this.dsTab.setColumn(_d,"winId",_b);this.dsTab.setColumn(_d,"title",_c);this.fnAddTabBtn(_e,_c);this.fnRedrawTab();this.bClose=true;return _d;};this.fnAddTabBtn=function(_b,_c){var _d;var _e;var _f=this.fvExtraBtnPrefix+_b;var _g="";if(this.gfnIsNull(this.fnFindObj(_b))){_d=new Button();_d.init(_b,this.fnGetLeft(_b),0,130,this.fvTabHeight,null,null);this.divTab.addChild(_d.name,_d);}_d.set_text(_c);_d.set_textAlign("left");_d.set_padding("0px 10px 0px 15px");_d.set_cssclass("btn_MDI_MenuS");var _h=this.gfnGetTextSize(_c)[0]+35;_d.set_width(_h);_d.show();_d.setEventHandler("onclick",this.btnTab_onclick,this);if(this.fnFindObj(_f)==null){_e=new Button();_e.init(_f,_d.getOffsetRight()-this.fvTabExtraRightGap,this.fvExtraTop,_d.getOffsetRight()-this.fvTabExtraRightGap+this.fvExtraWidth-(_d.getOffsetRight()-this.fvTabExtraRightGap),this.fvExtraTop+this.fvExtraHeight-this.fvExtraTop);this.divTab.addChild(_f,_e);_e.set_cssclass("btn_MDI_TabClose");_e.set_cursor("pointer");_e.show();_e.setEventHandler("onclick",this.btnExtra_onclick,this);}};this.fnGetLeft=function(_b){var _c=this.dsTab.findRow("tabId",_b);if(_c==0){return this.fvFirstGap;}var _d=this.fnFindObj(this.dsTab.getColumn(_c-1,"tabId"));return _d.getOffsetRight()+this.fvBtnGap;};this.fnCloseMenu=function(_b,_c){if(this.gfnIsNull(_b)){return;}if(this.gfnIsNull(_c)){_c=this.objApp.gvCloseCheck;}var _d=this.gfnGetLookupData(this.objApp.gdsOpenMenu,this.FRAME_MENUCOLUMNS.menuId,_b,this.FRAME_MENUCOLUMNS.winId);var _e=this.objApp.gvFrsWork.frames;var _f=_e[_d].form;var _g=_f.fnWorkFrameClose(_c);if(_g==false){this.gfnAlert("confirm.before.movepage","","confirm.before.movepage^"+_d,"fnMsgCallback");}else{this.fnTabOnClose(_d);}};this.fnCloseAll=function(_b){if(this.objApp.gdsOpenMenu.getRowCount()<1){return;}var _c=this.objApp.gvFrsWork.frames.length;var _d=this.fnCheckCloseAll(_b);if(_d){for(var _e=_c;_e>0;_e-- ){this.fnTabOnClose(this.objApp.gvFrsWork.frames[_e -1].name);}}else{this.gfnAlert("confirm.before.removeallpage","","confirm.before.removeallpage","fnMsgCallback");}};this.fnCheckCloseAll=function(_b){var _c=this.objApp.gvFrsWork.frames.length;var _d=true;if(this.gfnIsNull(_b)){_b=this.objApp.gvCloseCheck;}if(_b==true){for(var _e=0;_e<_c;_e++ ){if(this.gfnIsNull(this.objApp.gvFrsWork.frames[_e].form.fvDivWork.form.lookup("cfnClose"))){}else{if(this.objApp.gvFrsWork.frames[_e].form.fnWorkFrameClose()==false){_d=false;break;}}}}return _d;};this.fnTabOnClose=function(_b){var _c=this.objApp.gvFrsWork.frames;var _d=this.objApp.gvFrsWork.getActiveFrame().name;var _e=this.objApp.gdsOpenMenu.findRow(this.FRAME_MENUCOLUMNS.winId,_b);if(!this.gfnIsNull(_c[_b])&&_e>-1){this.bClose=false;var _f=this.objApp.gvFrsWork.removeChild(_b);_f.destroy();_f=null;this.fnDelTab(_b);}this.gfnRemoveOpenMenuDs(_b);if(_c.length>0){if(_b!=_d){this.objApp.gvFrsWork[_d].setFocus();}else{_d=this.objApp.gvFrsWork.getActiveFrame();if(_d!=null){this.fnSetActive(this.fvTabBtnPrefix+_d.name);}}}else{this.gfnSetMain();}};this.fnDelTab=function(_b){var _c=this.dsTab.findRow("winId",_b);if(_c<0){return false;}var _d=this.fvTabBtnPrefix+_b;this.fnDelTabBtn(_d);this.dsTab.deleteRow(_c);this.fnRedrawTab();return true;};this.fnDelTabBtn=function(_b){var _c=this.fvExtraBtnPrefix+_b;var _d=this.fnFindObj(_b);var _e=this.fnFindObj(_c);var _f=_d.getOffsetWidth()+this.fvBtnGap;var _g=this.dsTab.findRow("tabId",_b);var _h=_d.getOffsetLeft();if(_h==0){if(this.dsTab.rowcount>1){this.btnPreMdi_onclick();}}this.fnRemoveObj(_c);this.fnRemoveObj(_b);var _i=_b.replace(this.fvTabBtnPrefix,"");var _j=this.dsTab.findRow("winId",_i);if(_h<0){for(var _k=0;_k<_j;_k++ ){_d=this.fnFindObj(this.dsTab.getColumn(_k,"tabId"));_e=this.fnFindObj(this.fvExtraBtnPrefix+this.dsTab.getColumn(_k,"tabId"));_d.move(_d.getOffsetLeft()+_f,_d.getOffsetTop());_e.move(_e.getOffsetLeft()+_f,_e.getOffsetTop());}}else{for(var _k=_g+1;_k<this.dsTab.rowcount;_k++ ){_d=this.fnFindObj(this.dsTab.getColumn(_k,"tabId"));_e=this.fnFindObj(this.fvExtraBtnPrefix+this.dsTab.getColumn(_k,"tabId"));_d.move(_d.getOffsetLeft()-_f,_d.getOffsetTop());_e.move(_e.getOffsetLeft()-_f,_e.getOffsetTop());}}this.bClose=true;};this.fnRemoveObj=function(_b){if(this.fnFindObj(_b)==null){return;}var _c=this.divTab.removeChild(_b);if(_c!=null){_c.destroy();}};this.btnHome_onclick=function(_a,_b){this.gfnSetMain();};this.btnTab_onclick=function(_a,_b){var _c=_a.name.split(this.fvTabBtnPrefix).join("");this.isActiveFrame(_c);};this.btnExtra_onclick=function(_a,_b){var _c=_a.name.split(this.fvTabBtnPrefix).join("").split(this.fvExtraBtnPrefix).join("");var _d=this.gfnGetLookupData(this.objApp.gdsOpenMenu,this.FRAME_MENUCOLUMNS.winId,_c,this.FRAME_MENUCOLUMNS.menuId);this.fnCloseMenu(_d);this.bClose=true;};this.btnPreMdi_onclick=function(_a,_b){this.fnMoveFirst(this.fnGetFirstTabIndex()-1);this.fnRedrawTab();};this.btnNexMdi_onclick=function(_a,_b){this.fnMoveFirst(this.fnGetFirstTabIndex()+1);this.fnRedrawTab();};this.btnList_onclick=function(_a,_b){var _c=this.pdvOpenMenu.width;var _d=this.pdvOpenMenu.height;if(this.objApp.gdsOpenMenu.rowcount>0){this.pdvOpenMenu.trackPopupByComponent(_a,0,_a.height);this.pdvOpenMenu.form.grdOpenMenu.setFocus();this.pdvOpenMenu.form.grdOpenMenu.selectCell(0,0,true);}};this.btnCloseAll_onclick=function(_a,_b){this.fnCloseAll();};this.btnLeftMenuShowHide_onclick=function(_a,_b){if(_a.cssclass=="btn_MDI_Open"){this.gfnShowLeftFrame();}else{this.gfnHideLeftFrame();}};this.pdvOpenMenu_grdOpenMenu_oncellclick=function(_a,_b){var _c=_a.getBindDataset();if(_a.getBindCellIndex("body",this.FRAME_MENUCOLUMNS.title)==_b.cell){var _d=_c.getColumn(_b.row,this.FRAME_MENUCOLUMNS.menuId);var _e=null;this.objApp.gvFrmLeft.form.fnFormOpen(_d,_e);}this.pdvOpenMenu.closePopup();};this.fnOpenBoardPopup=function(_b){var _c="<p></p> <p></p>  <p></p> <img src="+nexacro.wrapQuote(_b)+">";var _d="addBoard";var _e="comm::board/boardPu.xfdl";var _f={pvApndYn:"1",pvTitle:"VOC등록 ",pvInputId:nexacro.getApplication().gdsUser.getColumn(0,"USER_ID"),pvInputEmpNo:nexacro.getApplication().gdsUser.getColumn(0,"EMP_NO"),pvContTitle:"",pvBoardCd:"VOC001",pvOpenType:"add",pvHrank:"",pvAnswLvl:0,pvCont:_c};var _g="fnPopupCallback";var _h="게시글";var _i={title:_h,titlebar:true};this.gfnOpenPopup(_d,_e,_f,_g,_i);};this.fnWebImageSave=function(_b,_c){var _d=document.getElementById(_b.getElement().handle.id);var _e=this;if(!_d){trace('ele is not exist.');return false;}html2canvas(_d,{onrendered:function(_f){sImageData=_f.toDataURL('image/png');_e.fnOpenBoardPopup(sImageData);}});};this.btnVoc_onclick=function(_a,_b){return;};});this.on_initEvent=function(){this.addEventHandler("onsize",this.form_onsize,this);this.addEventHandler("onload",this.form_onload,this);this.btnLeftMenuShowHide.addEventHandler("onclick",this.btnLeftMenuShowHide_onclick,this);this.btnHome.addEventHandler("onclick",this.btnHome_onclick,this);this.btnPreMdi.addEventHandler("onclick",this.btnPreMdi_onclick,this);this.btnCloseAll.addEventHandler("onclick",this.btnCloseAll_onclick,this);this.btnList.addEventHandler("onclick",this.btnList_onclick,this);this.btnNexMdi.addEventHandler("onclick",this.btnNexMdi_onclick,this);this.pdvOpenMenu.form.grdOpenMenu.addEventHandler("oncellclick",this.pdvOpenMenu_grdOpenMenu_oncellclick,this);this.btnVoc.addEventHandler("onclick",this.btnVoc_onclick,this);};this.loadIncludeScript("frmMdi.xfdl");this.loadPreloadList();_a=null;};})();