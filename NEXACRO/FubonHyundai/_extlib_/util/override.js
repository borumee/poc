{
	nexacro.Component.prototype._findComponentForArrange = function(_a) {
        var _b = null;
        var _c = null;
        var _d, _e, _f, _g;
        if (_a) {
            if (!this._is_subcontrol) {
                _c = this._getForm();
                if (_c) {
                    _d = _c.components;
                    _e = _d.indexOf(this.id);
                    _f = _d.indexOf(_a);
//	component 의 생성순서를 비교해서(nexacro.Collections 에서 indexOf값으로 비교) 나중에 생성된 comp 에 arrange 걸지 못하도록 막고있음 -> 주석처리					
//                     if (_e < _f) {
//                         return null;
//                     }
                    var _h = _d[_a];
                    if (_h) {
                        if ((this.positionstep != _h.positionstep) || this.positionstep == -1 || _h.positionstep == -1) {
                            return null;
                        }
                    }
                    _b = _d[_f];
                }
            } else {
                var _i = this.parent;
                if (_i._findChild) {
                    var _j = _i._findChild(_a);
                    if (!_j || _j.taborder > this.taborder) {
                        return null;
                    }
                    _b = _j;
                } else {
                    _c = this._getForm();
                    if (_c) {
                        _d = _c.components;
                        _g = _d.indexOf(this.id);
                        _f = _d.indexOf(_a);
                        if (_g < _f) {
                            return null;
                        }
                        _b = _d[_f];
                    }
                }
            }
        }
        return _b;
    };
}



//ImportObject.js
{
	_pExcelImport._requestImport = function (fileUrl) {
		if (nexacro._Browser != "Runtime") {
			if (!nexacro._isSameOrigin(this._importurl, nexacro._project_url)) {
				this._iscors = true;
			}
		}
		var ds_command = this._ds_command = new nexacro.NormalDataset("COMMAND");
		ds_command.addColumn("command", "String", 32);
		ds_command.addColumn("type", "int", 32);
		ds_command.addColumn("url", "String", 256);
		ds_command.addColumn("format", "String", 256);
		ds_command.addColumn("filemode", "String", 256);
		ds_command.addColumn("password", "String", 256);
		ds_command.addColumn("rawdatevalue", "String", 256);
		ds_command.addColumn("rawnumbervalue", "String", 256);
		ds_command.addColumn("importid", "String", 256);
		ds_command.addColumn("usehtmltag", "String", 256);
		ds_command.addColumn("separator", "String", 256);
		ds_command.addColumn("quotechar", "String", 256);
		ds_command.addRow();
		ds_command.setColumn(0, "command", "import");
		ds_command.setColumn(0, "type", this._importType);
		ds_command.setColumn(0, "url", fileUrl);
		ds_command.setColumn(0, "format", this._makeImportFormat());
		ds_command.setColumn(0, "filemode", this._importfilemode ? "server" : "local");
		ds_command.setColumn(0, "password", this._file_password);
		ds_command.setColumn(0, "rawdatevalue", this._userawdatevalue);
		ds_command.setColumn(0, "rawnumbervalue", this._userawnumbervalue);
		ds_command.setColumn(0, "importid", this._importid);
		ds_command.setColumn(0, "usehtmltag", this._usehtmltag);
		ds_command.setColumn(0, "separator", this.separator ? this.separator : this._defaultseparator);
		ds_command.setColumn(0, "quotechar", this.quotechar);
		if (this._iscors) {
			ds_command.addColumn("responsetype", "String", 256);
			ds_command.setColumn(0, "responsetype", 1);
		}
		if (this._ds_response) {
			delete this._ds_response;
		}
		var evt;
		var datasets = this._responseLVal;
		if (datasets) {
			for (var i = 0, d_len = datasets.length; i < d_len; i++) {
				var reponseDS = this.parent[datasets[i]];
				if (reponseDS) {
				}
				else {
					evt = new nexacro.ExcelImportErrorEventInfo(this, "onerror", "ObjectError", "Dataset is null", this, -2011);
					this.on_fire_onerror(this, evt);
					return;
				}
			}
		}
		else {
			evt = new nexacro.ExcelImportErrorEventInfo(this, "onerror", "ObjectError", "Dataset is null", this, -2011);
			this.on_fire_onerror(this, evt);
			return;
		}
		this._file_url_ds = new nexacro.NormalDataset("_file_url_ds", this);
		this._tran_item = new nexacro.TransactionItem(this._importurl, this, this.id, "COMMAND=_ds_command", this._responseData + ", _file_url_ds=IMPORTFILES", this._user_data, 0, true);
		
		// Excel Import time START
		this.importStartTime = new Date();
		
		nexacro._setImportCommand(this._unique_id, "ds_command", this, this._hidden_frame_handle, this._tran_item._sendData);
		nexacro._submit(this._unique_id, this._uploadservlet, this._hidden_frame_handle, this._tran_item._sendData, fileUrl);
	};
}



