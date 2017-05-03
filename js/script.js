/*
 * Mobile menu
 */
var $menu = $("#mobile-menu").mmenu({


        "navbar": {
            title: ""
        },
        "navbars": [

        ]
    },
    {

        "searchfield": {
            "clear": true
        }

    });

var $icon = $("#open-menu");
var API = $menu.data( "mmenu" );
$icon.on( "click", function() {
    API.open();
});

/*var $iconClose = $("#close-menu");
$iconClose.on( "click", function() {
    API.close();
});*/

/*$(window).on("resize", function() {
    if (window.matchMedia("(min-width: 992px)").matches) {
        API.close();
    }
});*/

/*
 * end mobile mmenu
 */


