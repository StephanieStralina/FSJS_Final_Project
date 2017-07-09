
$(window).on("resize load", function() {
    if($(window).width() >= 992) {
        $(".recipeBlock").removeClass("card-block").addClass("card-img-overlay");
    } else{
        $(".recipeBlock").removeClass("card-img-overlay").addClass("card-block");
    }
});

$(".heartSaved").on("click", function(){
  $(this).toggleClass("fa-heart-o fa-heart");
});


$(".card").hover(function(){
  $(this).children(".card-img-overlay").css("opacity", "1");
}, function(){
  $(this).children(".card-img-overlay").css("opacity", "0");
});
