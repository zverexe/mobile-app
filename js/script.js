$( document ).ready(function() {
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

    $("#datetimepicker1").datetimepicker({
        format: 'DD/MM/YYYY',
        widgetPositioning: {
            horizontal: 'left'

        }


    });
    $("#datetimepicker2").datetimepicker({
        useCurrent: false, //Important! See issue #1075
        format: 'DD/MM/YYYY'
    });
    $("#datetimepicker1").on("dp.change", function (e) {
        $('#datetimepicker2').data("DateTimePicker").minDate(e.date);
    });
    $("#datetimepicker2").on("dp.change", function (e) {
        $('#datetimepicker1').data("DateTimePicker").maxDate(e.date);
    });
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


