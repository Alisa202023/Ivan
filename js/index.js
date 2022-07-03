
const windowInnerWidth = document.documentElement.clientWidth;

jQuery(window).bind('load resize', function(){
  var nav = jQuery('.menu__mobile ul'), 
  w = window.innerWidth;
 
    nav.css({
      width: w
      });
});