window.onscroll = function () { var sllTop = document.documentElement.scrollTop || document.body.scrollTop; if (sllTop > 240) { $('#get-top').css('display', 'block') } else { $('#get-top').css('display', 'none') } }
$('#get-top').click(function () { $('body,html').animate({ scrollTop: 0 }, 800); })
$(".left-menu-btn").hover(function () { $('#tow-nav').fadeIn(200); }, function () { $("#tow-nav").hover(function () { $('#tow-nav').fadeIn(0); }, function () { $('#tow-nav').fadeOut(0) }); $('#tow-nav').fadeOut(0) })
var deviceVal = browserRedirect(); function browserRedirect() { var sUserAgent = navigator.userAgent.toLowerCase(); var bIsIpad = sUserAgent.match(/ipad/i) == "ipad"; var bIsIphoneOs = sUserAgent.match(/iphone os/i) == "iphone os"; var bIsMidp = sUserAgent.match(/midp/i) == "midp"; var bIsUc7 = sUserAgent.match(/rv:1.2.3.4/i) == "rv:1.2.3.4"; var bIsUc = sUserAgent.match(/ucweb/i) == "ucweb"; var bIsAndroid = sUserAgent.match(/android/i) == "android"; var bIsCE = sUserAgent.match(/windows ce/i) == "windows ce"; var bIsWM = sUserAgent.match(/windows mobile/i) == "windows mobile"; if (bIsIpad || bIsIphoneOs || bIsMidp || bIsUc7 || bIsUc || bIsAndroid || bIsCE || bIsWM) { return 'phone'; } else { return 'pc'; } }
(function () {
    window.onresize = function () { ShowHideElement("i-link-box", "linkList-item", 845); }
    window.onload = function () { ShowHideElement("i-link-box", "linkList-item", 845); }
    function ShowHideElement(Element1, Element2, Vaule) { var Person = document.getElementsByClassName(Element1); var BoxHeight = document.getElementsByClassName(Element2); var WindowHeight = window.innerHeight || document.body.clientHeight; for (var i = 6; i < Person.length; i++) { if (WindowHeight <= Vaule && deviceVal === "pc") { Person[i].style.display = "none"; BoxHeight[0].style.marginTop = "5px"; } else { Person[i].style.display = "block"; BoxHeight[0].style.marginTop = "0px"; } } }
    window.ShowHideElement = ShowHideElement;
}()); var now = -1; var resLength = 0; var thisSearch = 'https://www.baidu.com/s?wd='; var thisSearchIcon = 'assets/images/baidu.png'; var storage = window.localStorage; if (!storage.stopHot) { storage.stopHot = true }
storage.stopHot == 'false' ? $('#hot-btn').addClass('off') : $('#hot-btn').removeClass('off'); var ssData = storage.searchEngine; if (storage.searchEngine != undefined) { ssData = ssData.split(','); thisSearch = ssData[0]; $('.search-icon').attr('src', ssData[1]) }
$('#txt').keyup(function (e) {
    if ($('#txt').val() != '') { $('.search-clear').css('display', 'block'); $('.search-clear').click(function () { $('#txt').val(''); $('#box ul').html(''); $('.search-clear').css('display', 'none') }) } else { $('.search-clear').css('display', 'none') }
    if (e.keyCode == 38 || e.keyCode == 40 || storage.stopHot != 'true') { return }; var dat = { wd: $('#txt').val() }; if ($('#txt').val() != '') { $('#box ul').text(''); $('#box').css('display', 'block'); $.ajax({ type: "GET", url: "https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su", async: true, data: dat, dataType: 'jsonp', jsonp: 'cb', success: function (res) { for (var i = 0; i < res.s.length; i++) { resLength = res.s.length; oli_i = '<li>' + res.s[i] + '</li>'; $('#box ul').append(oli_i); $('#box ul li').eq(i).click(function () { $('#txt').val(this.innerHTML); window.open(thisSearch + this.innerHTML, '_self'); $('#box ul').html(''); $('#box').css('display', 'none') }) }; }, error: function (res) { console.log(res) } }); } else { $('#box ul').html('') };
}); $('#txt').keydown(function (ev) {
    if (ev.keyCode == 40) {
        now++; if (now > resLength - 1) { now = 0; }
        $('#box ul li').eq(now).addClass('current').siblings().removeClass('current')
        $('#txt').val($('#box ul li').eq(now).text())
    }; if (ev.keyCode == 38) {
        if (now == -1 || now == 0) { now = resLength }
        now--
        $('#box ul li').eq(now).addClass('current').siblings().removeClass('current'); $('#txt').val($('#box ul li').eq(now).text())
    }; if (ev.keyCode == 13) {
        var textValue = $('#txt').val(); if (textValue != '') {
            window.open(thisSearch + $('#txt').val(), '_self')
            $('#box ul').html('')
        }
    }
})
$(function () {
    var search = { data: [{ name: '百度', img: 'assets/images/baidu.png', url: 'https://www.baidu.com/s?wd=' }, { name: 'Google', img: 'assets/images/google.png', url: 'https://www.google.com/search?q=' }, { name: '360搜', img: 'assets/images/360.png', url: 'https://www.so.com/s?q=' }, { name: '搜狗', img: 'assets/images/sougou.png', url: 'https://www.sogou.com/web?query=' }, { name: 'Bing', img: 'assets/images/bing.png', url: 'https://bing.com/search?q=' }, { name: 'YaHoo', img: 'assets/images/yahoo.png', url: 'https://search.yahoo.com/search?p=' }, { name: '神马', img: 'assets/images/shenma.png', url: 'http://quark.sm.cn/s?q=' }, { name: '秘迹', img: 'assets/images/miji.png', url: 'https://mijisou.com/?q=' }, { name: 'Duckgo', img: 'assets/images/Duckduckgo.png', url: 'https://duckduckgo.com/?q=' }, { name: 'YaHooJP', img: 'assets/images/yahoojp.png', url: 'https://search.yahoo.co.jp/search?p=' }, { name: 'Lookao', img: 'assets/images/lookao.png', url: 'https://lookao.com/search?q=' }, { name: 'Yandex', img: 'assets/images/yandex.png', url: 'https://yandex.com/search/?text=' }, { name: 'AOl', img: 'assets/images/aol.png', url: 'http://search.aol.com/aol/search?q=' }, { name: 'Yippy', img: 'assets/images/yippy.png', url: 'https://yippy.com/search?query=' }, { name: 'Startpage', img: 'assets/images/startpage.png', url: 'https://www.startpage.com/do/dsearch?query=' }, { name: 'Ecosia', img: 'assets/images/Ecosia.png', url: 'https://www.ecosia.org/search?q=' }, { name: 'Peekier', img: 'assets/images/peekier.png', url: 'https://peekier.com/#!' }, { name: 'Qwant', img: 'assets/images/qwant.png', url: 'https://www.qwant.com/?q=' }, { name: 'MetaGer', img: 'assets/images/metager.png', url: 'https://metager.de/meta/meta.ger3?eingabe=' }, { name: 'Dogpile', img: 'assets/images/dogpile.png', url: 'https://www.dogpile.com/serp?q=' }, { name: 'Mag[i]', img: 'assets/images/magi.png', url: 'https://magi.com/search?q=' }, { name: 'Goobe', img: 'assets/images/goobe.png', url: 'https://goobe.io/search.aspx?k=' }, { name: 'Torrentz2', img: 'assets/images/torrentz2.png', url: 'https://torrentz2.eu/search?f=' }, { name: 'Acg搜', img: 'assets/images/acgsou.png', url: 'http://www.acgsou.com/search.php?keyword=' }] }
    for (var i = 0; i < search.data.length; i++) {
        var addList = '<li><img src="' + search.data[i].img + '"/>' + search.data[i].name + '</li>'
        $('.search-engine-list').append(addList);
    }
    $('.search-icon, .search-engine').hover(function () { $('.search-engine').css('display', 'block') }, function () { $('.search-engine').css('display', 'none') }); $('#hot-btn').on('click', function () {
        $(this).toggleClass('off'); if (storage.stopHot == 'true') { storage.stopHot = false } else { storage.stopHot = true }
        console.log(storage.stopHot)
    }); $('.search-engine-list li').click(function () {
        var _index = $(this).index(); var thisImg = $(this).children().attr('src'); $('.search-icon').attr('src', thisImg)
        thisSearch = search.data[_index].url; $('.search-engine').css('display', 'none')
        storage.searchEngine = [thisSearch, thisImg]
    })
})
$("#search-btn").click(function () {
    var textValue = $('#txt').val(); if (textValue != '') {
        window.open(thisSearch + $('#txt').val(), '_self')
        $('#box ul').html('')
    }
}); 'use strict'; $(function () {
    if (deviceVal == 'phone') {
        $('#menu').css({ 'overflow': 'hidden', 'overflow-y': 'scroll' })
        return
    }
    var api1 = new myApi(); api1.mouseScroll.inte($('#menu'), 30);
})
function myApi() { this.mouseScroll = { inte: function (obj, value) { this.OBJ = obj; this.addscroll(obj); var outH = obj.outerHeight(), oScrollcontent = obj.children(':first'), contentH = oScrollcontent.outerHeight(), oYscrollinnerH = outH / contentH * outH, oYscrollouter = obj.find('#Yscrollouter'), oYscrollinner = obj.find('#Yscrollinner'); obj.css({ 'position': 'relative', 'overflow': 'hidden' }); oScrollcontent.css('position', 'absolute'); if (contentH > outH) { this.mousehover(obj, oYscrollouter, oYscrollinner); this.mousewheel(obj, value, oScrollcontent, oYscrollinner, outH, contentH, oYscrollinnerH); this.mousemoved(obj, oScrollcontent, oYscrollouter, oYscrollinner, outH, contentH, oYscrollinnerH); }; }, addscroll: function (obj, value) { obj.append('<div id="Yscrollouter"><div id="Yscrollinner"></div></div>'); $('#Yscrollinner').css('cursor', 'pointer'); }, mousehover: function (obj, outer, inner) { obj.hover(function () { outer.fadeIn(400); }, function () { outer.fadeOut(400); }); inner.hover(function () { $('body').css({ '-moz-user-select': 'none', '-webkit-user-select': 'none', '-ms-user-select': 'none', '-khtml-user-select': 'none', 'user-select': 'none', }); }, function () { $('body').css({ '-moz-user-select': 'auto', '-webkit-user-select': 'auto', '-ms-user-select': 'auto', '-khtml-user-select': 'auto', 'user-select': 'auto', }); }); }, mousewheel: function (obj, value, O, inner, H1, H2, H3) { var oScrollcontentVal = value / (H1 - H3) * (H2 - H1); inner.height(H3); obj.on('mousewheel', function (event, delta) { event.preventDefault(); var delta = event.originalEvent.wheelDelta; var oYscrollinnerTop = inner.position().top; var oScrollcontentTop = O.position().top; if (delta > 0) { if (oYscrollinnerTop - value < 0) { inner.css('top', 0); O.css('top', 0); } else { inner.css('top', oYscrollinnerTop - value); O.css('top', oScrollcontentTop + oScrollcontentVal); } } else { if (oYscrollinnerTop + value > H1 - H3) { inner.css('top', H1 - H3); O.css('top', H1 - H2); } else { inner.css('top', oYscrollinnerTop + value); O.css('top', oScrollcontentTop - oScrollcontentVal); } }; }); }, mousemoved: function (obj, O, outer, inner, H1, H2, H3) { inner.on('mousedown', function (event) { var clientY = event.clientY, oYscrollinnerTop = inner.position().top, oScrollcontentTop = O.position().top, moveY = 0; $(document).on('mousemove', function (event) { moveY = event.clientY - clientY; var oScrollcontentMove = moveY / (H1 - H3) * (H2 - H1); if (oYscrollinnerTop + moveY < 0) { inner.css('top', 0); O.css('top', 0); } else if (oYscrollinnerTop + moveY > H1 - H3) { inner.css('top', H1 - H3); O.css('top', H1 - H2); } else { inner.css('top', oYscrollinnerTop + moveY); O.css('top', oScrollcontentTop - oScrollcontentMove); } }); $(document).on('mouseup', function (event) { $(document).off('mousemove'); }) }) } } }