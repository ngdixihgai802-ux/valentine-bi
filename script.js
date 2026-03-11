const PASSWORD="28070808"


function start(){

document.getElementById("cover").classList.add("hidden")
document.getElementById("login").classList.remove("hidden")

}


function checkPassword(){

let pass=document.getElementById("password").value

if(pass===PASSWORD){

document.getElementById("login").classList.add("hidden")
document.getElementById("heartScene").classList.remove("hidden")

setTimeout(splitHeart,1500)

}else{

alert("Sai mật khẩu!")

}

}


/* ===== TIM VỠ ĐÔI ===== */

function splitHeart(){

let heart=document.getElementById("heart")

heart.innerHTML="💔"

heart.classList.add("splitLeft")

setTimeout(()=>{

document.getElementById("heartScene").classList.add("hidden")
startQuiz()

},1200)

}


/* ===== QUIZ ===== */

let quiz=[

{q:"Em thích ăn gì nhất?",a:["Khoai tây","Pizza","Gà rán"],correct:0},
{q:"Màu em thích?",a:["Hồng","Đen","Xanh"],correct:0},
{q:"Ngày tụi mình quen nhau?",a:["18-01-2025","01-02-2025","20-01-2025"],correct:0},
{q:"Em thích uống gì?",a:["Matcha latte","Trà sữa","Cà phê"],correct:0},
{q:"Em ghét anh khi nào?",a:["Anh vô tâm","Anh ngủ","Anh ăn"],correct:0},
{q:"Em thích được gọi là gì?",a:["Công chúa nhỏ","Bé","Cục cưng"],correct:0},
{q:"Điều em thích nhất ở anh?",a:["Quan tâm em","Giàu","Đẹp trai"],correct:0},
{q:"Em thích xem gì?",a:["Kinh dị","Hài","Thể thao"],correct:0},
{q:"Em thích anh làm gì?",a:["Tạo bất ngờ","Ngủ","Chơi game"],correct:0},
{q:"Quà anh tặng em?",a:["Gì cũng thích","Không thích","Chán"],correct:0}

]

let current=0


function startQuiz(){

document.getElementById("quiz").classList.remove("hidden")
showQuestion()

}


function showQuestion(){

let q=quiz[current]

document.getElementById("question").innerText=q.q

let answers=document.getElementById("answers")
answers.innerHTML=""

q.a.forEach((ans,i)=>{

let btn=document.createElement("button")

btn.innerText=ans

btn.onclick=()=>checkAnswer(i)

answers.appendChild(btn)

})

}


function checkAnswer(i){

let q=quiz[current]

if(i===q.correct){

document.getElementById("message").innerText="Cục cưng là hiểu em nhất!! 💗"

fireworks()

setTimeout(()=>{

current++

if(current<quiz.length){
showQuestion()
}else{
endQuiz()
}

},1200)

}else{

document.getElementById("message").innerText="Đồ vô tâm này!! 😡"

document.body.classList.add("shakeScreen")

setTimeout(()=>{
document.body.classList.remove("shakeScreen")
},1000)

}

}


/* ===== END QUIZ ===== */

function endQuiz(){

document.getElementById("quiz").classList.add("hidden")
document.getElementById("giftBox").classList.remove("hidden")

}


/* ===== HỘP QUÀ ===== */

let clicks=0

function clickGift(){

clicks++

let percent=(clicks/100)*100

document.getElementById("progress").style.width=percent+"%"

if(clicks>=100){

document.body.classList.add("shakeScreen")

setTimeout(()=>{

document.getElementById("giftBox").classList.add("explode")

setTimeout(()=>{

document.getElementById("giftBox").classList.add("hidden")
document.getElementById("book").classList.remove("hidden")

},600)

},800)

}

}


/* ===== SÁCH ===== */

let page=1

function nextPage(){

let p=document.getElementById("page"+page)

p.classList.add("flip")

setTimeout(()=>{

p.classList.add("hidden")

page++

if(page<=5){

document.getElementById("page"+page).classList.remove("hidden")

}else{

document.getElementById("ending").classList.remove("hidden")

}

},700)

}


/* ===== TIM BAY ===== */

setInterval(()=>{

let heart=document.createElement("div")

heart.innerHTML="💗"

heart.className="heart"

heart.style.left=Math.random()*100+"%"

document.body.appendChild(heart)

setTimeout(()=>heart.remove(),6000)

},400)


/* ===== PHÁO HOA THẬT ===== */

function fireworks(){

let canvas=document.getElementById("fireworks")
let ctx=canvas.getContext("2d")

canvas.width=window.innerWidth
canvas.height=window.innerHeight

for(let i=0;i<120;i++){

let x=Math.random()*canvas.width
let y=Math.random()*canvas.height

ctx.beginPath()
ctx.arc(x,y,3,0,Math.PI*2)
ctx.fillStyle="white"
ctx.fill()

}

}
