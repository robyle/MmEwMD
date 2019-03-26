$.ajaxSetup({
	cache : false
});

var pleaseWait;
pleaseWait = pleaseWait || (function() {
	var pleaseWaitDiv = $('pleaseWaitDialog');
	return {
		show : function() {
			pleaseWaitDiv.modal();
		},
		hide : function() {
			pleaseWaitDiv.modal('hide');
		}
	};
})();

function gotoHomepage() {
	if ((new RegExp("\.net\.cn")).test(window.location.href.toLowerCase())) {
		window.location.href = "http://www.etest.net.cn";
		return;
	}
	window.location.href = "http://www.etest.edu.cn";
}

function loadNews(lang) {
	langPath = "1";
	if (lang == "EN") {
		langPath = "0";
	}
	var src = 'http://news.etest.net.cn/IELTS/' + langPath + '/newslist.htm';
	if ((new RegExp("\.edu\.cn")).test(window.location.href.toLowerCase())) {
		src = 'http://news.etest.edu.cn/IELTS/' + langPath + '/newslist.htm';
	}
	$("#iframeNews").attr('src', src);
}
function isCapsLockOn(e) {
	var c = e.keyCode || e.which;
	var s = e.shiftKey;
	if (((c >= 65 && c <= 90) && !s) || ((c >= 97 && c <= 122) && s)) {
		return true;
	}
	return false;
}
function loadWidgetPage(el, url, cache) {
	$.ajax({
		url : url,
		cache : false,
		success : function(html) {
			$(el).html(html);
		}
	});
}

function sendValidationEmail(neeaId) {
	var url = "/myHome/" + neeaId + "/emailValidator";
	$.ajax({
		type : 'POST',
		dataType : 'json',
		url : url,
		data : $("#frmValidateEmail").serialize(),
		success : function(data) {
			$("#dialog_body").html(data[0]);
			$("#dialog").modal();
		}
	});
}
function addToFavorite(title) {
	var host = "http://" + window.location.hostname;
	var domain_port_http = $.cookie("domain_port_http") == "undefined" ? "80"
			: $.cookie("domain_port_http");
	host = host + domain_port_http;
	if (document.all) {
		window.external.AddFavorite(host, title);

	} else {
		if (window.sidebar) {
			window.sidebar.addPanel(title, host, "");
		} else {
			alert("抱歉，您所使用的浏览器无法完成此操作。\n\n加入收藏失败，请使用Ctrl+D进行添加");
		}
	}
	return false;
}
function isEmail(strEmail) {
	if (strEmail
			.search(/^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/) != -1)
		return true;
	else
		return false;
}

/**
 * 获得验证码
 * 
 * @param init
 */
function getCheckImage(init, lang) {
	if (!init)
		setChangeChkImgMsg(true, lang);
	var url = app_url + "checkImage";

	$.getJSON(url, null, function(responseJSON) {
		if (responseJSON == null) {
			originalRequest.request.options.onFailure();
			return;
		}

		var img = new Image();
		img.onerror = function() {
			setChangeChkImgMsg(false, lang);
		};

		img.src = responseJSON.chkImgFilename;

		if ($.browser.msie) {
			img.onreadystatechange = function() {
				if (img.readyState == "complete") {
					$("#chkImg").attr("src", responseJSON.chkImgFilename);
					if (!init) {
						setChangeChkImgMsg(true, lang);
					}
					img = null;
				}
			};
		} else {
			img.onload = function() {
				if (img.complete == true) {
					$("#chkImg").attr("src", responseJSON.chkImgFilename);
					if (!init) {
						setChangeChkImgMsg(true, lang);
					}
					img = null;
				}
			};
		}
	});
}

/**
 * 更换验证码
 * 
 * @param flag
 */
function setChangeChkImgMsg(flag, lang) {
	if (flag) {
		if (lang == 'CN') {
			$("#changeMsg").html("看不清？点击图片换一张");
		} else {
			$("#changeMsg").html("Click picture to change one");
		}
	} else {
		var showLink;
		if (lang == 'CN') {
			showLink = "<a href='javascript:void(0)' onclick=\"getCheckImage(false,'CN');\">"
					+ "请点击刷新" + "</a>";
		} else {
			showLink = "<a href='javascript:void(0)' onclick=\"getCheckImage(false,'GB');\">"
					+ "Please click the refresh" + "</a>";
		}

		$("#changeMsg").html(showLink);
		$("#chkImg").attr("src", '');
	}
}

function inputClick(lang) {
	$("#divCheckImage").show();
	getCheckImage(false, lang);
	$("#securityCode").unbind("click");
}

/**
 * 初始化验证码区域
 */
