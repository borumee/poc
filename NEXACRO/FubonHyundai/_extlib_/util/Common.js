nexacro.Form.prototype.gfnFormOnload = function() {
  nexacro.applyI18n(this);
  nexacro.preventCopy(this);
}

nexacro.Form.prototype.openMenu = function(sOpenMenuId, objArgList) {
	if (nexacro.getApplication().mainframe.VFrameSet.separatesize == "*, 0, 0") {
		var nRow = nexacro.getApplication().gdsMenu.findRow("MENU_ID", sOpenMenuId);
		var sOpenMenuIdLvl1 = nexacro.getApplication().gdsMenu.getColumn(nRow, "HIPO_MENU_ID");
		
		nexacro.getApplication().MENU_ID = sOpenMenuIdLvl1;
		
		nexacro.getApplication().mainframe.VFrameSet.set_separatesize("0, *");
		nexacro.getApplication().mainframe.VFrameSet.WorkFrame.form.DivTop.set_url("FrameBase::Frame_Top.xfdl");
		nexacro.getApplication().mainframe.VFrameSet.WorkFrame.form.DivMenu.set_url("FrameBase::Frame_Menu.xfdl");
		nexacro.getApplication().mainframe.VFrameSet.WorkFrame.form.DivLeft.set_url("FrameBase::Frame_Left.xfdl");
		nexacro.getApplication().mainframe.VFrameSet.WorkFrame.form.DivMdi.set_url("FrameBase::Frame_Mdi.xfdl");	
	}
	
	var p = nexacro.getApplication().mainframe.VFrameSet.WorkFrame.form;
	p["fnOpenMenu"].call(p, sOpenMenuId, objArgList);
};

nexacro.Form.prototype.openPopup = function (frameId, formUrl, objArgList, options,	sPopupCallback,	bModeless) {
	var nLeft = -1,
	nTop = -1,
	nWidth = 1,
	nHeight = 1,
	bShowTitle = true,
	bShowStatus = false,
	bLayered = false,
	nOpacity = 1,
	bAutoSize = true,
	bResizable = true,
	sOpenstatus = "normal",
	sDragMoveType = "all",
	sTitleText = "",
	objParentFrame = this.getOwnerFrame();
	
	options += "";
	var aVal = options.trim().split(" ");
	for (var i = 0; i < aVal.length; i++) {
		var aVal2 = aVal[i].trim().split("=");
		switch (aVal2[0]) {
		case "top":
			nTop = parseInt(aVal2[1]);
			break;
		case "left":
			nLeft = parseInt(aVal2[1]);
			break;
		case "width":
			nWidth = parseInt(aVal2[1]);
			break;
		case "height":
			nHeight = parseInt(aVal2[1]);
			break;
		case "title":
		case "titlebar":
		case "showtitlebar":
			bShowTitle = aVal2[1];
			break;
		case "titletext":
			sTitleText = aVal2[1];
			break;
		case "status":
		case "statusbar":
		case "showstatusbar":
			bShowStatus = aVal2[1];
			break;
		case "layered":
			bLayered = aVal2[1];
			break;
		case "opacity":
			nOpacity = aVal2[1];
			break;
		case "autosize":
			bAutoSize = aVal2[1];
			break;
		case "resizable":
			bResizable = aVal2[1];
			break;
		case "round":
			bRound = aVal2[1];
			break;
		case "openstatus":
			sOpenstatus = aVal2[1];
			break;
		}
	}
	var sOpenalign = "";
	sOpenalign = "center middle";
	
	if (nWidth == 1) nWidth = 960;
	if (nHeight == 1) nHeight = 660;
	
	if (nLeft == -1) {
		nLeft = (nexacro.getApplication().mainframe.width - nWidth) / 2;
		if (bModeless)
		nLeft += system.clientToScreenX(nexacro.getApplication().mainframe, 0);
	}
	if (nTop == -1) {
		nTop = (nexacro.getApplication().mainframe.height - nHeight) / 2;
		if (bModeless)
		nTop += system.clientToScreenY(nexacro.getApplication().mainframe, 0);
	}
	
	if (bModeless) {
		//열린 modeless 팝업 화면이 존재하면 focus 처리 후 리턴.
		var objPopFrams = nexacro.getPopupFrames();
		
		var objPopFrame = objPopFrams[frameId];
		if (objPopFrame) {
			objPopFrame.setFocus();
			if (bReload == "true") {
				//arguments 셋팅
				if (!this.gfn_isEmpty(objArgList)) {
					if (!objPopFrame.arguments) objPopFrame.arguments = {};
					
					for (var key in objArgList) {
						if (objArgList.hasOwnProperty(key)) {
							objPopFrame.arguments[key] = objArgList[key];
						}
					}
				}
				objPopFrame.form.reload();
			}
			return;
		}
		
		var sOpenStyle = "titlebarheight=30";
		
		if (bShowTitle == "false") sOpenStyle += " showtitlebar=false";
		if (bShowStatus == "true") sOpenStyle += " showstatusbar=true";
		if (bAutoSize == "false") sOpenStyle += " autosize=false";
		if (bResizable == "false") {
			sOpenStyle += " resizable=false";
		} else {
			sOpenStyle += " resizable=true";
		}
		nexacro.open(
			frameId,
			formUrl,
			objParentFrame,
			objArgList,
			sOpenStyle,
			nLeft,
			nTop,
			nWidth,
			nHeight,
			this
		);
	} else {
		newChild = new nexacro.ChildFrame();
		
		newChild.init(frameId, nLeft, nTop, nWidth, nHeight, null, null, formUrl);
		
		newChild.set_background("transparent");
		newChild.set_dragmovetype(sDragMoveType);
		newChild.set_showtitlebar(bShowTitle);
		newChild.set_titlebarheight(30);
		newChild.set_autosize(bAutoSize);
		newChild.set_resizable(bResizable);
		newChild.set_titletext(sTitleText);
		newChild.set_showstatusbar(bShowStatus);
		newChild.set_openalign(sOpenalign);
		newChild.set_layered(bLayered);
		newChild.set_opacity(nOpacity);
		newChild.set_boxShadow("0 3px 9px rgba(0,0,0,.5)");
		newChild.set_openstatus(sOpenstatus);
		
		//arguments 셋팅
		if (!this.gfn_isEmpty(objArgList)) {
			if (!newChild.arguments) newChild.arguments = {};
			for (var key in objArgList) {
				if (objArgList.hasOwnProperty(key))
				newChild.arguments[key] = objArgList[key];
			}
		}
		
		newChild.showModal(objParentFrame, objArgList, this, sPopupCallback);
	}
};

