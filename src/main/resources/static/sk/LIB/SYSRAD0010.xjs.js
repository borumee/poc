(function(){return function(_a){var _b;this.registerScript(_a,function(){this.sysf_arrangeRadio=function(_c,_d,_e,_f,_g){var _h=_d.getRowCount();if(_h<1){return false;}_g=parseInt(_g);var _i=parseInt(_h/_g)+1;this.m2n_create(this,"Dataset","gds_radio","");this.m2n_lookupPath("gds_radio").clear();this.m2n_create(this,"Image","img_radioExtText","");for(i=0;i<_g;i++ ){this.m2n_lookupPath("gds_radio").addColumn("Col"+i,"String",255);this.m2n_lookupPath("gds_radio").addColumn("Col"+i+"C","String",255);}var _j="";for(i=0;i<_h;i++ ){_j=_d.getColumn(i,_f);if(i%_g==0){this.m2n_lookupPath("gds_radio").addRow();this.m2n_lookupPath("gds_radio").setColumn(this.m2n_lookupPath("gds_radio").row,"Col0",_j);this.m2n_lookupPath("gds_radio").setColumn(this.m2n_lookupPath("gds_radio").row,"Col0C",_d.getColumn(i,_e));}else{this.m2n_lookupPath("gds_radio").setColumn(this.m2n_lookupPath("gds_radio").rowposition,"Col"+(i%_g),_j);this.m2n_lookupPath("gds_radio").setColumn(this.m2n_lookupPath("gds_radio").rowposition,"Col"+(i%_g)+"C",_d.getColumn(i,_e));}}var _k;var _l;this.m2n_lookupPath("gds_radio").addRow();for(i=0;i<this.m2n_lookupPath("gds_radio").getColCount();i++ ){_k="";for(j=0;j<this.m2n_lookupPath("gds_radio").getRowCount()-1;j++ ){_l=this.m2n_getTextExtent(this.m2n_lookupPath("img_radioExtText").id,this.m2n_lookupPath("gds_radio").getColumn(j,"col"+i));if(_k<_l[0]){_k=_l[0];}if(j==this.m2n_lookupPath("gds_radio").getRowCount()-2){this.m2n_lookupPath("gds_radio").setColumn(this.m2n_lookupPath("gds_radio").getRowCount()-1,"col"+i,_k);}}}var _m;var _n;var _o=this.m2n_lookupPath("gds_radio").getRowCount()-1;var _p;var _q;_m+='<contents>';for(i=0;i<this.m2n_lookupPath("gds_radio").getRowCount()-1;i++ ){_n=7;_q=(i* 18);for(j=0;j<(this.m2n_lookupPath("gds_radio").getColCount()/2);j++ ){if(this.m2n_length(this.m2n_lookupPath("gds_radio").getColumn(i,"Col"+j))<1){break;}if(j!=0){_n+=nexacro.toNumber(this.m2n_lookupPath("gds_radio").getColumn(_o,"Col"+(j -1)))+18+15;}_p=nexacro.toNumber(this.m2n_lookupPath("gds_radio").getColumn(_o,"Col"+j))+18;if((i==0)&&(j==0)){_m+='<Layout code="'+this.m2n_lookupPath("gds_radio").getColumn(i,"Col"+j+"C")+'" height="20" left="'+_n+'" text="'+this.m2n_lookupPath("gds_radio").getColumn(i,"Col"+j)+'" top="'+_q+'" width="'+_p+'" default="true"/>';}else{_m+='<Layout code="'+this.m2n_lookupPath("gds_radio").getColumn(i,"Col"+j+"C")+'" height="20" left="'+_n+'" text="'+this.m2n_lookupPath("gds_radio").getColumn(i,"Col"+j)+'" top="'+_q+'" width="'+_p+'"/>';}}}_m+='</contents>';_c.setOffsetHeight((_o* 21)-((_o -1)* 3));this.m2n_setContents(_c,_m);_c.set_index(-1);this.m2n_destroy("img_radioExtText");return true;};});this.loadIncludeScript(_a);_b=null;};})();