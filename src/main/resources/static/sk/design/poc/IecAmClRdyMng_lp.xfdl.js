(function(){return function(){if(!this._is_form){return;}var _a=null;this.on_create=function(){this.set_name("IecAmClRdyMng_lp");this.set_titletext("휴일복사팝업");this.set_cssclass("frm_POP_Bg");this.getSetter("scrollbars").set("none");if(Form==this.constructor){this._setFormPosition(700,560);}_a=new Dataset("ds_service",this);_a._setContents("<ColumnInfo><Column id=\"svcId\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"svcUrl\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"beanName\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"methodName\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"inputVo\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"inDs\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"outDs\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"callback\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"loadFlag\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"checkFlag\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"syncFlag\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"validation\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"beanName\">IecAmClRdyMngSVC</Col><Col id=\"callback\">fn_callBack</Col><Col id=\"checkFlag\">false</Col><Col id=\"inDs\"/><Col id=\"inputVo\">kr.or.geps.iec.am.cl.svc.IecAmClRdyMngSVO</Col><Col id=\"loadFlag\">false</Col><Col id=\"methodName\">getYrRdyList</Col><Col id=\"outDs\">ds_basYrRdyList=IecAmClSelectRdyListDVO</Col><Col id=\"svcId\">getBasYrRdyList</Col><Col id=\"svcUrl\">svc</Col><Col id=\"syncFlag\">false</Col><Col id=\"validation\">id:cobBaeYr,name:,type:CUSTOM,required</Col></Row><Row><Col id=\"beanName\">IecAmClRdyMngSVC</Col><Col id=\"callback\">fn_callBack</Col><Col id=\"checkFlag\">false</Col><Col id=\"inDs\"/><Col id=\"inputVo\">kr.or.geps.iec.am.cl.svc.IecAmClRdyMngSVO</Col><Col id=\"loadFlag\">false</Col><Col id=\"methodName\">getYrRdyList</Col><Col id=\"outDs\">ds_tgtYrRdyList=IecAmClSelectRdyListDVO</Col><Col id=\"svcId\">getTgtYrRdyList</Col><Col id=\"svcUrl\">svc</Col><Col id=\"syncFlag\">false</Col><Col id=\"validation\">id:cobTgtYr,name:,type:CUSTOM,required</Col></Row><Row><Col id=\"beanName\">IecAmClRdyMngSVC</Col><Col id=\"callback\">fn_callBack</Col><Col id=\"checkFlag\">false</Col><Col id=\"inDs\">iecAmClSelectRdyListDVO=ds_tgtYrRdyList</Col><Col id=\"inputVo\">kr.or.geps.iec.am.cl.svc.IecAmClRdyMngSVO</Col><Col id=\"loadFlag\">false</Col><Col id=\"methodName\">copyHoliDay</Col><Col id=\"outDs\"/><Col id=\"svcId\">copyHoliDay</Col><Col id=\"svcUrl\">svc</Col><Col id=\"syncFlag\">true</Col><Col id=\"validation\"/></Row><Row><Col id=\"beanName\">IecAmClRdyMngSVC</Col><Col id=\"callback\">fn_callBack</Col><Col id=\"checkFlag\">false</Col><Col id=\"inDs\"/><Col id=\"inputVo\">kr.or.geps.iec.am.cl.svc.IecAmClRdyMngSVO</Col><Col id=\"loadFlag\">false</Col><Col id=\"methodName\">insertWkn</Col><Col id=\"outDs\"/><Col id=\"svcId\">insertWkn</Col><Col id=\"svcUrl\">svc</Col><Col id=\"syncFlag\">true</Col><Col id=\"validation\"/></Row></Rows>");this.addChild(_a.name,_a);_a=new Dataset("ds_srchCndBse",this);_a._setContents("<ColumnInfo><Column id=\"bseYr\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"bseYr\">2023</Col></Row></Rows>");this.addChild(_a.name,_a);_a=new Dataset("ds_srchCndTgt",this);_a._setContents("<ColumnInfo><Column id=\"tgtYr\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"tgtYr\">2024</Col></Row></Rows>");this.addChild(_a.name,_a);_a=new Dataset("ds_comboBasYr",this);_a._setContents("<ColumnInfo><Column id=\"yrCd\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"yrNm\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_comboTgtYr",this);_a._setContents("<ColumnInfo><Column id=\"yrCd\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"yrNm\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_basYrRdyList",this);_a.set_useclientlayout("1");_a._setContents("<ColumnInfo><Column id=\"rdyDt\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"rdyNm\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"rdyClCd\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"rdyDesc\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"delChk\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"delChk\"/><Col id=\"rdyClCd\">1</Col><Col id=\"rdyDesc\"/><Col id=\"rdyDt\">20231002</Col><Col id=\"rdyNm\"/></Row><Row><Col id=\"delChk\"/><Col id=\"rdyClCd\">2</Col><Col id=\"rdyDesc\"/><Col id=\"rdyDt\">20231003</Col><Col id=\"rdyNm\">개천절</Col></Row><Row><Col id=\"delChk\"/><Col id=\"rdyClCd\">2</Col><Col id=\"rdyDesc\"/><Col id=\"rdyDt\">20231009</Col><Col id=\"rdyNm\">한글날</Col></Row><Row><Col id=\"delChk\"/><Col id=\"rdyClCd\">2</Col><Col id=\"rdyDesc\"/><Col id=\"rdyDt\">20231225</Col><Col id=\"rdyNm\">성탄절</Col></Row></Rows>");this.addChild(_a.name,_a);_a=new Dataset("ds_tgtYrRdyList",this);_a.set_useclientlayout("1");_a._setContents("<ColumnInfo><Column id=\"rdyDt\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"rdyNm\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"rdyClCd\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"rdyDesc\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"delChk\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"delChk\"/><Col id=\"rdyClCd\">2</Col><Col id=\"rdyDesc\"/><Col id=\"rdyDt\">20240101</Col><Col id=\"rdyNm\">신정</Col></Row></Rows>");this.addChild(_a.name,_a);_a=new Dataset("ds_comboRdyClCdGrid",this);_a._setContents("<ColumnInfo><ConstColumn id=\"CMN_CSF_CD\" type=\"STRING\" value=\"RDY_CL_CD\"/><ConstColumn id=\"DEL_YN\" type=\"STRING\" value=\"N\"/><ConstColumn id=\"TYPE\" type=\"STRING\" value=\"code\"/><Column id=\"cmnCd\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"cmnCdNm\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"delYn\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"cmnCd\">1</Col><Col id=\"cmnCdNm\">임시공휴일</Col><Col id=\"delYn\"/></Row><Row><Col id=\"cmnCd\">2</Col><Col id=\"cmnCdNm\">법정공휴일</Col><Col id=\"delYn\"/></Row><Row><Col id=\"cmnCd\">3</Col><Col id=\"cmnCdNm\">대체공휴일</Col><Col id=\"delYn\"/></Row></Rows>");this.addChild(_a.name,_a);_a=new Div("Div00","0","0",null,"40","0",null,null,null,null,null,this);_a.set_taborder("21");_a.set_cssclass("div_POP_TitleBg");this.addChild(_a.name,_a);_a=new Static("Static00","20","5","617","30",null,null,null,null,null,null,this.Div00.form);_a.set_taborder("0");_a.set_text("휴일복사팝업");_a.set_cssclass("sta_POP_Title");_a.set_fittocontents("width");this.Div00.addChild(_a.name,_a);_a=new Button("Button00",null,"5","34","31","8",null,null,null,null,null,this.Div00.form);_a.set_taborder("1");_a.set_cssclass("btn_POP_Close");this.Div00.addChild(_a.name,_a);_a=new Static("stTitle","20","50","150","20",null,null,null,null,null,null,this);_a.set_taborder("4");_a.set_text("휴일복사");_a.set_textAlign("left");_a.set_verticalAlign("top");_a.set_cssclass("sta_WF_Title");this.addChild(_a.name,_a);_a=new Static("STgridTitle","20","142","110","20",null,null,null,null,null,null,this);_a.set_taborder("5");_a.set_text("지난휴일목록");_a.set_textAlign("left");_a.set_verticalAlign("top");_a.set_cssclass("sta_WF_SubTitle");this.addChild(_a.name,_a);_a=new Button("btnSrchBaeYr","161","112","140","23",null,null,null,null,null,null,this);_a.set_taborder("1");_a.set_text("룰설정으로 일괄변경");this.addChild(_a.name,_a);_a=new Static("stSrcRect","20","79","280","26",null,null,null,null,null,null,this);_a.set_textAlign("right");_a.set_taborder("6");_a.set_verticalAlign("middle");_a.set_cssclass("sta_WF_LabelBg");this.addChild(_a.name,_a);_a=new Static("STbaeYr","20","79","100","26",null,null,null,null,null,null,this);_a.set_taborder("7");_a.set_text("    년도");_a.set_verticalAlign("middle");_a.set_textAlign("left");_a.set_cssclass("sta_WF_Label");this.addChild(_a.name,_a);_a=new ImageViewer("imgIcon","2","153","10","11",null,null,null,null,null,null,this);_a.set_image("URL(\'theme://images/ic_stit.png\')");_a.set_taborder("8");_a.set_imagealign("left middle");this.addChild(_a.name,_a);_a=new Button("btnSav","40%",null,"54","24",null,"20",null,null,null,null,this);_a.set_taborder("2");_a.set_text(" 등록");_a.set_cssclass("btn_WF_Crud");this.addChild(_a.name,_a);_a=new Button("btnCancel","btnSav:5",null,"54","24",null,"20",null,null,null,null,this);_a.set_taborder("3");_a.set_text("취소");this.addChild(_a.name,_a);_a=new Combo("cobBaeYr","122","82","175","20",null,null,null,null,null,null,this);_a.getSetter("binddataset").set("ds_srchCndBse");_a.set_codecolumn("yrCd");_a.set_datacolumn("yrNm");_a.set_innerdataset("ds_comboBasYr");_a.set_taborder("0");_a.set_cssclass("essential");_a.set_text("전체");_a.set_index("0");this.addChild(_a.name,_a);_a=new Button("btnAddRdyDt","311","314","60","40",null,null,null,null,null,null,this);_a.set_taborder("9");_a.set_cssclass("btn_WF_Copy");_a.set_text("복사");this.addChild(_a.name,_a);_a=new Grid("grdBaeYrList","20","168","280",null,null,"64",null,null,null,null,this);_a.set_autofittype("col");_a.set_binddataset("ds_basYrRdyList");_a.set_cellmovingtype("col");_a.set_cellsizingtype("col");_a.set_readonly("false");_a.set_enable("true");_a.set_cellsizebandtype("allband");_a.set_taborder("10");_a.set_tabstop("true");_a.set_useselcolor("true");_a.set_visible("true");_a.set_wheelscrollrow("1");_a.set_formatid("default");_a.set_selecttype("row");_a._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"25\"/><Column size=\"140\"/><Column size=\"101\"/><Column size=\"90\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" displaytype=\"text\" text=\"휴일일자\"/><Cell col=\"2\" displaytype=\"text\" text=\"휴일명\"/><Cell col=\"3\" displaytype=\"text\" text=\"구분\"/></Band><Band id=\"body\"><Cell text=\"bind:delChk\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" textAlign=\"left\"/><Cell col=\"1\" textAlign=\"center\" text=\"bind:rdyDt\" displaytype=\"date\" expandshow=\"show\" expandsize=\"22\" maskeditformat=\"yyyy/MM/dd\" calendardisplaynulltype=\"none\"/><Cell col=\"2\" textAlign=\"left\" text=\"bind:rdyNm\" displaytype=\"text\"/><Cell col=\"3\" textAlign=\"center\" text=\"bind:rdyClCd\" combocodecol=\"cmnCd\" combodataset=\"ds_comboRdyClCdGrid\" combodatacol=\"cmnCdNm\" displaytype=\"combocontrol\"/></Band></Format></Formats>");this.addChild(_a.name,_a);_a=new Grid("grdTgtYrList","381","168",null,null,"20","64",null,null,null,null,this);_a.set_autofittype("col");_a.set_binddataset("ds_tgtYrRdyList");_a.set_cellmovingtype("col");_a.set_cellsizingtype("col");_a.set_readonly("false");_a.set_enable("true");_a.set_cellsizebandtype("allband");_a.set_taborder("11");_a.set_tabstop("true");_a.set_useselcolor("true");_a.set_visible("true");_a.set_wheelscrollrow("1");_a.set_formatid("default");_a.set_selecttype("row");_a._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"25\"/><Column size=\"140\"/><Column size=\"101\"/><Column size=\"90\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" displaytype=\"text\" text=\"휴일일자\"/><Cell col=\"2\" displaytype=\"text\" text=\"휴일명\"/><Cell col=\"3\" displaytype=\"text\" text=\"구분\"/></Band><Band id=\"body\"><Cell text=\"bind:delChk\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" textAlign=\"left\"/><Cell col=\"1\" textAlign=\"center\" text=\"bind:rdyDt\" displaytype=\"date\" edittype=\"date\" expandshow=\"show\" expandsize=\"22\" maskeditformat=\"yyyy/MM/dd\" calendardisplaynulltype=\"none\"/><Cell col=\"2\" textAlign=\"left\" text=\"bind:rdyNm\" displaytype=\"text\" edittype=\"normal\"/><Cell col=\"3\" textAlign=\"center\" text=\"bind:rdyClCd\" combocodecol=\"cmnCd\" combodataset=\"ds_comboRdyClCdGrid\" combodatacol=\"cmnCdNm\" displaytype=\"combocontrol\" edittype=\"combo\"/></Band></Format></Formats>");this.addChild(_a.name,_a);_a=new Static("stTgtList","381","142","120","20",null,null,null,null,null,null,this);_a.set_taborder("12");_a.set_text("신규휴일목록");_a.set_textAlign("left");_a.set_verticalAlign("top");_a.set_cssclass("sta_WF_SubTitle");this.addChild(_a.name,_a);_a=new ImageViewer("imgIconNew","402","153","10","11",null,null,null,null,null,null,this);_a.set_image("URL(\'theme://images/ic_stit.png\')");_a.set_taborder("13");_a.set_imagealign("left middle");this.addChild(_a.name,_a);_a=new Button("btnDelRow",null,"139","80","24","20",null,null,null,null,null,this);_a.set_taborder("14");_a.set_text("Button8");this.addChild(_a.name,_a);_a=new Button("btnRst",null,"139","71","24","104",null,null,null,null,null,this);_a.set_taborder("15");_a.set_text("초기화");this.addChild(_a.name,_a);_a=new ImageViewer("imgRequiredSrc","7","88","5","7",null,null,null,null,null,null,this);_a.set_image("URL(\'theme://images/bu_must.png\')");_a.set_taborder("16");_a.set_imagealign("left middle");this.addChild(_a.name,_a);_a=new Button("btnSrchTgtYr",null,"112","140","23","20",null,null,null,null,null,this);_a.set_taborder("18");_a.set_text("룰설정으로 일괄변경");this.addChild(_a.name,_a);_a=new Static("stTgtRect","380","79",null,"26","20",null,null,null,null,null,this);_a.set_textAlign("right");_a.set_taborder("19");_a.set_verticalAlign("middle");_a.set_cssclass("sta_WF_LabelBg");this.addChild(_a.name,_a);_a=new Combo("cobTgtYr","481","82",null,"20","22",null,null,null,null,null,this);_a.getSetter("binddataset").set("ds_srchCndTgt");_a.set_codecolumn("yrCd");_a.set_datacolumn("yrNm");_a.set_imemode("none");_a.set_innerdataset("ds_comboTgtYr");_a.set_taborder("17");_a.set_cssclass("essential");_a.set_text("전체");_a.set_index("0");this.addChild(_a.name,_a);_a=new Static("STtgtYr","379","79","100","26",null,null,null,null,null,null,this);_a.set_taborder("20");_a.set_text("    년도");_a.set_verticalAlign("middle");_a.set_textAlign("left");_a.set_cssclass("sta_WF_Label");this.addChild(_a.name,_a);_a=new ImageViewer("imgRequiredTgt","405","88","5","7",null,null,null,null,null,null,this);_a.set_image("URL(\'theme://images/bu_must.png\')");_a.set_taborder("22");_a.set_imagealign("left middle");this.addChild(_a.name,_a);_a=new Layout("default","",0,0,this.Div00.form,function(_b){});this.Div00.form.addLayout(_a.name,_a);_a=new Layout("default","",700,560,this,function(_b){});this.addLayout(_a.name,_a);_a=new BindItem("cobBaeYr_value","cobBaeYr","value","ds_srchCndBse","bseYr");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("cobTgtYr_value","cobTgtYr","value","ds_srchCndTgt","tgtYr");this.addChild(_a.name,_a);_a.bind();};this.loadPreloadList=function(){};this.addIncludeScript("IecAmClRdyMng_lp.xfdl","ximport::lib_XConvert.xjs");this.addIncludeScript("IecAmClRdyMng_lp.xfdl","lib::lib_commF.xjs");this.registerScript("IecAmClRdyMng_lp.xfdl",function(){this.executeIncludeScript("ximport::lib_XConvert.xjs");this.executeIncludeScript("lib::lib_commF.xjs");this.nowYr="";this.unloadCheckDatasetList="ds_tgtYrRdyList";this.IecAmClRdyMng_lp_OnLoadCompleted=function(_a,_b){this.gfn_setComboBoxYear(this.ds_comboBasYr,"1990","2050","1");this.gfn_setComboBoxYear(this.ds_comboTgtYr,"1990","2050","1");this.nowYr="2023";this.cobBaeYr.set_value(this.nowYr);this.cobTgtYr.set_value(parseInt(this.nowYr)+1);};this.IecAmClRdyMng_lp_OnInit=function(_a,_b){this.gfn_FormInitSizeReg(_a,_b.fromobject.position.width,_b.fromobject.position.height);};this.btnSrchBaeYr_OnClick=function(_a,_b){this.searchBaeYr();};this.btnSrchTgtYr_OnClick=function(_a,_b){if(this.gfn_checkManageAreaChanged(this)){this.searchTgtYr();}};this.btnRst_OnClick=function(_a,_b){this.ds_tgtYrRdyList.clearData();};this.btnDelRow_OnClick=function(_a,_b){this.gfn_delRowFromGrid(this.grdTgtYrList);};this.btnAddRdyDt_OnClick=function(_a,_b){var _c=0;var _d=false;for(;_c<this.ds_basYrRdyList.rowcount;_c++ ){if(this.ds_basYrRdyList.getColumn(_c,"delChk")==1){_d=true;break;}}if(!_d){this.gfn_alert("ECI0019");return;}var _e=parseInt(this.cobTgtYr.value)-parseInt(this.cobBaeYr.value);for(_c=0;_c<this.ds_basYrRdyList.rowcount;_c++ ){if(this.ds_basYrRdyList.getColumn(_c,"delChk")==1){var _f=this.m2n_addMonth(this.m2n_dateTime(this.ds_basYrRdyList.getColumn(_c,"rdyDt")),_e* 12);var _g=this.ds_tgtYrRdyList.findRow("rdyDt",_f);if(_g<0){var _h=this.ds_tgtYrRdyList.addRow(_c);this.ds_tgtYrRdyList.setColumn(_h,"rdyDt",_f);this.ds_tgtYrRdyList.setColumn(_h,"rdyNm",this.ds_basYrRdyList.getColumn(_c,"rdyNm"));this.ds_tgtYrRdyList.setColumn(_h,"rdyClCd",this.ds_basYrRdyList.getColumn(_c,"rdyClCd"));this.ds_tgtYrRdyList.setColumn(_h,"rdyDesc",this.ds_basYrRdyList.getColumn(_c,"rdyDesc"));}}}};this.btnSav_OnClick=function(_a,_b){if(this.gfn_confirm("ECI0035",this.ds_srchCndTgt.getColumn(0,0),"YESNO","6")=="6"){var _c="rdyDt="+this.cobTgtYr.value+"0101";this.gfn_CallService("copyHoliDay",_c);}};this.btnCancel_OnClick=function(_a,_b){this.m2n_close(null);};this.searchBaeYr=function(){var _b="tgtYr="+this.cobBaeYr.value;this.gfn_CallService("getBasYrRdyList",_b);};this.searchTgtYr=function(){var _b="tgtYr="+this.cobTgtYr.value;this.gfn_CallService("getTgtYrRdyList",_b);};this.cobBaeYr_OnClick=function(_a,_b){this.cobBaeYr.set_value(this.nowYr);};this.cobTgtYr_OnClick=function(_a,_b){this.cobTgtYr.set_value(parseInt(this.nowYr)+1);};this.grdBaeYrList_OnHeadClick=function(_a,_b){this.gfn_GridSort(_a,_b.cell);};this.grdTgtYrList_OnHeadClick=function(_a,_b){this.gfn_GridSort(_a,_b.cell);};this.cobBaeYr_OnKeyDown=function(_a,_b){if(_b.keycode=="13"){this.btnSrchBaeYr_OnClick(_a);}};this.cobTgtYr_OnKeyDown=function(_a,_b){if(_b.keycode=="13"){this.m2n_applyData(_a);if(!this.gfn_isExistsUpdatedDataset(this)){this.btnSrchTgtYr_OnClick(_a);}}};this.grdTgtYrList_OnExpandEdit=function(_a,_b){if(_b.cell==1){this.gfn_SetPopupDivCalendar(_a,_b.row,_b.cell);}};this.ds_srchCndBse_OnColumnChanged=function(_a,_b){};this.ds_srchCndTgt_CanColumnChange=function(_a,_b){var _c=this.gfn_checkManageAreaChanged(this);if(_c){}return _c;};this.fn_callback=function(_b,_c,_d){if(_c<0){if(this.m2n_isNull(_d)!=true){this.gfn_alert(_d);}else{this.gfn_alert("COE0000");}}else{switch(_b){case "getBasYrRdyList":if(this.ds_basYrRdyList.getRowCount()==0){this.gfn_alert("ECI0007");this.grdBaeYrList.set_nodatatext(this.gfn_getMessage("ECI0007"));}break;case "getTgtYrRdyList":if(this.ds_tgtYrRdyList.getRowCount()==0){this.gfn_alert("ECI0007");this.grdTgtYrList.set_nodatatext(this.gfn_getMessage("ECI0007"));}break;case "copyHoliDay":this.m2n_lookupPath("setGdsHoliDay")();this.gfn_alert("ECI0008");this.btnSrchTgtYr_OnClick(this.btnSrchTgtYr);break;}}};});this.on_initEvent=function(){this.addEventHandler("oninit",this.IecAmClRdyMng_lp_OnInit,this);this.addEventHandler("onload",this.IecAmClRdyMng_lp_OnLoadCompleted,this);this.btnSrchBaeYr.addEventHandler("onclick",this.btnSrchBaeYr_OnClick,this);this.btnSav.addEventHandler("onclick",this.btnSav_OnClick,this);this.btnCancel.addEventHandler("onclick",this.btnCancel_OnClick,this);this.cobBaeYr.addEventHandler("oneditclick",this.cobBaeYr_OnClick,this);this.cobBaeYr.addEventHandler("onkeydown",this.cobBaeYr_OnKeyDown,this);this.btnAddRdyDt.addEventHandler("onclick",this.btnAddRdyDt_OnClick,this);this.grdBaeYrList.addEventHandler("onheadclick",this.grdBaeYrList_OnHeadClick,this);this.grdTgtYrList.addEventHandler("onexpanddown",this.grdTgtYrList_OnExpandEdit,this);this.grdTgtYrList.addEventHandler("onheadclick",this.grdTgtYrList_OnHeadClick,this);this.btnDelRow.addEventHandler("onclick",this.btnDelRow_OnClick,this);this.btnRst.addEventHandler("onclick",this.btnRst_OnClick,this);this.btnSrchTgtYr.addEventHandler("onclick",this.btnSrchTgtYr_OnClick,this);this.cobTgtYr.addEventHandler("oneditclick",this.cobTgtYr_OnClick,this);this.cobTgtYr.addEventHandler("onkeydown",this.cobTgtYr_OnKeyDown,this);this.ds_srchCndBse.addEventHandler("oncolumnchanged",this.ds_srchCndBse_OnColumnChanged,this);this.ds_srchCndTgt.addEventHandler("cancolumnchange",this.ds_srchCndTgt_CanColumnChange,this);};this.loadIncludeScript("IecAmClRdyMng_lp.xfdl");this.loadPreloadList();_a=null;};})();