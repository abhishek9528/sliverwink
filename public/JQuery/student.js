$(function(){
    let a=1;
    $("#search").click(function(){
        $(function(){
            if(a==1){
                $(".icon .fa-solid").removeClass("fa-magnifying-glass");
                a=2;
            }
            else{
                $(".icon .fa-solid").addClass("fa-magnifying-glass");
                a=1;
            }
        });
    });
    $(".log-div").click(function(){
        if(a==2){
            $(".icon .fa-solid").addClass("fa-magnifying-glass");
            a=1;    
        }
    })
    $(".profile-div").click(function(){
        if(a==2){
            $(".icon .fa-solid").addClass("fa-magnifying-glass");
            a=1;    
        }
    })
    $(".heading-div").click(function(){
        if(a==2){
            $(".icon .fa-solid").addClass("fa-magnifying-glass");
            a=1;    
        }
    })
    $(".img-div").click(function(){
        if(a==2){
            $(".icon .fa-solid").addClass("fa-magnifying-glass");
            a=1;    
        }
    })
});

$(function(){
    let a=1;
    $(".icon-bar").click(function(){
        $(function(){
            if(a==1){
                $(".option-div").show(1000);
                $(".icon-bar .fa-solid").removeClass("fa-bars");
                $(".icon-bar .fa-solid").addClass("fa-xmark");
                $(".option-div").css("display","flex");
                a=2;
            }
            else if(a==2){ 
                $(".option-div").hide(1000);
                $(".icon-bar .fa-solid").removeClass("fa-xmark");
                $(".icon-bar .fa-solid").addClass("fa-bars");
                a=1;
            }
        })
    });
});

// $(document).ready(function(){
//     $('.card-div').slick({
//         dots: true,
//         infinite: false,
//         speed: 800,
//         slidesToShow: 3,
//         slidesToScroll: 3,
//         responsive: [
//             {
//                 breakpoint: 1024,
//                 settings: {
//                     slidesToShow: 3,
//                     slidesToScroll: 3,
//                     infinite: true,
//                     dots: true
//                 }
//             },
//             {
//                 breakpoint: 600,
//                 settings: {
//                     slidesToShow: 2,
//                     slidesToScroll: 2
//                 }
//             },
//             {
//                 breakpoint: 480,
//                 settings: {
//                     slidesToShow: 1,
//                     slidesToScroll: 1
//                 }
//             }
//             // You can unslick at a given breakpoint now by adding:
//             // settings: "unslick"
//             // instead of a settings object
//         ]
//     });
// });
