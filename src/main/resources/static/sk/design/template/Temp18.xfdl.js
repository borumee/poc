(function(){return function(){if(!this._is_form){return;}var _a=null;this.on_create=function(){this.set_name("authPermMenuMgFm");this.set_titletext("그룹 권한 메뉴 관리");if(Form==this.constructor){this._setFormPosition(1050,736);}_a=new Dataset("dsCond",this);_a._setContents("<ColumnInfo><Column id=\"PREM_NM\" type=\"STRING\" size=\"256\"/><Column id=\"SYTM_FLAG_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");this.addChild(_a.name,_a);_a=new Dataset("dsCondDetail",this);_a._setContents("<ColumnInfo><Column id=\"PERM_ID\" type=\"STRING\" size=\"256\"/><Column id=\"SYTM_FLAG_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");this.addChild(_a.name,_a);_a=new Dataset("dsList",this);_a._setContents("<ColumnInfo><Column id=\"PERM_ID\" type=\"STRING\" size=\"256\"/><Column id=\"SYTM_FLAG_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PERM_GRP_NM\" type=\"STRING\" size=\"256\"/><Column id=\"USED_YN\" type=\"STRING\" size=\"256\"/><Column id=\"PERM_GRP_EXPL\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("dsRegiMenu",this);_a._setContents("<ColumnInfo><Column id=\"SYTM_FLAG_CD\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PERM_CHK\" type=\"STRING\" size=\"256\"/><Column id=\"MODULE_CD\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_ENGL_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_WHLE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"HIPO_MENU_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_LVL\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_ORDR\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_FLAG_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PRGM_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PARM\" type=\"STRING\" size=\"256\"/><Column id=\"USED_YN\" type=\"STRING\" size=\"256\"/><Column id=\"REMK\" type=\"STRING\" size=\"256\"/><Column id=\"PERM_ID\" type=\"STRING\" size=\"256\"/><Column id=\"INQR_BTTN_USED_YN\" type=\"STRING\" size=\"256\"/><Column id=\"ANEW_BTTN_USED_YN\" type=\"STRING\" size=\"256\"/><Column id=\"SAVE_BTTN_USED_YN\" type=\"STRING\" size=\"256\"/><Column id=\"DELE_BTTN_USED_YN\" type=\"STRING\" size=\"256\"/><Column id=\"PRNT_BTTN_USED_YN\" type=\"STRING\" size=\"256\"/><Column id=\"EXCL_BTTN_USED_YN\" type=\"STRING\" size=\"256\"/><Column id=\"INIT_BTTN_USED_YN\" type=\"STRING\" size=\"256\"/><Column id=\"SEARCH_SCOPE_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PRGM_NM\" type=\"STRING\" size=\"256\"/><Column id=\"PRGM_ANEW_BTTN_USED_YN\" type=\"STRING\" size=\"256\"/><Column id=\"PRGM_INQR_BTTN_USED_YN\" type=\"STRING\" size=\"256\"/><Column id=\"PRGM_DELE_BTTN_USED_YN\" type=\"STRING\" size=\"256\"/><Column id=\"PRGM_SAVE_BTTN_USED_YN\" type=\"STRING\" size=\"256\"/><Column id=\"PRGM_PRNT_BTTN_USED_YN\" type=\"STRING\" size=\"256\"/><Column id=\"PRGM_EXCL_BTTN_USED_YN\" type=\"STRING\" size=\"256\"/><Column id=\"PRGM_INIT_BTTN_USED_YN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("dsRegiMenuDel",this);_a._setContents("<ColumnInfo><Column id=\"SYTM_FLAG_CD\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PERM_CHK\" type=\"STRING\" size=\"256\"/><Column id=\"MODULE_CD\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_ENGL_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_WHLE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"HIPO_MENU_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_LVL\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_ORDR\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_FLAG_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PRGM_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PARM\" type=\"STRING\" size=\"256\"/><Column id=\"USED_YN\" type=\"STRING\" size=\"256\"/><Column id=\"REMK\" type=\"STRING\" size=\"256\"/><Column id=\"PERM_ID\" type=\"STRING\" size=\"256\"/><Column id=\"INQR_BTTN_USED_YN\" type=\"STRING\" size=\"256\"/><Column id=\"ANEW_BTTN_USED_YN\" type=\"STRING\" size=\"256\"/><Column id=\"SAVE_BTTN_USED_YN\" type=\"STRING\" size=\"256\"/><Column id=\"DELE_BTTN_USED_YN\" type=\"STRING\" size=\"256\"/><Column id=\"PRNT_BTTN_USED_YN\" type=\"STRING\" size=\"256\"/><Column id=\"EXCL_BTTN_USED_YN\" type=\"STRING\" size=\"256\"/><Column id=\"INIT_BTTN_USED_YN\" type=\"STRING\" size=\"256\"/><Column id=\"SEARCH_SCOPE_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PRGM_NM\" type=\"STRING\" size=\"256\"/><Column id=\"PRGM_ANEW_BTTN_USED_YN\" type=\"STRING\" size=\"256\"/><Column id=\"PRGM_INQR_BTTN_USED_YN\" type=\"STRING\" size=\"256\"/><Column id=\"PRGM_DELE_BTTN_USED_YN\" type=\"STRING\" size=\"256\"/><Column id=\"PRGM_SAVE_BTTN_USED_YN\" type=\"STRING\" size=\"256\"/><Column id=\"PRGM_PRNT_BTTN_USED_YN\" type=\"STRING\" size=\"256\"/><Column id=\"PRGM_EXCL_BTTN_USED_YN\" type=\"STRING\" size=\"256\"/><Column id=\"PRGM_INIT_BTTN_USED_YN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Div("divSearch","0","0",null,"50","20",null,null,null,null,null,this);_a.set_taborder("0");_a.set_cssclass("div_WF_Search");_a.set_text("");this.addChild(_a.name,_a);_a=new Static("staTitle00","0","12","102","24",null,null,null,null,null,null,this.divSearch.form);_a.set_taborder("1");_a.set_text("시스템 구분");_a.set_cssclass("sta_WF_SchLabel");_a.set_fittocontents("width");this.divSearch.addChild(_a.name,_a);_a=new Combo("Combo01","56","-158","185","24",null,null,null,null,null,null,this.divSearch.form);_a.set_taborder("2");_a.set_codecolumn("codecolumn");_a.set_datacolumn("datacolumn");_a.set_readonly("false");var _b=new nexacro.NormalDataset("divSearch_form_Combo01_innerdataset",_a);_b._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">전체</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">사용</Col></Row><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\">미사용</Col></Row></Rows>");_a.set_innerdataset(_b);_a.set_text("전체");_a.set_value("1");_a.set_index("0");this.divSearch.addChild(_a.name,_a);_a=new Combo("Combo02","282","-158","185","24",null,null,null,null,null,null,this.divSearch.form);_a.set_taborder("3");_a.set_codecolumn("codecolumn");_a.set_datacolumn("datacolumn");_a.set_readonly("false");var _c=new nexacro.NormalDataset("divSearch_form_Combo02_innerdataset",_a);_c._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">전체</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">사용</Col></Row><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\">미사용</Col></Row></Rows>");_a.set_innerdataset(_c);_a.set_text("전체");_a.set_value("1");_a.set_index("0");this.divSearch.addChild(_a.name,_a);_a=new Combo("Combo03","521","-158","184","24",null,null,null,null,null,null,this.divSearch.form);_a.set_taborder("4");_a.set_codecolumn("codecolumn");_a.set_datacolumn("datacolumn");_a.set_readonly("false");var _d=new nexacro.NormalDataset("divSearch_form_Combo03_innerdataset",_a);_d._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">전체</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">사용</Col></Row><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\">미사용</Col></Row></Rows>");_a.set_innerdataset(_d);_a.set_text("전체");_a.set_value("1");_a.set_index("0");this.divSearch.addChild(_a.name,_a);_a=new Calendar("Calendar00","785","-158","184","24",null,null,null,null,null,null,this.divSearch.form);_a.set_taborder("5");_a.set_value("20190308");_a.set_dateformat("yyyy-MM-dd ddd");_a.set_readonly("false");this.divSearch.addChild(_a.name,_a);_a=new Button("btnSearch",null,"10","48","28","25",null,null,null,null,null,this.divSearch.form);_a.set_taborder("0");_a.set_text("조회");_a.set_cssclass("btn_WF_Search");this.divSearch.addChild(_a.name,_a);_a=new Combo("cboSysGubun","staTitle00:0","12","180","24",null,null,null,null,null,null,this.divSearch.form);_a.set_taborder("6");_a.set_text("cbo00");this.divSearch.addChild(_a.name,_a);_a=new Static("staTitle01","cboSysGubun:0","12","74","24",null,null,null,null,null,null,this.divSearch.form);_a.set_taborder("7");_a.set_text("권한명");_a.set_cssclass("sta_WF_SchLabel");_a.set_fittocontents("width");this.divSearch.addChild(_a.name,_a);_a=new Edit("edtPermNm","staTitle01:0","12","140","24",null,null,null,null,null,null,this.divSearch.form);_a.set_taborder("8");this.divSearch.addChild(_a.name,_a);_a=new Static("staTitle00","0","divSearch:0","260","43",null,null,null,null,null,null,this);_a.set_taborder("1");_a.set_text("권한 그룹");_a.set_cssclass("sta_WF_Title");this.addChild(_a.name,_a);_a=new Static("staTitle01","staTitle00:20","divSearch:0","102","43","668",null,null,null,null,null,this);_a.set_taborder("2");_a.set_text("그룹별 권한");_a.set_cssclass("sta_WF_Title");this.addChild(_a.name,_a);_a=new Grid("grdAuthList","0","staTitle00:0","260",null,null,"0",null,null,null,null,this);_a.set_taborder("3");_a.set_autofittype("col");_a.set_binddataset("dsList");_a.set_cellclickbound("cell");_a.set_autoenter("select");_a.set_selectchangetype("up");_a._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"35\"/><Column size=\"80\"/><Column size=\"117\"/><Column size=\"48\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"32\"/></Rows><Band id=\"head\"><Cell displaytype=\"normal\" text=\"No\"/><Cell col=\"1\" edittype=\"normal\" displaytype=\"normal\" text=\"코드\"/><Cell col=\"2\" text=\"권한명\"/><Cell col=\"3\" text=\"여부\" autosizecol=\"none\"/></Band><Band id=\"body\"><Cell text=\"expr:currow + 1\" textAlign=\"center\"/><Cell col=\"1\" displaytype=\"text\" text=\"bind:PERM_ID\" textAlign=\"left\" edittype=\"expr:dataset.getRowType(currow)==2?&apos;text&apos;:&apos;none&apos;\" editmaxlength=\"10\" editinputtype=\"digit,english\" editinputmode=\"upper\" editautoselect=\"true\" editimemode=\"alpha\"/><Cell col=\"2\" text=\"bind:PERM_GRP_NM\" edittype=\"text\" displaytype=\"editcontrol\" editautoselect=\"true\" editimemode=\"hangul\"/><Cell col=\"3\" text=\"bind:USED_YN\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" checkboxfalsevalue=\"0\" checkboxtruevalue=\"1\" autosizecol=\"none\"/></Band></Format></Formats>");this.addChild(_a.name,_a);_a=new Div("divRegiMenuSearch","grdAuthList:20","93","152","32",null,null,null,null,null,null,this);_a.set_taborder("5");_a.set_text("div00");this.addChild(_a.name,_a);_a=new Static("staTitle02","-18","3","60","24",null,null,null,null,null,null,this.divRegiMenuSearch.form);_a.set_taborder("1");_a.set_text("모듈");_a.set_fittocontents("width");_a.set_cssclass("sta_WF_SchLabelSub");this.divRegiMenuSearch.addChild(_a.name,_a);_a=new Combo("cboMenuModule","staTitle02:0","3","102","24",null,null,null,null,null,null,this.divRegiMenuSearch.form);_a.set_taborder("0");_a.set_text("워크플로우");_a.set_value("");_a.set_index("-1");this.divRegiMenuSearch.addChild(_a.name,_a);_a=new Grid("grdMenuRegi","grdAuthList:20","130",null,null,"20","0",null,null,null,null,this);_a.set_taborder("4");_a.set_binddataset("dsRegiMenu");_a.set_autofittype("col");_a.set_treeinitstatus("expand,all");_a.set_treeusecheckbox("false");_a.set_cellclickbound("cell");_a.set_treeusebutton("use");_a._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"48\" band=\"left\"/><Column size=\"35\" band=\"left\"/><Column size=\"280\"/><Column size=\"85\"/><Column size=\"85\"/><Column size=\"85\"/><Column size=\"48\"/><Column size=\"100\"/><Column size=\"35\"/><Column size=\"35\"/><Column size=\"35\"/><Column size=\"35\"/><Column size=\"35\"/><Column size=\"35\"/><Column size=\"48\"/></Columns><Rows><Row size=\"62\" band=\"head\"/><Row size=\"32\"/></Rows><Band id=\"head\"><Cell text=\"권한&#13;&#10;여부\"/><Cell col=\"1\" displaytype=\"normal\" text=\"No\"/><Cell col=\"2\" text=\"메뉴명\"/><Cell col=\"3\" text=\"메뉴코드\"/><Cell col=\"4\" text=\"상위메뉴&#13;&#10;코드\"/><Cell col=\"5\" text=\"메뉴모듈\"/><Cell col=\"6\" text=\"사용&#13;&#10;여부\"/><Cell col=\"7\" text=\"조회&#13;&#10;범위\"/><Cell col=\"8\" text=\"조회\" autosizecol=\"none\"/><Cell col=\"9\" text=\"신규\" autosizecol=\"none\"/><Cell col=\"10\" text=\"삭제\" autosizecol=\"none\"/><Cell col=\"11\" text=\"저장\" autosizecol=\"none\"/><Cell col=\"12\" text=\"출력\" autosizecol=\"none\"/><Cell col=\"13\" text=\"엑셀\" autosizecol=\"none\"/><Cell col=\"14\" text=\"추가&#13;&#10;버튼\" autosizecol=\"none\"/></Band><Band id=\"body\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:PERM_CHK\" checkboxfalsevalue=\"0\" checkboxtruevalue=\"1\"/><Cell col=\"1\" text=\"expr:currow + 1\" textAlign=\"center\"/><Cell col=\"2\" text=\"bind:MENU_NM\" treelevel=\"bind:MENU_LVL\" treestartlevel=\"0\" displaytype=\"treeitemcontrol\" tooltiptext=\"bind:MENU_NM\" edittype=\"tree\"/><Cell col=\"3\" text=\"bind:MENU_ID\"/><Cell col=\"4\" text=\"bind:HIPO_MENU_ID\"/><Cell col=\"5\" text=\"bind:MODULE_CD\"/><Cell col=\"6\" text=\"bind:USED_YN\" displaytype=\"checkboxcontrol\"/><Cell col=\"7\" text=\"bind:SEARCH_SCOPE_CD\" edittype=\"expr:(PRGM_YN == &apos;1&apos; &amp;&amp; PERM_CHK==&apos;1&apos;) ? &apos;combo&apos; : &apos;none&apos;\" displaytype=\"expr:(PRGM_YN == &apos;1&apos; &amp;&amp; PERM_CHK==&apos;1&apos;) ? &apos;combocontrol&apos; : &apos;none&apos;\"/><Cell col=\"8\" text=\"bind:INQR_BTTN_USED_YN\" displaytype=\"expr:(PRGM_YN == &apos;1&apos; &amp;&amp; PERM_CHK==&apos;1&apos; &amp;&amp; PRGM_INQR_BTTN_USED_YN==&apos;1&apos;) ? &apos;checkboxcontrol&apos; : &apos;none&apos;\" edittype=\"expr:(PRGM_YN == &apos;1&apos; &amp;&amp; PERM_CHK==&apos;1&apos; &amp;&amp; PRGM_INQR_BTTN_USED_YN==&apos;1&apos;) ? &apos;checkbox&apos; : &apos;none&apos;\" checkboxfalsevalue=\"0\" checkboxtruevalue=\"1\" autosizecol=\"none\"/><Cell col=\"9\" text=\"bind:ANEW_BTTN_USED_YN\" displaytype=\"expr:(PRGM_YN == &apos;1&apos; &amp;&amp; PERM_CHK==&apos;1&apos; &amp;&amp; PRGM_ANEW_BTTN_USED_YN==&apos;1&apos;) ? &apos;checkboxcontrol&apos; : &apos;none&apos;\" edittype=\"expr:(PRGM_YN == &apos;1&apos; &amp;&amp; PERM_CHK==&apos;1&apos; &amp;&amp; PRGM_ANEW_BTTN_USED_YN==&apos;1&apos;) ? &apos;checkbox&apos; : &apos;none&apos;\" checkboxfalsevalue=\"0\" checkboxtruevalue=\"1\" autosizecol=\"none\"/><Cell col=\"10\" text=\"bind:DELE_BTTN_USED_YN\" displaytype=\"expr:(PRGM_YN == &apos;1&apos; &amp;&amp; PERM_CHK==&apos;1&apos; &amp;&amp; PRGM_DELE_BTTN_USED_YN==&apos;1&apos;) ? &apos;checkboxcontrol&apos; : &apos;none&apos;\" edittype=\"expr:(PRGM_YN == &apos;1&apos; &amp;&amp; PERM_CHK==&apos;1&apos; &amp;&amp; PRGM_DELE_BTTN_USED_YN==&apos;1&apos;) ? &apos;checkbox&apos; : &apos;none&apos;\" checkboxfalsevalue=\"0\" checkboxtruevalue=\"1\" autosizecol=\"none\"/><Cell col=\"11\" text=\"bind:SAVE_BTTN_USED_YN\" displaytype=\"expr:(PRGM_YN == &apos;1&apos; &amp;&amp; PERM_CHK==&apos;1&apos; &amp;&amp; PRGM_SAVE_BTTN_USED_YN==&apos;1&apos; ) ? &apos;checkboxcontrol&apos; : &apos;none&apos;\" edittype=\"expr:(PRGM_YN == &apos;1&apos; &amp;&amp; PERM_CHK==&apos;1&apos; &amp;&amp; PRGM_SAVE_BTTN_USED_YN==&apos;1&apos;) ? &apos;checkbox&apos; : &apos;none&apos;\" checkboxfalsevalue=\"0\" checkboxtruevalue=\"1\" autosizecol=\"none\"/><Cell col=\"12\" text=\"bind:PRNT_BTTN_USED_YN\" displaytype=\"expr:(PRGM_YN == &apos;1&apos; &amp;&amp; PERM_CHK==&apos;1&apos; &amp;&amp; PRGM_PRNT_BTTN_USED_YN==&apos;1&apos; ) ? &apos;checkboxcontrol&apos; : &apos;none&apos;\" edittype=\"expr:(PRGM_YN == &apos;1&apos; &amp;&amp; PERM_CHK==&apos;1&apos; &amp;&amp; PRGM_PRNT_BTTN_USED_YN==&apos;1&apos;) ? &apos;checkbox&apos; : &apos;none&apos;\" checkboxfalsevalue=\"0\" checkboxtruevalue=\"1\" autosizecol=\"none\"/><Cell col=\"13\" text=\"bind:EXCL_BTTN_USED_YN\" displaytype=\"expr:(PRGM_YN == &apos;1&apos; &amp;&amp; PERM_CHK==&apos;1&apos;&amp;&amp; PRGM_EXCL_BTTN_USED_YN==&apos;1&apos; ) ? &apos;checkboxcontrol&apos; : &apos;none&apos;\" edittype=\"expr:(PRGM_YN == &apos;1&apos; &amp;&amp; PERM_CHK==&apos;1&apos; &amp;&amp; PRGM_EXCL_BTTN_USED_YN==&apos;1&apos;) ? &apos;checkbox&apos; : &apos;none&apos;\" checkboxfalsevalue=\"0\" checkboxtruevalue=\"1\" autosizecol=\"none\"/><Cell col=\"14\" displaytype=\"expr:(PRGM_YN == &apos;1&apos;&amp;&amp;PERM_CHK==&apos;1&apos;) ? &apos;buttoncontrol&apos; : &apos;none&apos;\" edittype=\"expr:(PRGM_YN == &apos;1&apos;&amp;&amp;PERM_CHK==&apos;1&apos;) ? &apos;button&apos; : &apos;none&apos;\" expr=\"expr:(PRGM_YN == &apos;1&apos;&amp;&amp;PERM_CHK==&apos;1&apos;) ? &apos;관리&apos; : &apos;&apos;\" text=\"관리\" autosizecol=\"none\"/></Band></Format></Formats>");this.addChild(_a.name,_a);_a=new Div("divCmmnBtn",null,"60","150",null,"20","grdMenuRegi:42",null,null,null,null,this);_a.set_taborder("6");_a.set_text("");_a.set_visible("true");this.addChild(_a.name,_a);_a=new Button("btnSave",null,"0","50","28","0",null,null,null,null,null,this.divCmmnBtn.form);_a.set_taborder("0");_a.set_text("저장");_a.set_visible("true");this.divCmmnBtn.addChild(_a.name,_a);_a=new Div("divCmmnBtn00","88","60","171",null,null,"grdAuthList:5",null,null,null,null,this);_a.set_taborder("7");_a.set_text("");this.addChild(_a.name,_a);_a=new Button("btnExcelDown",null,"0","28","28","0",null,null,null,null,null,this.divCmmnBtn00.form);_a.set_taborder("2");_a.set_cssclass("btn_WF_ExcelSaveSm");_a.set_tooltiptext("엑셀다운로드");this.divCmmnBtn00.addChild(_a.name,_a);_a=new Button("btnExcelUp",null,"0","28","28","btnExcelDown:3",null,null,null,null,null,this.divCmmnBtn00.form);_a.set_taborder("3");_a.set_cssclass("btn_WF_ExcelUpSm");_a.set_tooltiptext("엑셀업로드");this.divCmmnBtn00.addChild(_a.name,_a);_a=new Button("btnDel",null,"0","28","28","btnExcelUp:3",null,null,null,null,null,this.divCmmnBtn00.form);_a.set_taborder("1");_a.set_cssclass("btn_WF_DeleteSm");_a.set_visible("false");_a.set_tooltiptext("행삭제");this.divCmmnBtn00.addChild(_a.name,_a);_a=new Button("btnAdd",null,"0","28","28","btnDel:3",null,null,null,null,null,this.divCmmnBtn00.form);_a.set_taborder("0");_a.set_cssclass("btn_WF_AddSm");_a.set_visible("false");_a.set_tooltiptext("행추가");this.divCmmnBtn00.addChild(_a.name,_a);_a=new Div("divRegiMenuSearch00",null,"93","599","32","19",null,null,null,null,null,this);_a.set_taborder("8");_a.set_text("div00");_a.set_cssclass("div_WF_SchSub");this.addChild(_a.name,_a);_a=new Static("staTitle00","-1","3","89","24",null,null,null,null,null,null,this.divRegiMenuSearch00.form);_a.set_taborder("13");_a.set_text("조회범위  ");_a.set_fittocontents("width");_a.set_cssclass("sta_WF_SchLabelSub");this.divRegiMenuSearch00.addChild(_a.name,_a);_a=new Combo("cboSearchScope","staTitle00:0","3","88","24",null,null,null,null,null,null,this.divRegiMenuSearch00.form);_a.set_taborder("12");_a.set_text("사업본부");_a.set_value("");_a.set_index("-1");this.divRegiMenuSearch00.addChild(_a.name,_a);_a=new Static("staTitle01","cboSearchScope:8","3","24","24",null,null,null,null,null,null,this.divRegiMenuSearch00.form);_a.set_taborder("11");_a.set_text("조회");_a.set_fittocontents("width");_a.set_cssclass("sta_WF_Bold");this.divRegiMenuSearch00.addChild(_a.name,_a);_a=new CheckBox("chkSearch","staTitle01:5","3","20","24",null,null,null,null,null,null,this.divRegiMenuSearch00.form);_a.set_taborder("10");_a.set_falsevalue("0");_a.set_truevalue("1");_a.set_cssclass("sta_WF_SchLabel");this.divRegiMenuSearch00.addChild(_a.name,_a);_a=new Static("staTitle02_00","chkSearch:8","3","24","24",null,null,null,null,null,null,this.divRegiMenuSearch00.form);_a.set_taborder("9");_a.set_text("신규");_a.set_fittocontents("width");_a.set_cssclass("sta_WF_Bold");this.divRegiMenuSearch00.addChild(_a.name,_a);_a=new CheckBox("chkNew","staTitle02_00:5","3","20","24",null,null,null,null,null,null,this.divRegiMenuSearch00.form);_a.set_taborder("8");_a.set_falsevalue("0");_a.set_truevalue("1");this.divRegiMenuSearch00.addChild(_a.name,_a);_a=new Static("staTitle03","chkNew:8","3","24","24",null,null,null,null,null,null,this.divRegiMenuSearch00.form);_a.set_taborder("7");_a.set_text("삭제");_a.set_fittocontents("width");_a.set_cssclass("sta_WF_Bold");this.divRegiMenuSearch00.addChild(_a.name,_a);_a=new CheckBox("chkDel","staTitle03:5","3","20","24",null,null,null,null,null,null,this.divRegiMenuSearch00.form);_a.set_taborder("6");_a.set_falsevalue("0");_a.set_truevalue("1");this.divRegiMenuSearch00.addChild(_a.name,_a);_a=new Static("staTitle04","chkDel:8","3","24","24",null,null,null,null,null,null,this.divRegiMenuSearch00.form);_a.set_taborder("5");_a.set_text("저장");_a.set_fittocontents("width");_a.set_cssclass("sta_WF_Bold");this.divRegiMenuSearch00.addChild(_a.name,_a);_a=new CheckBox("chkSave","staTitle04:5","3","20","24",null,null,null,null,null,null,this.divRegiMenuSearch00.form);_a.set_taborder("4");_a.set_falsevalue("0");_a.set_truevalue("1");this.divRegiMenuSearch00.addChild(_a.name,_a);_a=new Static("staTitle05","chkSave:8","3","24","24",null,null,null,null,null,null,this.divRegiMenuSearch00.form);_a.set_taborder("3");_a.set_text("출력");_a.set_fittocontents("width");_a.set_cssclass("sta_WF_Bold");this.divRegiMenuSearch00.addChild(_a.name,_a);_a=new CheckBox("chkPrint","staTitle05:5","3","20","24",null,null,null,null,null,null,this.divRegiMenuSearch00.form);_a.set_taborder("2");_a.set_falsevalue("0");_a.set_truevalue("1");this.divRegiMenuSearch00.addChild(_a.name,_a);_a=new Static("staTitle06","chkPrint:8","3","24","24",null,null,null,null,null,null,this.divRegiMenuSearch00.form);_a.set_taborder("1");_a.set_text("엑셀");_a.set_fittocontents("width");_a.set_cssclass("sta_WF_Bold");this.divRegiMenuSearch00.addChild(_a.name,_a);_a=new CheckBox("chkExcel","staTitle06:5","3","20","24",null,null,null,null,null,null,this.divRegiMenuSearch00.form);_a.set_taborder("0");_a.set_falsevalue("0");_a.set_truevalue("1");this.divRegiMenuSearch00.addChild(_a.name,_a);_a=new Button("btnApply","chkExcel:8","3","60","25",null,null,null,null,null,null,this.divRegiMenuSearch00.form);_a.set_taborder("14");_a.set_text("일괄적용");_a.set_visible("true");_a.set_cssclass("btn_WF_Module");this.divRegiMenuSearch00.addChild(_a.name,_a);_a=new Layout("default","",0,0,this.divSearch.form,function(_e){});this.divSearch.form.addLayout(_a.name,_a);_a=new Layout("default","",0,0,this.divRegiMenuSearch.form,function(_e){});this.divRegiMenuSearch.form.addLayout(_a.name,_a);_a=new Layout("default","",0,0,this.divCmmnBtn.form,function(_e){});this.divCmmnBtn.form.addLayout(_a.name,_a);_a=new Layout("default","",0,0,this.divCmmnBtn00.form,function(_e){});this.divCmmnBtn00.form.addLayout(_a.name,_a);_a=new Layout("default","",0,0,this.divRegiMenuSearch00.form,function(_e){});this.divRegiMenuSearch00.form.addLayout(_a.name,_a);_a=new Layout("default","",1050,736,this,function(_e){});_a.set_mobileorientation("landscape");this.addLayout(_a.name,_a);_a=new BindItem("item0","divSearch.form.cboSysGubun","value","dsCond","SYTM_FLAG_CD");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item1","divSearch.form.edtPermNm","value","dsCond","PREM_NM");this.addChild(_a.name,_a);_a.bind();};this.loadPreloadList=function(){};this.registerScript("Temp18.xfdl",function(){this.form_onload=function(_a,_b){this.gfnFormOnload(_a,_b);var _c=[,{biztype:"Combo",code:"SM00",objid:this.divSearch.form.cboSysGubun},{biztype:"Combo",code:"SM01",objid:this.divRegiMenuSearch.form.cboMenuModule,selecttype:"A"},{biztype:"Combo",code:"SM13",objid:this.divCmmnBtn.form.cboSearchScope},{biztype:"Grid",code:"SM01",objid:this.grdMenuRegi,bindcolumn:"MODULE_CD",edit:"false"},{biztype:"Grid",code:"SM13",objid:this.grdMenuRegi,bindcolumn:"SEARCH_SCOPE_CD",edit:"true"}];this.divCmmnBtn.form.cboSearchScope;this.gfnGetCommonCode(_c);};this.cfnSearch=function(){if(this.gfnDsIsUpdated(this.dsList)||this.gfnDsIsUpdated(this.dsRegiMenu)){var _b="confirm.before.search";var _c=[""];var _d="beforeSearch";var _e="fnMsgCallback";this.gfnAlert(_b,_c,_d,_e);}else{this.fnTranSearch();}};this.cfnAdd=function(){var _b=this.dsList.addRow();this.dsList.setColumn(_b,"SYTM_FLAG_CD",this.divSearch.form.cboSysGubun.value);this.dsList.setColumn(_b,"USED_YN","1");this.grdAuthList.setCellPos(1);this.grdAuthList.showEditor(true);};this.cfnDel=function(){if(this.dsList.rowcount==0){return;}this.dsList.deleteRow(this.dsList.rowposition);};this.cfnSave=function(){if(this.gfnDsIsUpdated(this.dsList)==false){this.gfnAlert("msg.save.nochange");return;}if(this.fnValidation()){this.gfnAlert("confirm.save",[""],"savePrem","fnMsgCallback");return;}};this.fnTranSearch=function(){var _b="premGrpList";var _c="premGrpList.do";var _d="dsCond=dsCond";var _e="dsList=dsList";var _f="";var _g="fnCallback";this.gfnTransaction(_b,_c,_d,_e,_f,_g);};this.fnTranSearchMenu=function(){this.dsCondDetail.clearData();var _b=this.dsCondDetail.addRow();this.dsCondDetail.setColumn(_b,"PERM_ID",this.dsList.getColumn(this.dsList.rowposition,"PERM_ID"));this.dsCondDetail.setColumn(_b,"SYTM_FLAG_CD",this.dsList.getColumn(this.dsList.rowposition,"SYTM_FLAG_CD"));this.dsRegiMenu.filter("");var _c="premGrpMenuList";var _d="premGrpMenuList.do";var _e="dsCondDetail=dsCondDetail";var _f="dsRegiMenu=dsRegiMenu";var _g="";var _h="fnCallback";this.gfnTransaction(_c,_d,_e,_f,_g,_h);};this.fnTranSave=function(){var _b="savePremGrpList";var _c="savePremGrpList.do";var _d="dsList=dsList:U";var _e="";var _f="";var _g="fnCallback";this.gfnTransaction(_b,_c,_d,_e,_f,_g);};this.fnTranSavePermMenu=function(){var _b="savePremMenuList";var _c="savePremMenuList.do";var _d="dsRegiMenu=dsRegiMenu:U dsRegiMenuDel=dsRegiMenuDel:A";var _e="";var _f="";var _g="fnCallback";this.gfnTransaction(_b,_c,_d,_e,_f,_g);};this.fnCallback=function(_b,_c,_d){switch(_b){case "premGrpList":case "savePremGrpList":case "savePremMenuList":break;case "premGrpMenuList":this.divRegiMenuSearch.form.cboMenuModule.set_index(0);break;default:break;}};this.fnMsgCallback=function(_b,_c){switch(_b){case "beforeSearch":if(this.gfnIsNull(_c)||_c=="false"||_c==false){return;}this.fnTranSearch();break;case "beforeRowPosChange":if(this.gfnIsNull(_c)||_c=="false"||_c==false){return;}this.dsList.set_enableevent(false);this.dsList.set_rowposition(this.dsList.uNewRow);this.fnTranSearchMenu();this.dsList.set_enableevent(true);break;case "savePrem":if(this.gfnIsNull(_c)||_c=="false"||_c==false){return;}this.fnTranSave();break;case "savePermMenu":if(this.gfnIsNull(_c)||_c=="false"||_c==false){return;}this.fnSavePermMenu();break;case "valiPermId":this.dsList.setColumn(this.dsList.rowposition,"PERM_ID","");this.grdAuthList.setCellPos(1);this.grdAuthList.showEditor(true);break;default:break;}};this.fnValidation=function(){this.gfnClearValidation(this.dsList);this.gfnSetValidation(this.dsList,"PERM_ID","권한코드","required");this.gfnSetValidation(this.dsList,"PERM_GRP_NM","권한명","required");if(this.gfnValidation(this.grdAuthList,"U")==false){return false;}else{return true;}};this.fnSavePermMenu=function(){this.dsRegiMenu.set_enableevent(false);this.grdMenuRegi.set_enableevent(false);this.grdMenuRegi.set_enableredraw(false);var _b=this.dsRegiMenu.filterstr;this.dsRegiMenuDel.clearData();this.dsRegiMenu.filter("dataset.getRowType(rowidx)==4 && PERM_CHK=='0'");this.dsRegiMenuDel.copyData(this.dsRegiMenu,true);this.dsRegiMenu.filter(_b);this.dsRegiMenu.set_enableevent(true);this.grdMenuRegi.set_enableevent(true);this.grdMenuRegi.set_enableredraw(true);this.fnTranSavePermMenu();};this.divSearch_btnSearch_onclick=function(_a,_b){this.cfnSearch();};this.dsList_canrowposchange=function(_a,_b){if(_b.newrow<0){return true;}this.dsList.uNewRow=_b.newrow;this.dsList.uOldRow=_b.oldrow;if(this.gfnDsIsUpdated(this.dsRegiMenu)){this.gfnAlert("confirm.before.moveropos",[""],"beforeRowPosChange","fnMsgCallback");return false;}};this.dsList_onrowposchanged=function(_a,_b){if(_b.newrow>-1){this.fnTranSearchMenu();}};this.dsList_cancolumnchange=function(_a,_b){if(_b.columnid=="PERM_ID"){if(this.gfnIsNull(_b.newvalue)){return;}var _c=_a.findRow("PERM_ID",_b.newvalue);if(_c>-1){this.gfnAlert("msg.err.validator",["입력하신 권한코드가 이미 존재합니다."],"valiPermId","fnMsgCallback");return;}}};this.divRegiMenuSearch_cboMenuModule_canitemchange=function(_a,_b){var _c=_b.postvalue;if(_c=="%"){this.dsRegiMenu.filter("");}else{this.dsRegiMenu.filter("MODULE_CD=='"+_c+"'");}};this.grdMenuRegi_oncellclick=function(_a,_b){var _c=_b.cell;var _d=_a.getCurEditType();if(_c==14){if(_d=="button"){if(!this.gfnDsIsUpdated(this.dsRegiMenu)){var _e="메뉴 권한 추가 버튼 관리";var _f={pvPremId:this.dsRegiMenu.getColumn(_b.row,"PERM_ID"),pvSytmFlagCd:this.dsRegiMenu.getColumn(_b.row,"SYTM_FLAG_CD"),pvPrgmId:this.dsRegiMenu.getColumn(_b.row,"PRGM_ID"),pvMenuId:this.dsRegiMenu.getColumn(_b.row,"MENU_ID")};var _g={title:_e,titlebar:true};var _h="fnPopupCallback";this.gfnOpenPopup("authPermAddBtnPu","sytm::auth/authPermGrpMenuAddBtnPu.xfdl",_f,_h,_g);}else{this.gfnAlert("msg.err.updateafter");return;}}}else if(_c==7){if(_d=="combo"){this.grdMenuRegi.showEditor(true);this.grdMenuRegi.dropdownCombo();}}};this.divCmmnBtn_btnSave_onclick=function(_a,_b){if(this.gfnDsIsUpdated(this.dsRegiMenu)==false){this.gfnAlert("msg.save.nochange");return;}this.gfnAlert("confirm.save",[""],"savePermMenu","fnMsgCallback");return;};this.divCmmnBtn_btnApply_onclick=function(_a,_b){var _c=this.dsRegiMenu.rowposition;var _d=-1;this.grdMenuRegi.getTreeRow(_c);if(!this.grdMenuRegi.isTreeLeafRow(_c,true)){var _e=this.dsRegiMenu.getColumn(_c,"MENU_LVL");var _f=this.dsRegiMenu.getColumn(_c,"PERM_CHK");var _g=this.divCmmnBtn.form.chkSearch.value;var _h=this.divCmmnBtn.form.chkNew.value;var _i=this.divCmmnBtn.form.chkSave.value;var _j=this.divCmmnBtn.form.chkDel.value;var _k=this.divCmmnBtn.form.chkPrint.value;var _l=this.divCmmnBtn.form.chkExcel.value;var _m=this.divCmmnBtn.form.cboSearchScope.value;for(var _n=_c+1;_n<this.dsRegiMenu.rowcount;_n++ ){if(this.dsRegiMenu.getColumn(_n,"MENU_LVL")<=_e){break;}_d=this.grdMenuRegi.getTreeRow(_n);this.dsRegiMenu.setColumn(_n,"PERM_CHK",_f);if(this.grdMenuRegi.getCellPropertyValue(_d,8,"edittype")=="checkbox"){this.dsRegiMenu.setColumn(_n,"INQR_BTTN_USED_YN",_g);}if(this.grdMenuRegi.getCellPropertyValue(_d,9,"edittype")=="checkbox"){this.dsRegiMenu.setColumn(_n,"ANEW_BTTN_USED_YN",_h);}if(this.grdMenuRegi.getCellPropertyValue(_d,11,"edittype")=="checkbox"){this.dsRegiMenu.setColumn(_n,"SAVE_BTTN_USED_YN",_i);}if(this.grdMenuRegi.getCellPropertyValue(_d,10,"edittype")=="checkbox"){this.dsRegiMenu.setColumn(_n,"DELE_BTTN_USED_YN",_j);}if(this.grdMenuRegi.getCellPropertyValue(_d,12,"edittype")=="checkbox"){this.dsRegiMenu.setColumn(_n,"PRNT_BTTN_USED_YN",_k);}if(this.grdMenuRegi.getCellPropertyValue(_d,13,"edittype")=="checkbox"){this.dsRegiMenu.setColumn(_n,"EXCL_BTTN_USED_YN",_l);}if(this.grdMenuRegi.getCellPropertyValue(_d,7,"edittype")=="combo"){this.dsRegiMenu.setColumn(_n,"SEARCH_SCOPE_CD",_m);}}}else{this.gfnAlert("msg.general",["일괄적용할 parent node (internal node)를 선택 후 다시 시도해주세요"]);return;}};});this.on_initEvent=function(){this.addEventHandler("onload",this.form_onload,this);this.divSearch.form.btnSearch.addEventHandler("onclick",this.divSearch_btnSearch_onclick,this);this.divRegiMenuSearch.form.cboMenuModule.addEventHandler("canitemchange",this.divRegiMenuSearch_cboMenuModule_canitemchange,this);this.grdMenuRegi.addEventHandler("oncellclick",this.grdMenuRegi_oncellclick,this);this.divCmmnBtn.form.btnSave.addEventHandler("onclick",this.divCmmnBtn_btnSave_onclick,this);this.divCmmnBtn00.form.btnExcelDown.addEventHandler("onclick",this.divCmmnBtn_btnExcelDown_onclick,this);this.divCmmnBtn00.form.btnExcelUp.addEventHandler("onclick",this.divCmmnBtn_btnExcelUp_onclick,this);this.divCmmnBtn00.form.btnDel.addEventHandler("onclick",this.divCmmnBtn_btnDel_onclick,this);this.divCmmnBtn00.form.btnAdd.addEventHandler("onclick",this.divCmmnBtn_btnAdd_onclick,this);this.divRegiMenuSearch00.form.btnApply.addEventHandler("onclick",this.divCmmnBtn_btnApply_onclick,this);this.dsList.addEventHandler("onrowposchanged",this.dsList_onrowposchanged,this);this.dsList.addEventHandler("cancolumnchange",this.dsList_cancolumnchange,this);this.dsList.addEventHandler("canrowposchange",this.dsList_canrowposchange,this);};this.loadIncludeScript("Temp18.xfdl");this.loadPreloadList();_a=null;};})();