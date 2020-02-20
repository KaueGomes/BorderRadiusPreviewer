function BordasScript(topleft,topright,bottomleft,bottomright){;
    
    console.log(topleft + " entrando no js");

    if(parseInt(topleft) >= 100){
       topleft = "100";
       console.log(topleft + "Quando maior ou igual a 100");
    }
    if(parseInt(topright) >= 100){
    topright = "100";
    }
    if(parseInt(bottomleft) >= 100){
    bottomleft = "100";
    }
    if(parseInt(bottomright) >= 100){
    bottomright = "100";
    }
    
    y = document.getElementById("BoxDemonstrativo");
    
    y.style.borderTopLeftRadius = topleft+"px";
    console.log(y.style.borderTopLeftRadius = topleft+"px");
    y.style.borderTopRightRadius = topright+"px";
    y.style.borderBottomLeftRadius = bottomleft+"px";
    y.style.borderBottomRightRadius = bottomright+"px";

    return topleft,topright,bottomleft,bottomright;
}