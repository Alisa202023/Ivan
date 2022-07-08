//adaptive mobile menu by screen width
const windowInnerWidth = document.documentElement.clientWidth;
jQuery(window).bind('load resize', function(){
  var nav = jQuery('.menu__mobile ul'), 
  w = window.innerWidth;
    nav.css({
      width: w
      });
});

//updating the color for the scroll header
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

//highlighting the active menu
jQuery(function () {                
  jQuery('.menu a').each(function () {      
    var location = window.location.href;  
    var link = this.href;         
    if(location == link) {          
      jQuery(this).addClass('active');     
    }
  });
  jQuery('.menu__mobile a').each(function () {      
    var location = window.location.href;  
    var link = this.href;         
    if(location == link) {          
      jQuery(this).addClass('active');     
    }
  });

});