nexacro.isEmpty = function (value) {
	// null, undefined ==> true
	if (value == null) return true;
	
	// String, Array ==> length == 0
	if (nexacro._isString(value) || nexacro._isArray(value)) {
		return value.length == 0 ? true : false;
	} else if (nexacro._isObject(value)) {
		for (var p in value) {
			if (value.hasOwnProperty(p)) {
				return false;
			}
		}
		return true;
	}
	
	return false;
};

nexacro.getI18nMessageWord = function(messageid) {
	var objData = nexacro.getApplication().messages;
		
	try {		
		var arrKey = messageid.split('.');
		for(var i=0; i<arrKey.length; i++) {
			objData = objData[arrKey[i]];
		}		
	} catch (e) {
		trace(e);
		return '';
	} finally {
		return objData
	}
}

nexacro.applyI18n = function (obj) {
	var comps = obj.components;
	
	for (let i = 0, len = comps.length; i < len; i++) {
		let comp = comps[i],
		messageid = "";
		
		if (comp instanceof Div || comp instanceof PopupDiv) {
			messageid = comp.messageid;
			messageid && comp.set_text(nexacro.getI18nMessageWord(messageid));
			nexacro.applyI18n(comp.form);
			comp.form.resetScroll();
		} else if (comp instanceof Tab) {
			
			let tabpages = comp.tabpages;
			for (let j = 0, len = tabpages.length; j < len; j++) {
				messageid = tabpages[j].messageid;
				messageid && tabpages[j].set_text(nexacro.getI18nMessageWord(messageid));
				nexacro.applyI18n(tabpages[j].form);
				tabpages[j].form.resetScroll();
			}
		} else if (
			comp instanceof CheckBox ||
			comp instanceof GroupBox ||
			comp instanceof Static ||
			comp instanceof ImageViewer ||
			comp instanceof Button
		) {
			messageid = comp.messageid;
			messageid && comp.set_text(nexacro.getI18nMessageWord(messageid));
			comp.tooltipmessageid &&
			comp.set_tooltiptext(
				nexacro.getI18nMessageWord(comp.tooltipmessageid)
			);
		} else if (
			comp instanceof Calendar ||
			comp instanceof Combo ||
			comp instanceof Edit ||
			comp instanceof MaskEdit ||
			comp instanceof Spin ||
			comp instanceof TextArea
		) {
			messageid = comp.messageid;
			messageid &&
			comp.set_displaynulltext(nexacro.getI18nMessageWord(messageid));
		} else if (comp instanceof Grid) {
			let nCount = comp.getCellCount("head");
			for (let j = 0; j < nCount; j++) {
				messageid = comp.getCellProperty("head", j, "messageid");
				messageid &&
				comp.setCellProperty(
					"head",
					j,
					"text",
					nexacro.getI18nMessageWord(messageid)
				);
			}
			
			comp.set_autoenter("select");
		}
	}
	
	obj.resetScroll();
};

