(function(){return function(){if(!this._is_form){return;}var _a=null;this.on_create=function(){this.set_name("test");this.set_titletext("채팅 샘플");if(Form==this.constructor){this._setFormPosition(1147,579);}_a=new Dataset("dsStatic",this);_a._setContents("<ColumnInfo><Column id=\"compId\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Div("divChat","344","38","339","492",null,null,null,null,null,null,this);_a.set_taborder("0");_a.set_border("1px solid");this.addChild(_a.name,_a);_a=new TextArea("txtSend","694","38","206","140",null,null,null,null,null,null,this);_a.set_taborder("1");this.addChild(_a.name,_a);_a=new Button("btnSend","909","42","85","131",null,null,null,null,null,null,this);_a.set_taborder("2");_a.set_text("보내기");this.addChild(_a.name,_a);_a=new TextArea("txtReceive","35","37","206","140",null,null,null,null,null,null,this);_a.set_taborder("3");this.addChild(_a.name,_a);_a=new Button("btnReceive","250","41","85","131",null,null,null,null,null,null,this);_a.set_taborder("4");_a.set_text("받기");this.addChild(_a.name,_a);_a=new Grid("grd00","35","218","286","313",null,null,null,null,null,null,this);_a.set_taborder("5");_a.set_binddataset("dsStatic");_a._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"258\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"compId\"/></Band><Band id=\"body\"><Cell text=\"bind:compId\"/></Band></Format></Formats>");this.addChild(_a.name,_a);_a=new Div("divChat00","694","218","306","312",null,null,null,null,null,null,this);_a.set_taborder("6");_a.set_border("1px solid");this.addChild(_a.name,_a);_a=new Static("sta00",null,"5","120","36","0",null,null,null,null,null,this.divChat00.form);_a.set_taborder("0");_a.set_text("우리나라는\r\n날씨가 너무 더워요~");_a.set_background("antiquewhite");_a.set_fittocontents("both");this.divChat00.addChild(_a.name,_a);_a=new Static("sta00_00","0","sta00:10","150","36",null,null,null,null,null,null,this.divChat00.form);_a.set_taborder("1");_a.set_text("그렇죠~\r\n더운데 몸 관리 잘 하세요");_a.set_background("azure");_a.set_fittocontents("both");this.divChat00.addChild(_a.name,_a);_a=new Layout("default","",0,0,this.divChat.form,function(_b){});this.divChat.form.addLayout(_a.name,_a);_a=new Layout("default","",0,0,this.divChat00.form,function(_b){});this.divChat00.form.addLayout(_a.name,_a);_a=new Layout("default","",1147,579,this,function(_b){});this.addLayout(_a.name,_a);};this.loadPreloadList=function(){};this.registerScript("sampleChatting.xfdl",function(){this.fv_nCnt=0;this.form_onload=function(_a,_b){};this.fnCreate=function(_b,_c){var _d="";var _e=null;var _f=null;if(_b=="send"){_d="antiquewhite";_e=null;_f=3;}else{_d="azure";_e=3;_f=null;}var _g=this.dsStatic.rowcount;var _h=10;if(_g>0){_h=this.dsStatic.getColumn(_g -1,"compId")+":10";}this.fv_nCnt=this.fv_nCnt+1;var _i=new Static();var _j="sta_"+this.fv_nCnt;_i.init(_j,_e,_h,10,10,_f);this.divChat.addChild(_j,_i);_i.set_text(_c);_i.set_background(_d);_i.set_fittocontents("both");_i.show();trace("추가한 objStatic : "+_j+" / nTop : "+_h);this.divChat.form.resetScroll();var _k=this.dsStatic.addRow();this.dsStatic.setColumn(_k,"compId",_j);};this.btnSend_onclick=function(_a,_b){this.fnCreate("send",this.txtSend.value);this.txtSend.set_value("");};this.btnReceive_onclick=function(_a,_b){this.fnCreate("receive",this.txtReceive.value);this.txtReceive.set_value("");};this.txtSend_onkeyup=function(_a,_b){if(_b.ctrlkey==true&&_b.keycode==13){this.fnCreate("send",this.txtSend.value);this.txtSend.set_value("");}};this.txtReceive_onkeyup=function(_a,_b){if(_b.ctrlkey==true&&_b.keycode==13){this.fnCreate("receive",this.txtReceive.value);this.txtReceive.set_value("");}};});this.on_initEvent=function(){this.addEventHandler("onload",this.form_onload,this);this.txtSend.addEventHandler("onkeyup",this.txtSend_onkeyup,this);this.btnSend.addEventHandler("onclick",this.btnSend_onclick,this);this.txtReceive.addEventHandler("onkeyup",this.txtReceive_onkeyup,this);this.btnReceive.addEventHandler("onclick",this.btnReceive_onclick,this);};this.loadIncludeScript("sampleChatting.xfdl");this.loadPreloadList();_a=null;};})();