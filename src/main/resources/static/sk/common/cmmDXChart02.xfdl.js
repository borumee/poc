(function(){return function(){if(!this._is_form){return;}var _a=null;this.on_create=function(){this.set_name("DXChart");this.set_titletext("DXChart 샘플");if(Form==this.constructor){this._setFormPosition(1280,720);}_a=new Dataset("dsGender_",this);_a._setContents("<ColumnInfo><Column id=\"male_data\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"female_data\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"sum_data\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"category\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"sum_data\">140</Col><Col id=\"male_data\">70</Col><Col id=\"female_data\">70</Col><Col id=\"category\">Korea</Col></Row><Row><Col id=\"sum_data\">40</Col><Col id=\"male_data\">40</Col><Col id=\"female_data\">0</Col><Col id=\"category\">Algeria</Col></Row><Row><Col id=\"male_data\">20</Col><Col id=\"sum_data\">100</Col><Col id=\"female_data\">80</Col><Col id=\"category\">Angola</Col></Row><Row><Col id=\"male_data\">40</Col><Col id=\"sum_data\">85</Col><Col id=\"female_data\">45</Col><Col id=\"category\">Argentina</Col></Row><Row><Col id=\"male_data\">40</Col><Col id=\"sum_data\">70</Col><Col id=\"female_data\">30</Col><Col id=\"category\">Austria</Col></Row><Row><Col id=\"male_data\">0</Col><Col id=\"sum_data\">60</Col><Col id=\"female_data\">60</Col><Col id=\"category\">Australia</Col></Row><Row><Col id=\"male_data\">20</Col><Col id=\"sum_data\">100</Col><Col id=\"female_data\">80</Col><Col id=\"category\">Bangladesh</Col></Row><Row><Col id=\"male_data\">20</Col><Col id=\"sum_data\">100</Col><Col id=\"female_data\">80</Col><Col id=\"category\">Belarus</Col></Row><Row><Col id=\"male_data\">40</Col><Col id=\"sum_data\">85</Col><Col id=\"female_data\">45</Col><Col id=\"category\">Belgium</Col></Row><Row><Col id=\"male_data\">40</Col><Col id=\"sum_data\">70</Col><Col id=\"female_data\">30</Col><Col id=\"category\">Bolivia</Col></Row><Row><Col id=\"male_data\">0</Col><Col id=\"sum_data\">40</Col><Col id=\"female_data\">40</Col><Col id=\"category\">Bosnia</Col></Row></Rows>");this.addChild(_a.name,_a);_a=new Dataset("dsArea_",this);_a._setContents("<ColumnInfo><Column id=\"data1\" type=\"STRING\" size=\"256\"/><Column id=\"data2\" type=\"STRING\" size=\"256\"/><Column id=\"data3\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"sum_data\" type=\"STRING\" size=\"256\"/><Column id=\"category\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"category\">Korea</Col><Col id=\"data3\">140</Col><Col id=\"data1\">20</Col><Col id=\"data2\">60</Col><Col id=\"sum_data\">220</Col></Row><Row><Col id=\"category\">Algeria</Col><Col id=\"data3\">40</Col><Col id=\"data1\">45</Col><Col id=\"data2\">45</Col><Col id=\"sum_data\">130</Col></Row><Row><Col id=\"category\">Angola</Col><Col id=\"data3\">100</Col><Col id=\"data1\">45</Col><Col id=\"data2\">35</Col><Col id=\"sum_data\">170</Col></Row><Row><Col id=\"category\">Argentina</Col><Col id=\"data3\">85</Col><Col id=\"data1\">60</Col><Col id=\"data2\">35</Col><Col id=\"sum_data\">180</Col></Row><Row><Col id=\"category\">Austria</Col><Col id=\"data3\">70</Col><Col id=\"data1\">10</Col><Col id=\"data2\">20</Col><Col id=\"sum_data\">100</Col></Row><Row><Col id=\"category\">Australia</Col><Col id=\"data3\">60</Col><Col id=\"data1\">50</Col><Col id=\"data2\">120</Col><Col id=\"sum_data\">230</Col></Row><Row><Col id=\"category\">Bangladesh</Col><Col id=\"data3\">100</Col><Col id=\"data1\">40</Col><Col id=\"data2\">110</Col><Col id=\"sum_data\">250</Col></Row><Row><Col id=\"category\">Belarus</Col><Col id=\"data3\">100</Col><Col id=\"data1\">35</Col><Col id=\"data2\">100</Col><Col id=\"sum_data\">235</Col></Row><Row><Col id=\"category\">Belgium</Col><Col id=\"data3\">85</Col><Col id=\"data1\">90</Col><Col id=\"data2\">95</Col><Col id=\"sum_data\">270</Col></Row><Row><Col id=\"category\">Bolivia</Col><Col id=\"data3\">70</Col><Col id=\"data1\">150</Col><Col id=\"data2\">60</Col><Col id=\"sum_data\">280</Col></Row><Row><Col id=\"category\">Bosnia</Col><Col id=\"data3\">40</Col><Col id=\"data1\">10</Col><Col id=\"data2\">30</Col><Col id=\"sum_data\">80</Col></Row></Rows>");this.addChild(_a.name,_a);_a=new Dataset("dsArea00",this);_a._setContents("<ColumnInfo><Column id=\"data1\" type=\"STRING\" size=\"256\"/><Column id=\"data2\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"data1\">서울</Col><Col id=\"data2\">657</Col></Row><Row><Col id=\"data1\">경기</Col><Col id=\"data2\">512</Col></Row><Row><Col id=\"data1\">강원</Col><Col id=\"data2\">460</Col></Row><Row><Col id=\"data1\">충북</Col><Col id=\"data2\">391</Col></Row><Row><Col id=\"data1\">충남</Col><Col id=\"data2\">488</Col></Row><Row><Col id=\"data1\">경북</Col><Col id=\"data2\">400</Col></Row><Row><Col id=\"data1\">경남</Col><Col id=\"data2\">300</Col></Row><Row><Col id=\"data1\">전북</Col><Col id=\"data2\">241</Col></Row><Row><Col id=\"data1\">전남</Col><Col id=\"data2\">402</Col></Row><Row><Col id=\"data1\">제주</Col><Col id=\"data2\">320</Col></Row></Rows>");this.addChild(_a.name,_a);_a=new Dataset("dsGender",this);_a._setContents("<ColumnInfo><Column id=\"male_data\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"female_data\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"sum_data\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"category\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"male_data\">320</Col><Col id=\"female_data\">280</Col><Col id=\"category\">1월</Col><Col id=\"sum_data\">600</Col></Row><Row><Col id=\"male_data\">280</Col><Col id=\"female_data\">290</Col><Col id=\"category\">2월</Col><Col id=\"sum_data\">570</Col></Row><Row><Col id=\"male_data\">120</Col><Col id=\"female_data\">340</Col><Col id=\"category\">3월</Col><Col id=\"sum_data\">460</Col></Row><Row><Col id=\"male_data\">220</Col><Col id=\"female_data\">124</Col><Col id=\"category\">4월</Col><Col id=\"sum_data\">344</Col></Row><Row><Col id=\"male_data\">235</Col><Col id=\"female_data\">247</Col><Col id=\"category\">5월</Col><Col id=\"sum_data\">482</Col></Row><Row><Col id=\"male_data\">300</Col><Col id=\"female_data\">370</Col><Col id=\"category\">6월</Col><Col id=\"sum_data\">670</Col></Row><Row><Col id=\"male_data\">400</Col><Col id=\"female_data\">420</Col><Col id=\"category\">7월</Col><Col id=\"sum_data\">820</Col></Row><Row><Col id=\"male_data\">320</Col><Col id=\"female_data\">220</Col><Col id=\"category\">8월</Col><Col id=\"sum_data\">540</Col></Row><Row><Col id=\"male_data\">600</Col><Col id=\"female_data\">600</Col><Col id=\"category\">9월</Col><Col id=\"sum_data\">1200</Col></Row><Row><Col id=\"male_data\">270</Col><Col id=\"female_data\">600</Col><Col id=\"category\">10월</Col><Col id=\"sum_data\">870</Col></Row><Row><Col id=\"male_data\">320</Col><Col id=\"female_data\">280</Col><Col id=\"category\">11월</Col><Col id=\"sum_data\">600</Col></Row><Row><Col id=\"male_data\">500</Col><Col id=\"female_data\">400</Col><Col id=\"category\">12월</Col><Col id=\"sum_data\">900</Col></Row></Rows>");this.addChild(_a.name,_a);_a=new Dataset("dsGender__",this);_a._setContents("<ColumnInfo><Column id=\"male_data\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"female_data\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"sum_data\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"category\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"sum_data\">140</Col><Col id=\"male_data\">70</Col><Col id=\"female_data\">70</Col><Col id=\"category\">Korea</Col></Row><Row><Col id=\"sum_data\">40</Col><Col id=\"male_data\">40</Col><Col id=\"female_data\">0</Col><Col id=\"category\">Algeria</Col></Row><Row><Col id=\"male_data\">20</Col><Col id=\"sum_data\">100</Col><Col id=\"female_data\">80</Col><Col id=\"category\">Angola</Col></Row><Row><Col id=\"male_data\">40</Col><Col id=\"sum_data\">85</Col><Col id=\"female_data\">45</Col><Col id=\"category\">Argentina</Col></Row><Row><Col id=\"male_data\">40</Col><Col id=\"sum_data\">70</Col><Col id=\"female_data\">30</Col><Col id=\"category\">Austria</Col></Row><Row><Col id=\"male_data\">0</Col><Col id=\"sum_data\">60</Col><Col id=\"female_data\">60</Col><Col id=\"category\">Australia</Col></Row><Row><Col id=\"male_data\">20</Col><Col id=\"sum_data\">100</Col><Col id=\"female_data\">80</Col><Col id=\"category\">Bangladesh</Col></Row><Row><Col id=\"male_data\">20</Col><Col id=\"sum_data\">100</Col><Col id=\"female_data\">80</Col><Col id=\"category\">Belarus</Col></Row><Row><Col id=\"male_data\">40</Col><Col id=\"sum_data\">85</Col><Col id=\"female_data\">45</Col><Col id=\"category\">Belgium</Col></Row><Row><Col id=\"male_data\">40</Col><Col id=\"sum_data\">70</Col><Col id=\"female_data\">30</Col><Col id=\"category\">Bolivia</Col></Row><Row><Col id=\"male_data\">0</Col><Col id=\"sum_data\">40</Col><Col id=\"female_data\">40</Col><Col id=\"category\">Bosnia</Col></Row></Rows>");this.addChild(_a.name,_a);_a=new Dataset("dsArea",this);_a._setContents("<ColumnInfo><Column id=\"data1\" type=\"STRING\" size=\"256\"/><Column id=\"data2\" type=\"STRING\" size=\"256\"/><Column id=\"data3\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"sum_data\" type=\"STRING\" size=\"256\"/><Column id=\"category\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"category\">Korea</Col><Col id=\"data3\">140</Col><Col id=\"data1\">20</Col><Col id=\"data2\">60</Col><Col id=\"sum_data\">220</Col></Row><Row><Col id=\"category\">Algeria</Col><Col id=\"data3\">40</Col><Col id=\"data1\">45</Col><Col id=\"data2\">45</Col><Col id=\"sum_data\">130</Col></Row><Row><Col id=\"category\">Angola</Col><Col id=\"data3\">100</Col><Col id=\"data1\">45</Col><Col id=\"data2\">35</Col><Col id=\"sum_data\">170</Col></Row><Row><Col id=\"category\">Argentina</Col><Col id=\"data3\">85</Col><Col id=\"data1\">60</Col><Col id=\"data2\">35</Col><Col id=\"sum_data\">180</Col></Row><Row><Col id=\"category\">Austria</Col><Col id=\"data3\">70</Col><Col id=\"data1\">10</Col><Col id=\"data2\">20</Col><Col id=\"sum_data\">100</Col></Row><Row><Col id=\"category\">Australia</Col><Col id=\"data3\">60</Col><Col id=\"data1\">50</Col><Col id=\"data2\">120</Col><Col id=\"sum_data\">230</Col></Row><Row><Col id=\"category\">Bangladesh</Col><Col id=\"data3\">100</Col><Col id=\"data1\">40</Col><Col id=\"data2\">110</Col><Col id=\"sum_data\">250</Col></Row><Row><Col id=\"category\">Belarus</Col><Col id=\"data3\">100</Col><Col id=\"data1\">35</Col><Col id=\"data2\">100</Col><Col id=\"sum_data\">235</Col></Row><Row><Col id=\"category\">Belgium</Col><Col id=\"data3\">85</Col><Col id=\"data1\">90</Col><Col id=\"data2\">95</Col><Col id=\"sum_data\">270</Col></Row><Row><Col id=\"category\">Bolivia</Col><Col id=\"data3\">70</Col><Col id=\"data1\">150</Col><Col id=\"data2\">60</Col><Col id=\"sum_data\">280</Col></Row><Row><Col id=\"category\">Bosnia</Col><Col id=\"data3\">40</Col><Col id=\"data1\">10</Col><Col id=\"data2\">30</Col><Col id=\"sum_data\">80</Col></Row></Rows>");this.addChild(_a.name,_a);_a=new ChartJS("ChartJS02","0","0",null,null,"0","0",null,null,null,null,this);_a.set_taborder("0");this.addChild(_a.name,_a);_a=new Layout("default","",1280,720,this,function(_b){});this.addLayout(_a.name,_a);};this.loadPreloadList=function(){};this.registerScript("cmmDXChart02.xfdl",function(){this.objApp=nexacro.getApplication();this.langCode;this.subtitle={"ko":"성별 가입자 수","en":"According to number of subscribers by gender"};this.DXChart_onload=function(_a,_b){this.langCode=nexacro.getEnvironment().locale=="ko_KR"?"ko":"en";this.fnChart02();};this.DXChart_onsize=function(_a,_b){this.resetScroll();};this.fnChart02=function(){var _b=this;var _c=this.ChartJS02;var _d=_c.getCanvas();var _e=_d.id;var _f=this.dsGender;DxChart.reset(_d);var _g=new DxChartLine({id:_e,elem:_d,binddataset:_f,data:["bind:male_data","bind:female_data"],options:{colors:["#42B0FF","#FF6A8E"],xaxis:{Use:false,Labels:['bind:category']},tickmarks:{Style:'filledcircle',Size:5},key:{Data:['남성','여성']},shadow:{Use:false},yaxis:{Use:false},background:{GridBorder:false,GridVlines:false},tooltips:{Data:DxChart.arrayLinearizeString(DxChart.convertDataset(_f,["bind:male_data","bind:female_data"],null,"linear"))},title:{Text:'Line Chart',Subtitle:_b.subtitle[_b.langCode],FontStyle:'20px  Pretendard bold'},margin:{Inner:0,InnerGrouped:2,Top:80}}}).on('onclick',function(_h,_i){if(_i){}});_g.draw();};});this.on_initEvent=function(){this.addEventHandler("onload",this.DXChart_onload,this);this.addEventHandler("onsize",this.DXChart_onsize,this);};this.loadIncludeScript("cmmDXChart02.xfdl");this.loadPreloadList();_a=null;};})();