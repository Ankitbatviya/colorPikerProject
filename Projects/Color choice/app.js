const redCode = document.getElementById("redColorCode");
const greenCode = document.getElementById("greenColorCode");
const blueCode = document.getElementById("blueColorCode");

const redinput = document.getElementById("redInput");
const greeninput = document.getElementById("greenInput");
const blueinput = document.getElementById("BlueInput");

document.getElementById("generateBtn").addEventListener("click",()=>{
    redCode.textContent = redinput.value;
    greenCode.textContent = greeninput.value;
    blueCode.textContent = blueinput.value;

    document.body.style.backgroundColor = `rgb(${redinput.value}, ${greeninput.value}, ${blueinput.value})`;
})


document.getElementById("resetbtn").addEventListener("click",()=>{
    redCode.textContent = 133;
    greenCode.textContent = 68;
    blueCode.textContent =  66;

    redinput.value = '';
    greeninput.value = '';
    blueinput.value = '';
    document.body.style.backgroundColor = `rgb( 133, 68, 66)`;
})

document.getElementById("Randombtn").addEventListener("click",()=>{
    
    redCode.textContent = Math.floor(Math.random() * 256);
    greenCode.textContent = Math.floor(Math.random() * 256);
    blueCode.textContent =  Math.floor(Math.random() * 256);


    redinput.value =redCode.textContent;
    greeninput.value = greenCode.textContent;
    blueinput.value = blueCode.textContent;
    document.body.style.backgroundColor = `rgb(${redinput.value}, ${greeninput.value}, ${blueinput.value})`;

})