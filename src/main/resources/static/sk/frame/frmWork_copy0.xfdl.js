(function(){return function(){if(!this._is_form){return;}var _a=null;this.on_create=function(){this.set_name("frmWork");this.set_titletext("WorkFrame");this.set_cssclass("frm_WF_Frame");if(Form==this.constructor){this._setFormPosition(1024,814);}_a=new Div("divTitle","1071","641",null,"52","-998",null,"995",null,null,null,this);_a.set_taborder("0");_a.set_text("");_a.set_url("frame::frmWorkTitleDv.xfdl");_a.set_formscrolltype("none");_a.set_visible("false");this.addChild(_a.name,_a);_a=new Div("divWork","10","10",null,null,"10","10","1022","1920",null,null,this);_a.set_taborder("1");_a.set_text("div00");_a.set_cssclass("div_WF_Frame");this.addChild(_a.name,_a);_a=new Button("btnFull","divTitle:3","653","30","28",null,null,null,null,null,null,this);_a.set_taborder("2");_a.getSetter("uStatus").set("normal");_a.set_cssclass("btn_WF_Full");_a.set_visible("false");this.addChild(_a.name,_a);_a=new Static("staTerm","btnFull:0","660","20","21",null,null,null,null,null,null,this);_a.set_taborder("3");this.addChild(_a.name,_a);_a=new Layout("default","",0,0,this.divTitle.form,function(_b){});this.divTitle.form.addLayout(_a.name,_a);_a=new Layout("default","",0,0,this.divWork.form,function(_b){});this.divWork.form.addLayout(_a.name,_a);_a=new Layout("default","desktop",1024,814,this,function(_b){});this.addLayout(_a.name,_a);};this.loadPreloadList=function(){this._addPreloadList("fdl","frame::frmWorkTitleDv.xfdl");};this.registerScript("frmWork_copy0.xfdl",function(){this.objApp=nexacro.getApplication();this.fvWinKey="";this.fvMenuUrl="";this.fvMenuNm="";this.fvMenuId="";this.fvMenuArgs="";this.fvObjArgs="";this.fvButtonAuthorYn="";this.fvSearchScopeCd="";this.fvDivWork=this.divWork;this.form_onload=function(_a,_b){if(nexacro._quickview_formurl){this.btnFull.set_visible(false);this.btnFull.set_width(0);this.resetScroll();this.fvDivWork.form.set_url(nexacro._quickview_formurl);this.divTitle.form.fnSetAuthBtn("1110000");var _c=this;nexacro._OnceCallbackTimer.callonce(_c,function(){_c.fnSetDivTitle("[QUICKVIEW]\t"+_c.fvDivWork.form.titletext);},1000);return;}this.fnSetOwnFrameArgu(this);this.fnSetDivTitle();this.fvSearchScopeCd=this.gfnGetSearchScopeCd(this.fvMenuId);this.fvDivWork.form.set_url(this.fvMenuUrl);this.fnMenuOpenLog();};this.form_onclose=function(_a,_b){if(nexacro._quickview_formurl){return;}try{if(_b.fromobject=="[object Form]"&&_b.fromobject.name=="frmWork"){var _c=this.getOwnerFrame().name;if(this.objApp.gvFrmMdi.form.bClose){this.objApp.gvFrmMdi.form.bClose=false;this.objApp.gvFrmMdi.form.fnTabOnClose(_c);this.fvDivWork.set_url("");}}}catch(_b){}};this.form_onsize=function(_a,_b){this.divWork.set_right(0);};this.fnMenuOpenLog=function(){if(nexacro._quickview_formurl){return;}};this.fnWorkFrameClose=function(){if(nexacro._quickview_formurl){return;}var _b=true;this.gfnUpdateToDataset();try{if(this.gfnIsNull(this.fvDivWork.form.lookup("cfnClose"))){if(this.gfnGetRunMode()=="L"||this.gfnGetRunMode()=="S"){this.gfnLog("해당화면에 cfnClose 함수가 없습니다. cfnClose 함수가 없으면 데이타 변경여부 체크를 하지 않습니다.");}}else{_b=this.fvDivWork.form.cfnClose();}}catch(e){_b=true;this.gfnLog("cfnClose() : "+e.message,"error");}return _b;};this.fnSetOwnFrameArgu=function(_b){if(nexacro._quickview_formurl){return;}this.fvWinKey=this.gfnGetArgument(this.FRAME_MENUCOLUMNS.winId);this.fvMenuId=this.gfnGetArgument(this.FRAME_MENUCOLUMNS.menuId);this.fvMenuNm=this.gfnGetArgument(this.FRAME_MENUCOLUMNS.menuNm);this.fvMenuUrl=this.gfnGetArgument(this.FRAME_MENUCOLUMNS.menuUrl);this.fvPrgmId=this.gfnGetArgument(this.FRAME_MENUCOLUMNS.prgmId);this.fvMenuArgs=this.gfnGetArgument("menuParam");this.fvMenuNavi=this.gfnGetArgument("menuNavi");this.fvSearchScopeCd=this.gfnGetArgument("searchScopeCd");};this.fnSetDivTitle=function(_b){if(nexacro._quickview_formurl){this.divTitle.form.staNavi.set_text(_b);return;}this.divTitle.form.staNavi.set_text(this.gfnTrim(this.fvMenuNavi)+" ");this.divTitle.form.resetScroll();if(this.objApp.gvIsComBtnUse){var _c=this.gfnGetAuth(this.fvMenuId);this.divTitle.form.fnSetAuthBtn(_c);}};this.fnSetStatus=function(){var _b=this.btnFull.uStatus;if(this.gfnIsNull(_b)){_b="normal";}var _c=(_b=="normal"?"max":"normal");var _d=(_c=="normal"?"btn_WF_Full":"btn_WF_Normal");this.btnFull.uStatus=_c;this.btnFull.set_cssclass(_d);return _c;};this.btnFull_onclick=function(_a,_b){var _c=this.fnSetStatus();this.gfnSetWorkMode(_c);this.resetScroll();};});this.on_initEvent=function(){this.addEventHandler("onload",this.form_onload,this);this.addEventHandler("onclose",this.form_onclose,this);this.addEventHandler("onsize",this.form_onsize,this);this.btnFull.addEventHandler("onclick",this.btnFull_onclick,this);};this.loadIncludeScript("frmWork_copy0.xfdl");this.loadPreloadList();_a=null;};})();