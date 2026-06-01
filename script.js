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
