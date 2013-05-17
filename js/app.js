var theScroll;

function scroll() {

    theScroll = new iScroll('wrapper');
    //alert("hello");
}
document.addEventListener('DOMContentLoaded', scroll, false);


//$('#tab-bar a').on('click', function (e) {
//    alert("hello");
    ////    //e.preventdefault();

    ////    //var nextpage = $(e.target.hash);
    ////    //page(nextpage);
    ////    //$("#pages .current").removeclass("current");
    ////    //nextpage.addclass("current");

    ////});
//});


function page(toPage) {
    var toPage = $(toPage),
    fromPage = $("#pages .current");
    if (toPage.hasClass("current") || toPage === fromPage) {
        return;
    };


    toPage.addClass("current fade in").one("webkitAnimationEnd", function () {
        fromPage.removeClass("current fade out");
        toPage.removeClass("fade in")
    });
    fromPage.addClass("fade out");
}
