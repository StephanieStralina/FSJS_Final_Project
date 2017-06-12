$(document).ready(function(){
});

$(window).on("resize load", function() {
    if($(window).width() >= 992) {
        $(".recipeBlock").removeClass("card-block");
        $(".imgOverlay").addClass("card-img-overlay");
    }else{
        $(".recipeBlock").addClass("card-block");
        $(".imgOverlay").removeClass("card-img-overlay");
    }
})

$(".heartSaved").on("click", function(){
  $(this).toggleClass("fa-heart-o fa-heart");
});