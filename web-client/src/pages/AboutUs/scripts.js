import $ from "jquery";

var $target = $(".anime"),
  animationClass = "anime-start",
  offset = ($(window).height() * 3) / 4;

  console.log($target);

function scrollAnimation() {
  var documentTop = $(document).scrollTop();

  $target.each(function () {
    var itemTop = $(this).offset().top;

    if (documentTop > itemTop - offset) {
      $(this).addClass(animationClass);
    } else {
      $(this).removeClass(animationClass);
    }
  });
}

$(document).scroll(function(){
    scrollAnimation();
})
