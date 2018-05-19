var wx_config = {};
var loading_progress_percent = 15;
var loading_progress_timer;
var clear_loading_progress_waiting = 200;

function compute_loadding_progress() {

    if (loading_progress_percent < 60)
        loading_progress_percent = loading_progress_percent + 5;
    else if (loading_progress_percent >= 60 && loading_progress_percent < 100)
        loading_progress_percent = loading_progress_percent + (clear_loading_progress_waiting > 200 ? 8 : 12);
    else {
        clear_loading_progress();
    }
}

function set_loading_progress(i) {
    if (document.getElementById('loading-progress') != null) {
        document.getElementById('loading-progress').style.width = loading_progress_percent + '%';
    }
}

function clear_loading_progress() {
    clearInterval(loading_progress_timer);
    if (typeof loading_progress_timer1 != 'undefined') {
        clearInterval(loading_progress_timer1);

        workEnd('-------- 5. cbvview start clear loading 2 --------')
        if (typeof jQuery != "undefined") {
            interaction_view.containment.children('.prejsloading').fadeOut(1000, function () {
                interaction_view.containment.children('.prejsloading').remove();
                interaction_view.play(interaction_view.currentPage);
                workEnd('-------- 5. cbvview end clear loading 2 --------')
                if (window.loadAnalytics) loadAnalytics();
            })
        } else {
            window.setTimeout(function () {
                interaction_view.containment.children('.prejsloading').remove();
                interaction_view.play(interaction_view.currentPage);
                if (window.loadAnalytics) loadAnalytics();
            }, 500)
        }
    }
}

function initEpub360Loading() {
    /* 进度图 */
    if (if_show_cover) {
        loading_progress_timer = null;
    } else {
        loading_progress_timer = setInterval(function () {
            compute_loadding_progress();
            set_loading_progress();
        }, clear_loading_progress_waiting)
    }
};
initEpub360Loading();

function initEpub360Player() {

    if (weixin_config_ready != 1) return;
    weixin_config_ready = 2; // intial done

    // initial the loading screen
    if (wx_config['nonceStr'] && wx_config['nonceStr'].length % 2) {
        wx_config.LOGO = true;
        var elogo1 = document.getElementsByClassName('epub360-logo1')[0];
        if (elogo1) elogo1.setAttribute('class', 'prejsloading');
        var elogo3 = document.getElementsByClassName('epub360-logo3')[0];
        if (elogo3) elogo3.parentNode.removeChild(elogo3);
        clear_loading_progress_waiting = 300;
        if (loading_progress_percent > 45) loading_progress_percent = 45;
        var d = new Date(),
            h = d.getHours();
        if (wx_config['countnum']) {
            if (wx_config['countnum'] > 2000) {
                clear_loading_progress_waiting = 400;
                if (h >= 21 && h <= 23) clear_loading_progress_waiting = 500;
            }
            if (wx_config['countnum'] > 10000) {
                if (loading_progress_percent > 40) loading_progress_percent = 40;
                clear_loading_progress_waiting = 500;
                if (h >= 21 && h <= 23) clear_loading_progress_waiting = 800;
            }
            if (wx_config['status'] && wx_config['status'] == 9) clear_loading_progress_waiting = 999;
        }

    } else {
        var elogo1 = document.getElementsByClassName('epub360-logo1')[0];
        if (elogo1) elogo1.parentNode.removeChild(elogo1);
        var elogo2 = document.getElementsByClassName('epub360-logo2')[0];
        if (elogo2) elogo2.parentNode.removeChild(elogo2);
        var elogo3 = document.getElementsByClassName('epub360-logo3')[0];
        if (elogo3) elogo3.setAttribute('class', 'prejsloading');
        clear_loading_progress_waiting = 100;
        if (epub360.settings.billing_type == 'USER_PARTNER') {
            clear_loading_progress_waiting = 300;
        }
    }
    clearInterval(loading_progress_timer);
    loading_progress_timer = setInterval(function () {
        compute_loadding_progress();
        set_loading_progress();
    }, clear_loading_progress_waiting)

    if (typeof epub360InitEvent == 'function') {
        epub360InitEvent();
    }
}
initEpub360Player();

var isMobilePlayer = 0;
// 判断是否为移动端运行环境
if (/AppleWebKit.*Mobile/i.test(navigator.userAgent) || (/MIDP|SymbianOS|NOKIA|SAMSUNG|LG|NEC|TCL|Alcatel|BIRD|DBTEL|Dopod|PHILIPS|HAIER|LENOVO|MOT-|Nokia|SonyEricsson|SIE-|Amoi|ZTE/.test(navigator.userAgent))) {
    if (window.location.href.indexOf("?mobile") < 0) {
        try {
            if (/Android|webOS|iPhone|iPod|iPad|BlackBerry/i.test(navigator.userAgent)) {
                // 判断访问环境是 Android|webOS|iPhone|iPod|BlackBerry 则加载以下样式
                isMobilePlayer = 1;
            } else {
                // 判断访问环境是 其他移动设备 则加载以下样式
            }
        } catch (e) {}
    }
} else {
    // 如果以上都不是，则加载以下样式
}

// document.addEventListener("DOMContentLoaded", function() {
//     if (typeof WeixinJSBridge == "undefined") {
//         document.addEventListener("WeixinJSBridgeReady", playVideo, false);
//     }
// })
