function initfomes() {
    var a, b, d, e, f, g;
    for (timeindex = 1, $("#main img").remove(), $("#main .tishi").remove(), type = rand(1, 5), 
    a = $("#main").width(), b = $("#main").height(), $("#main").offset().top, d = 0; d < itemlist.length; d++) e = itemlist[d], 
    e.type == type && (e.className.indexOf("fomes") >= 0 ? (f = rand(0, 4), g = scorelist[f], 
    e.count = g) :(g = -500, e.count = g), itemSet(a, b, e, d));
}

function init() {
    $(".servercount").text(ServerCounts), $(".time .hastime").text(serverTime), $(".score1 span").text("0"), 
    $(".score2 span").text(ServerCounts), initfomes();
}

function itemSet(a, b, c, d) {
    var e, f, g;
    _x = c.x * a / 640, _y = c.y * b / 720, e = new Image(), e.src = c.url, "bar" == c.className && (c.className = c.className + " zymove" + timeindex, 
    timeindex++), e.className = c.className + " item", e.setAttribute("count", c.count), 
    e.setAttribute("fg", d), e.setAttribute("id", d), e.style.position = "absolute", 
    e.style.width = "1.08rem", e.style.left = _x + "px", e.style.top = _y + "px", f = _y + 1.08 * (100 * window.getWidth() / 640), 
    $("#main").append(e), c.className.indexOf("fomes") >= 0 && (g = $("<div class='tishi' fg='" + d + "' style='left:" + _x + "px;top:" + f + "px;'>" + c.text + "</div>"), 
    $("#main").append(g));
}

function recreat(a) {
    var b, c, d, e, f, g;
    for (Number($(a).attr("count")) > 0 ? $(".countWord").text("+" + $(a).attr("count")) :$(".countWord").text($(a).attr("count")), 
    b = $(a).css("left"), c = $(a).css("top"), $(".countWord").css("left", b), $(".countWord").css("top", c), 
    $(".countWord").removeClass("shake1").addClass("shake1"), sumCounts += Number($(a).attr("count")), 
    $(".score .score1 span").text(sumCounts), $(a).remove(), d = $(a).attr("fg"), e = $(".tishi"), 
    f = 0; f < e.length; f++) if (g = $(e[f]).attr("fg"), g == d) {
        $(e[f]).remove();
        break;
    }
    over();
}

function rectBo() {
    var a = $("#hanger"), b = Math.abs(point.deg), c = 2 * Math.PI / 360 * b, d = (Math.cos(c) * a.width() + Math.sin(c) * a.height()) / 2, e = (Math.sin(c) * a.width() + Math.cos(c) * a.height()) / 2, f = a.offset().left + d, g = a.offset().top + e, h = $("#main .item");
    $.each(h, function() {
        var a = $(this).offset().left + $(this).width() / 2, b = $(this).offset().top + $(this).height() / 2, c = (f - a) * (f - a) + (g - b) * (g - b), d = Math.sqrt(c), e = point.halfwidth + $(this).height() / 2;
        e >= d && (clearInterval(inter), recreat(this));
    });
}

function over() {
    $(".hor").removeClass("transition1"), $(".ver").removeClass("transition1"), $(".hor").css("transform", "translateX(0px)"), 
    $(".ver").css("transform", "translateY(0px)"), $("#hanger").css("transform", "rotate(0deg)"), 
    $(".line").css("transform", "rotate(0deg)"), clearInterval(inter), flag = 0;
    var a = $("#main").find(".fomes").length;
    0 >= a && initfomes();
}

function getX(a) {
    return a = a || window.event, a.pageX || a.clientX + document.body.scroolLeft;
}

function getY(a) {
    return a = a || window.event, a.pageY || a.clientY + document.boyd.scrollTop;
}

function gamestart() {
    sytime = serverTime, sumCounts = 0, Interval1 = setInterval(function() {
        sytime--, $(".time .hastime").text(sytime), 0 == sytime && (gameover(), clearInterval(Interval1));
    }, 1e3);
}

function gameover() {
    if (sumCounts >= ServerCounts) $(".page0").hide(), $(".page1").show(), squared(), 
    lottery.init("lottery"); else {
        var a = 551 * innerWidth / 640;
        $(".again .againcontent").css("height", a + "px"), $(".again").show();
    }
}

function squared() {
    var a = $(".real_wheel").css("width");
    $(".real_wheel").css("height", a);
}

