const cards = document.querySelectorAll(".card");

cards.forEach(card=>{

card.addEventListener("click",()=>{

card.style.transform="scale(1.05)";

setTimeout(()=>{

card.style.transform="scale(1)";

},200);

});

});

const button=document.querySelector("button");

button.addEventListener("click",()=>{

alert("Memory Upload Page Coming Soon!");

});
