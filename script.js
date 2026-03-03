let input = document.getElementById('input');
let increase = document.getElementById('increase');
let decrease = document.getElementById('decrease');
let reset = document.getElementById('reset');


let count = 0;


increase.addEventListener('click', function() {
    count++;
    input.textContent = count;
    console.log("clicked increase");
});    


decrease.addEventListener('click', function () {
    count--;
    input.textContent = count;
    console.log("clicked decrease");
});  


reset.addEventListener('click', function () {
    count = 0;
    input.textContent = count;
    console.log(" reset clicked");
})