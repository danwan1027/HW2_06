// const btn = document.querySelector("#submit");
// btn.addEventListener("click", () =>{
//     console.log("hello world");
// });


function toFeed1(){
    document.getElementById("feeded1").style.display = "block";
}
function toFeed2(){
    document.getElementById("feeded2").style.display = "block";
}
function toFeed3(){
    document.getElementById("feeded3").style.display = "block";
}
function toFeed4(){
    document.getElementById("feeded4").style.display = "block";
}
function toFeed5(){
    document.getElementById("feeded5").style.display = "block";
}


function print(){
    const radioButtons = document.querySelectorAll('input[class="btn"]');
    let i = 0;
    for(const radioButton of radioButtons){ 
        
        if( radioButton.checked ){
            if(radioButton.id == "Gracyn"){
                toFeed1();
            }
            else if( radioButton.id == "Pearl"){
                toFeed2();
            }
            else if( radioButton.id == "Riggin"){
                toFeed3();
            }
            else if( radioButton.id == "Hunter"){
                toFeed4();
            }
            else if( radioButton.id == "Gary"){
                toFeed5();
            }

        }

    }

    fromText();
}



function fromText(){
    console.log( document.getElementById("text").value );
    if( document.getElementById("text").value == "ragdoll"){
        toFeed1();
        toFeed2();
        toFeed5();
    }else if ( document.getElementById("text").value == "ring"){
        toFeed3();
    }
    else if ( document.getElementById("text").value == "tardar"){
        toFeed4();
    }
    else{

    }

}





function mouseDown1(){
    document.getElementById("catPic1").src = "catOnclick/cat1_inverse.jpg";
}
function mouseUp1(){
    document.getElementById("catPic1").src = "catNormal/cat1.jpg";
}


function mouseDown2(){
    document.getElementById("catPic2").src = "catOnclick/cat2_inverse.jpg";
}
function mouseUp2(){
    document.getElementById("catPic2").src = "catNormal/cat2.jpg";
}



function mouseDown3(){
    document.getElementById("catPic3").src = "catOnclick/cat3_inverse.jpg";
}
function mouseUp3(){
    document.getElementById("catPic3").src = "catNormal/cat3.jpg";
}


function mouseDown4(){
    document.getElementById("catPic4").src = "catOnclick/cat4_inverse.jpg";
}
function mouseUp4(){
    document.getElementById("catPic4").src = "catNormal/cat4.jpg";
}



function mouseDown5(){
    document.getElementById("catPic5").src = "catOnclick/cat5_inverse.jpg";
}
function mouseUp5(){
    document.getElementById("catPic5").src = "catNormal/cat5.jpg";
}