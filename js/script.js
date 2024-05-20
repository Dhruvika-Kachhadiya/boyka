$(document).ready(function(){
    $(window).scroll(function(){
        var sticky = $('.sticky'),
            scroll = $(window).scrollTop();
      
        if (scroll >= 100) sticky.addClass('fixed');
        else sticky.removeClass('fixed');
      });

    //   Top Scroll
    var btn = $('#top_scroll');

$(window).scroll(function() {
  if ($(window).scrollTop() > 300) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '300');
});

setTimeout(function() {
    $('.pre_loader').fadeOut();
  },1000);
    
    // Home page- Daily_slider

    function CountDownTimer  () {
        left_days = document.getElementById("days");
        left_hours = document.getElementById("hours");
        left_minutes = document.getElementById("minutes");
        left_seconds = document.getElementById("seconds");
     
        }
        function showRemaining (){
        now = new Date();
     
        days = 6 - now.getDay(); ;
        hours = 23 - now.getHours();
        minutes = 59 - now.getMinutes();
        seconds = 59 - now.getSeconds();
        left_days.innerHTML = days + "<br> <span class=\"small\"> days </span>"
        left_hours.innerHTML = hours + "<br> <span class=\"small\"> hours</span>";
        left_minutes.innerHTML = minutes + "<br> <span class=\"small\">mins</span>";
        left_seconds.innerHTML = seconds + "<br> <span class=\"small\">secs</span>";
        }
    
    timer = setInterval (showRemaining, 1000) 
    CountDownTimer() ;


    function CountDownTimer2  () {
        left_days2 = document.getElementById("days2");
        left_hours2 = document.getElementById("hours2");
        left_minutes2 = document.getElementById("minutes2");
        left_seconds2 = document.getElementById("seconds2");

    }
    function showRemaining2 (){
        now = new Date();
    
        days2 = 6 - now.getDay(); ;
        hours2 = 23 - now.getHours();
        minutes2 = 59 - now.getMinutes();
        seconds2 = 59 - now.getSeconds();
        left_days2.innerHTML = days2 + "<br> <span class=\"small\"> days </span>"
        left_hours2.innerHTML = hours2 + "<br> <span class=\"small\"> hours</span>";
        left_minutes2.innerHTML = minutes2 + "<br> <span class=\"small\">mins</span>";
        left_seconds2.innerHTML = seconds2 + "<br> <span class=\"small\">secs</span>";
    }

        timer = setInterval (showRemaining2, 1000) 
        CountDownTimer2() ; 

        function CountDownTimer3  () {
            left_days3 = document.getElementById("days3");
            left_hours3 = document.getElementById("hours3");
            left_minutes3 = document.getElementById("minutes3");
            left_seconds3 = document.getElementById("seconds3");
    
        }
        function showRemaining3 (){
            now = new Date();
        
            days3 = 6 - now.getDay(); ;
            hours3 = 23 - now.getHours();
            minutes3 = 59 - now.getMinutes();
            seconds3 = 59 - now.getSeconds();
            left_days3.innerHTML = days3 + "<br> <span class=\"small\"> days </span>"
            left_hours3.innerHTML = hours3 + "<br> <span class=\"small\"> hours</span>";
            left_minutes3.innerHTML = minutes3 + "<br> <span class=\"small\">mins</span>";
            left_seconds3.innerHTML = seconds3 + "<br> <span class=\"small\">secs</span>";
        }

            timer = setInterval (showRemaining3, 1000) 
            CountDownTimer3() ; 



    $('#daily').owlCarousel({
        loop:false  ,
        margin:10,
        nav:false,
        items:2,
        dots:false,
        responsive: {
             0:{
                items:1
            },
            479.98:{
                items:2
            }
        }
    })

    // Home Page-Banner slider
    $('#Banner_slider').owlCarousel({
        loop:true,
        items:1,
        nav:true,
        dots:false,
        animateIn: true,
    })

    // Home Page - arrival slider
    $('#arrival_slider').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        items:4,
        dots:false,
        responsive: {
            1195.98:{
             items:4
            },
           991.98:{
               items:3
           },
           478.98:{
            items:2
           },
           0:{
            items:1
           }
       }
    })
    // Home page - seller
    $('#seller_slider').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        items:4,
        dots:false,
        responsive: {
            1195.98:{
             items:4
            },
           991.98:{
               items:3
           },
           478.98:{
            items:2
           },
           0:{
            items:1
           }
       }
    })


    // Home Page - Brand
    $('#brand').owlCarousel({
        loop:true,
        margin:10,
        items:5,
        nav:true,
        dots:false,
        responsive: {
            0:{
                items:2
            },
            478.98:{
                items:3
            },
            766.98:{
                items:4
            },
            987.98:{
                items:5
            }
       }
    })

    $('#blog_slider').owlCarousel({
        loop:true,
        margin:30,
        nav:true,
        dots:false,
        responsive:{
            0:{
                items:1
            },
            766.98:{
                items:2
            },
            986.98:{
                items:3
            }
        }
    })

    $('#client_slider').owlCarousel({
        loop:true,
        margin:10,
        items:1,
        nav:false,
        dots:true
    })
    
    $('#category').owlCarousel({
        loop:true,
        nav:false,
        dots:false,
        responsive:{
            0:{
                items:1,
                margin:30
            },
            478.98:{
                items:2,
            },
            1019.98:{
                items:4
            }
        }
    })

    $('#pro_detail').owlCarousel({
        loop:false,
        nav:false,
        items:1,
        dots:false,
    })

    $('.img_thumbnail>a').click(function(){
        $('.thumbnail a').removeClass('active');
        $(this).addClass('active');
    })

    $('#single_pro').owlCarousel({
        loop:true,
        margin:10,
        nav:false,
        dots:false,
        items:1,
    })
   
    $('#single_pro_thumb').owlCarousel({
        loop:true,
        nav:true,
        items:3,
        dots:false
    })


    // Blog-Grid Page
    $('#blogGrid_slider').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        items:1,
        dots:false,
    })
    
    $('#blogGrid_slider2').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        items:1,
        dots:false,
    })



})