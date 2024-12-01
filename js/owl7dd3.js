document.addEventListener('DOMContentLoaded', function() {
    var Tawk_API = Tawk_API || {}, Tawk_LoadStart = new Date();
    (function() {
        var s1 = document.createElement("script"), s0 = document.getElementsByTagName("script")[0];
        s1.async = true;
        s1.src = 'https://embed.tawk.to/61e1b61eb84f7301d32b1089/1fpcquq49';
        s1.charset = 'UTF-8';
        s1.setAttribute('crossorigin', '*');
        s0.parentNode.insertBefore(s1, s0);
    })();

    jQuery(function() {
        var arrLiveStats = [];
        var WSM_PREFIX = "wsm";

        jQuery(".if-js-closed").removeClass("if-js-closed").addClass("closed");
        var wsmFnSiteLiveStats = function() {
            jQuery.ajax({
                type: "POST",
                url: wsm_ajaxObject.ajax_url,
                data: { action: 'liveSiteStats', requests: JSON.stringify(arrLiveStats), r: Math.random() }
            }).done(function(strResponse) {
                if (strResponse != "No") {
                    var arrResponse = JSON.parse(strResponse);
                    jQuery.each(arrResponse, function(key, value) {
                        var $element = document.getElementById(key);
                        var oldValue = parseInt($element.getAttribute("data-value").replace(/,/g, ""));
                        var diff = parseInt(value.replace(/,/g, "")) - oldValue;
                        var $class = "";

                        if (diff >= 0) {
                            diff = "+" + diff;
                        } else {
                            $class = "wmcRedBack";
                        }

                        $element.setAttribute("data-value", value);
                        $element.innerHTML = diff;
                        jQuery("#" + key).addClass($class).show().siblings(".wsmH2Number").text(value);

                        if (key == "SiteUserOnline") {
                            var onlineUserCnt = arrResponse.wsmSiteUserOnline;
                            if (jQuery("#wsmSiteUserOnline").length) {
                                jQuery("#wsmSiteUserOnline").attr("data-value", onlineUserCnt);
                                jQuery("#wsmSiteUserOnline").next(".wsmH2Number").html("<a target=\"_blank\" href=\"?page=wsm_traffic&subPage=UsersOnline&subTab=summary\">" + onlineUserCnt + "</a>");
                            }
                        }
                    });
                    setTimeout(function() {
                        jQuery.each(arrResponse, function(key, value) {
                            jQuery("#" + key).removeClass("wmcRedBack").hide();
                        });
                    }, 1500);
                }
            });
        }
        if (arrLiveStats.length > 0) {
            setInterval(wsmFnSiteLiveStats, 10000);
        }
    });
});
