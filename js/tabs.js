$('.tab-custom-item').click(function() {
    var tab_id = $(this).attr('data-tab');
    $(this).siblings().removeClass('tabhead-active');
    $('.tab-content').removeClass('tab-active');

    $(this).addClass('tabhead-active');
    $('#' + tab_id).addClass('tab-active');
});

$(function() {
    $('.tabs').each(function() {
        var childCount = $(this).children().length;
        if (childCount != 0) {
            var percent = (100.0 / childCount);
            console.log("Percent calc :" + percent);
            $(this).children().css("width", percent + "% !important");
        }
    });
});