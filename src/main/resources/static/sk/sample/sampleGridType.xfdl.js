(function(){return function(){if(!this._is_form){return;}var _a=null;this.on_create=function(){this.set_name("sampleGridType");this.set_titletext("다양한 그리드 표현");this.set_stepalign("left top");if(Form==this.constructor){this._setFormPosition(1050,736);}_a=new Dataset("dsGrid",this);_a._setContents("<ColumnInfo><Column id=\"체크박스\" type=\"STRING\" size=\"256\"/><Column id=\"NO\" type=\"STRING\" size=\"256\"/><Column id=\"Edit\" type=\"STRING\" size=\"256\"/><Column id=\"MaskEdit\" type=\"STRING\" size=\"256\"/><Column id=\"Combo\" type=\"STRING\" size=\"256\"/><Column id=\"Calendar\" type=\"STRING\" size=\"256\"/><Column id=\"Expand\" type=\"STRING\" size=\"256\"/><Column id=\"Text\" type=\"STRING\" size=\"256\"/><Column id=\"Number\" type=\"STRING\" size=\"256\"/><Column id=\"Button\" type=\"STRING\" size=\"256\"/><Column id=\"ProgressBar\" type=\"STRING\" size=\"256\"/><Column id=\"code\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Edit\">투비</Col><Col id=\"MaskEdit\">12345</Col><Col id=\"Calendar\">20201225</Col><Col id=\"Expand\"/><Col id=\"Combo\">가나다라</Col><Col id=\"Number\">1500000</Col><Col id=\"Text\">가나다라마</Col><Col id=\"체크박스\">1</Col><Col id=\"Button\">버튼</Col><Col id=\"NO\">01</Col><Col id=\"ProgressBar\">50%</Col><Col id=\"code\">0</Col></Row><Row><Col id=\"Edit\">투비</Col><Col id=\"MaskEdit\">12345</Col><Col id=\"Calendar\">20201225</Col><Col id=\"Expand\"/><Col id=\"Combo\">가나다라</Col><Col id=\"Text\">가나다라마</Col><Col id=\"Number\">1500000</Col><Col id=\"체크박스\"/><Col id=\"Button\">버튼</Col><Col id=\"NO\">02</Col><Col id=\"ProgressBar\">50%</Col><Col id=\"code\">1</Col></Row><Row><Col id=\"Edit\">투비</Col><Col id=\"MaskEdit\">12345</Col><Col id=\"Calendar\">20201225</Col><Col id=\"Expand\"/><Col id=\"Combo\">가나다라</Col><Col id=\"Text\">가나다라마</Col><Col id=\"Number\">1500000</Col><Col id=\"체크박스\"/><Col id=\"Button\">버튼</Col><Col id=\"NO\">03</Col><Col id=\"ProgressBar\">50%</Col><Col id=\"code\">2</Col></Row><Row><Col id=\"Edit\">투비</Col><Col id=\"체크박스\"/><Col id=\"MaskEdit\">12345</Col><Col id=\"Calendar\">20201225</Col><Col id=\"Expand\"/><Col id=\"Combo\">가나다라</Col><Col id=\"Text\">가나다라마</Col><Col id=\"Number\">1500000</Col><Col id=\"Button\">버튼</Col><Col id=\"NO\">04</Col><Col id=\"ProgressBar\">50%</Col><Col id=\"code\">3</Col></Row><Row><Col id=\"Edit\">투비</Col><Col id=\"MaskEdit\">12345</Col><Col id=\"Calendar\">20201225</Col><Col id=\"Expand\"/><Col id=\"Combo\">가나다라</Col><Col id=\"Text\">가나다라마</Col><Col id=\"Number\">1500000</Col><Col id=\"체크박스\"/><Col id=\"Button\">버튼</Col><Col id=\"NO\">05</Col><Col id=\"ProgressBar\">50%</Col><Col id=\"code\">4</Col></Row><Row><Col id=\"Edit\">투비</Col><Col id=\"MaskEdit\">12345</Col><Col id=\"Calendar\">20201225</Col><Col id=\"Expand\"/><Col id=\"Combo\">가나다라</Col><Col id=\"Text\">가나다라마</Col><Col id=\"Number\">1500000</Col><Col id=\"체크박스\"/><Col id=\"Button\">버튼</Col><Col id=\"NO\">06</Col><Col id=\"ProgressBar\">50%</Col><Col id=\"code\">5</Col></Row></Rows>");this.addChild(_a.name,_a);_a=new Grid("Grid01","0","0",null,null,"20","0",null,null,null,null,this);_a.set_taborder("0");_a.set_binddataset("dsGrid");_a.set_autofittype("col");_a._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"48\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"134\"/><Column size=\"157\"/><Column size=\"100\"/><Column size=\"90\"/><Column size=\"80\"/><Column size=\"70\"/><Column size=\"80\"/></Columns><Rows><Row size=\"37\" band=\"head\"/><Row size=\"37\"/><Row size=\"37\" band=\"summ\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\"/><Cell col=\"1\" text=\"NO\"/><Cell col=\"2\" text=\"Edit\"/><Cell col=\"3\" text=\"MaskEdit\"/><Cell col=\"4\" text=\"Combo\"/><Cell col=\"5\" text=\"Calendar\"/><Cell col=\"6\" text=\"Expand\" expandshow=\"show\" expandsize=\"30\" expandimage=\"url(&apos;theme://images/btn_LF_MenuCloseO.png&apos;)\"/><Cell col=\"7\" text=\"Text\"/><Cell col=\"8\" text=\"Number\"/><Cell col=\"9\" text=\"Button\"/><Cell col=\"10\" text=\"ProgressBar\"/></Band><Band id=\"body\"><Cell text=\"bind:체크박스\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"bind:NO\" displaytype=\"text\" edittype=\"none\"/><Cell col=\"2\" displaytype=\"editcontrol\" edittype=\"text\" text=\"bind:Edit\"/><Cell col=\"3\" displaytype=\"maskeditcontrol\" edittype=\"mask\" text=\"bind:MaskEdit\"/><Cell col=\"4\" displaytype=\"combocontrol\" edittype=\"combo\" text=\"bind:Combo\" combodataset=\"dc_grd\" combodatacol=\"Combo\" combocodecol=\"code\"/><Cell col=\"5\" displaytype=\"calendarcontrol\" edittype=\"date\" text=\"bind:Calendar\" calendardateformat=\"yyyy-MM-dd \"/><Cell col=\"6\" text=\"bind:Expand\" edittype=\"text\" expandshow=\"show\" expandsize=\"30\" cssclass=\"cell_WF_Edit\" displaytype=\"editcontrol\"/><Cell col=\"7\" displaytype=\"normal\" text=\"bind:Text\"/><Cell col=\"8\" text=\"bind:Number\" displaytype=\"number\" edittype=\"none\"/><Cell col=\"9\" text=\"bind:Button\" displaytype=\"buttoncontrol\" edittype=\"button\"/><Cell col=\"10\" text=\"bind:ProgressBar\" displaytype=\"progressbarcontrol\" progressbarsmooth=\"true\"/></Band><Band id=\"summary\"><Cell colspan=\"8\" text=\"총계\" displaytype=\"text\"/><Cell col=\"8\" colspan=\"3\" text=\"1,500,000,000\" displaytype=\"number\"/></Band></Format></Formats>");this.addChild(_a.name,_a);_a=new Layout("default","",1050,736,this,function(_b){});_a.set_mobileorientation("landscape");this.addLayout(_a.name,_a);};this.loadPreloadList=function(){};this.registerScript("sampleGridType.xfdl",function(){this.form_onload=function(_a,_b){this.gfnFormOnload(_a,_b);};this.btn02_onclick=function(_a,_b){this.grd12.set_selecttype("cell");this.grd13.set_selecttype("cell");};this.btn03_onclick=function(_a,_b){this.grd12.set_selecttype("row");this.grd13.set_selecttype("row");};this.btn04_onclick=function(_a,_b){this.grd12.set_selecttype("multirow");this.grd13.set_selecttype("multirow");};this.btn05_onclick=function(_a,_b){this.grd12.set_selecttype("area");this.grd13.set_selecttype("area");};});this.on_initEvent=function(){this.addEventHandler("onload",this.form_onload,this);};this.loadIncludeScript("sampleGridType.xfdl");this.loadPreloadList();_a=null;};})();