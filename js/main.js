// Main JS

// Script to change background color header and logo

$(window).on("scroll", function() {
  if($(window).scrollTop() > 50) {
    $("#main-header").addClass("bg-on");
    $('.container .logo img').attr('src','../img/logo-black.svg');
  } 
  else {
    //remove the background property so it comes transparent again (defined in your css)
    $("#main-header").removeClass("bg-on");
    $('.container .logo img').attr('src','../img/logo.svg');
  }
});

// AOS Animate 

AOS.init({
duration : 1000, // duration of the animation
once: true       // execute only once
});