function initCheckImage(lang) {
	$("#divCheckImage").hide();

	$("#securityCode").val('');

	// 验证码输入框被点击或得到焦点时调用该函数
	// 该函数应该只执行一次（只有第一次才去获取验证码）

	$("#securityCode").focus(function() {
		if ($("#divCheckImage").is(":hidden")) {
			inputClick(lang);
		}
	});

	$("#chkImg").click(function() {
		getCheckImage(false, lang);
	});
}

function buildURL(prototype, path) {
	var hostname = window.location.hostname;
	var domain_port_https = $.cookie("domain_port_https") == "undefined" ? "443"
			: $.cookie("domain_port_https");
	var domain_port_http = $.cookie("domain_port_http") == "undefined" ? "80"
			: $.cookie("domain_port_http");
	var port = ":";
	if (prototype == "https") {
		port += domain_port_https;
	} else {
		port += domain_port_http;
	}
	window.location.prototype = prototype;
	var url = prototype + "://" + hostname + port + path;
	return url;
}

function gotoProgramHomePage(prototype, path, homePageLevel) {
	var hostname = window.location.hostname;
	var domain_port_https = $.cookie("domain_port_https") == undefined ? "443"
			: $.cookie("domain_port_https");
	var domain_port_http = $.cookie("domain_port_http") == undefined ? "80" : $
			.cookie("domain_port_http");
	var port = ":";
	if (prototype == "https") {
		port += domain_port_https;
	} else {
		port += domain_port_http;
	}
	window.location.prototype = prototype;
	var returnPath = app_url;
	if (homePageLevel == 2) {
		returnPath = returnPath + path;
	} else if (homePageLevel == 3) {
		returnPath = window.location.pathname + path;
	} else if (homePageLevel == 4) {
		returnPath = window.location.pathname.substring(0,
				window.location.pathname.lastIndexOf('/') + 1)
				+ path;
	}
	var httpsUrl = prototype + "://" + hostname + port + returnPath;
	window.location.href = httpsUrl;
}

function gotoProgramHomePageHtml(prototype, path, homePageLevel) {
	var hostname = window.location.hostname;
	var domain_port_https = $.cookie("domain_port_https") == "undefined" ? "443"
			: $.cookie("domain_port_https");
	var domain_port_http = $.cookie("domain_port_http") == "undefined" ? "80"
			: $.cookie("domain_port_http");
	var port = ":";
	if (prototype == "https") {
		port += domain_port_https;
	} else {
		port += domain_port_http;
	}
	window.location.prototype = prototype;
	var pathName = window.document.location.pathname;
	var projectName = pathName
			.substring(0, pathName.substr(1).indexOf('/') + 2);
	var returnPath = projectName;

	if (homePageLevel == 2) {
		returnPath = returnPath + path;
	} else if (homePageLevel == 3) {
		returnPath = window.location.pathname + path;
	}
	var httpsUrl = prototype + "://" + hostname + port + returnPath;
	window.location.href = httpsUrl;
}

/**
 * 提交表单时，显示错误信息
 * 
 * @param id
 * @param msg
 */
function appendErrorMsg(id, msg) {
	$("#" + id + "ErrorMsg").empty().append(msg);
}

/**
 * 下拉菜单点击事件
 * 
 * @param action
 */
function loadPage(action, title) {
	if (title == undefined) {
		title = '正在加载页面';
	}
	$("#pleaseWaitDialog").dialog({
		title : title,
		modal : true,
		resizable : false
	});

	$.ajax({
		type : "GET",
		url : action,
		success : function(msg) {
			$("#pleaseWaitDialog").dialog('close');
			$("#rightRange").html(msg);
			$(window).scrollTop(0);
		}
	});
}

function showTipMsg() {
	$(".inputStyle").smallipop({
		preferredPosition : 'right',
		theme : 'black',
		popupOffset : 5,
		hideDelay : 500,
		invertAnimation : true,
		popupAnimationSpeed : 60,
		triggerOnClick : true
	});
}

/**
 * confirm dialog
 * 
 * @param title
 * @param content
 * @returns
 */
function getDialog(title, content) {
	var dialog = $("<div>");
	if (title.length > 0) {
		dialog = $("<div title='" + title + "'>");
	}
	dialog.append(content);
	dialog.append("</div>");
	return dialog;
}

/**
 * alert dialog
 * 
 * @param title
 * @param content
 * @param ok
 */
function getAlertDialog(title, content, ok) {
	var dialog = getDialog(title, content);
	var okButtonName = ok;

	var dialog_buttons = {};
	dialog_buttons[okButtonName] = function() {
		$(this).dialog('close');
	};

	dialog.dialog({
		resizable : false,
		height : 180,
		modal : true,
		buttons : dialog_buttons
	});
}

