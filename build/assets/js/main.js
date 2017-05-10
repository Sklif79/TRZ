$(document).ready(function () {

    $('a.modalbox, a.fancybox-lnk').fancybox({
        closeBtn: true,
        padding: 0,
        helpers: {
            overlay: {
                css: {
                    'background': 'rgba(0,0,0,0.5)'
                }
            }
        }
    });

    $.validate({
        scrollToTopOnError: false
    });
});