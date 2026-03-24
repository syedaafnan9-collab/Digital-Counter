let display = document.getElementById('input');
let increase = document.getElementById('increase');
let decrease = document.getElementById('decrease');
let reset = document.getElementById('reset');


let count = 0;

function UpdateUI () {
    display.textContent = count;
};

increase.addEventListener('click', function() {
    count++;
    UpdateUI();
    console.log("clicked increase");
});    


decrease.addEventListener('click', function () {
    count--;
    if (count < 0) {
        count = 0;
    }
    UpdateUI();
    console.log("clicked decrease");
});  


reset.addEventListener('click', function () {
    count = 0;
    UpdateUI();
    console.log(" reset clicked");
})