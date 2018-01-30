var currentUrl = window.location.href.split('?')[0];
var wUrl = "http://www.gjdyzjb.cn/index.html#/generalBusiness/cinemaManagement/cinemaInfoModify/check.html";
if (currentUrl == wUrl) {
    var x = document.createElement('script');
    x.src = 'http://static.m1905.cn/js/chrome/zhuanzi/grabPageData.js';
    document.getElementsByTagName('body')[0].appendChild(x);
}