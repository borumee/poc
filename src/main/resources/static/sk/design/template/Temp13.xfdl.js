(function(){return function(){if(!this._is_form){return;}var _a=null;this.on_create=function(){this.set_name("Temp13");this.set_titletext("Master-List-Detail-H+V+V(n:n:1)");this.set_cssclass("frm_WF_Frame");if(Form==this.constructor){this._setFormPosition(1050,736);}_a=new Dataset("ds_grid",this);_a._setContents("<ColumnInfo><Column id=\"chk\" type=\"STRING\" size=\"256\"/><Column id=\"No\" type=\"STRING\" size=\"256\"/><Column id=\"Edi\" type=\"STRING\" size=\"256\"/><Column id=\"Essential\" type=\"STRING\" size=\"256\"/><Column id=\"Num\" type=\"STRING\" size=\"256\"/><Column id=\"CenterAlign\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"No\">01</Col><Col id=\"Edi\">가나다라마바</Col><Col id=\"Essential\">투비</Col><Col id=\"Num\">1000000</Col><Col id=\"CenterAlign\">가나다라마바사</Col></Row><Row><Col id=\"No\">02</Col><Col id=\"Edi\">가나다라마바</Col><Col id=\"Essential\">투비</Col><Col id=\"Num\">1000000</Col><Col id=\"CenterAlign\">가나다라마바사</Col></Row><Row><Col id=\"No\">03</Col><Col id=\"Edi\">가나다라마바</Col><Col id=\"Essential\">투비</Col><Col id=\"Num\">1000000</Col><Col id=\"CenterAlign\">가나다라마바사</Col></Row><Row><Col id=\"No\">04</Col><Col id=\"Edi\">가나다라마바</Col><Col id=\"Essential\">투비</Col><Col id=\"Num\">1000000</Col><Col id=\"CenterAlign\">가나다라마바사</Col></Row><Row><Col id=\"No\">05</Col><Col id=\"Edi\">가나다라마바</Col><Col id=\"Essential\">투비</Col><Col id=\"Num\">1000000</Col><Col id=\"CenterAlign\">가나다라마바사</Col></Row><Row><Col id=\"No\">06</Col><Col id=\"Edi\">가나다라마바</Col><Col id=\"Essential\">투비</Col><Col id=\"Num\">1000000</Col><Col id=\"CenterAlign\">가나다라마바사</Col></Row><Row><Col id=\"No\">07</Col><Col id=\"Edi\">가나다라마바</Col><Col id=\"Essential\">투비</Col><Col id=\"Num\">1000000</Col><Col id=\"CenterAlign\">가나다라마바사</Col></Row><Row><Col id=\"No\">08</Col><Col id=\"Edi\">가나다라마바</Col><Col id=\"Essential\">투비</Col><Col id=\"Num\">1000000</Col><Col id=\"CenterAlign\">가나다라마바사</Col></Row><Row><Col id=\"No\">09</Col><Col id=\"Edi\">가나다라마바</Col><Col id=\"Essential\">투비</Col><Col id=\"Num\">1000000</Col><Col id=\"CenterAlign\">가나다라마바사</Col></Row><Row><Col id=\"No\">10</Col><Col id=\"Edi\">가나다라마바</Col><Col id=\"Essential\">투비</Col><Col id=\"Num\">1000000</Col><Col id=\"CenterAlign\">가나다라마바사</Col></Row><Row><Col id=\"No\">11</Col><Col id=\"Edi\">가나다라마바</Col><Col id=\"Essential\">투비</Col><Col id=\"Num\">1000000</Col><Col id=\"CenterAlign\">가나다라마바사</Col></Row><Row><Col id=\"No\">12</Col><Col id=\"Edi\">가나다라마바</Col><Col id=\"Essential\">투비</Col><Col id=\"Num\">1000000</Col><Col id=\"CenterAlign\">가나다라마바사</Col></Row><Row><Col id=\"No\">13</Col><Col id=\"Edi\">가나다라마바</Col><Col id=\"Essential\">투비</Col><Col id=\"Num\">1000000</Col><Col id=\"CenterAlign\">가나다라마바사</Col></Row><Row><Col id=\"No\">14</Col><Col id=\"Edi\">가나다라마바</Col><Col id=\"Essential\">투비</Col><Col id=\"Num\">1000000</Col><Col id=\"CenterAlign\">가나다라마바사</Col></Row><Row><Col id=\"No\">15</Col><Col id=\"Edi\">가나다라마바</Col><Col id=\"Essential\">투비</Col><Col id=\"Num\">1000000</Col><Col id=\"CenterAlign\">가나다라마바사</Col></Row><Row/><Row/><Row/></Rows>");this.addChild(_a.name,_a);_a=new Static("sta00","0","50","342","43",null,null,null,null,null,null,this);_a.set_taborder("0");_a.set_text("서브타이틀");_a.set_cssclass("sta_WF_Title");this.addChild(_a.name,_a);_a=new Grid("gid00","0","93",null,"643","545",null,null,null,null,null,this);_a.set_taborder("1");_a.set_binddataset("ds_grid");_a.set_autofittype("col");_a._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"48\"/><Column size=\"160\"/><Column size=\"60\"/><Column size=\"80\"/><Column size=\"120\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"32\"/></Rows><Band id=\"head\"><Cell text=\"chk\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"No\"/><Cell col=\"2\" text=\"에디트\"/><Cell col=\"3\" text=\"필수\" cssclass=\"essential\"/><Cell col=\"4\" text=\"숫자\"/><Cell col=\"5\" text=\"텍스트\"/></Band><Band id=\"body\"><Cell text=\"bind:chk\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"bind:No\" displaytype=\"text\"/><Cell col=\"2\" text=\"bind:Edi\" displaytype=\"editcontrol\" edittype=\"normal\"/><Cell col=\"3\" text=\"bind:Essential\" displaytype=\"text\"/><Cell col=\"4\" text=\"bind:Num\" displaytype=\"number\"/><Cell col=\"5\" text=\"bind:CenterAlign\" displaytype=\"text\"/></Band></Format></Formats>");this.addChild(_a.name,_a);_a=new Static("sta04","140","50","30","43",null,null,null,null,null,null,this);_a.set_taborder("2");_a.set_cssclass("sta_WF_GSize");_a.set_visible("false");_a.set_text("H43");this.addChild(_a.name,_a);_a=new Static("sta01","gid00:20","50","342","43",null,null,null,null,null,null,this);_a.set_taborder("3");_a.set_text("상세리스트01");_a.set_cssclass("sta_WF_SubTitle");this.addChild(_a.name,_a);_a=new Static("sta04_00",null,"0","20",null,"0","0",null,null,null,null,this);_a.set_taborder("4");_a.set_cssclass("sta_WF_GSize");_a.set_visible("false");_a.set_text("W20");this.addChild(_a.name,_a);_a=new Div("div02","gid00:20","324","505","412",null,null,null,null,null,null,this);_a.set_taborder("5");_a.set_text("");_a.set_formscrollbartype("none none");this.addChild(_a.name,_a);_a=new Static("sta07","0","66",null,"34","0",null,null,null,null,null,this.div02.form);_a.set_taborder("4");_a.set_cssclass("sta_WF_LabelBg");this.div02.addChild(_a.name,_a);_a=new Static("sta03","0","0",null,"34","0",null,null,null,null,null,this.div02.form);_a.set_taborder("1");_a.set_cssclass("sta_WF_LabelBg");this.div02.addChild(_a.name,_a);_a=new Static("sta06","0","33",null,"34","0",null,null,null,null,null,this.div02.form);_a.set_taborder("0");_a.set_cssclass("sta_WF_LabelBg");_a.set_text("");this.div02.addChild(_a.name,_a);_a=new Static("sta04","0","165",null,"34","0",null,null,null,null,null,this.div02.form);_a.set_taborder("26");_a.set_cssclass("sta_WF_LabelBg");this.div02.addChild(_a.name,_a);_a=new Static("sta16","0","132",null,"34","0",null,null,null,null,null,this.div02.form);_a.set_taborder("27");_a.set_cssclass("sta_WF_LabelBg");this.div02.addChild(_a.name,_a);_a=new Static("sta18","0","99",null,"34","0",null,null,null,null,null,this.div02.form);_a.set_taborder("28");_a.set_cssclass("sta_WF_LabelBg");this.div02.addChild(_a.name,_a);_a=new Static("sta19","0","198",null,"34","0",null,null,null,null,null,this.div02.form);_a.set_taborder("29");_a.set_cssclass("sta_WF_LabelBg");this.div02.addChild(_a.name,_a);_a=new Static("sta24","0","231",null,null,"0","0",null,null,null,null,this.div02.form);_a.set_taborder("30");_a.set_cssclass("sta_WF_LabelBg");this.div02.addChild(_a.name,_a);_a=new Static("sta02","0","0","108","34",null,null,null,null,null,null,this.div02.form);_a.set_taborder("2");_a.set_text("에디트");_a.set_cssclass("sta_WF_Label");this.div02.addChild(_a.name,_a);_a=new Static("sta05","0","33","108","34",null,null,null,null,null,null,this.div02.form);_a.set_taborder("3");_a.set_text("라디오버튼");_a.set_cssclass("sta_WF_Label");this.div02.addChild(_a.name,_a);_a=new Static("sta08","0","66","108","34",null,null,null,null,null,null,this.div02.form);_a.set_taborder("5");_a.set_text("체크박스");_a.set_cssclass("sta_WF_Label");this.div02.addChild(_a.name,_a);_a=new Static("sta09","252","0","108","34",null,null,null,null,null,null,this.div02.form);_a.set_taborder("6");_a.set_text("캘린더");_a.set_cssclass("sta_WF_Label");this.div02.addChild(_a.name,_a);_a=new Static("sta10","0","99","108","34",null,null,null,null,null,null,this.div02.form);_a.set_taborder("7");_a.set_text("콤보박스");_a.set_cssclass("sta_WF_Label");this.div02.addChild(_a.name,_a);_a=new Static("sta11","252","99","108","34",null,null,null,null,null,null,this.div02.form);_a.set_taborder("8");_a.set_text("필수에디트");_a.set_cssclass("sta_WF_Label");this.div02.addChild(_a.name,_a);_a=new Static("sta12","0","132","108","34",null,null,null,null,null,null,this.div02.form);_a.set_taborder("9");_a.set_text("디세이블검색");_a.set_cssclass("sta_WF_Label");this.div02.addChild(_a.name,_a);_a=new Static("sta13","252","132","108","34",null,null,null,null,null,null,this.div02.form);_a.set_taborder("10");_a.set_text("검색");_a.set_cssclass("sta_WF_Label");this.div02.addChild(_a.name,_a);_a=new Static("sta14","252","33","108","34",null,null,null,null,null,null,this.div02.form);_a.set_taborder("11");_a.set_text("에디트");_a.set_cssclass("sta_WF_Label");this.div02.addChild(_a.name,_a);_a=new Static("sta17","0","165","108","34",null,null,null,null,null,null,this.div02.form);_a.set_taborder("12");_a.set_text("에디트");_a.set_cssclass("sta_WF_Label");this.div02.addChild(_a.name,_a);_a=new Combo("cbo00","112","104","136","24",null,null,null,null,null,null,this.div02.form);_a.set_taborder("13");_a.set_text("Combo00");this.div02.addChild(_a.name,_a);_a=new Edit("edt00","112","137","136","24",null,null,null,null,null,null,this.div02.form);_a.set_taborder("14");_a.set_enable("false");_a.set_cssclass("edi_WF_Search");this.div02.addChild(_a.name,_a);_a=new Edit("edt01","364","137","136","24",null,null,null,null,null,null,this.div02.form);_a.set_taborder("15");_a.set_cssclass("edi_WF_Search");this.div02.addChild(_a.name,_a);_a=new Edit("edt02","364","104","136","24",null,null,null,null,null,null,this.div02.form);_a.set_taborder("16");_a.set_cssclass("essential");this.div02.addChild(_a.name,_a);_a=new Button("btn02","220","137","28","24",null,null,null,null,null,null,this.div02.form);_a.set_taborder("17");_a.set_cssclass("btn_WF_EdiSch");_a.set_enable("false");this.div02.addChild(_a.name,_a);_a=new Button("btn00","472","137","28","24",null,null,null,null,null,null,this.div02.form);_a.set_taborder("18");_a.set_cssclass("btn_WF_EdiSch");this.div02.addChild(_a.name,_a);_a=new Edit("edt05","112","5","136","24",null,null,null,null,null,null,this.div02.form);_a.set_taborder("19");this.div02.addChild(_a.name,_a);_a=new Radio("rdo00","112","38","136","24",null,null,null,null,null,null,this.div02.form);_a.set_taborder("20");_a.set_codecolumn("codecolumn");_a.set_datacolumn("datacolumn");_a.set_direction("vertical");_a.set_columncount("-1");_a.set_rowcount("-1");var _b=new nexacro.NormalDataset("div02_form_rdo00_innerdataset",_a);_b._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">체크</Col></Row><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">체크</Col></Row></Rows>");_a.set_innerdataset(_b);_a.set_text("체크");_a.set_value("0");_a.set_index("0");this.div02.addChild(_a.name,_a);_a=new CheckBox("chk00","112","71","150","24",null,null,null,null,null,null,this.div02.form);_a.set_taborder("21");_a.set_text("사용");_a.set_value("true");this.div02.addChild(_a.name,_a);_a=new Calendar("cal00","364","5","136","24",null,null,null,null,null,null,this.div02.form);_a.set_taborder("22");this.div02.addChild(_a.name,_a);_a=new Edit("edt06","364","38","94","24",null,null,null,null,null,null,this.div02.form);_a.set_taborder("23");this.div02.addChild(_a.name,_a);_a=new Button("btn01","461","38","40","24",null,null,null,null,null,null,this.div02.form);_a.set_taborder("24");_a.set_text("버튼");_a.set_cssclass("btn_WF_Detail");this.div02.addChild(_a.name,_a);_a=new Spin("spn00","364","71","136","24",null,null,null,null,null,null,this.div02.form);_a.set_taborder("25");this.div02.addChild(_a.name,_a);_a=new Static("sta25","252","66","108","34",null,null,null,null,null,null,this.div02.form);_a.set_taborder("31");_a.set_text("스핀박스");_a.set_cssclass("sta_WF_Label");this.div02.addChild(_a.name,_a);_a=new Static("sta26","0","231","108",null,null,"0",null,null,null,null,this.div02.form);_a.set_taborder("32");_a.set_text("텍스트박스");_a.set_cssclass("sta_WF_Label");this.div02.addChild(_a.name,_a);_a=new Static("sta31","0","198","108","34",null,null,null,null,null,null,this.div02.form);_a.set_taborder("33");_a.set_text("마스크에디트");_a.set_cssclass("sta_WF_Label");this.div02.addChild(_a.name,_a);_a=new Static("sta36","252","198","108","34",null,null,null,null,null,null,this.div02.form);_a.set_taborder("34");_a.set_text("마스크에디트");_a.set_cssclass("sta_WF_Label");this.div02.addChild(_a.name,_a);_a=new Edit("edt07","112","170","389","24",null,null,null,null,null,null,this.div02.form);_a.set_taborder("35");this.div02.addChild(_a.name,_a);_a=new MaskEdit("mak00","112","203","136","24",null,null,null,null,null,null,this.div02.form);_a.set_taborder("36");_a.set_value("50000000");_a.set_format("###,###");this.div02.addChild(_a.name,_a);_a=new MaskEdit("mak01","364","203","136","24",null,null,null,null,null,null,this.div02.form);_a.set_taborder("37");_a.set_format("###,###");_a.set_value("50000000");this.div02.addChild(_a.name,_a);_a=new TextArea("txa00","112","236",null,null,"4","4",null,null,null,null,this.div02.form);_a.set_taborder("38");this.div02.addChild(_a.name,_a);_a=new Static("sta00_00_00","gid00:20","281","214","43",null,null,null,null,null,null,this);_a.set_taborder("6");_a.set_text("상세디테일02");_a.set_cssclass("sta_WF_SubTitle");this.addChild(_a.name,_a);_a=new Grid("gid00_00","gid00:20","93","505","188",null,null,null,null,null,null,this);_a.set_taborder("7");_a.set_binddataset("ds_grid");_a.set_autofittype("col");_a._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"48\"/><Column size=\"160\"/><Column size=\"60\"/><Column size=\"80\"/><Column size=\"120\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"32\"/></Rows><Band id=\"head\"><Cell text=\"chk\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"No\"/><Cell col=\"2\" text=\"에디트\"/><Cell col=\"3\" text=\"필수\" cssclass=\"essential\"/><Cell col=\"4\" text=\"숫자\"/><Cell col=\"5\" text=\"텍스트\"/></Band><Band id=\"body\"><Cell text=\"bind:chk\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"bind:No\" displaytype=\"text\"/><Cell col=\"2\" text=\"bind:Edi\" displaytype=\"editcontrol\" edittype=\"normal\"/><Cell col=\"3\" text=\"bind:Essential\" displaytype=\"text\"/><Cell col=\"4\" text=\"bind:Num\" displaytype=\"number\"/><Cell col=\"5\" text=\"bind:CenterAlign\" displaytype=\"text\"/></Band></Format></Formats>");this.addChild(_a.name,_a);_a=new Div("div00",null,"60","367","33","gid00_00:19",null,null,null,null,null,this);_a.set_taborder("8");_a.set_text("div00");this.addChild(_a.name,_a);_a=new Button("btnCust00_00_00","248","0","119","28",null,null,null,null,null,null,this.div00.form);_a.set_taborder("0");_a.set_text("엑셀다운로드");_a.set_fittocontents("width");_a.set_cssclass("btn_WF_ExcelSave");this.div00.addChild(_a.name,_a);_a=new Button("btnCust01_00_00","138","0",null,"28","btnCust00_00_00:3",null,null,null,null,null,this.div00.form);_a.set_taborder("1");_a.set_text("엑셀업로드");_a.set_fittocontents("width");_a.set_cssclass("btn_WF_ExcelUp");this.div00.addChild(_a.name,_a);_a=new Div("divSearch","0","0",null,"50","20",null,null,null,null,null,this);_a.set_taborder("9");_a.set_cssclass("div_WF_Search");_a.set_text("");this.addChild(_a.name,_a);_a=new Static("sta00","0","12","98","24",null,null,null,null,null,null,this.divSearch.form);_a.set_taborder("0");_a.set_text("필수캘린더");_a.set_cssclass("sta_WF_SchLabel");_a.set_fittocontents("width");this.divSearch.addChild(_a.name,_a);_a=new Combo("cbo01","56","-158","185","24",null,null,null,null,null,null,this.divSearch.form);_a.set_taborder("1");_a.set_codecolumn("codecolumn");_a.set_datacolumn("datacolumn");_a.set_readonly("false");var _c=new nexacro.NormalDataset("divSearch_form_cbo01_innerdataset",_a);_c._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">전체</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">사용</Col></Row><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\">미사용</Col></Row></Rows>");_a.set_innerdataset(_c);_a.set_text("전체");_a.set_value("1");_a.set_index("0");this.divSearch.addChild(_a.name,_a);_a=new Combo("cbo02","282","-158","185","24",null,null,null,null,null,null,this.divSearch.form);_a.set_taborder("2");_a.set_codecolumn("codecolumn");_a.set_datacolumn("datacolumn");_a.set_readonly("false");var _d=new nexacro.NormalDataset("divSearch_form_cbo02_innerdataset",_a);_d._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">전체</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">사용</Col></Row><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\">미사용</Col></Row></Rows>");_a.set_innerdataset(_d);_a.set_text("전체");_a.set_value("1");_a.set_index("0");this.divSearch.addChild(_a.name,_a);_a=new Combo("cbo03","521","-158","184","24",null,null,null,null,null,null,this.divSearch.form);_a.set_taborder("3");_a.set_codecolumn("codecolumn");_a.set_datacolumn("datacolumn");_a.set_readonly("false");var _e=new nexacro.NormalDataset("divSearch_form_cbo03_innerdataset",_a);_e._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">전체</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">사용</Col></Row><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\">미사용</Col></Row></Rows>");_a.set_innerdataset(_e);_a.set_text("전체");_a.set_value("1");_a.set_index("0");this.divSearch.addChild(_a.name,_a);_a=new Calendar("cal00","785","-158","184","24",null,null,null,null,null,null,this.divSearch.form);_a.set_taborder("4");_a.set_value("20190308");_a.set_dateformat("yyyy-MM-dd ddd");_a.set_readonly("false");this.divSearch.addChild(_a.name,_a);_a=new Static("sta01","238","12","86","24",null,null,null,null,null,null,this.divSearch.form);_a.set_taborder("5");_a.set_text("검색라벨");_a.set_cssclass("sta_WF_SchLabel");this.divSearch.addChild(_a.name,_a);_a=new Edit("edt00","324","12","140","24",null,null,null,null,null,null,this.divSearch.form);_a.set_taborder("6");this.divSearch.addChild(_a.name,_a);_a=new Button("btnSearch",null,"10","48","28","25",null,null,null,null,null,this.divSearch.form);_a.set_taborder("7");_a.set_text("조회");_a.set_cssclass("btn_WF_Search");this.divSearch.addChild(_a.name,_a);_a=new Calendar("cal01","98","12","140","24",null,null,null,null,null,null,this.divSearch.form);_a.set_taborder("8");_a.set_cssclass("essential");this.divSearch.addChild(_a.name,_a);_a=new Edit("edt04","467","12","140","24",null,null,null,null,null,null,this.divSearch.form);_a.set_taborder("9");_a.set_cssclass("edi_WF_Search");this.divSearch.addChild(_a.name,_a);_a=new Button("btn02","579","12","28","24",null,null,null,null,null,null,this.divSearch.form);_a.set_taborder("10");_a.set_cssclass("btn_WF_EdiSch");this.divSearch.addChild(_a.name,_a);_a=new Layout("default","",0,0,this.div02.form,function(_f){});this.div02.form.addLayout(_a.name,_a);_a=new Layout("default","",0,0,this.div00.form,function(_f){});this.div00.form.addLayout(_a.name,_a);_a=new Layout("default","",0,0,this.divSearch.form,function(_f){});this.divSearch.form.addLayout(_a.name,_a);_a=new Layout("default","",1050,736,this,function(_f){});this.addLayout(_a.name,_a);};this.loadPreloadList=function(){};this.registerScript("Temp13.xfdl",function(){this.form_onload=function(_a,_b){this.gfnFormOnload(_a,_b);};this.cfnSearch=function(){};this.cfnSave=function(){};this.cfnAdd=function(){};this.cfnDel=function(){};});this.on_initEvent=function(){this.addEventHandler("onload",this.form_onload,this);this.div02.form.btn02.addEventHandler("onclick",this.Div00_Button01_onclick,this);this.div02.form.btn00.addEventHandler("onclick",this.Div00_Button01_onclick,this);this.divSearch.form.btn02.addEventHandler("onclick",this.Div00_Button01_onclick,this);};this.loadIncludeScript("Temp13.xfdl");this.loadPreloadList();_a=null;};})();