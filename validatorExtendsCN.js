
// 全角
$.validator.addMethod("isSBCcase", function(value, element) {
	var reg = new RegExp("[０-９Ａ-Ｚａ-ｚ，。？＠　－＿＋－＊＼／［］｛｝；：＂＇︿“～！＃％”]");
	return this.optional(element) || (!reg.test(value));
}, "不要输入全角字符,请把您的输入法换成半角模式");
// 身份证校验
$.validator.addMethod("checkNationalId_confirm", function(value, element) {
	var identity = $("#candidateType").val();
	var idType = $("#nationIdType").val();
	if (identity == "mainland" && idType == "1") {
		return isIdCard(value);
	} else {
		return true;
	}

}, "请输入有效的18位二代身份证号码");
// 验证码
$.validator.addMethod("checkActiveCode", function(value, element) {
	if (value == '' || value.length != 6) {
		return false;
	}
	return true;
}, '');
// checkGuarantee
$.validator.addMethod("checkGuarantee", function(value, element) {
	if ($('#guarantee').attr('checked') != 'checked') {
		getAlertDialog("提示信息","您必须保证信息的真实和准确", "确定");
		$('#guarantee').focus();
		return false;
	} else {
		return true;
	}
}, "");
// 中文字符
$.validator.addMethod("isChinese", function(value, element) {
	var reg = new RegExp("[^\u4e00-\u9fa5]");
	return this.optional(element) || (!reg.test(value));
}, "");
// 英文
$.validator.addMethod("isEnglish", function(value, element) {
	var reg = new RegExp("[^A-Za-z ]");
	return this.optional(element) || (!reg.test(value));
}, "");
// 连续空格
$.validator.addMethod("checkMultipleSpace", function(value, element) {
	if (value.startWith("  ") || (value.length > 0 && value.indexOf("  ") > 0)) {
		return false;
	} else {
		return true;
	}
}, "不能含有连续的空格");
//空格
$.validator.addMethod("checkSpace", function(value, element) {
	if(value.startWith(" ") || value.indexOf(" ")>=0 ){
		return false;
	}else{
		return true;
	}
}, "不能含有空格");

// 证件号码校验
$.validator.addMethod("checkId", function(value, element) {
	if ($("#nationIdType").val() == 1) {
		if(value.length!=18){
			return false;
		}		
		return isIdCard(value, $("#gender").val());
	} else {
		return true;
	}
}, "请输入有效的18位二代身份证号码");

// 检查旧数据确认的证件号码
$.validator.addMethod("checkConfirmId", function(value, element) {
	if ($("#nationIdType").val() == 1) {
		if(value.length!=18){
			return false;
		}
		return isIdCardConfirm(value);
	} else {
		return true;
	}
}, "请输入有效的18位二代身份证号码");

// 出生日期校验
$.validator.addMethod("checkDob", function(value, element) {
	if ($("#nationIdType").val() == 1 && $("#nationalId").val() != "") {
		return isBirthdayOk();
	} else {
		return true;
	}
}, "出生日期与身份证上的出生日期不符");

// 数字校验
$.validator.addMethod("checkDigit", function(value, element) {
	if (value == "" || value == null) {
		return true;
	}else{
		var reg = new RegExp("[^0-9]");
		return this.optional(element) || (!reg.test(value));
	}
}, "");
// 证件类别
$.validator.addMethod("checkNationIdType", function(value, element) {
	var identity = $("#candidateType").val();
	if (identity == "mainland" || identity == "hmt") {
		if (value == '0' || value == null) {
			return false;
		}
	}
	return true;
}, "");
// 证件号码
$.validator.addMethod("checkNationalId", function(value, element) {
	var identity = $("#candidateType").val();
	if (identity == "mainland" || identity == "hmt") {
		if (value == "" || value == null) {
			return false;
		}
	}
	return true;
}, "");
// 护照国家
$.validator.addMethod("checkPptCountry", function(value, element) {
	var identity = $("#candidateType").val();
	if (identity == "hmt") {
		if ($("#pptId").val() != "") {
			if (value == "" || value == null) {
				return false;
			}
		}
	}
	return true;
}, "");
// 护照号码
$.validator.addMethod("checkPptId", function(value, element) {
	var identity = $("#candidateType").val();
	if (identity == "hmt") {
		if ($("#pptCountry").val() != "") {
			if (value == "" || value == null) {
				return false;
			}
		}
	} else if (identity == "other") {
		if (value == "" || value == null) {
			return false;
		}
	}
	return true;
}, "");
// 至少选择一种证件并输入号码
$.validator.addMethod("checkIdNo", function(value, element) {
	if (value == "") {
		return false;
	} else {
		return true;
	}
}, "请选择一种身份证件并输入号码");
// 成绩复议类型
$.validator.addMethod("eorSectionRequired", function(value, element) {
	if ($("#eorSection").val() == "") {
		return false;
	} else {
		return true;
	}
}, "请选择成绩复议的类型");