function getAlertDialog(title, content, ok, elementId) {
	var dialog = getDialog(title, content);
	var okButtonName = ok;

	var dialog_buttons = {};
	dialog_buttons[okButtonName] = function() {
		$(this).dialog('close');
		$("#" + elementId).focus();
	};

	dialog.dialog({
		resizable : false,
		height : 180,
		modal : true,
		buttons : dialog_buttons
	});
}

function getAlertDialogHeight(title, content, ok, elementId) {
	var dialog = getDialog(title, content);
	var okButtonName = ok;

	var dialog_buttons = {};
	dialog_buttons[okButtonName] = function() {
		$(this).dialog('close');
		$("#" + elementId).focus();
	};

	dialog.dialog({
		resizable : false,
		height : 190,
		modal : true,
		buttons : dialog_buttons
	});
}

/**
 * 人民币格式化
 * 
 * @param elementId
 * @param fee
 */
function formatCurrency(elementId, fee) {
	$("#" + elementId).text(fee / 100);
	$("#" + elementId).formatCurrency({
		region : 'zh-CN'
	});
}

function formatCurrencyVal(elementId, fee) {
	$("#" + elementId).val(fee / 100);
	$("#" + elementId).formatCurrency({
		region : 'zh-CN'
	});
}

function calTotalFee() {
	var hanFee = Number($("#hanFee").val());
	var urgFee;
	if($("#urgFee").val()==undefined){
		urgFee = 0;
	}else{
		urgFee = Number($("#urgFee").val());
	}
	var expFee = Number($("#expFee").val());
	if(hanFee==-1 && urgFee==-1 && expFee==-1){
		$("#totalFee").val($("#totalFee").val());
		$("#talFee").text($("#totalFee").val());
		$(".moneyTag").formatCurrency({
			region : 'zh-CN'
		});
	}else{
		var totalFee = hanFee + urgFee + expFee;
		$("#totalFee").val(totalFee);
		$("#talFee").text(totalFee);
		$(".moneyTag").formatCurrency({
			region : 'zh-CN'
		});
	}
}

function calEmsFee() {
	if ($("#expType option:selected").val() == "EMS") {
		/*
		if (("110100" == $("#cityCode").val() && "110100" == $("#postCity")
				.val())
				|| ("310100" == $("#cityCode").val() && "310100" == $(
						"#postCity").val())
				|| ("500100" == $("#cityCode").val() && "500100" == $(
						"#postCity").val())
				|| ("440100" == $("#cityCode").val() && "440100" == $(
						"#postCity").val())) {
			$("#expFee").val(14);
		} else {
			$("#expFee").val(22);
		}*/
		
	    //寄送目的地为北京的，快递费用为14元; 目的地为其它城市的，快递费用为 22元
		if("110100" == $("#postCity").val()){
			$("#expFee").val(14);
		}else{
			$("#expFee").val(22);
		}

		calTotalFee();
		$("#expFeeShow").text($("#expFee").val());
		$(".moneyTag").formatCurrency({
			region : 'zh-CN'
		});
	}
}

function PPCCascade(provinceElementId, cityElementId, dirstrictElementId, lang) {
	var provinceOptions = '<option value="">- 请选择省份 -</option>';
	if(lang=='en'){
		provinceOptions = '<option value="">- Province -</option>';
	}
	$.each(obj_province, function(i, data) {
		provinceOptions += '<option value="' + data[0] + '">' + data[1]
				+ '</option>';
	});
	$("#" + provinceElementId).empty();
	$("#" + provinceElementId).html(provinceOptions);

	$("#" + provinceElementId).change(function() {
		changeCity(provinceElementId, cityElementId, lang);
		changeDistrict(cityElementId, dirstrictElementId, lang);
	});
	$("#" + cityElementId).change(function() {
		changeDistrict(cityElementId, dirstrictElementId, lang);
		calEmsFee();
	});
}

function changeCity(provinceElementId, cityElementId, lang) {
	var selectedProvinceCode = $("#" + provinceElementId + " option:selected")
			.val();
	var cityObj = obj_city[selectedProvinceCode];
	var cityOptions = '<option value="">- 请选择城市 -</option>';
	if(lang=='en'){
		cityOptions = '<option value="">- City -</option>';
	}
	if (!$.isEmptyObject(cityObj)) {
		$.each(cityObj, function(i, item) {
			cityOptions += '<option value="' + item.cityCode + '">'
					+ item.cityNameCn + '</option>';
		});
	}
	$("#" + cityElementId).empty();
	$("#" + cityElementId).html(cityOptions);
}

