// JavaScript Document
$(document).ready(function () {
    //登录方式切换
    $(".login ul li").click(function () {
        var index = $(this).index();
        $(".login ul li").eq(index).addClass("current").siblings().removeClass("current");
        $('form').eq(index).show().siblings("form").hide();
    })

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

    //登录验证和登录成功和失败的提示
    //密码登录
    $("#pwdloginform").html5Validate(function () {
        // 全部验证通过，执行验证流程，然后提示成功或失败


        //成功后的成功或失败提示
        //提示
        layer.open({
            content: '手机号或密码不正确”或“系统错误'
            , skin: 'msg'
            , time: 2 //2秒后自动关闭
        });

    });
    //验证码登录
    $("#codeloginform").html5Validate(function () {
        // 全部验证通过，执行验证流程，然后提示成功或失败


        //成功后的成功或失败提示
        //提示
        layer.open({
            content: '手机号或密码不正确”或“系统错误'
            , skin: 'msg'
            , time: 2 //2秒后自动关闭
        });

    });
});

