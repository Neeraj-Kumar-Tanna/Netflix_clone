let left_btn = document.querySelector("#left_btn");
let right_btn = document.querySelector("#right_btn");

let movie_row = document.querySelector("#movie_row");


left_btn.addEventListener("click" , function(){
    movie_row.scrollTo({
        left:0,
        behavior : "smooth"
    });
});

right_btn.addEventListener("click" , function(){
    movie_row.scrollTo({
        left: movie_row.scrollWidth,
        behavior : "smooth"
    });
});


// answers to frequently asked questions


let questions = document.querySelectorAll(".question");
questions.forEach((x , y) => {
    x.addEventListener("click" , function(z){ 
        document.querySelector(`#ans${y+1}`).style.display = "inline";
        x.querySelector("span").style.transform = "rotate(45deg)";
        for(var i = 0 ; i < questions.length ;i++){
            if(i != y) {
                document.querySelector(`#ans${i+1}`).style.display = "none";
                // document.querySelector(`#ans${i+1}`).style.
            }
        }
    });
});




//email id get started .-------------------------------------------------

let get_started1 = document.querySelector("#get_started1");

get_started1.addEventListener("click" , function(){
    event.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    let email1 = document.querySelector("#email_1");
    console.dir(email1);
    if(!emailRegex.test(email1.value)){
        document.querySelector("#wrong_alert_1").removeAttribute("hidden");
    }
    else{
        document.querySelector("#wrong_alert_1").setAttribute("hidden","");
    }
});



let get_started_2 = document.querySelector("#get_started2");
get_started_2.addEventListener("click" , function(){
    event.preventDefault();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    let email2 = document.querySelector("#email_2");
    if(emailRegex.test(email2.value)){
        document.querySelector("#wrong_alert_2").setAttribute("hidden","");
    }
    else{
        document.querySelector("#wrong_alert_2").removeAttribute("hidden");
    }
});

//-------------------------------------------------------------------