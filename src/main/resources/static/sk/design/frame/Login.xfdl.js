(function(){return function(){if(!this._is_form){return;}var _a=null;this.on_create=function(){this.set_name("Login");this.set_titletext("New Form");this.set_cssclass("frm_LOGIN_Bg");if(Form==this.constructor){this._setFormPosition(1280,900);}_a=new Div("divLogin","440","195","400","510",null,null,null,null,null,null,this);_a.set_taborder("0");_a.set_text("");_a.set_background("");_a.set_cssclass("div_LOGIN_Bg");_a.set_formscrollbartype("none none");this.addChild(_a.name,_a);_a=new Static("staUserId","30","160",null,"50","30",null,null,null,null,null,this.divLogin.form);_a.set_taborder("1");_a.set_cssclass("sta_LOGIN_Id");this.divLogin.addChild(_a.name,_a);_a=new Static("staPassword","30","230","340","50",null,null,null,null,null,null,this.divLogin.form);_a.set_taborder("0");_a.set_cssclass("sta_LOGIN_Pw");this.divLogin.addChild(_a.name,_a);_a=new Button("btnLogin","0",null,null,"70","0","0",null,null,null,null,this.divLogin.form);_a.set_taborder("4");_a.set_text("시작하기");_a.set_cssclass("btn_LOGIN_Start");this.divLogin.addChild(_a.name,_a);_a=new Static("staPassword00","30","300","340","50",null,null,null,null,null,null,this.divLogin.form);_a.set_taborder("5");_a.set_cssclass("sta_LOGIN_Language");this.divLogin.addChild(_a.name,_a);_a=new Edit("edtUserId","153","170","210","30",null,null,null,null,null,null,this.divLogin.form);_a.set_taborder("3");_a.set_value("999999");_a.set_cssclass("edt_LOGIN_Input");_a.set_text("999999");this.divLogin.addChild(_a.name,_a);_a=new Edit("edtPassword","153","240","210","30",null,null,null,null,null,null,this.divLogin.form);_a.set_taborder("2");_a.set_value("1111");_a.set_password("true");_a.set_cssclass("edt_LOGIN_Input");_a.set_text("1111");this.divLogin.addChild(_a.name,_a);_a=new Static("Static00","74","28","273","98",null,null,null,null,null,null,this.divLogin.form);_a.set_taborder("6");_a.set_cssclass("sta_LOGIN_Logo");this.divLogin.addChild(_a.name,_a);_a=new Combo("Combo00","153","305","212","38",null,null,null,null,null,null,this.divLogin.form);_a.set_taborder("7");_a.set_cssclass("cbo_LOGIN_Input");_a.set_codecolumn("codecolumn");_a.set_datacolumn("datacolumn");var _b=new nexacro.NormalDataset("divLogin_form_Combo00_innerdataset",_a);_b._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">한국어</Col></Row><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">English</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">日本語</Col></Row></Rows>");_a.set_innerdataset(_b);_a.set_text("한국어");_a.set_value("0");_a.set_index("0");this.divLogin.addChild(_a.name,_a);_a=new CheckBox("CheckBox00","33","376","84","30",null,null,null,null,null,null,this.divLogin.form);_a.set_taborder("8");_a.set_text("아이디저장");_a.set_cssclass("chk_LOGIN_Id");this.divLogin.addChild(_a.name,_a);_a=new Button("Button00","135","376","87","30",null,null,null,null,null,null,this.divLogin.form);_a.set_taborder("9");_a.set_text("비밀번호변경");_a.set_cssclass("btn_LOGIN_Pw");this.divLogin.addChild(_a.name,_a);_a=new Static("Static01","123","386","1","10",null,null,null,null,null,null,this.divLogin.form);_a.set_taborder("10");_a.set_cssclass("sta_LOGIN_Line");this.divLogin.addChild(_a.name,_a);_a=new Layout("default","",0,0,this.divLogin.form,function(_c){});this.divLogin.form.addLayout(_a.name,_a);_a=new Layout("default","",1280,900,this,function(_c){});_a.set_mobileorientation("landscape");this.addLayout(_a.name,_a);_a=new BindItem("item0","divLogin.form.edtUserId","value","dsSearch","USER_ID");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item1","divLogin.form.edtPassword","value","dsSearch","USER_PASSWORD");this.addChild(_a.name,_a);_a.bind();};this.loadPreloadList=function(){};this.registerScript("Login.xfdl",function(){this.Login_onload=function(_a,_b){this.fn_divLogin_onsize();};this.Login_onsize=function(_a,_b){this.fn_divLogin_onsize();};this.fn_divLogin_onsize=function(){var _b=(nexacro.getApplication().mainframe.width/2)-Math.round((this.divLogin.getOffsetWidth())/2);var _c=(nexacro.getApplication().mainframe.height/2)-Math.round((this.divLogin.getOffsetHeight())/2);if(_b<=0){this.divLogin.setOffsetLeft(0);}else{this.divLogin.setOffsetLeft(_b);this.divLogin.setOffsetTop(_c);}};});this.on_initEvent=function(){this.addEventHandler("onload",this.Login_onload,this);this.addEventHandler("onsize",this.Login_onsize,this);};this.loadIncludeScript("Login.xfdl");this.loadPreloadList();_a=null;};})();