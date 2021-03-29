const hex = ["1","2","3","4","5","6","7","8","9","A","B","C","D","E","F"];

const colorText = document.querySelector(".color");
document.getElementById("btn").addEventListener('click',function(){
    let color = "#";
    for(let i=0;i<6;i++){
        color += hex[getRandomNumber()];
    }
    document.body.style.backgroundColor = color;
    colorText.innerText = color;
})

function getRandomNumber(){
    return Math.floor(Math.random() * hex.length);
}