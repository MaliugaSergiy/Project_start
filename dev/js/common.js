$(document).ready(function () {

    $('.tooltip').tooltipster({
        theme: ['tooltipster-noir', 'tooltipster-noir-customized']
    });

    $('.phone_contacts').mask('+38 - (000) 000-00-00');
    $('.date_calculator').mask('00.00.0000');
    $('.period_calculator').mask('от 0 - 00 лет');

    new WOW().init();

    //    $("header").headroom();

    // grab an element
    var myElement = document.querySelector("header");
    // construct an instance of Headroom, passing the element
    var headroom = new Headroom(myElement, {
        "offset": 120,
        "tolerance": {
            up: 20,
            down: 10
        },
        "classes": {
            "initial": "animated",
            "pinned": "slideDown",
            "unpinned": "slideUp"
        }
    });
    // initialise
    headroom.init();

    
    //Form VAlidation 

    $("#contacts_form").validate({
        rules: {
            form_name: {
                required: true,
                minlenhth: 3,
            },
            form_email: {
                required: true,
                email: true
            },
            form_phone: {
                required: true,
                minlenhth: 10,
                digits: true
            }
        },
        messages: {
            form_name: {
                required: "Обязательное поле",
                minlenhth: "Длина имени не менее 3-х символов"
            },
            form_email: {
                required: "Обязательное поле",
                email: "Введите корректный Email"
            },
            form_phone: {
                required: "Обязательное поле"
            }
        },
        focusCleanup: true,
        focusInvalid: false
    });


    $('[data-toggle="tooltip"]').tooltip();


    //    	function headerBehaviour() {
    //
    //		$.scrollDetection = function (options) {
    //			var settings = $.extend({
    //				scrollDown: function scrollDown() {},
    //				scrollUp: function scrollUp() {}
    //			}, options);
    //
    //			var scrollPosition = 0;
    //			$(window).scroll(function () {
    //				var cursorPosition = $(this).scrollTop();
    //				if (cursorPosition > scrollPosition) {
    //					settings.scrollDown();
    //				} else if (cursorPosition < scrollPosition) {
    //					settings.scrollUp();
    //				}
    //				scrollPosition = cursorPosition;
    //			});
    //		};
    //
    //		var $header = $("header");
    //		$.scrollDetection({
    //			scrollDown: function scrollDown() {
    //				$header.addClass("header_hidden");
    //			},
    //			scrollUp: function scrollUp() {
    //				$header.removeClass("header_hidden");
    //			}
    //		});
    //	}
    //
    //	headerBehaviour();

    //-----------------------------------------------------------------------------
    // Hide Header on on scroll down
    //var didScroll,
    //    lastScrollTop = 0,
    //    navbarHeight = $('header').outerHeight(),
    //    delta = 100;
    //
    //$(window).scroll(function(event){
    //    didScroll = true;
    //});
    //
    //setInterval(function() {
    //    if (didScroll) {
    //        hasScrolled();
    //        didScroll = false;
    //    }
    //}, 250);
    //
    //function hasScrolled() {
    //    var st = $(this).scrollTop();
    //    
    //    // Make sure they scroll more than delta
    //    if(Math.abs(lastScrollTop - st) <= delta)
    //        return;
    //    
    //    // If they scrolled down and are past the navbar, add class .nav-up.
    //    // This is necessary so you never see what is "behind" the navbar.
    //    if (st > lastScrollTop && st > navbarHeight){
    //        // Scroll Down
    //        $('header').addClass('header_hidden');
    //    } else {
    //        // Scroll Up
    //        if(st + $(window).height() < $(document).height()) {
    //            $('header').removeClass('header_hidden');
    //        }
    //    }
    //    
    //    lastScrollTop = st;
    //}

    //-----------------------------------------------------------------------------


    // init position: sticky; polifill
//    $('.sticky').Stickyfill();

    // init object-fit polifill
    objectFitImages();

    // get margin to content ubder Header
    function getMarginUnderHaeder() {
        var height = document.getElementsByClassName("header")[0].offsetHeight;
        document.getElementsByClassName("content_main")[0].style.marginTop = height + 'px';
    }
    getMarginUnderHaeder();
    $(window).on("resize", function () {
        getMarginUnderHaeder();
    });

    //    function set_banner_index_height() {
    //        var height = document.getElementsByClassName("header")[0].offsetHeight;
    ////        document.getElementsByClassName("banner_index")[0].style.minHeight = 'calc( 100vh - ' +  height + 'px)';
    //        $(".banner_index .banner_slider_item").outerHeight('calc( 100vh - ' +  height + 'px)')
    //    }
    //    set_banner_index_height();
    //    $(window).on("resize", set_banner_index_height);





    // check if device is mobile:

    var isMobile = false; //initiate as false
    // device detection
    if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) ||
        /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0, 4))) isMobile = true;

    if (isMobile) {
        $(".card_components .images_item").addClass("isMobileDevice");

    }

});

$(document).ready(function () {
    //$(window).resize(setBodyPadding);

    $(window).resize(function () {
        setTimeout(function () {
            setBodyPadding();
        }, 100);
    });

    function setBodyPadding() {
        let headerHeight = $(".wrapp_main_header").height();
        $("body").css("padding-top", headerHeight);
    }
    setBodyPadding();

    $(window).scroll(function () {
        let aboveHeaderHeight = $("#aboveHeader").height();

        if ($(window).scrollTop() > aboveHeaderHeight) {
            $(".wrapp_main_header").css("top", -aboveHeaderHeight);
            $("section.header").addClass("scrolled");
        } else {
            $(".wrapp_main_header").css("top", 0);
            $("section.header").removeClass("scrolled");
        }
    })


    $("body").css("opacity", 1);




});




/**/
/**/
/**/
/**/
/**/
/**/
/**/
/**/
/**/
/**/
/**/
/**/
/**/
/**/
/**/
/**/
/**/
/**/
/**/
/**/
/**/
/**/
/**/
/**/
/**/
/**/
/**/
/**/
/**/
/**/
/**/
/**/
/**/