function changeDistrict(cityElementId, dirstrictElementId, lang) {
	var selectedCityCode = $("#" + cityElementId + " option:selected").val();
	var countyObj = obj_county[selectedCityCode];
	var countyOptions = '<option value="">- 请选择区县 -</option>';
	if(lang=='en'){
		countyOptions = '<option value="">- Dirstrict -</option>';
	}
	if (!$.isEmptyObject(countyObj)) {
		$.each(countyObj, function(i, item) {
			countyOptions += '<option value="' + item.cityCode + '">'
					+ item.cityNameCn + '</option>';
		});
	}
	countyOptions += '<option value="999"> - </option>';
	$("#" + dirstrictElementId).empty();
	$("#" + dirstrictElementId).html(countyOptions);
}

function loadAppPage(action, neeaAppId) {
	$.ajax({
		type : "GET",
		url : action,
		data : {
			neeaAppId : neeaAppId
		},
		success : function(msg) {
			$("#rightRange").html(msg);
		}
	});
}

function showSurveyLink(action, neeaAppId) {
	$("#dialog_surveyLink").modal();
	$("#btnSubmit_surveyLink").click(
		function() {
			$.ajax({
				type : "GET",
				url : action,
				data : {
					neeaAppId : neeaAppId
				},
				success : function(msg) {
					$("#rightRange").html(msg);
				}
			});
		});	
}

function setElementSelected(name, value) {
	$("select[name=" + name + "] option[value=" + value + "]").attr("selected",
			true);
}

function setElementsChecked(name, value) {
	$('input[name="+name+"][value=' + value + ']').attr("checked", "checked");
}

function loadBundles(lang) {
	var langReg = lang == "zh" ? "zh-CN" : "en-GB";
	$.datepicker.setDefaults($.datepicker.regional[langReg]);
}

function gotoTop() {
	window.scrollTo(0, 0);
}

// js实现map
function Map() {
	this.elements = new Array();

	// 获取MAP元素个数
	this.size = function() {
		return this.elements.length;
	};

	// 判断MAP是否为空
	this.isEmpty = function() {
		return (this.elements.length < 1);
	};

	// 删除MAP所有元素
	this.clear = function() {
		this.elements = new Array();
	};

	// 向MAP中增加元素（key, value)
	this.put = function(_key, _value) {
		this.elements.push({
			key : _key,
			value : _value
		});
	};

	// 删除指定KEY的元素，成功返回True，失败返回False
	this.remove = function(_key) {
		var bln = false;
		try {
			for (var i = 0; i < this.elements.length; i++) {
				if (this.elements[i].key == _key) {
					this.elements.splice(i, 1);
					return true;
				}
			}
		} catch (e) {
			bln = false;
		}
		return bln;
	};

	// 获取指定KEY的元素值VALUE，失败返回NULL
	this.get = function(_key) {
		try {
			for (var i = 0; i < this.elements.length; i++) {
				if (this.elements[i].key == _key) {
					return this.elements[i].value;
				}
			}
		} catch (e) {
			return null;
		}
	};

	// 获取指定索引的元素（使用element.key，element.value获取KEY和VALUE），失败返回NULL
	this.element = function(_index) {
		if (_index < 0 || _index >= this.elements.length) {
			return null;
		}
		return this.elements[_index];
	};

	// 判断MAP中是否含有指定KEY的元素
	this.containsKey = function(_key) {
		var bln = false;
		try {
			for (var i = 0; i < this.elements.length; i++) {
				if (this.elements[i].key == _key) {
					bln = true;
				}
			}
		} catch (e) {
			bln = false;
		}
		return bln;
	};

	// 判断MAP中是否含有指定VALUE的元素
	this.containsValue = function(_value) {
		var bln = false;
		try {
			for (var i = 0; i < this.elements.length; i++) {
				if (this.elements[i].value == _value) {
					bln = true;
				}
			}
		} catch (e) {
			bln = false;
		}
		return bln;
	};

	// 获取MAP中所有VALUE的数组（ARRAY）
	this.values = function() {
		var arr = new Array();
		for (var i = 0; i < this.elements.length; i++) {
			arr.push(this.elements[i].value);
		}
		return arr;
	};

	// 获取MAP中所有KEY的数组（ARRAY）
	this.keys = function() {
		var arr = new Array();
		for (var i = 0; i < this.elements.length; i++) {
			arr.push(this.elements[i].key);
		}
		return arr;
	};
}

