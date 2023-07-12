// $.StartScreen = function(){
//     var plugin = this;
//     var width = (window.innerWidth > 0) ? window.innerWidth : screen.width;

//     plugin.init = function(){
//         setTilesAreaSize();
//         if (width > Metro.media_sizes.LD) {
//             addMouseWheel();
//             $(".start-screen").css({
//                 overflow: "hidden"
//             })
//         }
//     };

//     var setTilesAreaSize = function(){
//         var groups = $(".tiles-group");
//         var tileAreaWidth = 80;
//         $.each(groups, function(i, t){
//             if (width <= Metro.media_sizes.LD) {
//                 tileAreaWidth = width;
//             } else {
//                 tileAreaWidth += $(t).outerWidth() + 80;
//             }
//         });
//         $(".tiles-area").css({
//             width: tileAreaWidth
//         });
//     };

//     var addMouseWheel = function (){
//         $("body").mousewheel(function(event, delta, deltaX, deltaY){
//             var page = $(".start-screen");
//             var scroll_value = delta * 50;
//             console.log(scroll_value);
//             page.scrollLeft(page.scrollLeft() - scroll_value);
//             return false;
//         });
//     };

//     plugin.init();
// };

// $.StartScreen();

// $.each($('[class*=tile-]'), function(){
//     var tile = $(this);
//     setTimeout(function(){
//         tile.css({
//             opacity: 1,
//             "transform": "scale(1)",
//             "transition": ".3s"
//         }).css("transform", false);

//     }, Math.floor(Math.random()*500));
// });

// $(".tiles-group").animate({
//     left: 0
// });

// $(window).on(Metro.events.resize + "-start-screen-resize", function(){
//     $.StartScreen();
// });


var setTilesAreaSize = function(){
    var width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
    var groups = $(".tiles-group");
    var tileAreaWidth = 80;
    $.each(groups, function(){
        if (width <= Metro.media_sizes.LD) {
            tileAreaWidth = width;
        } else {
            tileAreaWidth += $(this).outerWidth() + 80;
        }
    });

    $(".tiles-area").css({
        width: tileAreaWidth
    });

    if (width > Metro.media_sizes.LD) {
        $(".start-screen").css({
            overflow: "hidden"
        })
    }
};

setTilesAreaSize();


$.each($('[class*=tile-]'), function(){
    var tile = $(this);
    setTimeout(function(){
        tile.css({
            opacity: 1,
            "transform": "scale(1)",
            "transition": ".3s"
        }).css("transform", false);

    }, Math.floor(Math.random()*500));
});

$(".tiles-group").animate({
    left: 0
});

$(window).on(Metro.events.resize + "-start-screen-resize", function(){
    setTilesAreaSize();
});

$(window).on(Metro.events.mousewheel, function(e){
    var up = e.originalEvent.deltaY < 0 ? -1 : 1;
    var scrollStep = 50;
    $(".start-screen")[0].scrollLeft += scrollStep * up;


});
