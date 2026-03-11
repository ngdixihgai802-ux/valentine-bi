window.onload=function(){
console.log("web loaded")
}
// mật khẩu
const PASSWORD="28070808"

// bấm tham gia
function start(){

document.getElementById("cover").classList.add("hidden")
document.getElementById("login").classList.remove("hidden")

}


// kiểm tra mật khẩu
function checkPassword(){

let pass=document.getElementById("password").value

if(pass===PASSWORD){

document.getElementById("login").classList.add("hidden")
document.getElementById("heartScene").classList.remove("hidden")

setTimeout(()=>{
document.getElementById("heart").style.background="black"
},800)

setTimeout(()=>{
document.getElementById("heartScene").classList.add("hidden")
startQuiz()
},2000)

}else{

alert("Sai mật khẩu!")

}

}



// câu hỏi
let quiz=[

{
q:"Em thích ăn gì nhất?",
a:["Pizza","Khoai tây","Gà rán"],
correct:1
},

{
q:"Màu em thích nhất?",
a:["Đen","Hồng","Xanh"],
correct:1
},

{
q:"Ngày tụi mình quen nhau?",
a:["20-01-2025","01-02-2025","18-01-2025"],
correct:2
},

{
q:"Em thích uống gì nhất?",
a:["Trà sữa","Cà phê","Matcha latte"],
correct:2
},

{
q:"Khi nào em ghét anh nhất?",
a:["Anh ngủ","Anh vô tâm","Anh ăn"],
correct:1
},

{
q:"Em thích được anh gọi là gì?",
a:["Bé","Công chúa nhỏ","Cục cưng"],
correct:1
},

{
q:"Điều em thích nhất ở anh?",
a:["Giàu","Đẹp trai","Quan tâm em"],
correct:2
},

{
q:"Em thích xem phim gì?",
a:["Hài","Kinh dị","Thể thao"],
correct:1
},

{
q:"Em thích anh làm gì nhất?",
a:["Tạo bất ngờ","Chơi game","Ngủ"],
correct:0
},

{
q:"Nếu là quà anh tặng thì sao?",
a:["Không thích","Gì cũng thích","Chán"],
correct:1
}

]



let current=0
function startQuiz(){

let quizBox=document.getElementById("quiz")

quizBox.classList.remove("hidden")

showQuestion()

}



// hiển thị câu hỏi
function showQuestion(){

let q=quiz[current]

document.getElementById("question").innerText=q.q

let answers=document.getElementById("answers")
answers.innerHTML=""

q.a.forEach((ans,i)=>{

let btn=document.createElement("button")

btn.innerText=ans

btn.onclick=function(){
checkAnswer(i)
}

answers.appendChild(btn)

})

}



// kiểm tra đáp án
function checkAnswer(i){

let q=quiz[current]

if(i===q.correct){

document.getElementById("message").innerText="Đúng rồi 💗"

fireworks()

setTimeout(()=>{

current++

if(current<quiz.length){

showQuestion()

}else{

document.getElementById("quiz").classList.add("hidden")
document.getElementById("giftBox").classList.remove("hidden")

}

},800)

}else{

document.getElementById("message").innerText="Sai rồi trả lời lại 😡"

}

}



// hộp quà
let clicks=0

function clickGift(){

clicks++

document.getElementById("progress").style.width=clicks+"%"

document.body.style.transform="translateX(3px)"

setTimeout(()=>{
document.body.style.transform="translateX(0)"
},100)

if(clicks>=100){

document.getElementById("giftBox").classList.add("hidden")
document.getElementById("book").classList.remove("hidden")

}

}



// lật trang sách
let page=1

function nextPage(){

let current=document.getElementById("page"+page)

current.classList.add("flipped")

page++

if(page>5){
document.getElementById("ending").classList.remove("hidden")
}

}


// tim bay nền
setInterval(()=>{

let heart=document.createElement("div")

heart.innerHTML="💗"
heart.className="heart"

heart.style.left=Math.random()*100+"%"

document.getElementById("hearts").appendChild(heart)

setTimeout(()=>{
heart.remove()
},6000)

},400)


// pháo hoa
function fireworks(){

let canvas=document.getElementById("fireworks")

let ctx=canvas.getContext("2d")

canvas.width=window.innerWidth
canvas.height=window.innerHeight

for(let i=0;i<80;i++){

ctx.beginPath()
ctx.arc(Math.random()*canvas.width,Math.random()*canvas.height,4,0,Math.PI*2)
ctx.fillStyle="white"
ctx.fill()

}

}
