(function(){return function(){if(!this._is_form){return;}var _a=null;this.on_create=function(){this.set_name("samplePaging");this.set_titletext("페이징샘플");if(Form==this.constructor){this._setFormPosition(1050,736);}_a=new Dataset("ds00",this);_a._setContents("<ColumnInfo><Column id=\"ID\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/><Column id=\"DEPARTMENT\" type=\"STRING\" size=\"256\"/><Column id=\"DESCRIPTION\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("dsSearch",this);_a._setContents("<ColumnInfo><Column id=\"srchCond1\" type=\"STRING\" size=\"256\"/><Column id=\"srchCond2\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");this.addChild(_a.name,_a);_a=new Dataset("dsList",this);_a._setContents("<ColumnInfo><Column id=\"ID\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/><Column id=\"DEPARTMENT\" type=\"STRING\" size=\"256\"/><Column id=\"DESCRIPTION\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Div("divSearch","0","0",null,"54","20",null,null,null,null,null,this);_a.set_taborder("0");_a.set_cssclass("div_WF_Search");_a.set_text("");this.addChild(_a.name,_a);_a=new Combo("Combo01","56","-158","185","28",null,null,null,null,null,null,this.divSearch.form);_a.set_taborder("0");_a.set_codecolumn("codecolumn");_a.set_datacolumn("datacolumn");_a.set_readonly("false");var _b=new nexacro.NormalDataset("divSearch_form_Combo01_innerdataset",_a);_b._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">전체</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">사용</Col></Row><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\">미사용</Col></Row></Rows>");_a.set_innerdataset(_b);_a.set_text("전체");_a.set_value("1");_a.set_index("0");this.divSearch.addChild(_a.name,_a);_a=new Combo("Combo02","282","-158","185","28",null,null,null,null,null,null,this.divSearch.form);_a.set_taborder("1");_a.set_codecolumn("codecolumn");_a.set_datacolumn("datacolumn");_a.set_readonly("false");var _c=new nexacro.NormalDataset("divSearch_form_Combo02_innerdataset",_a);_c._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">전체</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">사용</Col></Row><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\">미사용</Col></Row></Rows>");_a.set_innerdataset(_c);_a.set_text("전체");_a.set_value("1");_a.set_index("0");this.divSearch.addChild(_a.name,_a);_a=new Combo("Combo03","521","-158","184","28",null,null,null,null,null,null,this.divSearch.form);_a.set_taborder("2");_a.set_codecolumn("codecolumn");_a.set_datacolumn("datacolumn");_a.set_readonly("false");var _d=new nexacro.NormalDataset("divSearch_form_Combo03_innerdataset",_a);_d._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">전체</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">사용</Col></Row><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\">미사용</Col></Row></Rows>");_a.set_innerdataset(_d);_a.set_text("전체");_a.set_value("1");_a.set_index("0");this.divSearch.addChild(_a.name,_a);_a=new Calendar("Calendar00","785","-158","184","28",null,null,null,null,null,null,this.divSearch.form);_a.set_taborder("3");_a.set_value("20190308");_a.set_dateformat("yyyy-MM-dd ddd");_a.set_readonly("false");this.divSearch.addChild(_a.name,_a);_a=new Button("btnSearch",null,"12","48","28","25",null,null,null,null,null,this.divSearch.form);_a.set_taborder("4");_a.set_text("조회");_a.set_cssclass("btn_WF_Search");_a.set_visible("true");this.divSearch.addChild(_a.name,_a);_a=new Static("staSearchTitle00","0","12","86","28",null,null,null,null,null,null,this.divSearch.form);_a.set_taborder("5");_a.set_text("아이디");_a.set_cssclass("sta_WF_SchLabel");_a.set_fittocontents("width");this.divSearch.addChild(_a.name,_a);_a=new Edit("Edit00_00","staSearchTitle00:0","12","140","28",null,null,null,null,null,null,this.divSearch.form);_a.set_taborder("6");this.divSearch.addChild(_a.name,_a);_a=new Static("staSearchTitle01","Edit00_00:0","12","86","28",null,null,null,null,null,null,this.divSearch.form);_a.set_taborder("7");_a.set_text("성명");_a.set_cssclass("sta_WF_SchLabel");_a.set_fittocontents("width");this.divSearch.addChild(_a.name,_a);_a=new Edit("Edit00","staSearchTitle01:0","12","140","28",null,null,null,null,null,null,this.divSearch.form);_a.set_taborder("8");this.divSearch.addChild(_a.name,_a);_a=new Static("Static04_00",null,"0","20",null,"0","20",null,null,null,null,this);_a.set_taborder("1");_a.set_cssclass("sta_WF_GSize");_a.set_visible("false");_a.set_text("W20");this.addChild(_a.name,_a);_a=new Grid("grdList","0","97",null,null,"20","35",null,null,null,null,this);_a.set_taborder("2");_a.set_binddataset("ds00");_a.set_autofittype("col");_a.set_autoenter("key");_a._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"37\" band=\"head\"/><Row size=\"37\"/></Rows><Band id=\"head\"><Cell text=\"아이디\"/><Cell col=\"1\" text=\"성명\"/><Cell col=\"2\" text=\"부서\"/><Cell col=\"3\" text=\"비고\"/></Band><Band id=\"body\"><Cell text=\"bind:ID\" displaytype=\"expr:dataset.getRowType(currow)==&apos;2&apos;?&apos;editcontrol&apos;:&apos;normal&apos;\" edittype=\"expr:dataset.getRowType(currow)==&apos;2&apos;?&apos;text&apos;:&apos;none&apos;\" editautoselect=\"true\"/><Cell col=\"1\" text=\"bind:NAME\" edittype=\"text\" displaytype=\"editcontrol\" editautoselect=\"true\"/><Cell col=\"2\" text=\"bind:DEPARTMENT\" edittype=\"text\" displaytype=\"editcontrol\" editautoselect=\"true\"/><Cell col=\"3\" text=\"bind:DESCRIPTION\" edittype=\"text\" displaytype=\"editcontrol\" editautoselect=\"true\"/></Band></Format></Formats>");this.addChild(_a.name,_a);_a=new Static("staTitle","0","54","342","43",null,null,null,null,null,null,this);_a.set_taborder("3");_a.set_text("사용자 정보 조회");_a.set_cssclass("sta_WF_Title");this.addChild(_a.name,_a);_a=new Static("Static04","140","54","30","43",null,null,null,null,null,null,this);_a.set_taborder("4");_a.set_cssclass("sta_WF_GSize");_a.set_visible("false");_a.set_text("H43");this.addChild(_a.name,_a);_a=new Div("divPaging","0","grdList:10",null,"25","20",null,null,null,null,null,this);_a.set_taborder("5");_a.set_text("div00");_a.set_url("common::cmmPaging.xfdl");this.addChild(_a.name,_a);_a=new Static("Static04_01","980","685","30","10",null,null,null,null,null,null,this);_a.set_taborder("6");_a.set_cssclass("sta_WF_GSize");_a.set_visible("false");_a.set_text("H10");this.addChild(_a.name,_a);_a=new Layout("default","",0,0,this.divSearch.form,function(_e){});this.divSearch.form.addLayout(_a.name,_a);_a=new Layout("default","",0,0,this.divPaging.form,function(_e){});this.divPaging.form.addLayout(_a.name,_a);_a=new Layout("default","",1050,736,this,function(_e){});_a.set_mobileorientation("landscape");this.addLayout(_a.name,_a);_a=new BindItem("item0","divSearch.form.Edit00_00","value","dsSearch","srchCond1");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item1","divSearch.form.Edit00","value","dsSearch","srchCond2");this.addChild(_a.name,_a);_a.bind();};this.loadPreloadList=function(){this._addPreloadList("fdl","common::cmmPaging.xfdl");};this.registerScript("samplePaging.xfdl",function(){this.form_onload=function(_a,_b){this.gfnFormOnload(_a,_b);};this.cfnAdd=function(){this.dsList.addRow();};this.cfnDel=function(){var _b=this.dsList.rowposition;var _c=this.dsList.getRowType(_b);if(_c==2){this.dsList.deleteRow(_b);}else{this.gfnAlert("confirm.before.delete");}};this.cfnSave=function(){if(!this.gfnDsIsUpdated(this.dsList)){this.gfnAlert("msg.save.nochange");return;}var _b=this.fnValidation(this.dsList);if(_b){this.gfnAlert("confirm.before.save");}};this.cfnSearch=function(){this.fnSearch();};this.cfnRefresh=function(){this.fnSearchCondInit();this.fnInit();};this.fnSearch=function(){var _b="searchSampleList";var _c="searchSampleList.do";var _d="inDs=dsSearch";var _e="dsList=outDs";var _f="";this.gfnTransaction(_b,_c,_d,_e,_f);};this.fnSave=function(){var _b="saveSampleList";var _c="saveSampleList.do";var _d="inDs=dsList:U";var _e="";var _f="";this.gfnTransaction(_b,_c,_d,_e,_f);};this.fnCallback=function(_b,_c,_d){switch(_b){case "searchSampleList":this.fnPageCallback(1,this.divPaging.form.cboCnt.value);break;case "saveSampleList":this.fnSearch();break;default:break;}};this.fnMsgCallback=function(_b,_c){if(_b=="confirm.before.save"){if(_c){this.fnSave();}else{return;}}else if(_b=="confirm.before.delete"){if(_c){this.dsList.deleteRow(this.dsList.rowposition);}else{return;}}};this.fnPageCallback=function(_b,_c){var _d=(_b -1)* _c;this.ds00.clearData();for(var _f=_d;_f<_c* _b;_f++ ){if(_f>=this.dsList.rowcount){break;}var _e=this.ds00.addRow();this.ds00.copyRow(_e,this.dsList,_f);}this.divPaging.form.fnCreatePage(this.grdList,"fnPageCallback",_b,"",this.dsList.getRowCount());};this.fnInit=function(){this.dsList.clearData();};this.fnSearchCondInit=function(){this.dsSearch.clearData();this.dsSearch.addRow();};this.fnValidation=function(){this.gfnClearValidation(this.dsList);this.gfnSetValidation(this.dsList,"ID","아이디","required,minlength:3,maxlength:13,engnum");this.gfnSetValidation(this.dsList,"NAME","이름","required,korean");if(this.gfnValidation(this.dsList,"U")==false){return false;}var _b=-1;var _c=-1;for(var _d=0;_d<this.dsList.getRowCount();_d++ ){_b=this.dsList.getRowType(_d);if(_b!=2){continue;}_c=this.gfnChkDuplicateData(this.dsList,"ID",_d);if(_c>-1){this.gfnAlert("msg.err.validator.duplcation",["아이디"]);this.dsList.set_rowposition(_d);this.grdList.setCellPos(0);this.grdList.showEditor(true);return false;}}return true;};this.divSearch_btnSearch_onclick=function(_a,_b){this.cfnSearch();};});this.on_initEvent=function(){this.addEventHandler("onload",this.form_onload,this);this.divSearch.form.btnSearch.addEventHandler("onclick",this.divSearch_btnSearch_onclick,this);};this.loadIncludeScript("samplePaging.xfdl");this.loadPreloadList();_a=null;};})();