function showreword() {
    $(".reword").show();
    var a = 808 * innerWidth / 640;
    $(".rewordcontent").css("height", a);
}

function roll() {
    return lottery.times += 1, lottery.roll(), lottery.times > lottery.cycle + 10 && lottery.prize == lottery.index ? (clearTimeout(lottery.timer), 
    showreword(), lottery.prize = -1, lottery.times = 0, click = !1) :(lottery.times < lottery.cycle ? lottery.speed -= 10 :lottery.times == lottery.cycle ? lottery.prize = rewordIndex :lottery.speed += lottery.times > lottery.cycle + 10 && (0 == lottery.prize && 7 == lottery.index || lottery.prize == lottery.index + 1) ? 110 :20, 
    lottery.speed < 40 && (lottery.speed = 40), lottery.timer = setTimeout(roll, lottery.speed)), 
    !1;
}

var inter, transformX, selectflag, selectindex, time, Interval, serverTime, sytime, Interval1, click, _myflag, step, timeindex, isAnimating, _reword, rewordIndex, point, itemlist, lottery, _request = {
    QueryString:function(a) {
        var b = window.location.search, c = new RegExp("" + a + "=([^&?]*)", "ig");
        return b.match(c) ? b.match(c)[0].substr(a.length + 1) :null;
    }
}, Openid = _request.QueryString("Openid"), nickname = _request.QueryString("nickname"), headimgurl = _request.QueryString("headimgurl"), scorelist = [ 200, 250, 300, 350, 400 ], sumCounts = 0, ServerCounts = 1500, type = 1, flag = 0, submitflag = 0, now = 0, last = 0;

const towards = {
    up:1,
    right:2,
    down:3,
    left:4
};

