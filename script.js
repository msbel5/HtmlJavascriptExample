$(document).ready(function(){
    $(".NavBut").hover(function(){
        var _id =$(this).attr("id");
        if(_id=="HPBut" &&($("#HomePage").attr("class")!="ActivePage")){$("#HomePage").removeClass().addClass("PrimaryPage");}
        else if(_id=="ABut" &&($("#About").attr("class")!="ActivePage")){$("#About").removeClass().addClass("PrimaryPage");}
        else if(_id=="CBut" &&($("#Contact").attr("class")!="ActivePage")){$("#Contact").removeClass().addClass("PrimaryPage");}
        },
        function(){
            var _id =$(this).attr("id");
            if(_id=="HPBut" &&($("#HomePage").attr("class")!="ActivePage")){$("#HomePage").removeClass().addClass("HomePage");}
            else if(_id=="ABut" &&($("#About").attr("class")!="ActivePage")){$("#About").removeClass().addClass("Page");}
            else if(_id=="CBut" &&($("#Contact").attr("class")!="ActivePage")){$("#Contact").removeClass().addClass("Page");} })
});


$(document).ready(function(){
    $(".NavBut").click(function(){
        $(".Pages > div").removeClass().addClass("Page");
        var _id =$(this).attr("id");
        if(_id=="HPBut"){$("#HomePage").removeClass().addClass("ActivePage");}
        else if(_id=="ABut"){$("#About").removeClass().addClass("ActivePage");}
        else if(_id=="CBut"){$("#Contact").removeClass().addClass("ActivePage");}
    })
});

$(document).ready(function(){
    var slideIndex=1;
    showSlides(slideIndex);    
});

function plusSlides(n){
    var slides = $(".Slide");
    var curImgNum;
    for(i=0;i<slides.length;i++){
        if(slides[i].style.display=="block"){curImgNum=i+1;}
    };
    selImgNum=curImgNum+n;    
    showSlides(selImgNum);
};

function currentSlide(n){
    var slideIndex =n;
    showSlides(slideIndex);
};

function showSlides(n){    
    var slideIndex =n;
    var i;
    var slides =$(".Slide");    
    var dots = $(".ImgNavDot");
    if(n>slides.length){slideIndex=1};
    if(n<1){slideIndex=slides.length};
    for(i=0;i<slides.length;i++){slides[i].style.display="none";};
    for(i=0;i<dots.length;i++){dots[i].className = dots[i].className.replace(" Active", "");};
    slides[slideIndex-1].style.display="block";
    dots[slideIndex-1].className += " Active";       
};

$(document).ready(function(){
    $(".ImgNavLeft").click(function(){
        plusSlides(-1)});
});

$(document).ready(function(){
    $(".ImgNavRight").click(function(){
        plusSlides(1)});
});

$(document).ready(function(){
    $(".ImgNavDot").click(function(){
        var _id = $(this).attr("id");
        if(_id=="Dot1"){currentSlide(1);}
        else if(_id=="Dot2"){currentSlide(2);}
        else if(_id=="Dot3"){currentSlide(3);}
    });
});

$(document).ready(function(){
    setInterval(function(){plusSlides(1)},5000);
});

function resetMField(){
    $("#Email").val("");
    $("#YMessage").val("");
    $("#Email").removeClass().addClass("Email");
    $("#YMessage").removeClass().addClass("YMessage");
};

function Send(){
    resetMField();
};

function isEmail(email) {
    var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regex.test(email);
};

function isAllValid(){
    var _result;
    var _ERes;
    var _MRes;
    if($("#Email").attr("class")=="EmailValid"){_ERes=true;}
    else{_ERes=false}
    if($("#YMessage").attr("class")=="YMessageValid"){_MRes=true;}
    else{_MRes=false;}
    if(_ERes==true && _MRes==true){_result=true;}
    else{_result="Lütfen doğru mail adresi girdiğinize ve/veya alanları boş bırakmadığınıza emin olun."}
    return _result;
};

$(document).ready(function(){
    $(".Reset").click(function(){
        resetMField();
    });
});

$(document).ready(function(){
    $("#YMessage").on("change paste keyup",function(){
        var _cont = $(this).val();              
        if(_cont!=""){$(this).removeClass().addClass("YMessageValid");}
        else{$(this).removeClass().addClass("YMessage");}
    });
});

$(document).ready(function(){
    $("#Email").on("change paste keyup",function(){
        var _cont = $(this).val();                     
        if(isEmail(_cont)){$(this).removeClass().addClass("EmailValid");}
        else{$(this).removeClass().addClass("Email");}
    });
});

$(document).ready(function(){
    $(".Send").click(function(){
        if(isAllValid()==true){Send();}
        else{alert(isAllValid());}
    });
});

