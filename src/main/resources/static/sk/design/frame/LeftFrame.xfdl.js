(function(){return function(){if(!this._is_form){return;}var _a=null;this.on_create=function(){this.set_name("LeftFrame");this.set_titletext("Left");this.set_cssclass("frm_LF_Bg");if(Form==this.constructor){this._setFormPosition(210,900);}_a=new Dataset("ds_menu",this);_a._setContents("<ColumnInfo><Column id=\"id\" type=\"STRING\" size=\"256\"/><Column id=\"url\" type=\"STRING\" size=\"256\"/><Column id=\"data\" type=\"STRING\" size=\"256\"/><Column id=\"lev\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"data\">템플릿</Col><Col id=\"lev\">0</Col></Row><Row><Col id=\"data\">Single-Detail</Col><Col id=\"lev\">1</Col><Col id=\"id\">Temp01</Col><Col id=\"url\">design::template/Temp01.xfdl</Col></Row><Row><Col id=\"data\">List-Detail 01</Col><Col id=\"lev\">1</Col><Col id=\"id\">Temp02</Col><Col id=\"url\">design::template/Temp02.xfdl</Col></Row><Row><Col id=\"data\">List-Detail 02</Col><Col id=\"lev\">1</Col><Col id=\"id\">Temp03</Col><Col id=\"url\">design::template/Temp03.xfdl</Col></Row><Row><Col id=\"data\">Master-Detail 01</Col><Col id=\"id\">Temp04</Col><Col id=\"url\">design::template/Temp04.xfdl</Col><Col id=\"lev\">1</Col></Row><Row><Col id=\"data\">Master-Detail 02</Col><Col id=\"id\">Temp05</Col><Col id=\"url\">design::template/Temp05.xfdl</Col><Col id=\"lev\">1</Col></Row><Row><Col id=\"data\">Shuttle</Col><Col id=\"id\">Temp06</Col><Col id=\"url\">design::template/Temp06.xfdl</Col><Col id=\"lev\">1</Col></Row><Row><Col id=\"data\">Tab</Col><Col id=\"id\">Temp07</Col><Col id=\"url\">design::template/Temp07.xfdl</Col><Col id=\"lev\">1</Col></Row><Row><Col id=\"data\">Popup</Col><Col id=\"id\">Temp08</Col><Col id=\"url\">design::template/Temp08.xfdl</Col><Col id=\"lev\">1</Col></Row><Row><Col id=\"data\">두번째메뉴</Col><Col id=\"lev\">0</Col></Row><Row><Col id=\"data\">세번째뎁스메뉴</Col><Col id=\"lev\">1</Col></Row><Row><Col id=\"data\">세번째뎁스메뉴영역</Col><Col id=\"lev\">1</Col></Row><Row><Col id=\"lev\">0</Col><Col id=\"data\">두번째뎁스메뉴</Col></Row><Row><Col id=\"lev\">1</Col><Col id=\"data\">세번째뎁스메뉴</Col></Row><Row><Col id=\"lev\">1</Col><Col id=\"data\">세번째뎁스메뉴영역</Col></Row><Row><Col id=\"lev\">0</Col><Col id=\"data\">두번째뎁스메뉴</Col></Row><Row><Col id=\"lev\">1</Col><Col id=\"data\">세번째뎁스메뉴</Col></Row><Row><Col id=\"lev\">1</Col><Col id=\"data\">세번째뎁스메뉴영역</Col></Row></Rows>");this.addChild(_a.name,_a);_a=new Dataset("ds_fav",this);_a._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\">즐겨찾기메뉴</Col></Row><Row><Col id=\"Column0\">즐겨찾기메뉴</Col></Row><Row><Col id=\"Column0\">즐겨찾기메뉴</Col></Row><Row><Col id=\"Column0\">즐겨찾기메뉴</Col></Row><Row><Col id=\"Column0\">즐겨찾기메뉴</Col></Row><Row><Col id=\"Column0\">즐겨찾기메뉴</Col></Row></Rows>");this.addChild(_a.name,_a);_a=new Grid("Grid00","15","94",null,null,"1","0",null,null,null,null,this);_a.set_taborder("0");_a.set_binddataset("ds_menu");_a.set_treeuseline("false");_a.set_treeusecheckbox("false");_a.set_treeuseimage("false");_a.set_treeinitstatus("expand,all");_a.set_cssclass("grd_LF_Menu");_a.set_extendsizetype("row");_a.set_autofittype("col");_a.set_autosizingtype("row");_a._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"199\"/></Columns><Rows><Row size=\"24\"/></Rows><Band id=\"body\"><Cell text=\"bind:data\" displaytype=\"treeitemcontrol\" edittype=\"tree\" treelevel=\"bind:lev\" cssclass=\"expr:comp.parent.fn_treelevel(currow)\"/></Band></Format></Formats>");this.addChild(_a.name,_a);_a=new Edit("Edit00","0","0",null,"42","0",null,null,null,null,null,this);_a.set_taborder("1");_a.set_cssclass("edi_LF_Sch");_a.set_displaynulltext("메뉴명을 입력하세요.");this.addChild(_a.name,_a);_a=new Button("Button00",null,"7","27","25","9",null,null,null,null,null,this);_a.set_taborder("2");_a.set_cssclass("btn_LF_Sch");this.addChild(_a.name,_a);_a=new Button("btn00","20","54","79","30",null,null,null,null,null,null,this);_a.set_taborder("3");_a.set_cssclass("btn_LF_MenuS");_a.set_tooltiptext("전체메뉴");this.addChild(_a.name,_a);_a=new Button("btn00_00","111","54","79","30",null,null,null,null,null,null,this);_a.set_taborder("4");_a.set_cssclass("btn_LF_Fav");_a.set_tooltiptext("즐겨찾기메뉴");this.addChild(_a.name,_a);_a=new Button("btn00_01","300","54","79","30",null,null,null,null,null,null,this);_a.set_taborder("5");_a.set_cssclass("btn_LF_Menu");_a.set_tooltiptext("전체메뉴");this.addChild(_a.name,_a);_a=new Button("btn00_00_00","391","54","79","30",null,null,null,null,null,null,this);_a.set_taborder("6");_a.set_cssclass("btn_LF_FavS");_a.set_tooltiptext("즐겨찾기메뉴");this.addChild(_a.name,_a);_a=new PopupDiv("pdiv00","555","41","210","220",null,null,null,null,null,null,this);_a.set_text("pdiv00");_a.set_visible("false");_a.set_cssclass("pdiv_LF_Sch");this.addChild(_a.name,_a);_a=new Grid("Grid00_00","20","10",null,null,"2","2",null,null,null,null,this.pdiv00.form);_a.set_taborder("0");_a.set_binddataset("ds_fav");_a.set_treeuseline("false");_a.set_treeusecheckbox("false");_a.set_treeuseimage("false");_a.set_treeinitstatus("expand,all");_a.set_cssclass("grd_LF_Menu");_a.set_extendsizetype("row");_a.set_autofittype("col");_a.set_autosizingtype("row");_a._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"152\"/></Columns><Rows><Row size=\"24\"/></Rows><Band id=\"body\"><Cell text=\"검색된메뉴명\"/></Band></Format></Formats>");this.pdiv00.addChild(_a.name,_a);_a=new Div("div00","282","97","194","806",null,null,null,null,null,null,this);_a.set_taborder("8");_a.set_text("div00");this.addChild(_a.name,_a);_a=new Grid("Grid00_00","0","31","194",null,null,"0",null,null,null,null,this.div00.form);_a.set_taborder("0");_a.set_binddataset("ds_fav");_a.set_treeuseline("false");_a.set_treeusecheckbox("false");_a.set_treeuseimage("false");_a.set_treeinitstatus("expand,all");_a.set_cssclass("grd_LF_Menu");_a.set_extendsizetype("row");_a.set_autofittype("col");_a.set_autosizingtype("row");_a._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"152\"/><Column size=\"40\"/></Columns><Rows><Row size=\"24\"/></Rows><Band id=\"body\"><Cell text=\"bind:Column0\"/><Cell col=\"1\" displaytype=\"buttoncontrol\" edittype=\"button\"/></Band></Format></Formats>");this.div00.addChild(_a.name,_a);_a=new Button("btn00",null,"0","32","20","12",null,null,null,null,null,this.div00.form);_a.set_taborder("1");_a.set_text("편집");_a.set_cssclass("btn_LF_Edit");this.div00.addChild(_a.name,_a);_a=new Button("btn00_00",null,"0","40","20","47",null,null,null,null,null,this.div00.form);_a.set_taborder("2");_a.set_text("취소");_a.set_cssclass("btn_LF_Cancel");this.div00.addChild(_a.name,_a);_a=new Button("btn00_00_00",null,"0","40","20","90",null,null,null,null,null,this.div00.form);_a.set_taborder("3");_a.set_text("저장");_a.set_cssclass("btn_LF_Save");this.div00.addChild(_a.name,_a);_a=new Button("btn39","0","0","20","20",null,null,null,null,null,null,this.div00.form);_a.set_taborder("4");_a.set_cssclass("btn_LF_Up");_a.set_visible("true");this.div00.addChild(_a.name,_a);_a=new Button("btn40","23","0","20","20",null,null,null,null,null,null,this.div00.form);_a.set_taborder("5");_a.set_cssclass("btn_LF_Down");_a.set_visible("true");this.div00.addChild(_a.name,_a);_a=new Static("sta00","0","25",null,"1","12",null,null,null,null,null,this.div00.form);_a.set_taborder("6");_a.set_cssclass("sta_LF_Line");this.div00.addChild(_a.name,_a);_a=new Layout("default","",0,0,this.pdiv00.form,function(_b){});this.pdiv00.form.addLayout(_a.name,_a);_a=new Layout("default","",0,0,this.div00.form,function(_b){});this.div00.form.addLayout(_a.name,_a);_a=new Layout("default","",210,900,this,function(_b){});_a.set_mobileorientation("landscape");this.addLayout(_a.name,_a);};this.loadPreloadList=function(){};this.registerScript("LeftFrame.xfdl",function(){this.fn_treelevel=function(_b){this.fn_treelevel2();if(this.ds_menu.getColumn(_b,"lev")==0){return "cell_LF_Lev";}};this.fn_treelevel2=function(){for(var _b=0;_b<this.Grid00.rowcount;_b++ ){if(this.ds_menu.getColumn(this.Grid00.getDatasetRow(_b),"lev")==0){this.Grid00.setRealRowSize(_b,"50");}else if(this.ds_menu.getColumn(this.Grid00.getDatasetRow(_b),"lev")==1){this.Grid00.setRealRowSize(_b,"25");}}};this.Grid00_oncellclick=function(_a,_b){var _c=nexacro.getApplication();var _d=_c.mainframe.HFrameSet00.VFrameSet00.WorkFrame.form.Div01.form.Static00;var _e=_c.mainframe.HFrameSet00.VFrameSet00.WorkFrame.form.Div00;var _f=_a.getBindDataset();var _g="템플릿 > "+_f.getColumn(_f.rowposition,"data");var _h=_f.getColumn(_f.rowposition,"url");if(_h){_d.set_text(_g);_e.set_url("");_e.set_url(_h);}};});this.on_initEvent=function(){this.Grid00.addEventHandler("oncellclick",this.Grid00_oncellclick,this);this.pdiv00.form.Grid00_00.addEventHandler("oncellclick",this.Grid00_oncellclick,this);this.div00.form.Grid00_00.addEventHandler("oncellclick",this.Grid00_oncellclick,this);this.div00.form.btn39.addEventHandler("onclick",this.Button02_onclick,this);};this.loadIncludeScript("LeftFrame.xfdl");this.loadPreloadList();_a=null;};})();