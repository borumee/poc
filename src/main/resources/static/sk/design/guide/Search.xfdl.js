(function(){return function(){if(!this._is_form){return;}var _a=null;this.on_create=function(){this.set_name("Temp02");this.set_cssclass("frm_WF_Frame");this.set_titletext("Search");if(Form==this.constructor){this._setFormPosition(1050,700);}_a=new Div("Div00","0","0",null,"50","20",null,null,null,null,null,this);_a.set_taborder("0");_a.set_cssclass("div_WF_Search");_a.set_text("");this.addChild(_a.name,_a);_a=new Static("Static00","0","12","74","24",null,null,null,null,null,null,this.Div00.form);_a.set_taborder("0");_a.set_text("캘린더");_a.set_cssclass("sta_WF_SchLabel");_a.set_fittocontents("width");this.Div00.addChild(_a.name,_a);_a=new Combo("Combo01","56","-158","185","24",null,null,null,null,null,null,this.Div00.form);_a.set_taborder("1");_a.set_codecolumn("codecolumn");_a.set_datacolumn("datacolumn");_a.set_readonly("false");var _b=new nexacro.NormalDataset("Div00_form_Combo01_innerdataset",_a);_b._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">전체</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">사용</Col></Row><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\">미사용</Col></Row></Rows>");_a.set_innerdataset(_b);_a.set_text("전체");_a.set_value("1");_a.set_index("0");this.Div00.addChild(_a.name,_a);_a=new Combo("Combo02","282","-158","185","24",null,null,null,null,null,null,this.Div00.form);_a.set_taborder("2");_a.set_codecolumn("codecolumn");_a.set_datacolumn("datacolumn");_a.set_readonly("false");var _c=new nexacro.NormalDataset("Div00_form_Combo02_innerdataset",_a);_c._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">전체</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">사용</Col></Row><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\">미사용</Col></Row></Rows>");_a.set_innerdataset(_c);_a.set_text("전체");_a.set_value("1");_a.set_index("0");this.Div00.addChild(_a.name,_a);_a=new Combo("Combo03","521","-158","184","24",null,null,null,null,null,null,this.Div00.form);_a.set_taborder("3");_a.set_codecolumn("codecolumn");_a.set_datacolumn("datacolumn");_a.set_readonly("false");var _d=new nexacro.NormalDataset("Div00_form_Combo03_innerdataset",_a);_d._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">전체</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">사용</Col></Row><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\">미사용</Col></Row></Rows>");_a.set_innerdataset(_d);_a.set_text("전체");_a.set_value("1");_a.set_index("0");this.Div00.addChild(_a.name,_a);_a=new Calendar("Calendar00","785","-158","184","24",null,null,null,null,null,null,this.Div00.form);_a.set_taborder("4");_a.set_value("20190308");_a.set_dateformat("yyyy-MM-dd ddd");_a.set_readonly("false");this.Div00.addChild(_a.name,_a);_a=new Static("Static01","189","12","86","24",null,null,null,null,null,null,this.Div00.form);_a.set_taborder("5");_a.set_text("검색라벨");_a.set_cssclass("sta_WF_SchLabel");_a.set_fittocontents("width");this.Div00.addChild(_a.name,_a);_a=new Edit("Edit00","275","12","140","24",null,null,null,null,null,null,this.Div00.form);_a.set_taborder("6");this.Div00.addChild(_a.name,_a);_a=new Calendar("Calendar01","74","12","115","24",null,null,null,null,null,null,this.Div00.form);_a.set_taborder("7");_a.set_dateformat("yyyy-MM-dd");this.Div00.addChild(_a.name,_a);_a=new Static("Static01_00","415","12","86","24",null,null,null,null,null,null,this.Div00.form);_a.set_taborder("8");_a.set_text("검색라벨");_a.set_cssclass("sta_WF_SchLabel");_a.set_fittocontents("width");this.Div00.addChild(_a.name,_a);_a=new Combo("Combo00","501","12","150","24",null,null,null,null,null,null,this.Div00.form);_a.set_codecolumn("codecolumn");_a.set_datacolumn("datacolumn");_a.set_taborder("9");var _e=new nexacro.NormalDataset("Div00_form_Combo00_innerdataset",_a);_e._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">투비</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">투비</Col></Row><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\">투비</Col></Row></Rows>");_a.set_innerdataset(_e);_a.set_text("투비");_a.set_value("1");_a.set_index("0");this.Div00.addChild(_a.name,_a);_a=new Static("Static01_00_00","651","12","86","24",null,null,null,null,null,null,this.Div00.form);_a.set_taborder("10");_a.set_text("검색라벨");_a.set_cssclass("sta_WF_SchLabel");_a.set_fittocontents("width");this.Div00.addChild(_a.name,_a);_a=new MaskEdit("MaskEdit00","737","12","150","24",null,null,null,null,null,null,this.Div00.form);_a.set_readonly("false");_a.set_value("1500000000");_a.set_format("###,###");_a.set_taborder("11");this.Div00.addChild(_a.name,_a);_a=new Button("btnSearch",null,null,"48","28","25","10",null,null,null,null,this.Div00.form);_a.set_taborder("12");_a.set_text("조회");_a.set_cssclass("btn_WF_Search");this.Div00.addChild(_a.name,_a);_a=new Static("Static04_00",null,"0","20",null,"0","0",null,null,null,null,this);_a.set_taborder("1");_a.set_cssclass("sta_WF_GSize");_a.set_visible("false");_a.set_text("W20");this.addChild(_a.name,_a);_a=new Div("Div00_00","0","93",null,"79","20",null,null,null,null,null,this);_a.set_taborder("2");_a.set_cssclass("div_WF_Search");_a.set_text("");this.addChild(_a.name,_a);_a=new Static("Static00","0","12","74","24",null,null,null,null,null,null,this.Div00_00.form);_a.set_taborder("0");_a.set_text("캘린더");_a.set_cssclass("sta_WF_SchLabel");_a.set_fittocontents("width");this.Div00_00.addChild(_a.name,_a);_a=new Combo("Combo01","56","-158","185","24",null,null,null,null,null,null,this.Div00_00.form);_a.set_taborder("1");_a.set_codecolumn("codecolumn");_a.set_datacolumn("datacolumn");_a.set_readonly("false");var _f=new nexacro.NormalDataset("Div00_00_form_Combo01_innerdataset",_a);_f._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">전체</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">사용</Col></Row><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\">미사용</Col></Row></Rows>");_a.set_innerdataset(_f);_a.set_text("전체");_a.set_value("1");_a.set_index("0");this.Div00_00.addChild(_a.name,_a);_a=new Combo("Combo02","282","-158","185","24",null,null,null,null,null,null,this.Div00_00.form);_a.set_taborder("2");_a.set_codecolumn("codecolumn");_a.set_datacolumn("datacolumn");_a.set_readonly("false");var _g=new nexacro.NormalDataset("Div00_00_form_Combo02_innerdataset",_a);_g._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">전체</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">사용</Col></Row><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\">미사용</Col></Row></Rows>");_a.set_innerdataset(_g);_a.set_text("전체");_a.set_value("1");_a.set_index("0");this.Div00_00.addChild(_a.name,_a);_a=new Combo("Combo03","521","-158","184","24",null,null,null,null,null,null,this.Div00_00.form);_a.set_taborder("3");_a.set_codecolumn("codecolumn");_a.set_datacolumn("datacolumn");_a.set_readonly("false");var _h=new nexacro.NormalDataset("Div00_00_form_Combo03_innerdataset",_a);_h._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">전체</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">사용</Col></Row><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\">미사용</Col></Row></Rows>");_a.set_innerdataset(_h);_a.set_text("전체");_a.set_value("1");_a.set_index("0");this.Div00_00.addChild(_a.name,_a);_a=new Calendar("Calendar00","785","-158","184","24",null,null,null,null,null,null,this.Div00_00.form);_a.set_taborder("4");_a.set_value("20190308");_a.set_dateformat("yyyy-MM-dd ddd");_a.set_readonly("false");this.Div00_00.addChild(_a.name,_a);_a=new Static("Static01","189","12","86","24",null,null,null,null,null,null,this.Div00_00.form);_a.set_taborder("5");_a.set_text("검색라벨");_a.set_cssclass("sta_WF_SchLabel");_a.set_fittocontents("width");this.Div00_00.addChild(_a.name,_a);_a=new Edit("Edit00","275","12","140","24",null,null,null,null,null,null,this.Div00_00.form);_a.set_taborder("6");this.Div00_00.addChild(_a.name,_a);_a=new Calendar("Calendar01","74","12","115","24",null,null,null,null,null,null,this.Div00_00.form);_a.set_taborder("7");_a.set_dateformat("yyyy-MM-dd");this.Div00_00.addChild(_a.name,_a);_a=new Static("Static01_00","415","12","86","24",null,null,null,null,null,null,this.Div00_00.form);_a.set_taborder("8");_a.set_text("검색라벨");_a.set_cssclass("sta_WF_SchLabel");_a.set_fittocontents("width");this.Div00_00.addChild(_a.name,_a);_a=new Combo("Combo00","501","12","150","24",null,null,null,null,null,null,this.Div00_00.form);_a.set_codecolumn("codecolumn");_a.set_datacolumn("datacolumn");_a.set_taborder("9");var _i=new nexacro.NormalDataset("Div00_00_form_Combo00_innerdataset",_a);_i._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">투비</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">투비</Col></Row><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\">투비</Col></Row></Rows>");_a.set_innerdataset(_i);_a.set_text("투비");_a.set_value("1");_a.set_index("0");this.Div00_00.addChild(_a.name,_a);_a=new Static("Static01_00_00","651","12","86","24",null,null,null,null,null,null,this.Div00_00.form);_a.set_taborder("10");_a.set_text("검색라벨");_a.set_cssclass("sta_WF_SchLabel");_a.set_fittocontents("width");this.Div00_00.addChild(_a.name,_a);_a=new MaskEdit("MaskEdit00","737","12","150","24",null,null,null,null,null,null,this.Div00_00.form);_a.set_readonly("false");_a.set_value("1500000000");_a.set_format("###,###");_a.set_taborder("11");this.Div00_00.addChild(_a.name,_a);_a=new Static("Static00_00","0","41","74","24",null,null,null,null,null,null,this.Div00_00.form);_a.set_taborder("12");_a.set_text("캘린더");_a.set_cssclass("sta_WF_SchLabel");_a.set_fittocontents("width");this.Div00_00.addChild(_a.name,_a);_a=new Static("Static01_01","189","41","86","24",null,null,null,null,null,null,this.Div00_00.form);_a.set_taborder("13");_a.set_text("검색라벨");_a.set_cssclass("sta_WF_SchLabel");_a.set_fittocontents("width");this.Div00_00.addChild(_a.name,_a);_a=new Edit("Edit00_00","275","41","140","24",null,null,null,null,null,null,this.Div00_00.form);_a.set_taborder("14");this.Div00_00.addChild(_a.name,_a);_a=new Calendar("Calendar01_00","74","41","115","24",null,null,null,null,null,null,this.Div00_00.form);_a.set_taborder("15");_a.set_dateformat("yyyy-MM-dd");this.Div00_00.addChild(_a.name,_a);_a=new Static("Static01_00_01","415","41","86","24",null,null,null,null,null,null,this.Div00_00.form);_a.set_taborder("16");_a.set_text("검색라벨");_a.set_cssclass("sta_WF_SchLabel");_a.set_fittocontents("width");this.Div00_00.addChild(_a.name,_a);_a=new Combo("Combo00_00","501","41","150","24",null,null,null,null,null,null,this.Div00_00.form);_a.set_codecolumn("codecolumn");_a.set_datacolumn("datacolumn");_a.set_taborder("17");var _j=new nexacro.NormalDataset("Div00_00_form_Combo00_00_innerdataset",_a);_j._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">투비</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">투비</Col></Row><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\">투비</Col></Row></Rows>");_a.set_innerdataset(_j);_a.set_text("투비");_a.set_value("1");_a.set_index("0");this.Div00_00.addChild(_a.name,_a);_a=new Static("Static01_00_00_00","651","41","86","24",null,null,null,null,null,null,this.Div00_00.form);_a.set_taborder("18");_a.set_text("검색라벨");_a.set_cssclass("sta_WF_SchLabel");_a.set_fittocontents("width");this.Div00_00.addChild(_a.name,_a);_a=new MaskEdit("MaskEdit00_00","737","41","150","24",null,null,null,null,null,null,this.Div00_00.form);_a.set_readonly("false");_a.set_value("1500000000");_a.set_format("###,###");_a.set_taborder("19");this.Div00_00.addChild(_a.name,_a);_a=new Button("btnSearch",null,null,"48","28","25","10",null,null,null,null,this.Div00_00.form);_a.set_taborder("20");_a.set_text("조회");_a.set_cssclass("btn_WF_Search");this.Div00_00.addChild(_a.name,_a);_a=new Div("Div00_00_00","0","220",null,"108","20",null,null,null,null,null,this);_a.set_taborder("3");_a.set_cssclass("div_WF_Search");_a.set_text("");this.addChild(_a.name,_a);_a=new Static("Static00","0","12","74","24",null,null,null,null,null,null,this.Div00_00_00.form);_a.set_taborder("0");_a.set_text("캘린더");_a.set_cssclass("sta_WF_SchLabel");_a.set_fittocontents("width");this.Div00_00_00.addChild(_a.name,_a);_a=new Combo("Combo01","56","-158","185","24",null,null,null,null,null,null,this.Div00_00_00.form);_a.set_taborder("1");_a.set_codecolumn("codecolumn");_a.set_datacolumn("datacolumn");_a.set_readonly("false");var _k=new nexacro.NormalDataset("Div00_00_00_form_Combo01_innerdataset",_a);_k._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">전체</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">사용</Col></Row><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\">미사용</Col></Row></Rows>");_a.set_innerdataset(_k);_a.set_text("전체");_a.set_value("1");_a.set_index("0");this.Div00_00_00.addChild(_a.name,_a);_a=new Combo("Combo02","282","-158","185","24",null,null,null,null,null,null,this.Div00_00_00.form);_a.set_taborder("2");_a.set_codecolumn("codecolumn");_a.set_datacolumn("datacolumn");_a.set_readonly("false");var _l=new nexacro.NormalDataset("Div00_00_00_form_Combo02_innerdataset",_a);_l._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">전체</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">사용</Col></Row><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\">미사용</Col></Row></Rows>");_a.set_innerdataset(_l);_a.set_text("전체");_a.set_value("1");_a.set_index("0");this.Div00_00_00.addChild(_a.name,_a);_a=new Combo("Combo03","521","-158","184","24",null,null,null,null,null,null,this.Div00_00_00.form);_a.set_taborder("3");_a.set_codecolumn("codecolumn");_a.set_datacolumn("datacolumn");_a.set_readonly("false");var _m=new nexacro.NormalDataset("Div00_00_00_form_Combo03_innerdataset",_a);_m._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">전체</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">사용</Col></Row><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\">미사용</Col></Row></Rows>");_a.set_innerdataset(_m);_a.set_text("전체");_a.set_value("1");_a.set_index("0");this.Div00_00_00.addChild(_a.name,_a);_a=new Calendar("Calendar00","785","-158","184","24",null,null,null,null,null,null,this.Div00_00_00.form);_a.set_taborder("4");_a.set_value("20190308");_a.set_dateformat("yyyy-MM-dd ddd");_a.set_readonly("false");this.Div00_00_00.addChild(_a.name,_a);_a=new Static("Static01","189","12","86","24",null,null,null,null,null,null,this.Div00_00_00.form);_a.set_taborder("5");_a.set_text("검색라벨");_a.set_cssclass("sta_WF_SchLabel");_a.set_fittocontents("width");this.Div00_00_00.addChild(_a.name,_a);_a=new Edit("Edit00","275","12","140","24",null,null,null,null,null,null,this.Div00_00_00.form);_a.set_taborder("6");this.Div00_00_00.addChild(_a.name,_a);_a=new Calendar("Calendar01","74","12","115","24",null,null,null,null,null,null,this.Div00_00_00.form);_a.set_taborder("7");_a.set_dateformat("yyyy-MM-dd");this.Div00_00_00.addChild(_a.name,_a);_a=new Static("Static01_00","415","12","86","24",null,null,null,null,null,null,this.Div00_00_00.form);_a.set_taborder("8");_a.set_text("검색라벨");_a.set_cssclass("sta_WF_SchLabel");_a.set_fittocontents("width");this.Div00_00_00.addChild(_a.name,_a);_a=new Combo("Combo00","501","12","150","24",null,null,null,null,null,null,this.Div00_00_00.form);_a.set_codecolumn("codecolumn");_a.set_datacolumn("datacolumn");_a.set_taborder("9");var _n=new nexacro.NormalDataset("Div00_00_00_form_Combo00_innerdataset",_a);_n._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">투비</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">투비</Col></Row><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\">투비</Col></Row></Rows>");_a.set_innerdataset(_n);_a.set_text("투비");_a.set_value("1");_a.set_index("0");this.Div00_00_00.addChild(_a.name,_a);_a=new Static("Static01_00_00","651","12","86","24",null,null,null,null,null,null,this.Div00_00_00.form);_a.set_taborder("10");_a.set_text("검색라벨");_a.set_cssclass("sta_WF_SchLabel");_a.set_fittocontents("width");this.Div00_00_00.addChild(_a.name,_a);_a=new MaskEdit("MaskEdit00","737","12","150","24",null,null,null,null,null,null,this.Div00_00_00.form);_a.set_readonly("false");_a.set_value("1500000000");_a.set_format("###,###");_a.set_taborder("11");this.Div00_00_00.addChild(_a.name,_a);_a=new Static("Static00_00","0","41","74","24",null,null,null,null,null,null,this.Div00_00_00.form);_a.set_taborder("12");_a.set_text("캘린더");_a.set_cssclass("sta_WF_SchLabel");_a.set_fittocontents("width");this.Div00_00_00.addChild(_a.name,_a);_a=new Static("Static01_01","189","41","86","24",null,null,null,null,null,null,this.Div00_00_00.form);_a.set_taborder("13");_a.set_text("검색라벨");_a.set_cssclass("sta_WF_SchLabel");_a.set_fittocontents("width");this.Div00_00_00.addChild(_a.name,_a);_a=new Edit("Edit00_00","275","41","140","24",null,null,null,null,null,null,this.Div00_00_00.form);_a.set_taborder("14");this.Div00_00_00.addChild(_a.name,_a);_a=new Calendar("Calendar01_00","74","41","115","24",null,null,null,null,null,null,this.Div00_00_00.form);_a.set_taborder("15");_a.set_dateformat("yyyy-MM-dd");this.Div00_00_00.addChild(_a.name,_a);_a=new Static("Static01_00_01","415","41","86","24",null,null,null,null,null,null,this.Div00_00_00.form);_a.set_taborder("16");_a.set_text("검색라벨");_a.set_cssclass("sta_WF_SchLabel");_a.set_fittocontents("width");this.Div00_00_00.addChild(_a.name,_a);_a=new Combo("Combo00_00","501","41","150","24",null,null,null,null,null,null,this.Div00_00_00.form);_a.set_codecolumn("codecolumn");_a.set_datacolumn("datacolumn");_a.set_taborder("17");var _o=new nexacro.NormalDataset("Div00_00_00_form_Combo00_00_innerdataset",_a);_o._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">투비</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">투비</Col></Row><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\">투비</Col></Row></Rows>");_a.set_innerdataset(_o);_a.set_text("투비");_a.set_value("1");_a.set_index("0");this.Div00_00_00.addChild(_a.name,_a);_a=new Static("Static01_00_00_00","651","41","86","24",null,null,null,null,null,null,this.Div00_00_00.form);_a.set_taborder("18");_a.set_text("검색라벨");_a.set_cssclass("sta_WF_SchLabel");_a.set_fittocontents("width");this.Div00_00_00.addChild(_a.name,_a);_a=new MaskEdit("MaskEdit00_00","737","41","150","24",null,null,null,null,null,null,this.Div00_00_00.form);_a.set_readonly("false");_a.set_value("1500000000");_a.set_format("###,###");_a.set_taborder("19");this.Div00_00_00.addChild(_a.name,_a);_a=new Static("Static00_00_00","0","70","74","24",null,null,null,null,null,null,this.Div00_00_00.form);_a.set_taborder("20");_a.set_text("캘린더");_a.set_cssclass("sta_WF_SchLabel");_a.set_fittocontents("width");this.Div00_00_00.addChild(_a.name,_a);_a=new Static("Static01_01_00","189","70","86","24",null,null,null,null,null,null,this.Div00_00_00.form);_a.set_taborder("21");_a.set_text("검색라벨");_a.set_cssclass("sta_WF_SchLabel");_a.set_fittocontents("width");this.Div00_00_00.addChild(_a.name,_a);_a=new Edit("Edit00_00_00","275","70","140","24",null,null,null,null,null,null,this.Div00_00_00.form);_a.set_taborder("22");this.Div00_00_00.addChild(_a.name,_a);_a=new Calendar("Calendar01_00_00","74","70","115","24",null,null,null,null,null,null,this.Div00_00_00.form);_a.set_taborder("23");_a.set_dateformat("yyyy-MM-dd");this.Div00_00_00.addChild(_a.name,_a);_a=new Static("Static01_00_01_00","415","70","86","24",null,null,null,null,null,null,this.Div00_00_00.form);_a.set_taborder("24");_a.set_text("검색라벨");_a.set_cssclass("sta_WF_SchLabel");_a.set_fittocontents("width");this.Div00_00_00.addChild(_a.name,_a);_a=new Combo("Combo00_00_00","501","70","150","24",null,null,null,null,null,null,this.Div00_00_00.form);_a.set_codecolumn("codecolumn");_a.set_datacolumn("datacolumn");_a.set_taborder("25");var _p=new nexacro.NormalDataset("Div00_00_00_form_Combo00_00_00_innerdataset",_a);_p._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">투비</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">투비</Col></Row><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\">투비</Col></Row></Rows>");_a.set_innerdataset(_p);_a.set_text("투비");_a.set_value("1");_a.set_index("0");this.Div00_00_00.addChild(_a.name,_a);_a=new Static("Static01_00_00_00_00","651","70","86","24",null,null,null,null,null,null,this.Div00_00_00.form);_a.set_taborder("26");_a.set_text("검색라벨");_a.set_cssclass("sta_WF_SchLabel");_a.set_fittocontents("width");this.Div00_00_00.addChild(_a.name,_a);_a=new MaskEdit("MaskEdit00_00_00","737","70","150","24",null,null,null,null,null,null,this.Div00_00_00.form);_a.set_readonly("false");_a.set_value("1500000000");_a.set_format("###,###");_a.set_taborder("27");this.Div00_00_00.addChild(_a.name,_a);_a=new Button("btnSearch",null,null,"48","28","25","10",null,null,null,null,this.Div00_00_00.form);_a.set_taborder("28");_a.set_text("조회");_a.set_cssclass("btn_WF_Search");this.Div00_00_00.addChild(_a.name,_a);_a=new Div("Div00_00_00_00","0","370",null,"137","20",null,null,null,null,null,this);_a.set_taborder("4");_a.set_cssclass("div_WF_Search");_a.set_text("");this.addChild(_a.name,_a);_a=new Static("Static00","0","12","74","24",null,null,null,null,null,null,this.Div00_00_00_00.form);_a.set_taborder("0");_a.set_text("캘린더");_a.set_cssclass("sta_WF_SchLabel");_a.set_fittocontents("width");this.Div00_00_00_00.addChild(_a.name,_a);_a=new Combo("Combo01","56","-158","185","24",null,null,null,null,null,null,this.Div00_00_00_00.form);_a.set_taborder("1");_a.set_codecolumn("codecolumn");_a.set_datacolumn("datacolumn");_a.set_readonly("false");var _q=new nexacro.NormalDataset("Div00_00_00_00_form_Combo01_innerdataset",_a);_q._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">전체</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">사용</Col></Row><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\">미사용</Col></Row></Rows>");_a.set_innerdataset(_q);_a.set_text("전체");_a.set_value("1");_a.set_index("0");this.Div00_00_00_00.addChild(_a.name,_a);_a=new Combo("Combo02","282","-158","185","24",null,null,null,null,null,null,this.Div00_00_00_00.form);_a.set_taborder("2");_a.set_codecolumn("codecolumn");_a.set_datacolumn("datacolumn");_a.set_readonly("false");var _r=new nexacro.NormalDataset("Div00_00_00_00_form_Combo02_innerdataset",_a);_r._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">전체</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">사용</Col></Row><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\">미사용</Col></Row></Rows>");_a.set_innerdataset(_r);_a.set_text("전체");_a.set_value("1");_a.set_index("0");this.Div00_00_00_00.addChild(_a.name,_a);_a=new Combo("Combo03","521","-158","184","24",null,null,null,null,null,null,this.Div00_00_00_00.form);_a.set_taborder("3");_a.set_codecolumn("codecolumn");_a.set_datacolumn("datacolumn");_a.set_readonly("false");var _s=new nexacro.NormalDataset("Div00_00_00_00_form_Combo03_innerdataset",_a);_s._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">전체</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">사용</Col></Row><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\">미사용</Col></Row></Rows>");_a.set_innerdataset(_s);_a.set_text("전체");_a.set_value("1");_a.set_index("0");this.Div00_00_00_00.addChild(_a.name,_a);_a=new Calendar("Calendar00","785","-158","184","24",null,null,null,null,null,null,this.Div00_00_00_00.form);_a.set_taborder("4");_a.set_value("20190308");_a.set_dateformat("yyyy-MM-dd ddd");_a.set_readonly("false");this.Div00_00_00_00.addChild(_a.name,_a);_a=new Static("Static01","189","12","86","24",null,null,null,null,null,null,this.Div00_00_00_00.form);_a.set_taborder("5");_a.set_text("검색라벨");_a.set_cssclass("sta_WF_SchLabel");_a.set_fittocontents("width");this.Div00_00_00_00.addChild(_a.name,_a);_a=new Edit("Edit00","275","12","140","24",null,null,null,null,null,null,this.Div00_00_00_00.form);_a.set_taborder("6");this.Div00_00_00_00.addChild(_a.name,_a);_a=new Calendar("Calendar01","74","12","115","24",null,null,null,null,null,null,this.Div00_00_00_00.form);_a.set_taborder("7");_a.set_dateformat("yyyy-MM-dd");this.Div00_00_00_00.addChild(_a.name,_a);_a=new Static("Static01_00","415","12","86","24",null,null,null,null,null,null,this.Div00_00_00_00.form);_a.set_taborder("8");_a.set_text("검색라벨");_a.set_cssclass("sta_WF_SchLabel");_a.set_fittocontents("width");this.Div00_00_00_00.addChild(_a.name,_a);_a=new Combo("Combo00","501","12","150","24",null,null,null,null,null,null,this.Div00_00_00_00.form);_a.set_codecolumn("codecolumn");_a.set_datacolumn("datacolumn");_a.set_taborder("9");var _t=new nexacro.NormalDataset("Div00_00_00_00_form_Combo00_innerdataset",_a);_t._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">투비</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">투비</Col></Row><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\">투비</Col></Row></Rows>");_a.set_innerdataset(_t);_a.set_text("투비");_a.set_value("1");_a.set_index("0");this.Div00_00_00_00.addChild(_a.name,_a);_a=new Static("Static01_00_00","651","12","86","24",null,null,null,null,null,null,this.Div00_00_00_00.form);_a.set_taborder("10");_a.set_text("검색라벨");_a.set_cssclass("sta_WF_SchLabel");_a.set_fittocontents("width");this.Div00_00_00_00.addChild(_a.name,_a);_a=new MaskEdit("MaskEdit00","737","12","150","24",null,null,null,null,null,null,this.Div00_00_00_00.form);_a.set_readonly("false");_a.set_value("1500000000");_a.set_format("###,###");_a.set_taborder("11");this.Div00_00_00_00.addChild(_a.name,_a);_a=new Static("Static00_00","0","41","74","24",null,null,null,null,null,null,this.Div00_00_00_00.form);_a.set_taborder("12");_a.set_text("캘린더");_a.set_cssclass("sta_WF_SchLabel");_a.set_fittocontents("width");this.Div00_00_00_00.addChild(_a.name,_a);_a=new Static("Static01_01","189","41","86","24",null,null,null,null,null,null,this.Div00_00_00_00.form);_a.set_taborder("13");_a.set_text("검색라벨");_a.set_cssclass("sta_WF_SchLabel");_a.set_fittocontents("width");this.Div00_00_00_00.addChild(_a.name,_a);_a=new Edit("Edit00_00","275","41","140","24",null,null,null,null,null,null,this.Div00_00_00_00.form);_a.set_taborder("14");this.Div00_00_00_00.addChild(_a.name,_a);_a=new Calendar("Calendar01_00","74","41","115","24",null,null,null,null,null,null,this.Div00_00_00_00.form);_a.set_taborder("15");_a.set_dateformat("yyyy-MM-dd");this.Div00_00_00_00.addChild(_a.name,_a);_a=new Static("Static01_00_01","415","41","86","24",null,null,null,null,null,null,this.Div00_00_00_00.form);_a.set_taborder("16");_a.set_text("검색라벨");_a.set_cssclass("sta_WF_SchLabel");_a.set_fittocontents("width");this.Div00_00_00_00.addChild(_a.name,_a);_a=new Combo("Combo00_00","501","41","150","24",null,null,null,null,null,null,this.Div00_00_00_00.form);_a.set_codecolumn("codecolumn");_a.set_datacolumn("datacolumn");_a.set_taborder("17");var _u=new nexacro.NormalDataset("Div00_00_00_00_form_Combo00_00_innerdataset",_a);_u._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">투비</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">투비</Col></Row><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\">투비</Col></Row></Rows>");_a.set_innerdataset(_u);_a.set_text("투비");_a.set_value("1");_a.set_index("0");this.Div00_00_00_00.addChild(_a.name,_a);_a=new Static("Static01_00_00_00","651","41","86","24",null,null,null,null,null,null,this.Div00_00_00_00.form);_a.set_taborder("18");_a.set_text("검색라벨");_a.set_cssclass("sta_WF_SchLabel");_a.set_fittocontents("width");this.Div00_00_00_00.addChild(_a.name,_a);_a=new MaskEdit("MaskEdit00_00","737","41","150","24",null,null,null,null,null,null,this.Div00_00_00_00.form);_a.set_readonly("false");_a.set_value("1500000000");_a.set_format("###,###");_a.set_taborder("19");this.Div00_00_00_00.addChild(_a.name,_a);_a=new Static("Static00_00_00","0","70","74","24",null,null,null,null,null,null,this.Div00_00_00_00.form);_a.set_taborder("20");_a.set_text("캘린더");_a.set_cssclass("sta_WF_SchLabel");_a.set_fittocontents("width");this.Div00_00_00_00.addChild(_a.name,_a);_a=new Static("Static01_01_00","189","70","86","24",null,null,null,null,null,null,this.Div00_00_00_00.form);_a.set_taborder("21");_a.set_text("검색라벨");_a.set_cssclass("sta_WF_SchLabel");_a.set_fittocontents("width");this.Div00_00_00_00.addChild(_a.name,_a);_a=new Edit("Edit00_00_00","275","70","140","24",null,null,null,null,null,null,this.Div00_00_00_00.form);_a.set_taborder("22");this.Div00_00_00_00.addChild(_a.name,_a);_a=new Calendar("Calendar01_00_00","74","70","115","24",null,null,null,null,null,null,this.Div00_00_00_00.form);_a.set_taborder("23");_a.set_dateformat("yyyy-MM-dd");this.Div00_00_00_00.addChild(_a.name,_a);_a=new Static("Static01_00_01_00","415","70","86","24",null,null,null,null,null,null,this.Div00_00_00_00.form);_a.set_taborder("24");_a.set_text("검색라벨");_a.set_cssclass("sta_WF_SchLabel");_a.set_fittocontents("width");this.Div00_00_00_00.addChild(_a.name,_a);_a=new Combo("Combo00_00_00","501","70","150","24",null,null,null,null,null,null,this.Div00_00_00_00.form);_a.set_codecolumn("codecolumn");_a.set_datacolumn("datacolumn");_a.set_taborder("25");var _v=new nexacro.NormalDataset("Div00_00_00_00_form_Combo00_00_00_innerdataset",_a);_v._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">투비</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">투비</Col></Row><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\">투비</Col></Row></Rows>");_a.set_innerdataset(_v);_a.set_text("투비");_a.set_value("1");_a.set_index("0");this.Div00_00_00_00.addChild(_a.name,_a);_a=new Static("Static01_00_00_00_00","651","70","86","24",null,null,null,null,null,null,this.Div00_00_00_00.form);_a.set_taborder("26");_a.set_text("검색라벨");_a.set_cssclass("sta_WF_SchLabel");_a.set_fittocontents("width");this.Div00_00_00_00.addChild(_a.name,_a);_a=new MaskEdit("MaskEdit00_00_00","737","70","150","24",null,null,null,null,null,null,this.Div00_00_00_00.form);_a.set_readonly("false");_a.set_value("1500000000");_a.set_format("###,###");_a.set_taborder("27");this.Div00_00_00_00.addChild(_a.name,_a);_a=new Static("Static00_00_00_00","0","99","74","24",null,null,null,null,null,null,this.Div00_00_00_00.form);_a.set_taborder("28");_a.set_text("캘린더");_a.set_cssclass("sta_WF_SchLabel");_a.set_fittocontents("width");this.Div00_00_00_00.addChild(_a.name,_a);_a=new Static("Static01_01_00_00","189","99","86","24",null,null,null,null,null,null,this.Div00_00_00_00.form);_a.set_taborder("29");_a.set_text("검색라벨");_a.set_cssclass("sta_WF_SchLabel");_a.set_fittocontents("width");this.Div00_00_00_00.addChild(_a.name,_a);_a=new Edit("Edit00_00_00_00","275","99","140","24",null,null,null,null,null,null,this.Div00_00_00_00.form);_a.set_taborder("30");this.Div00_00_00_00.addChild(_a.name,_a);_a=new Calendar("Calendar01_00_00_00","74","99","115","24",null,null,null,null,null,null,this.Div00_00_00_00.form);_a.set_taborder("31");_a.set_dateformat("yyyy-MM-dd");this.Div00_00_00_00.addChild(_a.name,_a);_a=new Static("Static01_00_01_00_00","415","99","86","24",null,null,null,null,null,null,this.Div00_00_00_00.form);_a.set_taborder("32");_a.set_text("검색라벨");_a.set_cssclass("sta_WF_SchLabel");_a.set_fittocontents("width");this.Div00_00_00_00.addChild(_a.name,_a);_a=new Combo("Combo00_00_00_00","501","99","150","24",null,null,null,null,null,null,this.Div00_00_00_00.form);_a.set_codecolumn("codecolumn");_a.set_datacolumn("datacolumn");_a.set_taborder("33");var _w=new nexacro.NormalDataset("Div00_00_00_00_form_Combo00_00_00_00_innerdataset",_a);_w._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">투비</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">투비</Col></Row><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\">투비</Col></Row></Rows>");_a.set_innerdataset(_w);_a.set_text("투비");_a.set_value("1");_a.set_index("0");this.Div00_00_00_00.addChild(_a.name,_a);_a=new Static("Static01_00_00_00_00_00","651","99","86","24",null,null,null,null,null,null,this.Div00_00_00_00.form);_a.set_taborder("34");_a.set_text("검색라벨");_a.set_cssclass("sta_WF_SchLabel");_a.set_fittocontents("width");this.Div00_00_00_00.addChild(_a.name,_a);_a=new MaskEdit("MaskEdit00_00_00_00","737","99","150","24",null,null,null,null,null,null,this.Div00_00_00_00.form);_a.set_readonly("false");_a.set_value("1500000000");_a.set_format("###,###");_a.set_taborder("35");this.Div00_00_00_00.addChild(_a.name,_a);_a=new Button("btnSearch",null,null,"48","28","25","10",null,null,null,null,this.Div00_00_00_00.form);_a.set_taborder("36");_a.set_text("조회");_a.set_cssclass("btn_WF_Search");this.Div00_00_00_00.addChild(_a.name,_a);_a=new Layout("default","",0,0,this.Div00.form,function(_x){});this.Div00.form.addLayout(_a.name,_a);_a=new Layout("default","",0,0,this.Div00_00.form,function(_x){});this.Div00_00.form.addLayout(_a.name,_a);_a=new Layout("default","",0,0,this.Div00_00_00.form,function(_x){});this.Div00_00_00.form.addLayout(_a.name,_a);_a=new Layout("default","",0,0,this.Div00_00_00_00.form,function(_x){});this.Div00_00_00_00.form.addLayout(_a.name,_a);_a=new Layout("default","",1050,700,this,function(_x){});_a.set_mobileorientation("landscape");this.addLayout(_a.name,_a);};this.loadPreloadList=function(){};this.on_initEvent=function(){this.Div00.form.btnSearch.addEventHandler("onclick",this.divSearch_btnSearch_onclick,this);this.Div00_00.form.btnSearch.addEventHandler("onclick",this.divSearch_btnSearch_onclick,this);this.Div00_00_00.form.btnSearch.addEventHandler("onclick",this.divSearch_btnSearch_onclick,this);this.Div00_00_00_00.form.btnSearch.addEventHandler("onclick",this.divSearch_btnSearch_onclick,this);};this.loadIncludeScript("Search.xfdl");this.loadPreloadList();_a=null;};})();