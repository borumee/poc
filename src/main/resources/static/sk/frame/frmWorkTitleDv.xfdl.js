(function(){return function(){if(!this._is_form){return;}var _a=null;this.on_create=function(){this.set_name("frmWorkTitleDv");this.set_titletext("WorkFrameTitle");this.set_scrollbartype("none none");this.set_scrolltype("none");if(Form==this.constructor){this._setFormPosition(995,52);}_a=new Dataset("dsBtnSeq",this);_a._setContents("<ColumnInfo><Column id=\"btnId\" type=\"string\" size=\"50\"/><Column id=\"btnNm\" type=\"string\" size=\"50\"/></ColumnInfo><Rows><Row><Col id=\"btnId\">btnAdd</Col><Col id=\"btnNm\">추가</Col></Row><Row><Col id=\"btnId\">btnDel</Col><Col id=\"btnNm\">삭제</Col></Row><Row><Col id=\"btnId\">btnSave</Col><Col id=\"btnNm\">저장</Col></Row><Row><Col id=\"btnId\">btnPrint</Col><Col id=\"btnNm\">출력</Col></Row><Row><Col id=\"btnId\">btnHelp</Col><Col id=\"btnNm\">도움말</Col></Row></Rows>");this.addChild(_a.name,_a);_a=new Dataset("dsAddBtn",this);_a._setContents("<ColumnInfo><Column id=\"SYTM_FLAG_CD\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_ID\" type=\"STRING\" size=\"256\"/><Column id=\"BTTN_ID\" type=\"STRING\" size=\"256\"/><Column id=\"SORT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"SORT_ORDR\" type=\"STRING\" size=\"256\"/><Column id=\"BTTN_NM\" type=\"STRING\" size=\"256\"/><Column id=\"BTTN_ENGL_NM\" type=\"STRING\" size=\"256\"/><Column id=\"BTTN_STYLE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Button("btnSave",null,"12","68","28","0",null,null,null,null,null,this);_a.set_taborder("4");_a.set_text("저장");_a.set_fittocontents("width");_a.set_cssclass("btn_WF_CrudSave");this.addChild(_a.name,_a);_a=new Button("btnDel",null,"12","69","28","btnSave:3",null,null,null,null,null,this);_a.set_taborder("5");_a.set_text("삭제");_a.set_fittocontents("width");_a.set_cssclass("btn_WF_CrudDelete");this.addChild(_a.name,_a);_a=new Button("btnAdd",null,"12","67","28","btnDel:3",null,null,null,null,null,this);_a.set_taborder("6");_a.set_text("추가");_a.set_fittocontents("width");_a.set_cssclass("btn_WF_CrudAdd");this.addChild(_a.name,_a);_a=new Button("btnMyMenu","0","11","32","31",null,null,null,null,null,null,this);_a.set_taborder("1");_a.set_cssclass("btn_WF_Bookmark");this.addChild(_a.name,_a);_a=new Static("staNavi","btnMyMenu:-7","4","255","44",null,null,null,null,null,null,this);_a.set_taborder("0");_a.set_cssclass("sta_WF_Location");_a.set_fittocontents("width");this.addChild(_a.name,_a);_a=new Button("btnHelp",null,"62","30","28","0",null,null,null,null,null,this);_a.set_taborder("2");_a.set_cssclass("btn_WF_Help");_a.set_enable("true");_a.set_visible("false");this.addChild(_a.name,_a);_a=new Button("btnPrint",null,"62","30","28","33",null,null,null,null,null,this);_a.set_taborder("3");_a.set_cssclass("btn_WF_Print");_a.set_enable("true");this.addChild(_a.name,_a);_a=new Button("btn00","-8","459","20","0",null,null,null,null,null,null,this);_a.set_initvalueid("iv_Search");_a.set_cssclass("btn_WF_Search");_a.set_text("조회");_a.set_fittocontents("width");_a.set_taborder("7");this.addChild(_a.name,_a);_a=new Div("divAddBtn","staNavi:0","12","502","28",null,null,null,null,null,null,this);_a.set_taborder("8");this.addChild(_a.name,_a);_a=new Button("btn14_00",null,"62","67","28","66",null,null,null,null,null,this);_a.set_taborder("9");_a.set_text("커스텀");_a.set_fittocontents("width");_a.set_cssclass("btn_WF_Custom");_a.set_visible("false");this.addChild(_a.name,_a);_a=new Layout("default","",0,0,this.divAddBtn.form,function(_b){});this.divAddBtn.form.addLayout(_a.name,_a);_a=new Layout("default","",995,52,this,function(_b){var _c=_b;_b=_c;_b.set_titletext("WorkFrameTitle");_b.set_scrollbartype("none none");_b.set_scrolltype("none");_b.btnSave.set_taborder("4");_b.btnSave.set_text("저장");_b.btnSave.set_fittocontents("width");_b.btnSave.set_cssclass("btn_WF_CrudSave");_b.btnSave.move(null,"12","68","28","0",null);_b.btnDel.set_taborder("5");_b.btnDel.set_text("삭제");_b.btnDel.set_fittocontents("width");_b.btnDel.set_cssclass("btn_WF_CrudDelete");_b.btnDel.move(null,"12","69","28","btnSave:3",null);_b.btnAdd.set_taborder("6");_b.btnAdd.set_text("추가");_b.btnAdd.set_fittocontents("width");_b.btnAdd.set_cssclass("btn_WF_CrudAdd");_b.btnAdd.move(null,"12","67","28","btnDel:3",null);_b.btnMyMenu.set_taborder("1");_b.btnMyMenu.set_cssclass("btn_WF_Bookmark");_b.btnMyMenu.move("0","11","32","31",null,null);_b.staNavi.set_taborder("0");_b.staNavi.set_cssclass("sta_WF_Location");_b.staNavi.set_fittocontents("width");_b.staNavi.move("btnMyMenu:-7","4","255","44",null,null);_b.btnHelp.set_taborder("2");_b.btnHelp.set_cssclass("btn_WF_Help");_b.btnHelp.set_enable("true");_b.btnHelp.set_visible("false");_b.btnHelp.move(null,"62","30","28","0",null);_b.btnPrint.set_taborder("3");_b.btnPrint.set_cssclass("btn_WF_Print");_b.btnPrint.set_enable("true");_b.btnPrint.move(null,"62","30","28","33",null);_b.btn00.set_cssclass("btn_WF_Search");_b.btn00.set_text("조회");_b.btn00.set_fittocontents("width");_b.btn00.set_taborder("7");_b.btn00.move("-8","459","20","0",null,null);_b.divAddBtn.set_taborder("8");_b.divAddBtn.set_maxwidth("");_b.divAddBtn.move("staNavi:0","12","502","28",null,null);_b.btn14_00.set_taborder("9");_b.btn14_00.set_text("커스텀");_b.btn14_00.set_fittocontents("width");_b.btn14_00.set_cssclass("btn_WF_Custom");_b.btn14_00.set_visible("false");_b.btn14_00.move(null,"62","67","28","66",null);});this.addLayout(_a.name,_a);_a=new Layout("default0","",1080,600,this,function(_b){var _c=_b;_b=_c;});this.addLayout(_a.name,_a);};this.loadPreloadList=function(){};this.registerScript("frmWorkTitleDv.xfdl",function(){this.objApp=nexacro.getApplication();this.fvMenuId="";this.fvObjArray=new Array();this.fvObjArray[0]="btnAdd";this.fvObjArray[1]="btnDel";this.fvObjArray[2]="btnSave";this.fvObjArray[3]="btnPrint";this.fvObjArray[4]="btnHelp";this.fvObjArray[5]="btnExcelUp";this.fvObjArray[6]="btnExcelDown";this.form_onload=function(_a,_b){if(nexacro._quickview_formurl){this.btnMyMenu.set_enable(false);return;}this.fvMenuId=this.gfnGetArgument(this.FRAME_MENUCOLUMNS.menuId);var _c=nexacro.getApplication().gdsAddBtn;_c.filter("MENU_ID=='"+this.fvMenuId+"'");this.dsAddBtn.copyData(_c,true);_c.filter("");this.fnSetMyMenuBtn();};this.form_onsize=function(_a,_b){var _c=this.divAddBtn.uLast;var _d=0;if(this.gfnIsNull(_c)){_d=this.getOffsetWidth()-this.staNavi.getOffsetRight();}else{_d=_c.getOffsetLeft()-this.staNavi.getOffsetRight()-3;}this.divAddBtn.setOffsetWidth(_d);this.resetScroll();};this.fnSetMyMenuBtn=function(){var _b=this.objApp.gvFrmLeft.form.dsMyMenu;var _c=_b.findRow(this.FRAME_MENUCOLUMNS.menuId,this.fvMenuId);if(_c<0){this.btnMyMenu.set_cssclass("btn_WF_Bookmark");}else{this.btnMyMenu.set_cssclass("btn_WF_BookmarkS");}};this.fnSetAuthBtn=function(_b){var _c=0;var _d=3;var _e;for(var _k=0;_k<this.fvObjArray.length;_k++ ){var _f=this[this.fvObjArray[_k]];if(this.gfnIsNull(_f)){_e=this.dsBtnSeq.findRow("btnId",this.fvObjArray[_k]);if(_e!=-1){this.dsBtnSeq.deleteRow(_e);}}else{if(_b.substr(_k,1)=="1"){_f.set_visible(true);}else{_f.set_visible(false);_e=this.dsBtnSeq.findRow("btnId",this.fvObjArray[_k]);if(_e!=-1){this.dsBtnSeq.deleteRow(_e);}}}}var _g=null;for(var _k=this.dsBtnSeq.getRowCount()-1;_k>-1;_k-- ){var _h=this.dsBtnSeq.getColumn(_k,"btnId");var _f=this[_h];_f.move(null,12,_f.getOffsetWidth(),_f.getOffsetHeight(),_c);_c=_c+nexacro.toNumber(_d)+nexacro.toNumber(_f.getOffsetWidth());if(_f.visible){_g=_f;}}this.divAddBtn.uLast=_g;var _i=0;if(this.gfnIsNull(_g)){_i=this.getOffsetWidth()-this.staNavi.getOffsetRight();}else{_i=_g.getOffsetLeft()-this.staNavi.getOffsetRight()-3;}this.divAddBtn.setOffsetWidth(_i);this.resetScroll();var _j=this.dsAddBtn.rowcount;if(_j==0){this.divAddBtn.set_visible(false);}else{this.fnMakeAddBtn(_j);}};this.fnMakeAddBtn=function(_b){var _c="";var _d="";var _e="";var _f=0;var _g=60;var _h=28;var _i=null;for(var _j=0;_j<_b;_j++ ){_c=this.dsAddBtn.getColumn(_j,"BTTN_ID");_d=this.dsAddBtn.getColumn(_j,"BTTN_NM");_e=this.dsAddBtn.getColumn(_j,"BTTN_STYLE");_i=new nexacro.Button;_i.init(_c,null,0,_g,_h,_f,0);this.divAddBtn.addChild(_c,_i);_i.addEventHandler("onclick",this.addBtn_onclick,this);_i.set_cssclass(_e);_i.set_text(_d);_i.set_fittocontents("width");_i.show();this.divAddBtn.form.resetScroll();_f+=_i.getOffsetWidth()+3;}this.divAddBtn.set_visible(true);};this.fnSetBookmarkCss=function(_b){if(this.gfnIsNull(_b)){return;}var _c=_b.cssclass;if(_c=="btn_WF_Bookmark"){_b.set_cssclass("btn_WF_BookmarkS");}else{_b.set_cssclass("btn_WF_Bookmark");}};this.addBtn_onclick=function(_a,_b){if(!_a.enable){return;}var _c=this.getOwnerFrame().form.fvDivWork.form;var _d="cfn";var _e=_d+_a.name;if(_c[_e]){_c.lookupFunc(_e).call(_a,_b);}};this.btnCmmn_onclick=function(_a,_b){if(!_a.enable){return;}var _c=this.getOwnerFrame().form.fvDivWork.form;var _d="cfn";var _e=_a.name.substr(3);var _f=_d+_e;if(_c[_f]){_c.lookupFunc(_f).call();}};this.btnPrint_onclick=function(_a,_b){};this.btnHelp_onclick=function(_a,_b){};this.btnMyMenu_onclick=function(_a,_b){var _c=false;if(this.btnMyMenu.cssclass=="btn_WF_BookmarkS"){_c=true;}var _d=this.objApp.gvFrmLeft.form.dsMyMenu;var _e=this.objApp.gdsMenu;_d.set_enableevent(false);this.objApp.gvFrmLeft.form.divLnb.form.grdMyMenu.set_enableredraw(false);var _f=this.FRAME_MENUCOLUMNS.menuId;var _g=this.FRAME_MENUCOLUMNS.menuNm;var _h=this.FRAME_MENUCOLUMNS.menuUrl;var _i=this.FRAME_MENUCOLUMNS.groupId;var _j=this.FRAME_MENUCOLUMNS.prgmId;var _k=this.FRAME_MENUCOLUMNS.prgmPath;var _l=this.FRAME_MENUCOLUMNS.prgmFileNm;if(_c){var _m=_d.findRow(_f,this.fvMenuId);if(_m>-1){_d.deleteRow(_m);}}else{var _m=_e.findRow(_f,this.fvMenuId);var _n=_d.addRow();var _o=_e.getColumn(_m,_f)?_e.getColumn(_m,_f):"";var _p=_e.getColumn(_m,_g)?_e.getColumn(_m,_g):"";var _q=_e.getColumn(_m,_h)?_e.getColumn(_m,_h):"";var _r=_e.getColumn(_m,_i)?_e.getColumn(_m,_i):"";var _s=_e.getColumn(_m,_j)?_e.getColumn(_m,_j):"";var _t=_q.split("::")[0]?_q.split("::")[0]:"";var _u=_q.split("::")[1]?_q.split("::")[1]:"";_d.setColumn(_n,_f,_o);_d.setColumn(_n,_g,_p);_d.setColumn(_n,_i,_r);_d.setColumn(_n,_j,_s);_d.setColumn(_n,_k,_t);_d.setColumn(_n,_l,_u);_d.setColumn(_n,"SYTM_FLAG_CD",nexacro.getApplication().gvSytmFlagCd);}this.objApp.gvFrmLeft.form.fnSaveMyMenu(_d);_d.set_enableevent(true);this.objApp.gvFrmLeft.form.divLnb.form.grdMyMenu.set_enableredraw(true);this.fnSetBookmarkCss(_a);};});this.on_initEvent=function(){this.addEventHandler("onload",this.form_onload,this);this.addEventHandler("onsize",this.form_onsize,this);this.btnSave.addEventHandler("onclick",this.btnCmmn_onclick,this);this.btnDel.addEventHandler("onclick",this.btnCmmn_onclick,this);this.btnAdd.addEventHandler("onclick",this.btnCmmn_onclick,this);this.btnMyMenu.addEventHandler("onclick",this.btnMyMenu_onclick,this);this.btnHelp.addEventHandler("onclick",this.btnHelp_onclick,this);this.btnPrint.addEventHandler("onclick",this.btnPrint_onclick,this);this.btn00.addEventHandler("onclick",this.Div00_Button01_onclick,this);};this.loadIncludeScript("frmWorkTitleDv.xfdl");this.loadPreloadList();_a=null;};})();