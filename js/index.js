$('.gnb li').mouseover(function(){
    $(this).children('.subWrap').stop().slideDown();
}).mouseout(function(){
    $(this).children('.subWrap').stop().slideUp();
});

$('.slide').slick({
    'dots' : true,
    'autoplay' : true,
    'autoplaySpeed' : 7000,
    'arrows' : false,
});

$('.eSlide').slick({
    'slidesToShow' : 3,
    'arrows' : false,
    'autoplay' : true,
    'autoplaySpeed' : 3000,
    'centerMode': true,
});

// $('.con').slick({
//     'nextArrow' : '.slideNext',
//     'prevArrow' : '.slidePrev',
//     'infinite': true,
//     'slidesToShow': 5,
//     'slidesToScroll': 5,
//     'variableWidth': true,
//     'centerMode': true,
// });

$('.s3 button').click(function(){
    $(this).addClass('active')
    .siblings().removeClass('active');

    let i = $(this).index();

    if(i == 0){
        $('.reviewDiv').css({
            'display':'flex'
        }).siblings('.youtubeDiv').css({
            'display':'none'
        }).siblings('.microDiv').css({
            'display':'none'
        });
    } else if(i == 1){
        $('.youtubeDiv').css({
            'display':'flex'
        }).siblings('.reviewDiv').css({
            'display':'none'
        }).siblings('.microDiv').css({
            'display':'none'
        });
    } else if(i == 2){
        $('.microDiv').css({
            'display':'flex'
        }).siblings('.youtubeDiv').css({
            'display':'none'
        }).siblings('.reviewDiv').css({
            'display':'none'
        });
    }
});

$('.s4 button').click(function(){
    $(this).addClass('active')
    .siblings().removeClass('active');

    let i = $(this).index();

    if(i == 0){
        $('.annUl').css({
            'display':'block'
        }).siblings('.schoolUl').css({
            'display':'none'
        });
        $('.anndate').css({
            'display':'block'
        }).siblings('.schooldate').css({
            'display':'none'
        });
    } else if(i == 1){
        $('.schoolUl').css({
            'display':'block'
        }).siblings('.annUl').css({
            'display':'none'
        });
        $('.schooldate').css({
            'display':'block'
        }).siblings('.anndate').css({
            'display':'none'
        });
    }
});

$('.quickmenu .qSlideClose').click(function(){
    $('.quickmenu').css({
        'right' : '-101px'
    });
    $('.qSlideOpen').css({
        'right' : '-1px',
        'zIndex': 91
    });
    $('.qSlideClose').css({
        'right' : '-1px',
        'zIndex': 90
    });
});
$('.quickmenu .qSlideOpen').click(function(){
    $('.quickmenu').css({
        'right' : 0
    });
    $('.qSlideClose').css({
        'right' : 100,
        'zIndex': 91
    });
    $('.qSlideOpen').css({
        'right' : 100,
        'zIndex': 90
    });
});