let left_btn = document.querySelector("#left_btn");
let right_btn = document.querySelector("#right_btn");

let movie_row = document.querySelector("#movie_row");

console.dir(movie_row);


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