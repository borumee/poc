(function(){return function(_a){var _b;this.registerScript(_a,function(){this.fnCSetBpmParam=function(_c,_d,_e){var _b=this.m2n_getObject(_c);this.m2n_lookupPath("columnArray")=this.m2n_split(_d,"|");this.m2n_lookupPath("valueArray")=this.m2n_split(_e,"|");for(var _f=0;_f<this.m2n_lookupPath("columnArray").length;_f++ ){_b.addColumn(this.m2n_lookupPath("columnArray")[_f]);}_b.addRow();for(var _g=0;_g<this.m2n_lookupPath("columnArray").length;_g++ ){_b.setColumn(_b.row,this.m2n_lookupPath("columnArray")[_g],this.m2n_trim(this.m2n_lookupPath("valueArray")[_g]));}this.m2n_lookupPath("fnBpmOnUserLoadCompleted")();};});this.loadIncludeScript(_a);_b=null;};})();