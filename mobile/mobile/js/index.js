$(document).ready(function () {
    //首页加载更多和列表也加载更多，使用时可拆分开两个ID使用
    $("#indexmore,#listmore").click(function () {
        var _appendhtml = "<li>" +
                    "<div class=\"hotright\">" +
                        "<p class=\"title\">" +
                            "<a href=\"newsdetail.html\">【追加1】北京消协召开第五届理事会第一次会议</a></p>" +
                        "<p>" +
                            "<span class=\"view\">1234次浏览</span><span class=\"time\">2018.01.02 10:00:00</span></p>" +
                    "</div>" +
                    "<div class=\"hotleft\">" +
                        "<a href=\"#\">" +
                            "<img src=\"images/exp1.png\" /></a>" +
                    "</div>" +
                "</li>" +
                "<li>" +
                    "<div>" +
                        "<p class=\"title\">" +
                            "<a href=\"newsdetail.html\">【追加2】北京消协召开第五届理事会第一次会议</a></p>" +
                       " <p>" +
                            "<span class=\"view\">1234次浏览</span><span class=\"time\">2018.01.02 10:00:00</span></p>" +
                    "</div>" +
                "</li>";
        $(".hotlist ul").append(_appendhtml);
    });

    //返回顶部
    $(".sctop").click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 500);
    })

    var h = $(window).height() / 2;
    $(window).scroll(function (e) {
        t = $(document).scrollTop();
        //console.log(h, t);
        if (t > h) {
            $('.sctop').fadeIn('slow');
        } else {
            $('.sctop').fadeOut('slow');
        }
    });

})