nexacro.preventCopy = function (obj) {
	if(system.navigatorname.indexOf("nexacro") > -1) {
		trace("nexacro.preventCopy :: 넥사크로 전용브라우저에서 지원하지 않는 기능입니다.");
		return;
	}
	
	var comps = obj.components;
	for (var i = 0, len = comps.length; i < len; i++) {
		var comp = comps[i];

		if (comp instanceof Div || comp instanceof PopupDiv) // container comp일 경우 내부 form 으로 진입
		{
			nexacro.preventCopy(comp.form);
		} 
		else if (comp instanceof Tab)  // container comp일 경우 내부 form 으로 진입
		{
			var tabpages = comp.tabpages;
			for (var i = 0, len = tabpages.length; i < len; i++) {
				nexacro.preventCopy(tabpages[i].form);
			}
		} 
		else 
		{
			if(comp.preventCopy && comp.preventCopy == "true") // 컴포넌트에 user Property
			{
				let doc = document.getElementById(comp._unique_id);
				//console.log(doc)
				doc.addEventListener("copy", (e) => {
					alert("보안 정책에 의해 복사를 허용하지 않습니다.");
					e.preventDefault(); // 클립보드 이벤트를 활용하려면 preventDefault 함수를 호출해야 합니다.
					e.clipboardData.setData("Text", "보안 정책에 의해 복사를 허용하지 않습니다.");
				});
			}
		}
	}

}

