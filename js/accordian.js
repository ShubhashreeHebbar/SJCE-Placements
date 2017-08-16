$('.acc-btn').click(function() {
    $(this).toggleClass('active');
    var panel = $(this).closest('.acc-main').children('.acc-body')[0];

    if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
        panel.style.borderTop = null;
    } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
        panel.style.borderTop = "1px solid #ccc";
    }
});