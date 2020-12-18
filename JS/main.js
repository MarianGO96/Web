jQuery(document).ready(function(){
     
   "use strict"
    $('.slider').ripples({
      dropRadius: 11,
      perturbance: 0.01,
       
    });
  
     $(".text").typed({
        strings:["<strong>Right people</strong><strong class='primary'> Best service!</strong>","<strong>Your Passion is our </strong><strong class='primary'> Pleasure!</strong>"],
         typespeed:0,
         loop:true
         
     });
     
     $(window).scroll(function(){
        
       var top = $(window).scrollTop();
        if(top>=60){
          $("nav").addClass('secondary'); 
        }
        
        else 
            if($("nav").hasClass('secondary')){
                $("nav").removeClass('secondary'); 
            }
    });

    $('.work').magnificPopup({
      delegate: 'a', // child items selector, by clicking on it popup will open
      type: 'image',
          gallery: {
          enabled: true
        },
    });
    $("#team-members").owlCarousel({
        items:3,
        autoplay:true,
        smartSpeed:700,
        loop:true,
        autoplayHoverPause:true,
        responsive:{
           0: {
                items:1

            },
              480: {
                items:2

            }, 
               768: {
                items:3

            }
        
        }
    });
    
     $('.counter').counterUp({
                delay: 10,
                time: 4000
            });
    
    
        
    $("a.smoothscroll").click(function (event) {

        event.preventDefault();
        
        var section = $(this).attr("href");

        $('html, body').animate({
            scrollTop: $(section).offset().top - -2
        }, 1250, "easeInOutExpo");
    });
     new WOW().init();
});

   

function pwfunction() {
  var x = document.getElementById("password");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}

$(function datepicker(){
    var dtToday = new Date();
    
    var month = dtToday.getMonth() + 1;
    var day = dtToday.getDate();
    var year = dtToday.getFullYear();
    if(month < 10)
        month = '0' + month.toString();
    if(day < 10)
        day = '0' + day.toString();
    
    var minDate= year + '-' + month + '-' + day;
    
    $('#txtDate').attr('min', minDate);
});


