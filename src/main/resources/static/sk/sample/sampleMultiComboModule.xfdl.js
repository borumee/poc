(function(){return function(){if(!this._is_form){return;}var _a=null;this.on_create=function(){this.set_name("sampleMultiComboModule");this.set_titletext("Composite MultiCombo");if(Form==this.constructor){this._setFormPosition(1050,736);}_a=new Dataset("dsInner",this);_a._setContents("<ColumnInfo><Column id=\"codecolumn\" type=\"STRING\" size=\"256\"/><Column id=\"datacolumn\" type=\"STRING\" size=\"256\"/><Column id=\"checkcolumn\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">01</Col><Col id=\"datacolumn\">백설기</Col></Row><Row><Col id=\"codecolumn\">02</Col><Col id=\"datacolumn\">백설기11</Col></Row><Row><Col id=\"codecolumn\">03</Col><Col id=\"datacolumn\">백설기22</Col></Row><Row><Col id=\"codecolumn\">04</Col><Col id=\"datacolumn\">백설기33</Col></Row><Row><Col id=\"codecolumn\">05</Col><Col id=\"datacolumn\">백설기44</Col></Row><Row><Col id=\"codecolumn\">06</Col><Col id=\"datacolumn\">백설기55</Col></Row><Row><Col id=\"codecolumn\">07</Col><Col id=\"datacolumn\">백설기66</Col></Row><Row><Col id=\"codecolumn\">08</Col><Col id=\"datacolumn\">백설기77</Col></Row><Row><Col id=\"codecolumn\">09</Col><Col id=\"datacolumn\">백설기88</Col></Row><Row><Col id=\"codecolumn\">10</Col><Col id=\"datacolumn\">백설기99</Col></Row><Row><Col id=\"codecolumn\">11</Col><Col id=\"datacolumn\">백설기10</Col></Row><Row><Col id=\"codecolumn\">12</Col><Col id=\"datacolumn\">백설기11</Col></Row><Row><Col id=\"codecolumn\">13</Col><Col id=\"datacolumn\">백설기12</Col></Row></Rows>");this.addChild(_a.name,_a);_a=new Dataset("dsList",this);_a._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"data\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");this.addChild(_a.name,_a);_a=new Dataset("dsSearch",this);_a._setContents("<ColumnInfo><Column id=\"srchCond1\" type=\"STRING\" size=\"256\"/><Column id=\"srchCond2\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");this.addChild(_a.name,_a);_a=new Dataset("dsInner2",this);_a._setContents("<ColumnInfo><Column id=\"ID\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/><Column id=\"DEPARTMENT\" type=\"STRING\" size=\"256\"/><Column id=\"DESCRIPTION\" type=\"STRING\" size=\"256\"/><Column id=\"CHECK\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("dsList2",this);_a._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"data\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");this.addChild(_a.name,_a);_a=new MultiCombo("mcbo00","0","146","300","29",null,null,null,null,null,null,this);_a.getSetter("taborder").set("0");_a.getSetter("datacolumn").set("datacolumn");_a.getSetter("codecolumn").set("codecolumn");_a.getSetter("checkcolumn").set("checkcolumn");_a.getSetter("itemheight").set("35");_a.getSetter("displayrowcount").set("10");_a.getSetter("innerdataset").set("dsInner");this.addChild(_a.name,_a);_a=new Static("Static01","0","100","128","43",null,null,null,null,null,null,this);_a.set_taborder("1");_a.set_text("1) 기본 멀티 콤보");_a.set_cssclass("sta_WF_SubTitle");this.addChild(_a.name,_a);_a=new Static("Static01_00_00","mcbo00:20","100","360","43",null,null,null,null,null,null,this);_a.set_taborder("3");_a.set_text("멀티콤보 innerdataset");_a.set_cssclass("sta_WF_SubTitle");this.addChild(_a.name,_a);_a=new Static("Static01_00","Static01_00_00:20","100",null,"43","20",null,null,null,null,null,this);_a.set_taborder("2");_a.set_text("멀티콤보  value/text바인딩 데이터");_a.set_cssclass("sta_WF_SubTitle");this.addChild(_a.name,_a);_a=new Grid("grd01","mcbo00:20","146","360","210",null,null,null,null,null,null,this);_a.set_taborder("4");_a.set_binddataset("dsInner");_a.set_autofittype("col");_a._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row band=\"head\" size=\"24\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"codecolumn\"/><Cell col=\"1\" text=\"datacolumn\"/><Cell col=\"2\" text=\"checkcolumn\"/></Band><Band id=\"body\"><Cell text=\"bind:codecolumn\"/><Cell col=\"1\" text=\"bind:datacolumn\"/><Cell col=\"2\" text=\"bind:checkcolumn\"/></Band></Format></Formats>");this.addChild(_a.name,_a);_a=new Grid("grd00","grd01:20","146",null,"210","20",null,null,null,null,null,this);_a.set_taborder("5");_a.set_autofittype("col");_a.set_binddataset("dsList");_a._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row band=\"head\" size=\"24\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"code\"/><Cell col=\"1\" text=\"data\"/></Band><Band id=\"body\"><Cell text=\"bind:code\"/><Cell col=\"1\" text=\"bind:data\"/></Band></Format></Formats>");this.addChild(_a.name,_a);_a=new MultiCombo("mcbo01","0","436","300","29",null,null,null,null,null,null,this);_a.getSetter("taborder").set("6");_a.getSetter("datacolumn").set("NAME");_a.getSetter("codecolumn").set("ID");_a.getSetter("checkcolumn").set("CHECK");_a.getSetter("itemheight").set("35");_a.getSetter("displayrowcount").set("10");_a.getSetter("innerdataset").set("dsInner2");this.addChild(_a.name,_a);_a=new Static("Static01_01","0","390","194","43",null,null,null,null,null,null,this);_a.set_taborder("7");_a.set_text("2) 데이터 조회 후 멀티 콤보");_a.set_cssclass("sta_WF_SubTitle");this.addChild(_a.name,_a);_a=new Static("Static01_00_00_00","mcbo01:20","390","360","43",null,null,null,null,null,null,this);_a.set_taborder("8");_a.set_text("멀티콤보 innerdataset");_a.set_cssclass("sta_WF_SubTitle");this.addChild(_a.name,_a);_a=new Static("Static01_00_01","Static01_00_00_00:20","390",null,"43","20",null,null,null,null,null,this);_a.set_taborder("9");_a.set_text("멀티콤보  value/text바인딩 데이터");_a.set_cssclass("sta_WF_SubTitle");this.addChild(_a.name,_a);_a=new Grid("grd01_00","mcbo01:20","436","360","210",null,null,null,null,null,null,this);_a.set_taborder("10");_a.set_binddataset("dsInner2");_a.set_autofittype("col");_a._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row band=\"head\" size=\"24\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"ID\"/><Cell col=\"1\" text=\"NAME\"/><Cell col=\"2\" text=\"DEPARTMENT\"/><Cell col=\"3\" text=\"DESCRIPTION\"/><Cell col=\"4\" text=\"CHECK\"/></Band><Band id=\"body\"><Cell text=\"bind:ID\"/><Cell col=\"1\" text=\"bind:NAME\"/><Cell col=\"2\" text=\"bind:DEPARTMENT\"/><Cell col=\"3\" text=\"bind:DESCRIPTION\"/><Cell col=\"4\" text=\"bind:CHECK\"/></Band></Format></Formats>");this.addChild(_a.name,_a);_a=new Grid("grd00_00","grd01_00:20","436",null,"210","20",null,null,null,null,null,this);_a.set_taborder("11");_a.set_autofittype("col");_a.set_binddataset("dsList2");_a._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row band=\"head\" size=\"24\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"code\"/><Cell col=\"1\" text=\"data\"/></Band><Band id=\"body\"><Cell text=\"bind:code\"/><Cell col=\"1\" text=\"bind:data\"/></Band></Format></Formats>");this.addChild(_a.name,_a);_a=new Button("btnSetDf","Static01:10","110","68","30",null,null,null,null,null,null,this);_a.set_taborder("12");_a.set_text("setValue");this.addChild(_a.name,_a);_a=new Button("btnSetTr","Static01_01:10","400","68","30",null,null,null,null,null,null,this);_a.set_taborder("13");_a.set_text("setValue");this.addChild(_a.name,_a);_a=new TextArea("txaGuide","0","0",null,"80","20",null,null,null,null,null,this);_a.set_taborder("14");_a.set_value("- 멀티콤보 사용 방법\n component 목록에서 Multicombo를 선택 하여 화면에 배치 후, 기본 컨포넌트인  Combo와 동일하게 사용한다.\n - innerdataset에는 기본 컴포넌트 구성과 동일하게 combocolumn, datacolumn이 구성되어야 하고 추가로 checkcolumn도 함께 존재해야한다.");this.addChild(_a.name,_a);_a=new Layout("default","",1050,736,this,function(_b){});_a.set_mobileorientation("landscape");this.addLayout(_a.name,_a);_a=new BindItem("item0","mcbo00","value","dsList","code");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item1","mcbo00.form.comboedit","value","dsList","data");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item2","mcbo01","value","dsList2","code");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item3","mcbo01.form.comboedit","value","dsList2","data");this.addChild(_a.name,_a);_a.bind();};this.loadPreloadList=function(){};this.registerScript("sampleMultiComboModule.xfdl",function(){this.form_onload=function(_a,_b){this.gfnFormOnload(_a,_b);this.fnSearch();};this.fnSearch=function(){var _b="searchSampleList";var _c="searchSampleList.do";var _d="inDs=dsSearch";var _e="dsInner2=outDs";var _f="";this.gfnTransaction(_b,_c,_d,_e,_f);};this.fnCallback=function(_b,_c,_d){if(_b=="searchSampleList"){oInfo=this.dsInner2.getColumnInfo("CHECK");if(this.gfnIsNull(oInfo)){this.dsInner2.addColumn("CHECK","String");}}};this.btnSetDf_onclick=function(_a,_b){this.mcbo00.set_value("05,06");};this.btnSetTr_onclick=function(_a,_b){this.mcbo01.set_value("test");};});this.on_initEvent=function(){this.addEventHandler("onload",this.form_onload,this);this.Static01_01.addEventHandler("onclick",this.Static01_01_onclick,this);this.btnSetDf.addEventHandler("onclick",this.btnSetDf_onclick,this);this.btnSetTr.addEventHandler("onclick",this.btnSetTr_onclick,this);this.txaGuide.addEventHandler("onchanged",this.txaGuide_onchanged,this);};this.loadIncludeScript("sampleMultiComboModule.xfdl");this.loadPreloadList();_a=null;};})();