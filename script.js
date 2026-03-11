// mật khẩu
let password = "nguoiemyeunhatlabi_28082010"

function checkPass(){

let pass = document.getElementById("pass").value

if(pass === password){

document.getElementById("login").style.display = "none"

startQuiz()

}

else{

document.getElementById("loginError").innerText = "Sai mật khẩu rồi :<"

}

}



// danh sách câu hỏi

let questions = [

{q:"1. ăn em thích nhất là gì?",a:["Gà rán","Khoai tây","Mì ý","Sushi"],c:1},

{q:"2. Đồ uống em thích nhất là:",a:["Trà đào","Matcha latte / socola","Cà phê sữa","Trà sữa"],c:1},

{q:"3. Em thích anh gọi em bằng gì nhất?",a:["Bé","Cục cưng","Công chúa nhỏ","Em yêu"],c:2},

{q:"4. Khi em buồn em muốn anh:",a:["Để yên","Nhắn ổn không","Dỗ dành","Mua đồ ăn"],c:2},

{q:"5. Đi chơi em thích:",a:["Xem phim","Đi ăn","Đi dạo","TTTM"],c:1},

{q:"6. Em ghét anh khi:",a:["Ít nhắn","Chơi game","Vô tâm","Ngủ sớm"],c:2},

{q:"7. Phim em thích:",a:["Hài","Hành động","Kinh dị / ngôn tình","Hoạt hình"],c:2},

{q:"8. Điều làm em vui:",a:["Nhắn tin","Nhớ ngày","Bất ngờ","Chọc cười"],c:2},

{q:"9. Làm em cảm động:",a:["Quà đắt","Đi xa","Bất ngờ","Tin nhắn"],c:2},

{q:"10. Khi em nói không sao:",a:["Tin thật","Không hỏi","Dỗ em","Đi làm việc"],c:2}

]


let current = 0



function startQuiz(){

document.getElementById("quiz").style.display = "block"

showQuestion()

}



function showQuestion(){

let q = questions[current]

document.getElementById("question").innerText = q.q

let html = ""

q.a.forEach((ans,i)=>{

html += `<button onclick="checkAnswer(${i})">${ans}</button><br><br>`

})

document.getElementById("answers").innerHTML = html

}



function checkAnswer(i){

if(i === questions[current].c){

current++

document.getElementById("result").innerText = ""

if(current < questions.length){

showQuestion()

}

else{

document.getElementById("quiz").style.display = "none"

showGift()

}

}

else{

document.getElementById("result").innerText = "Sai rồi ❌"

}

}



// hiện hộp quà

function showGift(){

document.getElementById("gift").style.display = "block"

}



// phần bấm hộp quà 100 lần

let clickCount = 0

function openGift(){

clickCount++

let bar = document.getElementById("progress")

let percent = clickCount

if(percent > 100){
percent = 100
}

bar.style.width = percent + "%"



if(clickCount >= 100){

document.body.classList.add("screenShake")

setTimeout(()=>{

document.getElementById("gift").style.display = "none"

document.getElementById("book").style.display = "block"

},600)

}

}



// lật trang sách

let page = 0

function nextPage(){

page++

document.querySelectorAll(".page").forEach(p => p.style.display = "none")

if(page <= 6){

document.getElementById("page"+page).style.display = "block"

}

}
