var lastScrollTop = 0;
$(window).scroll(function(e) {
    var st = $(this).scrollTop();
    if (st > lastScrollTop) {
        if ($(window).scrollTop() > 20) {
            $('header').removeClass('nav-down').addClass('nav-up');
        } else {
            $('header').addClass('nav-down').removeClass('nav-up');
        }
    } else {
        $('header').addClass('nav-down').removeClass('nav-up');
    }
lastScrollTop = st;
})

$("header .navbar-toggler").click(function(){ 
    $(this).toggleClass('close_icon');
    $('body').toggleClass('noscroll')
});

$(window).scroll(function(e) {
    if ($(window).scrollTop() > 10) {
        $('body').addClass('sticky');
    } else {
        $('body').removeClass('sticky');
    }
});

$('.registerForm').bootstrapValidator({
    message: 'This value is not valid',
    fields: {
        username: {
            validators: {
                notEmpty: {
                    message: 'Please enter your name'
                }
            }
        },
        lemail: {
            validators: {
                notEmpty: { 
                    message: 'Please enter your email ID'
                },
                regexp: {
                    regexp: /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/,
                    message: 'Please enter valid email ID'
                }
            }
        }, 
        femail: {
            validators: {
                notEmpty: { 
                    message: 'Please enter your email ID'
                },
                regexp: {
                    regexp: /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/,
                    message: 'Please enter valid email ID'
                }
            }
        },
        email_id: {
            validators: {
                notEmpty: { 
                    message: 'Please enter your email ID'
                },
                regexp: {
                    regexp: /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/,
                    message: 'Please enter valid email ID'
                }
            }
        }, 
        mail: {
            validators: {
                notEmpty: { 
                    message: 'Please enter your email ID'
                },
                regexp: {
                    regexp: /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/,
                    message: 'Please enter valid email ID'
                }
            }
        }, 
        lpassword: {
            validators: {
                notEmpty: {
                    message: 'Please enter your password'
                }
            }
        },
        message: {
            validators: {
                notEmpty: {
                    message: 'Please enter message'
                }
            }
        },
        customRadioInline: {
            validators: {
                notEmpty: {
                    message: 'Please select I Agree or No, Thanks'
                }
            }
        },
        feildname: {
            validators: {
                notEmpty: {
                    message: 'Please enter Captcha'
                }
            } 
        },
        password_footer: {
            validators: {
                notEmpty: {
                    message: 'Please enter your password'
                }
            }
        },
    }
});

$('.service').slick({
    dots: false,
    infinite: false,
    speed: 800,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });

  $('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
    $('.service').slick('setPosition');
  })

  $(".service_img").hide()


$(".main_header .navbar-light .navbar-nav .nav-link").click(function(){ 
    $('header .navbar-collapse').removeClass('show');
    $('.navbar-light .navbar-toggler').removeClass('close_icon');    
});

  $(".test").mouseover(function() {
     $(this).find('.service_img').show();
  }).mouseout(function(){
     $(this).find('.service_img').hide();
  });

  $("#welcome_hexaware").click(function() {
    $('html,body').animate({
      scrollTop: $("#scrolltowelcome").offset().top},
      900);
  });

  $("#we_are_hexaware").click(function() {
    $('html,body').animate({
      scrollTop: $("#scrolltowearehexaware").offset().top},
      900);
  });

  $("#our_hexaware").click(function() {
    $('html,body').animate({
      scrollTop: $("#scrolltoour").offset().top},
      900);
  });

  $("#about_hexaware").click(function() {
    $('html,body').animate({
      scrollTop: $("#scrolltoabouthexaware").offset().top},
      900);
  });

  $("#onbording_documents").click(function() {
    $('html,body').animate({
      scrollTop: $("#scrolltodocuments").offset().top},
      900);
  });

  $("#team_hexaware").click(function() {
    $('html,body').animate({
      scrollTop: $("#scrolltoteam").offset().top},
      900);
  });

