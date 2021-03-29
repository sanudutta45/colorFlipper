const colors =["#5d8aa8","#e32636","#9966cc","grey","red","blue","rgb(5, 87, 119)"];


const colorText = document.querySelector(".color");
document.getElementById("btn").addEventListener('click',function(){

    const color = colors[getRandomNumber()];
    document.body.style.backgroundColor = color;
    colorText.innerText = color;
})

function getRandomNumber(){
    return Math.floor(Math.random() * colors.length);
}