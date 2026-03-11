const PASSWORD="28070808"

function start(){
cover.classList.add("hidden")
login.classList.remove("hidden")
}

function checkPassword(){

let pass=password.value

if(pass===PASSWORD){

login.classList.add("hidden")
startQuiz()

}else{
alert("Sai mật khẩu!")
}

}



let questions=[

{q:"Em thích ăn gì nhất?",a:["Pizza","Khoai tây","Gà rán"],correct:1},
{q:"Màu em thích nhất?",a:["Đen","Hồng","Xanh"],correct:1},
{q:"Ngày tụi mình quen nhau?",a:["20-01-2025","01-02-2025","18-01-2025"],correct:2},
{q:"Em thích uống gì nhất?",a:["Trà sữa","Cà phê","Matcha latte"],correct:2},
{q:"Khi nào em ghét anh nhất?",a:["Anh ngủ","Anh vô tâm","Anh ăn"],correct:1}

]

let current=0

function startQuiz(){

quiz.classList.remove("hidden")
showQuestion()

}


function showQuestion(){

let q=questions[current]

question.innerText=q.q

answers.innerHTML=""

q.a.forEach((ans,i)=>{

let btn=document.createElement("button")

btn.innerText=ans

btn.onclick=()=>checkAnswer(i)

answers.appendChild(btn)

})

}


function checkAnswer(i){

if(i===questions[current].correct){

message.innerText="Đúng rồi 💗"

fireworks()

setTimeout(()=>{

current++

if(current<questions.length){

showQuestion()

}else{

quiz.classList.add("hidden")
giftBox.classList.remove("hidden")

}

},700)

}else{

message.innerText="Sai rồi trả lời lại 😡"

}

}



let clicks=0

function clickGift(){

clicks++

progress.style.width=clicks+"%"

if(clicks>=100){

fireworks()

setTimeout(()=>{

giftBox.classList.add("hidden")
book.classList.remove("hidden")

},800)

}

}



let page=1

function nextPage(){

let p=document.getElementById("page"+page)

if(p){
p.classList.add("flipped")
}

page++

if(page>5){
ending.classList.remove("hidden")
}

}



setInterval(()=>{

let h=document.createElement("div")

h.innerHTML="💗"
h.className="heart"

h.style.left=Math.random()*100+"%"

document.body.appendChild(h)

setTimeout(()=>{
h.remove()
},6000)

},400)



function fireworks(){

let canvas=document.getElementById("fireworks")
let ctx=canvas.getContext("2d")

canvas.width=window.innerWidth
canvas.height=window.innerHeight

for(let i=0;i<60;i++){

ctx.beginPath()
ctx.arc(Math.random()*canvas.width,Math.random()*canvas.height,3,0,Math.PI*2)
ctx.fillStyle="white"
ctx.fill()

}

}
