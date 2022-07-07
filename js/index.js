
const windowInnerWidth = document.documentElement.clientWidth;
//responsible width menu
jQuery(window).bind('load resize', function(){
  var nav = jQuery('.menu__mobile ul'), 
  w = window.innerWidth;
 
    nav.css({
      width: w
      });
});

//update color for scroll header
var scrolled;
window.onscroll = function() {
    scrolled = window.pageYOffset || document.documentElement.scrollTop;
    if(scrolled > 120){
      jQuery("header").css({"background": "linear-gradient(180deg, rgb(45 46 47) 0%, rgb(0 0 0) 100%"})
    }
    else{
      jQuery("header").css({"background": "linear-gradient(180deg, rgba(45, 46, 47, 0.8) 0%, rgba(0, 0, 0, 0.8) 100%"})
    }
}