$(".gnb_movie ul > li").hover(
    function(){
        $(".gnb_movie ul > li > ul").hide();
        $(this).children("ul").show();
    }
);
$("#slide-box .slide .card").hover(
    function(){
        $(this).children(".info").children(".poster").hide();
        $(this).children(".info").children(".detail").show();
        $(this).animate({top: "-10px"}, 200);
    },
    function(){
        $(this).children(".info").children(".poster").show();
        $(this).children(".info").children(".detail").hide();
        $(this).animate({top: "0"}, 100);
    }
);

let slide = $(".slide");
let lastslide = slide.length - 1;
let sno = 0;

$(".slide-left").click(function(){
    playSlide("left");
});
$(".slide-right").click(function(){
    playSlide("right");
});
function playSlide(dir) {
    if( dir == "right" ) {
        $(slide[sno]).siblings(".slide").css({left:"-100%"});
        $(slide[sno]).animate({left:"100%"},500,function(){
            $(this).css({left:"-100%"});
        });
        sno++;
        if( sno > lastslide ) sno = 0;
        $(slide[sno]).animate({left:"0"},500);
    } else if( dir == "left" ) {
        $(slide[sno]).siblings(".slide").css({left:"100%"});
        $(slide[sno]).animate({left:"-100%"},500,function(){
            $(this).css({left:"100%"});
        });
        sno++;
        if( sno > lastslide ) sno = 0;
        $(slide[sno]).animate({left:"0"},500); 
    }
}