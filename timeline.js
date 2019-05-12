let score = 0;
let attempts = 0;
const answers = [];

function resetAnswers() {
	score = 0;
	attempts++;
	results()
}

function results() {
	const one = document.querySelectorAll(".option");
for(let num = 0; num < one.length; num++) {
	answerCheck(num)
	};
}

function answerCheck(num) {
	let answer = answers[num];
	let inputs = document.querySelectorAll(".option")
	let input = inputs[num]
			 {
				if (input.value.toUpperCase() === answer.toUpperCase()) {
					score++
					input.className = "green"
					update()
					attUpdate()
				} else {
					input.className = "red"
					attUpdate()
				}
			}
		}

function update() {
	let res = document.getElementById("results");
	res.innerHTML = ("Score = " + score);
}

function attUpdate() {
	let att = document.getElementById("attempts");
	att.innerHTML = ("Attempts = " + attempts);
}

function randomRemove() {
	let num = Math.floor(Math.random() * 2)
	let liLength = document.querySelectorAll(".option").length;
	for (x = num; x < liLength; x += 2) {
		remove(x);
	}
}

function remove(int) {
	let optionAll = document.querySelectorAll(".option");
	let option = optionAll[int];
	let answerCopy = option.cloneNode(true);
	answers.push(answerCopy.innerHTML);
	let inputElement = document.createElement("input");
	inputElement.setAttribute('type','text');
	option.replaceChild(inputElement, option.childNodes[0]); 
}

function buttonReplace () {
	let random = document.getElementById("random");
	let submit = document.getElementById("submit");
	random.style.display = "none";
	submit.style.display = "block";
}


const random = document.getElementById("random");
random.addEventListener("click", randomRemove);
random.addEventListener("click", buttonReplace);

const submit = document.getElementById("submit")
submit.addEventListener("click", resetAnswers);
