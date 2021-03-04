// Ностальгия по C# :)
// run when page load
 
var mas = [] //массив фишек (просто изврат как обьявляется в JS двумерный массив)
var masWin = [] //массив выиграша (просто изврат как обьявляется в JS двумерный массив)
var check0 = [] // положение 0
var count = 0 //счетчик ходов

function formload() {

	//Заполняем мосивы фишек и побед
	let k = 1
	for (let i = 1; i < 5; i++) {
		mas[i] = [];
		masWin[i] = [];
		for (let o = 1; o < 5; o++) {
			mas[i][o] = k
			masWin[i][o] = k
			console.log("i=" + i + " " + "o=" + o + " " + mas[i][o])
			k++
			if (k > 15) k = 0
		}
	}
}
function test() {
	// let k = 16
	// let p = document.getElementById("b5").innerHTML
	console.log("----------------------------------------")
	for (let i = 1; i < 5; i++) {
		for (let o = 1; o < 5; o++) {

			console.log("i=" + i + " " + "o=" + o + " " + mas[i][o])
		}
	}
}

function refreshButton() { //значения из масива в кнопки
	document.getElementById("count").innerText = "Ход: " + count
	let k = 1
	for (let i = 1; i < 5; i++) {
		for (let o = 1; o < 5; o++) {
			document.getElementById("b" + k).innerText = mas[i][o]
			// if (mas[i][o] == 0) document.getElementById("b" + k).innerHTML = '<button class="nul" onclick="b' + k + '()" id="b' + k + '"> 0 </button>' // на кнопке 0 не видно
			k++
		}
	}
	if (checkWin()) {
		let audio = new Audio();
		audio.preload = 'auto';
		audio.src = '/wav/tada.wav';
		audio.play();
		disabeButton()
	}
}
function disabeButton() {
	for (let i = 1; i < 17; i++) {
		document.getElementById("b" + i).disabled = true
	}
}
function enableButton() {
	for (let i = 1; i < 17; i++) {
		document.getElementById("b" + i).disabled = false
	}
}
function checkZero() { //позиция 0
	for (let i = 1; i < 5; i++) {
		for (let o = 1; o < 5; o++) {
			if (mas[i][o] == 0) {
				check0[1] = i
				check0[2] = o
			}
		}
	}
}
function move(x, y) { //ставим цифру где ноль
	checkZero()
	if (x == check0[1] & y == check0[2] + 1) { // 
		mas[check0[1]][check0[2]] = mas[check0[1]][check0[2] + 1]
		mas[check0[1]][check0[2] + 1] = 0
		count++
	}
	if (x == check0[1] & y == check0[2] - 1) {
		mas[check0[1]][check0[2]] = mas[check0[1]][check0[2] - 1]
		mas[check0[1]][check0[2] - 1] = 0
		count++
	}
	if (x == check0[1] + 1 & y == check0[2]) {
		mas[check0[1]][check0[2]] = mas[check0[1] + 1][check0[2]]
		mas[check0[1] + 1][check0[2]] = 0
		count++
	}
	if (x == check0[1] - 1 & y == check0[2]) {
		mas[check0[1]][check0[2]] = mas[check0[1] - 1][check0[2]]
		mas[check0[1] - 1][check0[2]] = 0
		count++
	}
	checkZero()
}
function checkWin() {
	for (let i = 1; i < 5; i++) {
		for (let o = 1; o < 5; o++) {
			if (mas[i][o] != masWin[i][o]) {
				return false
			}
		}
	}
	return false
}

function shuffle() {
	for (let i = 1; i < 10000; i++) {
		checkZero()
		let rnd = Math.random(5)
		if (rnd == 1) check0[1] = check0[1] + 1
		if (rnd == 2) check0[1] = check0[1] - 1
		if (rnd == 3) check0[2] = check0[2] + 1
		if (rnd == 4) check0[2] = check0[2] - 1
		move(check0[1], check0[2])
	}
	count = 0
	refreshButton()
}
function b1() {
	move(1, 1)
	refreshButton()
}
function b2() {
	move(1, 2)
	refreshButton()
}
function b3() {
	move(1, 3)
	refreshButton()
}
function b4() {
	move(1, 4)
	refreshButton()
}
function b5() {
	move(2, 1)
	refreshButton()
}
function b6() {
	move(2, 2)
	refreshButton()
}
function b7() {
	move(2, 3)
	refreshButton()
}
function b8() {
	move(2, 4)
	refreshButton()
}
function b9() {
	move(3, 1)
	refreshButton()
}
function b10() {
	move(3, 2)
	refreshButton()
}
function b11() {
	move(3, 3)
	refreshButton()
}
function b12() {
	move(3, 4)
	refreshButton()
}
function b13() {
	move(4, 1)
	refreshButton()
}
function b14() {
	move(4, 2)
	refreshButton()
}
function b15() {
	move(4, 3)
	refreshButton()
}
function b16() {
	move(4, 4)
	refreshButton()
}