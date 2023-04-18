document.querySelectorAll('a[href="#form"],a[href="#service"],a[href="#about"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

function initNavigationSlick() {
    if ($(document).width() <= 1200) {
        $("#navigation-bar").slick({
            slidesToShow: 1,
            variableWidth: true,
            slidesToScroll: 1,
            arrows: false,
            touchThreshold: 500
        })
    }

    if ($(document).width() <= 540) {

        $("#solutions-slider").slick({
            slidesToShow: 1,
            centerMode: true,
            arrows: false,
        })
    }
}

initNavigationSlick();

$(window).on('resize', function () { initNavigationSlick() });

$("#partners-slider").slick({
    slidesToShow: 6,
    slidesToScroll: 1,
    arrows: true,
    dots: true,
    variableWidth: true,
    prevArrow: "<img class='a-left control-c prev slick-prev' src='assets/images/icons/slick-prev.png'>",
    nextArrow: "<img class='a-right control-c next slick-next' src='assets/images/icons/slick-next.png'>",
    responsive: [
        {
            breakpoint: 1200,
            settings: {
                arrows: false
            }
        },
        {
            breakpoint: 540,
            settings: {
                slidesToShow: 1,
                variableWidth: false,
                arrows: false
            }
        }
    ]
});

$("#about-slider").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: true
});

$('#close-slidenav').on('click', function () {
    $('.slide-nav').removeClass('nav-open');
});

$('.navigation-list li').on('click', function () {
    $('.slide-nav').removeClass('nav-open');
});

$('#triggerSlideNav').on('click', function () {
    $('.slide-nav').addClass('nav-open');
});

$(window).on('scroll', () => {
    if ($(this).scrollTop() >= 600) {
        $('#return-to-top').fadeIn(300);
    } else {
        $('#return-to-top').fadeOut(300);
    }
});

$('#return-to-top').on('click', () => {
    $('body,html').animate({
        scrollTop: 0
    }, 500);
});

function validateForm() {
    let phoneInput = $('#phoneInput').val();
    let re = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;

    if(!re.test(phoneInput)) {
        $('#phoneError').fadeIn();

        return false;
    }

    return true;
}

$("#heroForm").on('submit', function () {
    return validateForm();
});
