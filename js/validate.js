// JavaScript Document
function isEmail(str) {
    var myReg = /^([a-z0-9A-Z_]+[-|\.]?)+[a-z0-9A-Z]@([a-z0-9A-Z]+(-[a-z0-9A-Z]+)?\.)+[a-zA-Z]{2,}$/;
    if (myReg.test(str)) return true;
    return false;
}
function isInt(str) {
    var ontherReg = /^[-]?\d+$/;
    if (ontherReg.test(str)) return true;
    return false;
}
function isAge(str) {
    var myReg = /^[1-9]\d{1,3}$/;
    if (myReg.test(str)) return true;
    return false;
}
function isTel(str) {
    var ontherReg = /^\d{3,4}-\d{7,8}$/;
    if (ontherReg.test(str)) return true;
    return false;
}
function isMobile(str) {
    var myReg = /^(13|15|17|18)\d{9}$/;
    if (myReg.test(str)) return true;
    return false;
}
function isZipCode(str) {
    var myReg = /^[1-9]\d{5}$/;
    if (myReg.test(str)) return true;
    return false;
}
function isNumber(str) {
    var ontherReg = /^[-]?\d+(.\d{1,2})?$/;
    if (ontherReg.test(str)) return true;
    return false;
}
function isPassword(str) {
    var zimuReg = /[a-zA-Z]+/;
    var shuziReg = /[0-9]+/;
    var fuhaoReg = /[\`\~\!\@\#\$\%\^\&\*\(\)\-\_\=\+\{\}\[\]\\\;\,\.\<\>\?\/ ]+/;
    var myReg1 = /^[a-zA-Z0-9]{10,}$/;
    var myReg2 = /^[a-zA-Z\`\~\!\@\#\$\%\^\&\*\(\)\-\_\=\+\{\}\[\]\\\;\,\.\<\>\?\/ ]{10,}$/;
    var myReg3 = /^[0-9\`\~\!\@\#\$\%\^\&\*\(\)\-\_\=\+\{\}\[\]\\\;\,\.\<\>\?\/ ]{10,}$/;
    var myReg4 = /^[a-zA-Z0-9\`\~\!\@\#\$\%\^\&\*\(\)\-\_\=\+\{\}\[\]\\\;\,\.\<\>\?\/ ]{8,}$/;

    if (myReg1.test(str) && zimuReg.test(str) && shuziReg.test(str)) { return true; }
    if (myReg2.test(str) && zimuReg.test(str) && fuhaoReg.test(str)) { return true; }
    if (myReg3.test(str) && shuziReg.test(str) && fuhaoReg.test(str)) { return true; }
    if (myReg4.test(str) && zimuReg.test(str) && shuziReg.test(str) && fuhaoReg.test(str)) { return true; }
    return false;
}
function isName(str) {
    var ontherReg = /^[\u4e00-\u9fa5\da-zA-Z\-\_\ ]+$/;
    if (ontherReg.test(str)) return true;
    return false;
}
function isDate(intYear, intMonth, intDay) {
    if (isNaN(intYear) || isNaN(intMonth) || isNaN(intDay)) return false;
    if (intMonth > 12 || intMonth < 1) return false;
    if (intDay < 1 || intDay > 31) return false;
    if ((intMonth == 4 || intMonth == 6 || intMonth == 9 || intMonth == 11) && (intDay > 30)) return false;
    if (intMonth == 2) {
        if (intDay > 29) return false;

        if ((((intYear % 100 == 0) && (intYear % 400 != 0)) || (intYear % 4 != 0)) && (intDay > 28)) return false;

    }
    return true;
} 