// Data.js
{
    _pTransactionItem._start_time = null;

    _pTransactionItem.on_start = function () {
        if (this._usewaitcursor) {
            this._showWaitCursor(this.context);
        }
        this._start_time = new Date();
        nexacro._appendCommContext(this.context);
        var application = nexacro.getApplication();
        if (application) {
            application.on_fire_oncommunication(application, 0);
        }

    };

    _pTransactionItem.on_load_data = function (data, cookie, last_modified) {
        var datasets = null;
        var parameters = null;
        var errorinfo;
        var bcache = this.bcache;
        var ret = null;
        var endtime = new Date();
        var elapsedtime = nexacro.round((endtime - this._start_time) / 1000, 3);

        this._addCookieToCookieVariable(cookie);

        if (data && data._type_name == "DataCache") {
            bcache = false;
            errorinfo = data._loadData(this);
        }
        else {
            if (data && this._protocol < 0) {
                data = this.on_decrypt(data);
            }

            if (this._progress_data) {
                this.on_progress_data(data, true);
				errorinfo = this._progress_data._error_info;

				var target_ds = null;

				datasets = new nexacro.Collection();
				for (var buff_ds in this._progress_data._datasets) {
					var bufferObj_arr = this._progress_data._datasets[buff_ds];
					if (bufferObj_arr) {
						for (var i = 0; i < bufferObj_arr.length; i++) {
							target_ds = bufferObj_arr[i]._target_ds;
							if (target_ds) {
								if (bufferObj_arr[i]._isEnable) {
									if (bcache) {
										datasets.add_item(target_ds.id, new nexacro._DataSetCache(target_ds.id, target_ds.colinfos, target_ds._constVars, target_ds._rawRecords));
									}
									else {
										datasets.add_item(target_ds.id, "");
									}
								}
								else {
									datasets.add_item(target_ds.id, "");
								}
							}
						}
					}
				}

				this._progress_data._datasets = null;

				parameters = this._progress_data._parameters;
            }
            else {
                ret = this._deserializeData(data);
				if (bcache) {
					parameters = ret[1];
				}

				datasets = ret[2];
				errorinfo = ret[0];
            }
        }

        if (bcache) {
			var d_cache = nexacro._DataCacheList[this.path];
			if (!d_cache) {
				nexacro._DataCacheList[this.path] = new nexacro._DataCache(parameters, datasets, last_modified, this.version);
			}
			else {
				d_cache.parameters = parameters;
				d_cache.datasets = datasets;
				d_cache.last_modified = last_modified ? last_modified : "";
				d_cache.version = this.version;
			}
		}

        if (this._usewaitcursor) {
			this._hideWaitCursor(this.context);
		}

		nexacro._removeCommContext(this.context);

		var application = nexacro.getApplication();
		if (application) {
			application.on_fire_oncommunication(application, 1);
        }
        
        var callbackList = this.callbackList;
		var n = callbackList.length;
		if (n > 0) {
			var errorcode = errorinfo ? errorinfo[0] : 0;
			var errormsg = errorinfo ? errorinfo[1] : "SUCCESS";

			var loadmanager = this.context._load_manager;
			var dataitem = loadmanager ? loadmanager.getDataItem(this.svcid) : null;
			if (dataitem) {
				dataitem._is_cancel = undefined;
			}

			for (var i = 0; i < n; i++) {
				var item = callbackList[i];
				var target = item.target;
				if (target._is_alive != false) {
					if (this._is_unknowntype_data) {
						item.callback.call(target, this.svcid, errorcode, errormsg, elapsedtime, "comm_fail_loaddetail", 10599, this.path, this.path);
					}
					else {
						item.callback.call(target, this.svcid, errorcode, errormsg, elapsedtime);
					}
				}
			}
			callbackList.splice(0, n);
		}

        var view = this.context.parent;
		if (view && view._is_view && view._ismodeltrigger) {
			var form = view.parent;
			var manager = form._trigger_manager;
			var triggertype = "";
			var triggerview = view;
			var triggerobj = view.getViewDataset();

			if (datasets && datasets.indexOf(view.viewdataset) >= 0) {
				triggertype = "Model Load Success";
			}
			else {
				triggertype = "Model Load Fail";
			}

			manager._notifyTrigger(triggertype, triggerobj, triggerview);
		}

		this.handle = null;
    };
    
    _pTransactionItem.on_load_arraybuffer = function(_a, _b, _c) {
        var _d = null;
        var _e = null;
        var _f, _g;
        var _h = this.bcache;
        var _i = null;
        var endtime = new Date();
        var elapsedtime = nexacro.round((endtime - this._start_time) / 1000, 3);
		
        this._addCookieToCookieVariable(_b);
        if (_a && _a._type_name == "DataCache") {
            _h = false;
            _f = _a._loadData(this);
        } else {
            if (_a && this._protocol < 0) {
                _a = this.on_decrypt(_a);
            }
            if (this._progress_data) {
                this.on_progress_arraybuffer_chunk(_a, true);
                _f = this._progress_data._error_info;
                var _j = null;
                _d = new nexacro.Collection();
                for (var _ab in this._progress_data._datasets) {
                    var _k = this._progress_data._datasets[_ab];
                    if (_k) {
                        for (_g = 0; _g < _k.length; _g++) {
                            _j = _k[_g]._target_ds;
                            if (_j) {
                                if (_k[_g]._isEnable) {
                                    if (_h) {
                                        _d.add_item(_j.id, new nexacro._DataSetCache(_j.id, _j.colinfos, _j._constVars, _j._rawRecords));
                                    } else {
                                        _d.add_item(_j.id, "");
                                    }
                                } else {
                                    _d.add_item(_j.id, "");
                                }
                            }
                        }
                    }
                }
                this._progress_data._datasets = null;
                _e = this._progress_data._parameters;
            } else {
                _i = this._deserializeUint8Array(_a);
                if (_h) {
                    _e = _i[1];
                }
                _d = _i[2];
                _f = _i[0];
            }
        }
        if (_h) {
            var _l = nexacro._DataCacheList[this.path];
            if (!_l) {
                nexacro._DataCacheList[this.path] = new nexacro._DataCache(_e, _d, _c, this.version);
            } else {
                _l.parameters = _e;
                _l.datasets = _d;
                _l.last_modified = _c ? _c : "";
                _l.version = this.version;
            }
        }
        if (this._usewaitcursor) {
            this._hideWaitCursor(this.context);
        }
        nexacro._removeCommContext(this.context);
        var _m = nexacro.getApplication();
        if (_m) {
            _m.on_fire_oncommunication(_m, 1);
        }
        var _n = this.callbackList;
        var _o = _n.length;
        if (_o > 0) {
            var _p = _f ? _f[0] : 0;
            var _q = _f ? _f[1] : "SUCCESS";
            var _r = this.context._load_manager;
            var _s = _r ? _r.getDataItem(this.svcid) : null;
            if (_s) {
                _s._is_cancel = undefined;
            }
            for (_g = 0; _g < _o; _g++) {
                var _t = _n[_g];
                var _u = _t.target;
                if (_u._is_alive != false) {
                    if (this._is_unknowntype_data) {
                        _t.callback.call(_u, this.svcid, _p, _q, elapsedtime, "comm_fail_loaddetail", 10599, this.path, this.path);
                    } else {
                        _t.callback.call(_u, this.svcid, _p, _q, elapsedtime);
                    }
                }
            }
            _n.splice(0, _o);
        }
        var _v = this.context.parent;
        if (_v && _v._is_view && _v._ismodeltrigger) {
            var _w = _v.parent;
            var _x = _w._trigger_manager;
            var _y = "";
            var _z = _v;
            var _aa = _v.getViewDataset();
            if (_d.indexOf(_v.viewdataset) >= 0) {
                _y = "Model Load Success";
            } else {
                _y = "Model Load Fail";
            }
            _x._notifyTrigger(_y, _aa, _z);
        }
        this.handle = null;
    };
}

