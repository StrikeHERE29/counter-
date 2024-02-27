
//initial value
let count = 0;


//selectors
let value = document.querySelector("#value");
let decrease = document.querySelector(".btn-decrease");
let reset = document.querySelector(".btn-reset");
let increase = document.querySelector(".btn-increase");

//event listener on decrease btn to decrease the counter
//and to style the text
decrease.addEventListener("click", function(){
    count--;
    if(count < 0){
        value.style.color = "red";
    }
    value.textContent = count;
    
}
)

//event listener on reset btn to reset the counter
reset.addEventListener("click", function(){
    count = 0;
    value.textContent = "0";
    value.style.color = "black";

})


//event listener on reset btn to increase the counter
// and to style the text 
increase.addEventListener("click", function(){
    count++;
    if(count > 0 ){
        value.style.color = "green";

    }
    value.textContent = count;
})