// 验证座机号码首字母食肉为0
$.validator.addMethod("checkPhoneFirstCapital", function(value, element) {
	if (value.substr(0, 1) == "0") {
		return false;
	}
	return true;
}, "电话首字母不能是0");

// 密码不能含有空格和斜杠
$.validator.addMethod("checkPassword", function(value, element) {
	var reg = new RegExp("[ ]");
	return this.optional(element) || (!reg.test(value));
}, "密码中请不要含有空格");

//检查出生日期
$.validator.addMethod("checkDate", function(value, element) {
	var r = $('#dob').val().match(/^(\d{1,4})(-|\/)(\d{1,2})\2(\d{1,2})$/);     
	if(r==null)
	{
	    return false;     
	}
	else
	{
	     var d = new Date(r[1], r[3]-1, r[4]);     
	     return (d.getFullYear()==r[1]&&(d.getMonth()+1)==r[3]&&d.getDate()==r[4]); 
	}
}, "出生日期填写不正确");

//密码复杂度
$.validator.addMethod("checkPasswordLevel", function(value, element) {
	var n = 0;
	if (/\d/.test(value)) {
		n++;// 包含数字
		// alert("包含数字");
	}
	if (/[a-z]/.test(value)) {
		n++;// 包含小写字母
		// alert("包含小写字母");
	}
	if (/[A-Z]/.test(value)) {
		n++;// 包含大写字母
		// alert("包含大写字母");
	}
	if (/[`~!@#\$%\^&\*\(\)_\+-]/.test(value)) {
		n++;// 包含符号
		// alert("包含符号");
	}

	return n>=3;
}, "登录密码不符合要求");

$.validator.addMethod("checkPrefixMale", function(value, element) {
	if ($("#gender").val() == 'M' && (value == 'Mrs' || value == 'Miss' || value == 'Ms')) {
		return false;		
	} else {
		return true;
	}
}, "男性考生，称呼请选择Mr或Dr");

$.validator.addMethod("checkPrefixFemale", function(value, element) {
	if ($("#gender").val() == 'F' && value == 'Mr') {
		return false;		
	} else {
		return true;
	}
}, "女性考生，称呼请选择Mrs，Miss，Ms或Dr");

$.validator.addMethod("checkDigitLetter", function(value, element) {
	var reg = /^[A-Za-z0-9]+$/;
	return this.optional(element) || (reg.test(value));
}, "请输入字母或数字");

$.validator.addMethod("maxDob", function(value, element) {
	var r = $('#dob').val().match(/^(\d{1,4})(-|\/)(\d{1,2})\2(\d{1,2})$/);
	var d= new Date(r[1], r[3]-1, r[4]);

	if(d > new Date()){
	    return false;
	}else{
		return true;
	}	
}, "出生日期不能大于现在的日期");

$.validator.addMethod("minDob", function(value, element) {
	var r = $('#dob').val().match(/^(\d{1,4})(-|\/)(\d{1,2})\2(\d{1,2})$/);
	var d= new Date(r[1], r[3]-1, r[4]);
	
	if(d < new Date(1900,0,1)){
		return false;
	}else{
		return true;
	}
	
}, "出生日期不能小于1900-01-01");

$.validator.addMethod("checkCardIdDigit", function(value, element) {
	var reg = new RegExp("[^0-9]");
	return this.optional(element)
			|| (!reg.test(value.replace(/[ ]/g, "")));
}, "银行卡号请输入数字");

$.validator.addMethod("checkRefundBankOther", function(value, element) {
	if($("#accountBank").find("option:selected").text()=='其他' && value==''){
		return false;
	}else {
		return true;
	}
}, "请输入开户银行网点名称");

$.validator.addMethod("checkReapplyRefundBankOther", function(value, element) {
	if($("#reapplyAccountBank").find("option:selected").text()=='其他' && value==''){
		return false;
	}else {
		return true;
	}
}, "请输入开户银行网点名称");

$.validator.addMethod("checkRefundBankContent", function(value, element) {
	if(value.indexOf($("#postProvince").find("option:selected").text())!=-1 || value.indexOf($("#postCity").find("option:selected").text())!=-1){
		return false;
	}else {
		return true;
	}
}, "请注意：银行名称 中，您仅需输入银行名称。例如：中国银行，仅输入“中国”");

$.validator.addMethod("checkReapplyRefundBankContent", function(value, element) {
	if(value.indexOf($("#reapplyPostProvince").find("option:selected").text())!=-1 || value.indexOf($("#reapplyPostCity").find("option:selected").text())!=-1){
		return false;
	}else {
		return true;
	}
}, "请注意：银行名称 中，您仅需输入银行名称。例如：中国银行，仅输入“中国”");