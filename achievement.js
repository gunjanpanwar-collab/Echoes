// =========================================
// Get Elements
// =========================================

const form = document.getElementById("achievementForm");

const container = document.getElementById("achievementContainer");

const search = document.getElementById("search");

const certificate = document.getElementById("certificate");


// =========================================
// Certificate Preview Text
// =========================================

certificate.addEventListener("change", function(){

    if(this.files.length>0){

        alert("📄 Selected File: " + this.files[0].name);

    }

});


// =========================================
// Add Achievement
// =========================================

form.addEventListener("submit",function(e){

e.preventDefault();

const title=document.getElementById("title").value;

const description=document.getElementById("description").value;

const category=document.getElementById("category").value;

const date=document.getElementById("date").value;


// Create Card

const card=document.createElement("div");

card.classList.add("card");

card.innerHTML=`

<div class="badge">

${category}

</div>

<h2>

🏆 ${title}

</h2>

<p>

${description}

</p>

<div class="date">

${date}

</div>

<div class="buttons">

<button class="like">

❤️ Like <span>0</span>

</button>

<button>

📤 Share

</button>

</div>

`;


// Add New Card at Top

container.prepend(card);


// Like Button

const likeBtn=card.querySelector(".like");

const likeCount=likeBtn.querySelector("span");

let likes=0;

likeBtn.addEventListener("click",function(){

likes++;

likeCount.innerHTML=likes;

});


// Success

alert("🎉 Achievement Added Successfully!");


// Reset Form

form.reset();

});


// =========================================
// Like Existing Cards
// =========================================

const allLikes=document.querySelectorAll(".like");

allLikes.forEach(function(button){

let count=0;

button.innerHTML="❤️ Like <span>0</span>";

const span=button.querySelector("span");

button.addEventListener("click",function(){

count++;

span.innerHTML=count;

});

});


// =========================================
// Search Function
// =========================================

search.addEventListener("keyup",function(){

const value=search.value.toLowerCase();

const cards=document.querySelectorAll(".card");

cards.forEach(function(card){

const text=card.innerText.toLowerCase();

if(text.includes(value)){

card.style.display="block";

}

else{

card.style.display="none";

}

});

});


// =========================================
// Share Button
// =========================================

document.addEventListener("click",function(e){

if(e.target.innerText==="📤 Share"){

navigator.clipboard.writeText(window.location.href);

alert("🔗 Page link copied to clipboard!");

}

});


// =========================================
// Hover Animation
// =========================================

const cards=document.querySelectorAll(".card");

cards.forEach(function(card){

card.addEventListener("mouseenter",function(){

card.style.transform="translateY(-12px) scale(1.02)";

});

card.addEventListener("mouseleave",function(){

card.style.transform="translateY(0px) scale(1)";

});

});
const counters=document.querySelectorAll(".stat h2");

counters.forEach(counter=>{

const target=+counter.innerText;

let count=0;

const speed=30;

const update=()=>{

count+=Math.ceil(target/50);

if(count<target){

counter.innerText=count;

setTimeout(update,speed);

}else{

counter.innerText=target;

}

}

update();

});