$(document).ready(function () {
    //评论加载更多
    $("#detailmore").click(function () {
        var _appendhtml = "<li>" +
                        "<div class=\"plright\">" +
                            "<div class=\"user\">" +
                                "<p class=\"username\">一米阳光</p><p class=\"time\">刚刚</p></div>" +
                            "<div class=\"plcontent\">" +
                                "<p>【追加】希望能推出好的产品，做到家喻户晓，祝越来越好</p>" +

                            "</div>" +
                        "</div>" +
                        "<div class=\"plleft\">" +
                           "<img src=\"images/plimg.gif\" alt=\"\" />" +
                        "</div>" +
                    "</li>";
        _appendhtml += _appendhtml;
        $(".changyancontent ul").append(_appendhtml);
    });

  

});

function uploadpic() {
    $("#hfpicfile").click();
}