// Platform.js
{
    __pLoadManager.on_load_datamodule = function (svcid, errstatus, message, elapsedtime, fireerrorcode, returncode, requesturi, locationuri, extramsg) {
        var load_Item = this.getDataItem(svcid);
        if (load_Item) {
            var callback_id = load_Item._context_callback;
            var callback_func = this.context[callback_id];

            var ret = false;
            if (errstatus < 0 && fireerrorcode) {
                load_Item.errcode = errstatus;
                if (fireerrorcode != "comm_cancel_byuser" || fireerrorcode != "comm_stop_transaction_byesc" ||
                    load_Item._is_cancel || !load_Item.handle || (load_Item.handle && !load_Item.handle._user_aborted && load_Item.handle._user_aborted !== undefined)) {

                    ret = this.context._onHttpTransactionError(this.context, true, this.context, fireerrorcode, requesturi, returncode, requesturi, locationuri, extramsg);

                    if (fireerrorcode != "comm_cancel_byuser" && fireerrorcode != "comm_stop_transaction_byesc") {
						ret = false;
					}
					if (ret) {
						return true;
					}
                }
            }

            if (fireerrorcode == "comm_cancel_byuser" || fireerrorcode == "comm_stop_transaction_byesc") {
                if (load_Item._is_cancel !== undefined && !load_Item._is_cancel) {
					return ret;
				}
            }

            this.removeDataItem(svcid);
            this.removeTransactionItem(svcid);
            this.dataCnt--;

            if (callback_func && typeof (callback_func) == "function") {
                callback_func.call(this.context, svcid, errstatus, message, elapsedtime);
                if (errstatus === 0) {
                    load_Item.handle = null;
                }
            }

            return ret;
        }
    };
}

nexacro._change_inputnode_accept = function (node, accept) {
	if (node) {
		node.accept = accept;
	}
};
