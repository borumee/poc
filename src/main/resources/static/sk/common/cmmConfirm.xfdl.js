(function(){return function(){if(!this._is_form){return;}var _a=null;this.on_create=function(){this.set_name("cmmConfirm");this.set_titletext("확인창");if(Form==this.constructor){this._setFormPosition(450,210);}_a=new TextArea("txtMsgContent","90","20",null,null,"20","48",null,null,null,null,this);_a.set_taborder("0");_a.set_readonly("true");_a.set_cssclass("txt_POP_Text");this.addChild(_a.name,_a);_a=new Button("btnOk","139","172","50","28",null,null,null,null,null,null,this);_a.set_taborder("1");_a.set_text("확인");_a.set_fittocontents("width");_a.set_cssclass("btn_WF_Crud");this.addChild(_a.name,_a);_a=new Button("btnCancel","btnOk:3","172","50","28",null,null,null,null,null,null,this);_a.set_taborder("2");_a.set_text("취소");_a.set_fittocontents("width");this.addChild(_a.name,_a);_a=new ImageViewer("imgLink","20","64","55","55",null,null,null,null,null,null,this);_a.set_taborder("3");_a.set_image("url(\'theme://images/img_POP_Confirm.png\')");_a.set_text("");_a.set_accessibilitylabel("알림 아이콘");_a.set_stretch("fit");this.addChild(_a.name,_a);_a=new Button("btnExtend","btnCancel:3","172","50","28",null,null,null,null,null,null,this);_a.set_taborder("4");_a.set_text("취소");_a.set_fittocontents("width");_a.set_visible("false");this.addChild(_a.name,_a);_a=new Layout("default","",450,210,this,function(_b){});_a.set_mobileorientation("landscape");this.addLayout(_a.name,_a);};this.loadPreloadList=function(){};this.registerScript("cmmConfirm.xfdl",function(){this.fvArrButton;this.fvArrRtn;this.fvOptSize;this.form_onload=function(_a,_b){this.gfnFormOnload(_a,_b);this.fvOptSize=this.getOwnerFrame().pOptSize;var _c=this.getOwnerFrame().paramContents;this.fnMsgSetting(_c);this.fvArrButton=this.getOwnerFrame().paramButton;this.fvArrRtn=this.getOwnerFrame().paramRtn;if(!this.gfnIsNull(this.fvArrButton)){if(this.fvArrButton.length==3){this.btnExtend.set_visible(true);}for(var _e=0;_e<this.fvArrButton.length;_e++ ){if(_e==0){this.btnOk.set_text(" "+this.fvArrButton[_e]+" ");}if(_e==1){this.btnCancel.set_text(" "+this.fvArrButton[_e]+" ");}if(_e==2){this.btnExtend.set_text(" "+this.fvArrButton[_e]+" ");}}this.resetScroll();var _d=0;if(this.fvArrButton.length<3){_d=this.btnOk.getOffsetWidth()+this.btnCancel.getOffsetWidth()+5;}else{_d=this.btnOk.getOffsetWidth()+this.btnCancel.getOffsetWidth()+this.btnExtend.getOffsetWidth()+10;}this.btnOk.move((this.width-_d)/2,this.btnOk.top);this.resetScroll();}else{var _d=this.btnOk.getOffsetWidth()+this.btnCancel.getOffsetWidth()+5;this.btnOk.move((this.width-_d)/2,this.btnOk.top);this.resetScroll();}this.btnOk.setFocus();};this.fnMsgSetting=function(_b){this.txtMsgContent.set_value(_b);};this.btnOk_onclick=function(_a,_b){if(!this.gfnIsNull(this.fvArrButton)){this.close(this.fvArrRtn[0]);}else{this.close(true);}};this.btnCancel_onclick=function(_a,_b){if(!this.gfnIsNull(this.fvArrButton)){this.close(this.fvArrRtn[1]);}else{this.close(false);}};this.btnExtend_onclick=function(_a,_b){this.close(this.fvArrRtn[2]);};});this.on_initEvent=function(){this.addEventHandler("onload",this.form_onload,this);this.btnOk.addEventHandler("onclick",this.btnOk_onclick,this);this.btnCancel.addEventHandler("onclick",this.btnCancel_onclick,this);this.btnExtend.addEventHandler("onclick",this.btnExtend_onclick,this);};this.loadIncludeScript("cmmConfirm.xfdl");this.loadPreloadList();_a=null;};})();