$(function () {

    //我的投诉列表加载更多
    $("#complaint_indexsmore").click(function () {
        var _appendhtml =
                "<li class=\"txt\">" +
                    "<div class=\"listimg\">" +
                    "<a href=\"#\"><img src=\"img/type-tag.png\" alt=\"\" /></a>" +
                    "</div>" +
                    "<div>" +
                        "<p class=\"title\">" +
                            "<a href=\"newsdetail.html\">【追加1】北京消协召开第五届理事会第一次会议</a></p>" +
                      "<p><span>启航国际(The Navigators)，于2013年在美国纽约成立第一家留学工作室...</span></p>" +
                       " <p>" +
                            "<span>2018.01.02 10:00:00</span></p>" +
                    "</div>" +
                "</li>" +
                 "<li class=\"txt\">" +
                 "<div class=\"listimg\">" +
                    "<a href=\"#\"><img src=\"img/type-tag.png\" alt=\"\" /></a>" +
                    "</div>" +
                    "<div>" +
                        "<p class=\"title\">" +
                            "<a href=\"newsdetail.html\">【追加2】北京消协召开第五届理事会第一次会议</a></p>" +
                       "<p><span>启航国际(The Navigators)，于2013年在美国纽约成立第一家留学工作室...</span></p>" +
                       " <p>" +
                            "<span>2018.01.02 10:00:00</span></p>" +
                    "</div>" +
                "</li>";
        $("#complaintlist").append(_appendhtml);
    });
    //我的投诉-和解案例
    $("#complaint_casesmore").click(function () {
        var _appendhtml =
         "<li class=\"txt\">" +
                    "<div>" +
                        "<p class=\"title\">" +
                            "<a href=\"newsdetail.html\">【追加1】北京消协召开第五届理事会第一次会议</a></p>" +
                       " <p>" +
                            "<span>来源：消费者网在线投诉平台</span><span class=\"time\">2018.01.02 10:00:00</span></p>" +
                    "</div>" +
                "</li>" +
                "<li class=\"txt\">" +

                    "<div>" +
                        "<p class=\"title\">" +
                            "<a href=\"newsdetail.html\">【追加1】北京消协召开第五届理事会第一次会议</a></p>" +
                       " <p>" +
                            "<span>来源：消费者网在线投诉平台</span><span class=\"time\">2018.01.02 10:00:00</span></p>" +
                    "</div>" +
                "</li>";
        $("#complaintcase").append(_appendhtml);
    });

    //投诉详情切换
    $(".bigtitle a").click(function () {
        var index = $(this).index();
        $('.bigtitle a').eq(index).addClass("current").siblings().removeClass("current");
        $('.changyancontent').eq(index).show().siblings('.changyancontent').hide();
    });
});


function uploadpic() {
    $("#hfpicfile").click();
}

