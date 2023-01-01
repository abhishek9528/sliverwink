$(function(){
    let a=1;
    $(".searching").click(function(){
        $(function(){
            if(a==1){
                $(".search-div .fa-solid").removeClass("fa-magnifying-glass");
                a=2;
            }
            else{
                $(".search-div .fa-solid").addClass("fa-magnifying-glass");
                a=1;
            }
        });
    });
    $(".course").click(function(){
        if(a==2){
            $(".search-div .fa-solid").addClass("fa-magnifying-glass");
            a=1;    
        }
    })
});

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
    let b=1;
    $(".searchin-div").click(function(){
        $(function(){
            if(b==1){
                $(".searching-div .fa-solid").removeClass("fa-magnifying-glass");
                b=2;
            }
            else{
                $(".searching-div .fa-solid").addClass("fa-magnifying-glass");
                b=1;
            }
        });
    });
    $(".details-div").click(function(){
        if(b==2){
            $(".searching-div .fa-solid").addClass("fa-magnifying-glass");
            b=1;    
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
