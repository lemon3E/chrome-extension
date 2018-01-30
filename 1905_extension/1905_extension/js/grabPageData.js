getDomFn();

//专资页面dom抓取
function getDomFn() {
    $("body").append("<button type='button' id='clickBtn'>提取数据</button>");
    $("#clickBtn").css({
        "width": "100px",
        "height": "32px",
        "background-color": "#f0ad4e",
        "position": "absolute",
        "right": "100px",
        "top": "170px",
        "color": "#fff",
        "border": "none"
    });
    var w_width = $(window).width();
    if (w_width >= 827 && w_width <= 991) {
        $("#clickBtn").css("top", "192px");
    } else if (w_width >= 794 && w_width <= 825) {
        $("#clickBtn").css("top", "216px");
    } else if (w_width <= 793) {
        $("#clickBtn").css("top", "245px");
    };

    $("#clickBtn").click(function() {
        $(this).attr('disabled', true).css('background-color', '#b2adad');
        if ($('.panel-body').length == 1) {
            var cons = $('.panel-body').html();
            $.ajax({
                type: "POST",
                url: "http://mdbp.1905.com/Admin/index.php?m=Gjdyzjb&a=index",
                data: {
                    'dom': cons
                },
                success: function(data) {
                    var datas = JSON.parse(data);
                    window.open(datas.info.url, "_blank");
                },
                error: function() {
                    alert('error')
                }
            })
        }
    });
}