var toast = {
	duration: 3000, // 기본 표시 시간 3초(단위: milliseconds)
	
	getUUID: function () {
		// UUID v4 generator in JavaScript (RFC4122 compliant)
		return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(
			/[xy]/g,
			function (c) {
				var r = (Math.random() * 16) | 0,
				v = c == "x" ? r : (r & 3) | 8;
				return v.toString(16);
			}
		);
	},
	
	icon: {
		success : "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAADsSURBVEhLY2AYBfQMgf///3P8+/evAIgvA/FsIF+BavYDDWMBGroaSMMBiE8VC7AZDrIFaMFnii3AZTjUgsUUWUDA8OdAH6iQbQEhw4HyGsPEcKBXBIC4ARhex4G4BsjmweU1soIFaGg/WtoFZRIZdEvIMhxkCCjXIVsATV6gFGACs4Rsw0EGgIIH3QJYJgHSARQZDrWAB+jawzgs+Q2UO49D7jnRSRGoEFRILcdmEMWGI0cm0JJ2QpYA1RDvcmzJEWhABhD/pqrL0S0CWuABKgnRki9lLseS7g2AlqwHWQSKH4oKLrILpRGhEQCw2LiRUIa4lwAAAABJRU5ErkJggg==",
		info    : "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAGwSURBVEhLtZa9SgNBEMc9sUxxRcoUKSzSWIhXpFMhhYWFhaBg4yPYiWCXZxBLERsLRS3EQkEfwCKdjWJAwSKCgoKCcudv4O5YLrt7EzgXhiU3/4+b2ckmwVjJSpKkQ6wAi4gwhT+z3wRBcEz0yjSseUTrcRyfsHsXmD0AmbHOC9Ii8VImnuXBPglHpQ5wwSVM7sNnTG7Za4JwDdCjxyAiH3nyA2mtaTJufiDZ5dCaqlItILh1NHatfN5skvjx9Z38m69CgzuXmZgVrPIGE763Jx9qKsRozWYw6xOHdER+nn2KkO+Bb+UV5CBN6WC6QtBgbRVozrahAbmm6HtUsgtPC19tFdxXZYBOfkbmFJ1VaHA1VAHjd0pp70oTZzvR+EVrx2Ygfdsq6eu55BHYR8hlcki+n+kERUFG8BrA0BwjeAv2M8WLQBtcy+SD6fNsmnB3AlBLrgTtVW1c2QN4bVWLATaIS60J2Du5y1TiJgjSBvFVZgTmwCU+dAZFoPxGEEs8nyHC9Bwe2GvEJv2WXZb0vjdyFT4Cxk3e/kIqlOGoVLwwPevpYHT+00T+hWwXDf4AJAOUqWcDhbwAAAAASUVORK5CYII=",
		warn    : "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAGYSURBVEhL5ZSvTsNQFMbXZGICMYGYmJhAQIJAICYQPAACiSDB8AiICQQJT4CqQEwgJvYASAQCiZiYmJhAIBATCARJy+9rTsldd8sKu1M0+dLb057v6/lbq/2rK0mS/TRNj9cWNAKPYIJII7gIxCcQ51cvqID+GIEX8ASG4B1bK5gIZFeQfoJdEXOfgX4QAQg7kH2A65yQ87lyxb27sggkAzAuFhbbg1K2kgCkB1bVwyIR9m2L7PRPIhDUIXgGtyKw575yz3lTNs6X4JXnjV+LKM/m3MydnTbtOKIjtz6VhCBq4vSm3ncdrD2lk0VgUXSVKjVDJXJzijW1RQdsU7F77He8u68koNZTz8Oz5yGa6J3H3lZ0xYgXBK2QymlWWA+RWnYhskLBv2vmE+hBMCtbA7KX5drWyRT/2JsqZ2IvfB9Y4bWDNMFbJRFmC9E74SoS0CqulwjkC0+5bpcV1CZ8NMej4pjy0U+doDQsGyo1hzVJttIjhQ7GnBtRFN1UarUlH8F3xict+HY07rEzoUGPlWcjRFRr4/gChZgc3ZL2d8oAAAAASUVORK5CYII=",
		error   : "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAHOSURBVEhLrZa/SgNBEMZzh0WKCClSCKaIYOED+AAKeQQLG8HWztLCImBrYadgIdY+gIKNYkBFSwu7CAoqCgkkoGBI/E28PdbLZmeDLgzZzcx83/zZ2SSXC1j9fr+I1Hq93g2yxH4iwM1vkoBWAdxCmpzTxfkN2RcyZNaHFIkSo10+8kgxkXIURV5HGxTmFuc75B2RfQkpxHG8aAgaAFa0tAHqYFfQ7Iwe2yhODk8+J4C7yAoRTWI3w/4klGRgR4lO7Rpn9+gvMyWp+uxFh8+H+ARlgN1nJuJuQAYvNkEnwGFck18Er4q3egEc/oO+mhLdKgRyhdNFiacC0rlOCbhNVz4H9FnAYgDBvU3QIioZlJFLJtsoHYRDfiZoUyIxqCtRpVlANq0EU4dApjrtgezPFad5S19Wgjkc0hNVnuF4HjVA6C7QrSIbylB+oZe3aHgBsqlNqKYH48jXyJKMuAbiyVJ8KzaB3eRc0pg9VwQ4niFryI68qiOi3AbjwdsfnAtk0bCjTLJKr6mrD9g8iq/S/B81hguOMlQTnVyG40wAcjnmgsCNESDrjme7wfftP4P7SP4N3CJZdvzoNyGq2c/HWOXJGsvVg+RA/k2MC/wN6I2YA2Pt8GkAAAAASUVORK5CYII=",
	},
	
	backgroundColor: {
// 		success : "#51a351",
// 		info    : "#2f96b4",
// 		warn    : "#f89406",
// 		error   : "#bd362f",		
		success : "#0f63b5",
		info    : "#16a0db",
		warn    : "#f48327",
		error   : "#eb543b",
	},
};
toast.success = function (form, text, duration) {
	this.process(form, "success", text, duration);
};
toast.info = function (form, text, duration) {
	this.process(form, "info", text, duration);
};
toast.warn = function (form, text, duration) {
	this.process(form, "warn", text, duration);
};
toast.error = function (form, text, duration) {
	this.process(form, "error", text, duration);
};
toast.process = function (form, type, text, duration) {
	var uuid = this.getUUID(),
    duration = duration ? duration : this.duration,
    textsize = nexacro.getTextSize(
		text,
		'14px/normal "Neue","Helvetica","Arial","sans-serif"',
		250,
		"char"
    );
	height = textsize.ny > 50 ? textsize.ny + 10 : 50;
	
	if (!form.itemlist) form.itemlist = [];
	form.itemlist.push({ id: uuid, message: text, time: duration });
	
	var containerId = "toast_" + nexacro.replaceAll(uuid, "-", "_");
	var   nLeft = null
		, nTop    = 10
		, nWidth  = 300
		, nHeight = height
		, nStartRight = -300 , nEndRight  = 10
		, nBottom = null;
	var container = new Div(containerId, nLeft, nTop, nWidth, nHeight, nStartRight, nBottom);
	container.set_background(this.backgroundColor[type]);
	container.set_borderRadius("3px");
	container.set_boxShadow("0px 0px 12px #999999");
	
	// 아이콘 이미지 추가
	{
		var imgIcon = new ImageViewer("imgIcon", 5, 4, 40, null, null, 0);
		imgIcon.set_image(this.icon[type]);
		imgIcon.set_background("transparent");
		imgIcon.set_border("0px none");
		container.addChild("imgIcon", imgIcon);
		container.show();
	}
	
	// 메시지 컴포넌트 추가
	{
		var stcText = new Static("stcText", 50, 0, null, null, 0, 0);
		stcText.set_color("#ffffff");
		stcText.set_font('14px/normal "Neue","Helvetica","Arial","sans-serif"');
		stcText.set_wordWrap("char");
		stcText.set_text(text);
		container.addChild("stcText", stcText);
		container.show();
	}
	
	form.addChild(containerId, container);
	container.show();
	
	// 애니메이션 적용
	var objAni = new nexacro.Animation("Ani00"+uuid, this);
	form.addChild("Ani00"+uuid, objAni);
	// Set Object 
	objAni.set_duration( 300 );
	objAni.set_easing( "linear" );
	objAni.addTarget( "AniItem00", container, "right:"+nEndRight );
	// Play Animation
	objAni.play();
	// Destroy
// 	var objAniItem = objAni.removeTarget( "AniItem00" );
// 	form.removeChild( "Ani00"+uuid );
// 	objAniItem.destroy();
// 	objAni.destroy();
// 	objAniItem = null;
// 	objAni = null;


	

	// 이전 토스트 메시지 이동
	var top = 0;
	for (var i = form.itemlist.length - 2; i >= 0; i--) {
		var comp =
        form.components[
			"toast_" + nexacro.replaceAll(form.itemlist[i].id, "-", "_")
        ],
		nextComp =
        form.components[
			"toast_" + nexacro.replaceAll(form.itemlist[i + 1].id, "-", "_")
        ];
		top += nextComp.height + 10;
		comp.set_top(top);
	}
	
	nexacro._OnceCallbackTimer.callonce(
		form,
		function () {
			form.itemlist.splice(
				form.itemlist.findIndex(function (i) {
						return i.id === uuid;
					}),
				1
			);
			
			var objDelete = form.removeChild(containerId);
			objDelete.destroy();
			objDelete = null;
		},
		duration
	);
};


