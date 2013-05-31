$(document).ready(function () {

    if ( /^\/(\w*)\//.test(window.location.pathname) ) {
        var category = window.location.pathname.match(/^\/(\w*)\//)[1];
        $('a[href="/' + category + '/"]').addClass('current');
    }

});
