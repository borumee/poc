var _pDatasetEx=nexacro.Dataset.prototype;nexacro.Dataset.prototype.GetRowIndexNF=function(_a){var _b=this._viewRecords[_a];if(_b){if(_b._rawidx){return _b._rawidx;}}return -1;};nexacro.Dataset.prototype.GetColumnNF=function(_a,_b){var _c=this._rawRecords[_a];if(_c){var _d;if(typeof (_b)!="string"){if(( +_b)!=( +_b)||_b==undefined){_b=0;}_d=this.colinfos[_b];if(_d==null){if(typeof (_b)=="number"){_b-=this.colinfos.length;}return this._constVars[_b];}}else{if(this.colinfos.indexOf(_b)>-1){_d=this.colinfos[_b];}else if(this._constVars.indexOf(_b)>-1){return this._constVars[_b];}else{return null;}}return _c[_d._index];}return null;};delete _pDatasetEx;var _pGridEx=nexacro.Grid.prototype;_pGridEx._setBlinkColorTimer=function(_a,_b,_c){this.setCellProperty("Body",_b,"background",_c.__orgbkcol);this.setCellProperty("Body",_b,"background2",_c.__orgbkcol2);this.setCellProperty("Body",_b,"selectbackground",_c.__orgbkselcol);this.setCellProperty("Body",_b,"color",_c.__orgcol);this.setCellProperty("Body",_b,"color2",_c.__orgcol2);this.setCellProperty("Body",_b,"selectcolor",_c.__orgselcol);this._arrBlink[_a][_b]=0;};_pGridEx.setBlinkColor=function(_a,_b,_c,_d,_e){if(_e<0){return false;}if(!this._arrBlink){this._arrBlink=[];var _f=this._binddataset;for(var _k=0;_k<_f.rowcount;_k++ ){this._arrBlink[_k]=[];}_f=null;}var _g=this._curFormat._bodycells;var _h=_g[_b];if(!_h){return;}this._arrBlink[_a][_b]=1;if(!_h.__blinkcheck){_h.__blinkcheck=true;_h.__orgbkcol=this.getCellProperty("Body",_b,"background");_h.__orgbkcol2=this.getCellProperty("Body",_b,"background2");_h.__orgbkselcol=this.getCellProperty("Body",_b,"selectbackground");_h.__orgcol=this.getCellProperty("Body",_b,"color");_h.__orgcol2=this.getCellProperty("Body",_b,"color2");_h.__orgselcol=this.getCellProperty("Body",_b,"selectcolor");if(_h.__orgbkcol==undefined||_h.__orgbkcol==null){_h.__orgbkcol="";}if(_h.__orgbkcol2==undefined||_h.__orgbkcol2==null){_h.__orgbkcol2="";}if(_h.__orgbkselcol==undefined||_h.__orgbkselcol==null){_h.__orgbkselcol="";}if(_h.__orgcol==undefined||_h.__orgcol==null){_h.__orgcol="";}if(_h.__orgcol2==undefined||_h.__orgcol2==null){_h.__orgcol2="";}if(_h.__orgselcol==undefined||_h.__orgselcol==null){_h.__orgselcol="";}}var _i="EXPR(comp._arrBlink[currow]["+_b+"] == 1?'"+_c+"':'')";var _j="EXPR(comp._arrBlink[currow]["+_b+"] == 1?'"+_d+"':'')";if(_c){this.setCellProperty("Body",_b,"background",_i);this.setCellProperty("Body",_b,"background2",_i);this.setCellProperty("Body",_b,"selectbackground",_i);}if(_d){this.setCellProperty("Body",_b,"color",_j);this.setCellProperty("Body",_b,"color2",_j);this.setCellProperty("Body",_b,"selectcolor",_j);}nexacro.OnceCallbackTimer.callonce(this,function(){this._setBlinkColorTimer(_a,_b,_h);},_e);};delete _pGridEx;