transformX = 0, selectflag = 0, selectindex = 0, time = 4, serverTime = 60, sytime = serverTime, 
click = !1, _myflag = !1, step = 0, timeindex = 1, isAnimating = !1, _reword = "", 
rewordIndex = 0, point = {
    deg:0,
    top:0,
    left:0
}, itemlist = [ {
    url:"./images/item_xy.png",
    className:"bar",
    count:"0",
    type:1,
    x:"50",
    y:"580"
}, {
    url:"./images/item_fomes1.png",
    className:"fomes",
    count:"250",
    type:1,
    text:"重金属",
    x:"370",
    y:"565"
}, {
    url:"./images/item_fomes5.png",
    className:"fomes",
    count:"250",
    type:1,
    text:"蓝绿藻",
    x:"65",
    y:"379"
}, {
    url:"./images/item_fomes4.png",
    className:"fomes",
    count:"250",
    type:1,
    text:"无机污染物",
    x:"224",
    y:"424"
}, {
    url:"./images/item_sh.png",
    className:"bar",
    count:"0",
    type:1,
    x:"456",
    y:"440"
}, {
    url:"./images/item_fomes2.png",
    className:"fomes",
    count:"250",
    type:1,
    text:"致病菌",
    x:"41",
    y:"189"
}, {
    url:"./images/item_fomes7.png",
    className:"fomes",
    count:"250",
    type:1,
    text:"蓝绿藻",
    x:"186",
    y:"174"
}, {
    url:"./images/item_xy.png",
    className:"bar",
    count:"0",
    type:1,
    x:"328",
    y:"280"
}, {
    url:"./images/item_fomes6.png",
    className:"fomes",
    count:"250",
    type:1,
    text:"蓝绿藻",
    x:"518",
    y:"224"
}, {
    url:"./images/item_sh.png",
    className:"bar",
    count:"0",
    type:1,
    x:"131",
    y:"32"
}, {
    url:"./images/item_fomes3.png",
    className:"fomes",
    count:"250",
    type:1,
    text:"无机污染物",
    x:"476",
    y:"47"
}, {
    url:"./images/item_fomes1.png",
    className:"fomes",
    count:"250",
    type:2,
    text:"重金属",
    x:"26",
    y:"139"
}, {
    url:"./images/item_fomes6.png",
    className:"fomes",
    count:"250",
    type:2,
    text:"蓝绿藻",
    x:"163",
    y:"70"
}, {
    url:"./images/item_fomes2.png",
    className:"fomes",
    count:"",
    type:2,
    text:"致病菌",
    x:"376",
    y:"44"
}, {
    url:"./images/item_fomes4.png",
    className:"fomes",
    count:"",
    type:2,
    text:"无机污染物",
    x:"125",
    y:"326"
}, {
    url:"./images/item_fomes5.png",
    className:"fomes",
    count:"",
    type:2,
    text:"蓝绿藻",
    x:"367",
    y:"278"
}, {
    url:"./images/item_sh.png",
    className:"bar",
    count:"",
    type:2,
    x:"15",
    y:"482"
}, {
    url:"./images/item_xy.png",
    className:"bar",
    count:"",
    type:2,
    x:"283",
    y:"468"
}, {
    url:"./images/item_xy.png",
    className:"bar",
    count:"",
    type:2,
    x:"308",
    y:"174"
}, {
    url:"./images/item_sh.png",
    className:"bar",
    count:"",
    type:2,
    x:"375",
    y:"612"
}, {
    url:"./images/item_fomes3.png",
    className:"fomes",
    count:"",
    type:2,
    text:"无机污染物",
    x:"145",
    y:"569"
}, {
    url:"./images/item_fomes7.png",
    className:"fomes",
    count:"",
    type:2,
    text:"蓝绿藻",
    x:"485",
    y:"484"
}, {
    url:"./images/item_xy.png",
    className:"bar",
    count:"",
    type:3,
    x:"45",
    y:"60"
}, {
    url:"./images/item_sh.png",
    className:"bar",
    count:"",
    type:3,
    x:"324",
    y:"73"
}, {
    url:"./images/item_sh.png",
    className:"bar",
    count:"",
    type:3,
    x:"301",
    y:"313"
}, {
    url:"./images/item_xy.png",
    className:"bar",
    count:"",
    type:3,
    x:"288",
    y:"566"
}, {
    url:"./images/item_fomes6.png",
    className:"fomes",
    count:"",
    type:3,
    text:"蓝绿藻",
    x:"153",
    y:"162"
}, {
    url:"./images/item_fomes7.png",
    className:"fomes",
    count:"",
    type:3,
    text:"蓝绿藻",
    x:"516",
    y:"320"
}, {
    url:"./images/item_fomes5.png",
    className:"fomes",
    count:"",
    type:3,
    text:"蓝绿藻",
    x:"238",
    y:"420"
}, {
    url:"./images/item_fomes3.png",
    className:"fomes",
    count:"",
    type:3,
    text:"无机污染物",
    x:"58",
    y:"368"
}, {
    url:"./images/item_fomes4.png",
    className:"fomes",
    count:"",
    type:3,
    text:"无机污染物",
    x:"469",
    y:"511"
}, {
    url:"./images/item_fomes2.png",
    className:"fomes",
    count:"",
    type:3,
    text:"致病菌",
    x:"491",
    y:"126"
}, {
    url:"./images/item_fomes1.png",
    className:"fomes",
    count:"",
    type:3,
    text:"重金属",
    x:"104",
    y:"566"
}, {
    url:"./images/item_xy.png",
    className:"bar",
    count:"",
    type:4,
    x:"276",
    y:"320"
}, {
    url:"./images/item_sh.png",
    className:"bar",
    count:"",
    type:4,
    x:"150",
    y:"55"
}, {
    url:"./images/item_sh.png",
    className:"bar",
    count:"",
    type:4,
    x:"303",
    y:"588"
}, {
    url:"./images/item_xy.png",
    className:"bar",
    count:"",
    type:4,
    x:"485",
    y:"124"
}, {
    url:"./images/item_fomes6.png",
    className:"fomes",
    count:"",
    type:4,
    text:"蓝绿藻",
    x:"147",
    y:"161"
}, {
    url:"./images/item_fomes7.png",
    className:"fomes",
    count:"",
    type:4,
    text:"蓝绿藻",
    x:"485",
    y:"307"
}, {
    url:"./images/item_fomes5.png",
    className:"fomes",
    count:"",
    type:4,
    text:"蓝绿藻",
    x:"119",
    y:"420"
}, {
    url:"./images/item_fomes3.png",
    className:"fomes",
    count:"",
    type:4,
    text:"无机污染物",
    x:"459",
    y:"507"
}, {
    url:"./images/item_fomes4.png",
    className:"fomes",
    count:"",
    type:4,
    text:"无机污染物",
    x:"84",
    y:"582"
}, {
    url:"./images/item_fomes2.png",
    className:"fomes",
    count:"",
    type:4,
    text:"致病菌",
    x:"30",
    y:"284"
}, {
    url:"./images/item_fomes1.png",
    className:"fomes",
    count:"",
    type:4,
    text:"重金属",
    x:"324",
    y:"165"
}, {
    url:"./images/item_xy.png",
    className:"bar",
    count:"",
    type:5,
    x:"165",
    y:"63"
}, {
    url:"./images/item_sh.png",
    className:"bar",
    count:"",
    type:5,
    x:"86",
    y:"182"
}, {
    url:"./images/item_sh.png",
    className:"bar",
    count:"",
    type:5,
    x:"77",
    y:"604"
}, {
    url:"./images/item_xy.png",
    className:"bar",
    count:"",
    type:5,
    x:"453",
    y:"295"
}, {
    url:"./images/item_fomes6.png",
    className:"fomes",
    count:"",
    type:5,
    text:"蓝绿藻",
    x:"493",
    y:"514"
}, {
    url:"./images/item_fomes7.png",
    className:"fomes",
    count:"",
    type:5,
    text:"蓝绿藻",
    x:"59",
    y:"392"
}, {
    url:"./images/item_fomes5.png",
    className:"fomes",
    count:"",
    type:5,
    text:"蓝绿藻",
    x:"365",
    y:"389"
}, {
    url:"./images/item_fomes3.png",
    className:"fomes",
    count:"",
    type:5,
    text:"无机污染物",
    x:"455",
    y:"36"
}, {
    url:"./images/item_fomes4.png",
    className:"fomes",
    count:"",
    type:5,
    text:"无机污染物",
    x:"272",
    y:"540"
}, {
    url:"./images/item_fomes2.png",
    className:"fomes",
    count:"",
    type:5,
    text:"致病菌",
    x:"243",
    y:"331"
}, {
    url:"./images/item_fomes1.png",
    className:"fomes",
    count:"",
    type:5,
    text:"重金属",
    x:"360",
    y:"186"
} ], this.rand = function(a, b) {
    return ~~(Math.random() * (b - a + 1) + a);
}, Zepto(function(a) {
    document.addEventListener("touchmove", function(a) {
        a.preventDefault();
    }, !1), a(".selectlist").swipeLeft(function() {
        var b = -a(".content").width() / 2, c = transformX + b;
        c > 4 * b && 0 >= c && (a(".selectlist").css("transform", "translateX(" + c + "px)"), 
        transformX = c, selectindex++);
    }), a(".selectlist").swipeRight(function() {
        var b = -a(".content").width() / 2, c = transformX - b;
        c > 4 * b && 0 >= c && (a(".selectlist").css("transform", "translateX(" + c + "px)"), 
        transformX = c, selectindex--);
    });
}), $(document).ready(function() {
    var a, b, c;
    $(".step1").show(), a = ($("#hanger").width() - 8) / 2, $(".line").css("margin-left", a + "px"), 
    b = 619 * innerWidth / 640, $(".stepContent").css("height", b + "px"), c = {
        type:"get",
        async:!0,
        url:"http://event.hach.com.cn/H5_server/api/HX_SZDZP/GetInfo",
        timeout:5e4
    }, $.ajax(c).done(function(a) {
        0 == a.success ? alert(a.message) :(serverTime = a.Time, ServerCounts = a.Score, 
        init());
    });
}), $("#main").click(function(a) {
    var b, c, d, e, f, g, h, i, j;
    return 1 == flag ? !1 :(flag = 1, $(".countWord").removeClass("shake1"), point.halfwidth = $("#hanger").width() / 2, 
    inter = setInterval(rectBo, 20), b = getX(a), c = getY(a), d = .83 * (100 * window.getWidth() / 640), 
    e = .5 * (100 * window.getWidth() / 640), f = $("#hanger").offset().left + d / 2, 
    g = $("#hanger").offset().top + e / 2, h = f - b, i = c - g, j = 360 * Math.atan(h / i) / (2 * Math.PI), 
    point.deg = j, point.top = g, point.left = f, $("#hanger").css("transform", "rotate(" + j + "deg)"), 
    $(".line").css("transform", "rotate(" + j + "deg)"), $(".hor").addClass("transition1"), 
    $(".ver").addClass("transition1"), $(".hor").css("transform", "translateX(" + -h + "px)"), 
    $(".ver").css("transform", "translateY(" + i + "px)"), setTimeout(function() {
        over();
    }, 510), void 0);
}), $(".pg0_rulebtn").click(function() {
    $(".rule").show();
}), $(".btn2").click(function() {
    $(".rule").hide();
}), $(".btn1").click(function() {
    $(".step1").hide(), $(".step2").show(), time = 4;
    var b = 514 * innerWidth / 640;
    $(".step2 .selectContent").css("height", b + "px");
}), $(".selectlist .item").click(function(a) {
    var b = $(".content").width() / 2, c = $(a.target).offset().left;
    c > b ? ($(".content .selected").css("margin-left", "50%"), selectflag = 1) :($(".content .selected").css("margin-left", "0%"), 
    selectflag = 0);
}), $(".selectValue").click(function() {
    var b = 1;
    b = 1 == selectflag ? selectindex + 2 :selectindex + 1, $(".wave .pg0_main").attr("src", "./images/obj_item" + b + ".png"), 
    $(".step2").hide(), $(".step3").show(), Interval = setInterval(function() {
        time--, 0 == time && ($(".step3").hide(), clearInterval(Interval), gamestart()), 
        $(".step3").text(time);
    }, 1e3);
}), $(".again_btn").click(function() {
    time = 4, init(), $(".step3").text("GO"), $(".again").hide(), $(".step1").show();
}), $(".reword_btn").click(function() {
    return click ? !1 :(lottery.speed = 100, $(".loading").show(), $.ajax({
        dataType:"json",
        url:"http://event.hach.com.cn/H5_server/api/HX_SZDZP/GetPrize",
        timeout:2e4,
        success:function(a) {
            $(".loading").hide(), a.success ? (_reword = a.data, $(".award").text(_reword), 
            rewordIndex = a.index, roll(), click = !0) :alert(a.message);
        },
        error:function() {
            alert("系统错误，请联系管理员"), click = !0, $(".loading").hide();
        }
    }), void 0);
}), $("#rule2").click(function() {
    $(".myrule").show(), $(".reword").hide();
}), $(".fill_tijiao").click(function() {
    var a, b;
    return "" == $("#txt_name").val() ? (alert("请输入您的姓名!"), $("#txt_name").focus(), 
    !1) :isName($("#txt_name").val()) ? "" == $("#txt_phone").val() ? (alert("请输入您的手机号!"), 
    $("#txt_phone").focus(), !1) :isMobile($("#txt_phone").val()) ? "" == $("#txt_company").val() ? (alert("请输入您的公司名称!"), 
    $("#txt_company").focus(), !1) :"" == $("#txt_zip").val() ? (alert("请输入您的寄送地址!"), 
    $("#txt_zip").focus(), !1) :0 != submitflag ? !1 :(submitflag = 1, a = {
        id:0,
        name:$("#txt_name").val(),
        phone:$("#txt_phone").val(),
        company:$("#txt_company").val(),
        zip:$("#txt_zip").val(),
        data8:_reword
    }, b = {
        type:"post",
        async:!0,
        url:"http://event.hach.com.cn/H5_server/api/HX_SZDZP/SaveItemData",
        data:a,
        timeout:5e3
    }, $.ajax(b).done(function(a) {
        submitflag = 0, 0 == a.success ? alert(a.message) :($(".reword").hide(), $(".share").show());
    }), void 0) :(alert("请输入正确的手机号!"), $("#txt_phone").focus(), !1) :(alert("输入的姓名不能含有特殊字符!如(数字 ！，@（）；“)等"), 
    $("#txt_phone").focus(), !1);
}), $("#close,#paint").click(function() {
    $(this).parent().hide(), $(".page1 .share").show();
}), lottery = {
    index:-1,
    count:0,
    timer:0,
    speed:20,
    times:0,
    cycle:50,
    prize:-1,
    init:function(a) {
        $("#" + a).find(".lottery-unit").length > 0 && ($lottery = $("#" + a), $units = $lottery.find(".lottery-unit"), 
        this.obj = $lottery, this.count = $units.length, $lottery.find(".lottery-unit.lottery-unit-" + this.index).addClass("active"));
    },
    roll:function() {
        var a = this.index, b = this.count, c = this.obj;
        return $(c).find(".lottery-unit.lottery-unit-" + a).removeClass("active"), a += 1, 
        a > b - 1 && (a = 0), $(c).find(".lottery-unit.lottery-unit-" + a).addClass("active"), 
        this.index = a, !1;
    },
    stop:function(a) {
        return this.prize = a, !1;
    }
}, $(".reword_share").click(function() {
    $(".share").show();
}), $(".share").click(function() {
    $(".share").hide();
});