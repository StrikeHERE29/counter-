let count = 0;

let value = document.querySelector("#value");
let decrease = document.querySelector(".btn-decrease");
let reset = document.querySelector(".btn-reset");
let increase = document.querySelector(".btn-increase");

decrease.addEventListener("click", function(){
    count--;
    if(count < 0){
        value.style.color = "red";
    }
    value.textContent = count;
    
}
)

reset.addEventListener("click", function(){
    count = 0;
    value.textContent = "0";
    value.style.color = "black";

})

increase.addEventListener("click", function(){
    count++;
    if(count > 0 ){
        value.style.color = "green";

    }
    value.textContent = count;
})