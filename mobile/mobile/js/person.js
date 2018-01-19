$(function () {
    //如果资料不完善就弹出
    var istrue = false;
    if (istrue) {
        layer.open({
            content: '您尚未完善资料'
    , btn: ['立即完善']
    , yes: function (index) {
        location.href = "/select_usertype.html";
        layer.close(index);
    },
            style: 'border:none; color:#2b2b2b;font-size:30px; font-weight:600;'

        });
    }


    //修改昵称
    $("#eidtnickname").click(function () {
        $("#nicknameshow").hide();
        $("#editnickname").show();
        //修改按钮提示
        $("#txtnickname").blur(function () {
            layer.open({
                content: '修改成功'
             , skin: 'msg'
            , time: 2 //2秒后自动关闭
            });
            $("#nicknameshow span").text($("#txtnickname").val());
            $("#nicknameshow").show();
            $("#editnickname").hide();
        });
    });

    //我的投诉列表加载更多
    $("#complaintsmore").click(function () {
        var _appendhtml =
                "<li class=\"txt\">" +
                    "<div>" +
                        "<p class=\"title\">" +
                            "<a href=\"newsdetail.html\">【追加1】北京消协召开第五届理事会第一次会议</a></p>" +
                       " <p>" +
                            "<span>2018.01.02 10:00:00</span></p>" +
                    "</div>" +
                "</li>" +
                 "<li class=\"txt\">" +
                    "<div>" +
                        "<p class=\"title\">" +
                            "<a href=\"newsdetail.html\">【追加2】北京消协召开第五届理事会第一次会议</a></p>" +
                       " <p>" +
                            "<span>2018.01.02 10:00:00</span></p>" +
                    "</div>" +
                "</li>";
        $("#complaintlist").append(_appendhtml);
    });



    //修改手机

    //手机验证码
    function invokeSettime(obj) {
        var countdown = 60;
        settime(obj);
        function settime(obj) {
            if (countdown == 0) {
                $(obj).attr("disabled", false);
                $(obj).text("获取验证码");
                countdown = 60;
                return;
            } else {
                $(obj).attr("disabled", true);
                $(obj).addClass("sendcodeactive")
                $(obj).text("剩余" + countdown + "s");
                countdown--;
            }
            setTimeout(function () {
                settime(obj)
            }
                , 1000)
        }
    }
    $(".sendcode").click(function () {
        new invokeSettime(".sendcode");
    });
});


function uploadpic() {
    $("#hfpicfile").click();
}