function checkDateCN(value) {
	var r = value.match(/^(\d{1,4})(-|\/)(\d{1,2})\2(\d{1,2})$/);
	if (r == null) {
		return false;
	} else {
		var d = new Date(r[1], r[3] - 1, r[4]);
		return (d.getFullYear() == r[1] && (d.getMonth() + 1) == r[3] && d
				.getDate() == r[4]);
	}
}

function checkDateEN(value) {
	var r = value.match(/^(\d{1,2})\/(\d{1,2})\/(\d{1,4})$/);
	if (r == null) {
		return false;
	} else {
		var d = new Date(r[3], r[1]-1, r[2]);
		return (d.getFullYear() == r[3] && (d.getMonth() + 1) == r[1] && d
				.getDate() == r[2]);
	}
}

/**
 * 是否为数字
 */
function isDigit(elementId) {
	puredigit = new RegExp("[^0-9]");
	return !puredigit.test($(elementId).val());
}

function isDigitVal(value) {
	puredigit = new RegExp("[^0-9]");
	return !puredigit.test(value);
}

String.prototype.Trim = function() {
	return this.replace(/(^\s*)|(\s*$)/g, "");
};

String.prototype.startWith=function(str){ 
	var reg=new RegExp("^"+str); 
	return reg.test(this); 
};

String.prototype.endWith=function(str){ 
	var reg=new RegExp(str+"$"); 
	return reg.test(this); 
};

function showMessageDialog(title, content, ok, width, height, opt) {
	var dialog = getDialog(title, content);
	var okButtonName = ok;

	var dialog_buttons = {};
	dialog_buttons[okButtonName] = function() {
		$(this).dialog('close');
		if(opt){
			loadPage('showOrders');	
		}				
	};

	dialog.dialog({
		resizable : false,
		width : width,
		height : height,
		modal : true,
		buttons : dialog_buttons
	});
}

var obj_bankName = jQuery.parseJSON('[["中国建设银行","中国建设银行"],["中国银行","中国银行"],["中国工商银行","中国工商银行"],["中国农业银行","中国农业银行"],["招商银行","招商银行"],["交通银行","交通银行"],["中国光大银行","中国光大银行"],["中国邮政储蓄银行","中国邮政储蓄银行"],["华夏银行","华夏银行"],["中信银行","中信银行"],["上海浦东发展银行","上海浦东发展银行"],["兴业银行","兴业银行"],["北京银行","北京银行"],["成都银行","成都银行"],["民生银行","民生银行"],["上海银行","上海银行"],["重庆农村商业银行","重庆农村商业银行"],["渤海银行","渤海银行"],["平安银行","平安银行"],["北京农商银行","北京农商银行"],["广发银行","广发银行"],["杭州银行","杭州银行"],["浙商银行","浙商银行"],["其他","其他"]]');
function bankNameBuild(bankNameId, lang) {
	var bankNameOptions = '<option value="">- 请选择银行 -</option>';
	if(lang=='en'){
		bankNameOptions = '<option value="">- Bank Name -</option>';
	}
	$.each(obj_bankName, function(i, data) {
		bankNameOptions += '<option value="' + data[0] + '">' + data[1]
				+ '</option>';
	});
	$("#" + bankNameId).empty();
	$("#" + bankNameId).html(bankNameOptions);
}

Date.prototype.age = function(date){
  var returnAge;
  var nowYear = this.getYear();
  var nowMonth = this.getMonth() + 1; 
  var nowDay = this.getDate();
  var birthYear = date.getYear();
  var birthMonth = date.getMonth();
  var birthDay = date.getDate();
  
  if(nowYear == birthYear) {
      returnAge = 0;  //同年 则为0岁
  } else {
      var ageDiff = nowYear - birthYear ; //年之差
      if(ageDiff > 0){
          if(nowMonth == birthMonth){
              var dayDiff = nowDay - birthDay; //日之差
              if(dayDiff < 0){
                  returnAge = ageDiff - 1;
              }
              else{
                  returnAge = ageDiff ;
              }
          }else{
              var monthDiff = nowMonth - birthMonth; //月之差
              if(monthDiff < 0){
                  returnAge = ageDiff - 1;
              }else{
                  returnAge = ageDiff ;
              }
          }
      }else{
          returnAge = -1; //返回-1 表示出生日期输入错误 晚于今天
      }
  }
  return returnAge;
};

function openAT(candidateAgeType, url){
	if(candidateAgeType != 'Adult'){
		$("#dialog_nonAdultOpenAT").modal();
		$("#btnSubmit_dialog_nonAdultOpenAT").click(
			function() {
				$("#dialog_nonAdultOpenAT").modal('hide');
				window.open(url);
			});
	}else{
		window.open(url);
	}
}