toast.pushMessage = function (form, type, title, sender, reg_time, content, duration) {
	var uuid = this.getUUID(),
    duration = duration ? duration : this.duration;
	
	if (!form.itemlist) form.itemlist = [];
	form.itemlist.push({ id: uuid 
						 , message: {
							title : title,
							sender : sender,
							reg_time : reg_time,
							content : content
						 }
						 , time: duration 
					   });
	//console.log(form.itemlist)
	var containerId = "toast_" + nexacro.replaceAll(uuid, "-", "_");
	var nTopPadding = 20
	var   nLeft = 20
		, nTop    = nTopPadding +  0
		, nWidth  = null
		, nHeight = 100
		, nRight = 20
		, nBottom = null;
	var container = new Div(containerId, nLeft, nTop, nWidth, nHeight, nRight, nBottom);
	container.set_background(this.backgroundColor[type]);
	container.set_borderRadius("3px");
	container.set_boxShadow("0px 0px 12px #999999");
	
	// 아이콘 이미지 추가
	{
		var imgIcon = new ImageViewer("imgIcon", 5, 4, 40, 40, null, null);
		imgIcon.set_image(this.icon[type]);
		imgIcon.set_background("transparent");
		imgIcon.set_border("0px none");
		container.addChild("imgIcon", imgIcon);
		container.show();
	}
	
	// 보낸사람 컴포넌트 추가
	{
		var stcSender = new Static("stcSender", 50, 5, 200, 30, null, null);
		stcSender.set_color("#ffffff");
		stcSender.set_font('14px/normal "Neue","Helvetica","Arial","sans-serif"');
		stcSender.set_wordWrap("char");
		stcSender.set_text(sender);
		container.addChild("stcSender", stcSender);
		container.show();
	}
	
	// 제목 컴포넌트 추가
	{
		var stcTitle = new Static("stcTitle", 50, 35, 200, 30, null, null);
		stcTitle.set_color("#ffffff");
		stcTitle.set_font('14px/normal "Neue","Helvetica","Arial","sans-serif"');
		stcTitle.set_wordWrap("char");
		stcTitle.set_text(title);
		container.addChild("stcTitle", stcTitle);
		container.show();
	}

	// 보낸날짜 컴포넌트 추가
	{
		var stcTime = new Static("stcTime", 50, 65, 200, 30, null, null);
		stcTime.set_color("#ffffff");
		stcTime.set_font('14px/normal "Neue","Helvetica","Arial","sans-serif"');
		stcTime.set_wordWrap("char");
		stcTime.set_text(reg_time);
		container.addChild("stcTime", stcTime);
		container.show();
	}

	// 내용 컴포넌트 추가
	{
		var webBrowser = new WebBrowser("webBrowser", 250, 5, null, null, 5, 5);
		webBrowser.set_borderRadius("3px");
		webBrowser.set_url(nexacro.getEnvironment().services["svcUrl"].url + "ckeditor4/preview.html");
        webBrowser.addEventHandler("onloadcompleted", function(obj, e) {
			var vHtml = obj.getProperty("document").getProperty("body");  
			vHtml.setProperty( "innerHTML", content);
		
		},this);		
		container.addChild("webBrowser", webBrowser);
		container.show();
	}
	
	form.addChild(containerId, container);
	container.show();	

	// 이전 토스트 메시지 이동
	var top = 0;
	for (var i = form.itemlist.length - 2; i >= 0; i--) {
		var comp =
        form.components[
			"toast_" + nexacro.replaceAll(form.itemlist[i].id, "-", "_")
        ],
		nextComp =
        form.components[
			"toast_" + nexacro.replaceAll(form.itemlist[i + 1].id, "-", "_")
        ];
		top = nextComp.top + nextComp.height + 10;
		//top += nextComp.height + nTopPadding + 5;
		comp.set_top(top);
	}
};

var cryptoAES = cryptoAES || {};
cryptoAES.key = CryptoJS.enc.Utf8.parse("TOBESOFT12345678");
cryptoAES.iv  = CryptoJS.enc.Utf8.parse('1234567812345678');

//암호화
cryptoAES.dataEncode = function(message, key, iv){
	var encrypted = CryptoJS.AES.encrypt(message, cryptoAES.key, { iv: cryptoAES.iv,mode:CryptoJS.mode.CBC,padding:CryptoJS.pad.ZeroPadding});
	return encrypted.toString();
}
//복호화
cryptoAES.dataDecode = function(encrypted, key, iv)
{
	var decrypted = CryptoJS.AES.decrypt(encrypted,cryptoAES.key,{iv:cryptoAES.iv,padding:CryptoJS.pad.ZeroPadding}); 
	return decrypted.toString(CryptoJS.enc.Utf8);
}
