var windowWidth = window.screen.width < window.outerWidth ?
    window.screen.width : window.outerWidth;
var mobile = windowWidth < 768;
console.log(mobile);

var opened_modal = null;
$('.close').click(function() {
    if (opened_modal != null) {
        opened_modal.css({ "display": "none" });
        opened_modal = null;
    }
});

function lgnClick() {
    $('#navbar-cllps').attr("aria-expanded", "false");
    $('#navbar-cllps').removeClass('in');
    $('#id01').css({ "display": "block" });
    opened_modal = $('#id01');
}