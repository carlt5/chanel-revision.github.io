let score = 0;
let correctanswers = [];


const getAnswers = (int) => {
	let answerNumbers = document.getElementsByClassName("hidden");
	let answerNum = answerNumbers[int]
	let answerCopy = answerNum.cloneNode(true);
	correctanswers.push(answerCopy.innerHTML)
}

const checker = () => {
	let questions = document.getElementsByClassName("question")
	let length = questions.length
	for (let int = 0; int < length; int++) {
		getAnswers(int)
	let radios = document.getElementsByName("q" + int);
	let x = correctanswers[int];
		if (radios[x].checked) {
			score++;
			questions[int].style.background = "linear-gradient(45\deg, #99ff9c 0%,#e7ffe0 20%, white 60%)";
		} 	else {
			questions[int].style.background = "linear-gradient(45\deg, #ffa29b 0%,#ffe0dd 20%, white 60%)";
		}
	}		
	display(score, length)
}

const display = (s, l) => {
	let percentage = Math.round(100 * (s / l))
	let results = document.getElementById("results")

if (percentage == 100) {
	submit.style.display = "none"
	results.innerHTML = "You Scored " + percentage + "%" + "&nbsp;&nbsp;AMAZING!"
	const resbar = document.getElementById("resultsbar")
	resbar.style.display = "block"
	resbar.style.height = "40px";
	const trybar = document.getElementById("trybar");
	trybar.style.display = "none";
} else {
	submit.style.display = "none"
	results.innerHTML = "You Scored " + percentage + "%";
	const resbar = document.getElementById("resultsbar")
	resbar.style.display = "block"
	}
}

const reset = () => {
	score = 0;
	submit.style.display = "block"
	results.innerHTML = "";
	const resbar = document.getElementById("resultsbar")
	resbar.style.display = "none"
	let radiocheck = document.getElementsByTagName("input")
	let total = radiocheck.length
	for (let i = 0; i < total; i++)
		radiocheck[i].checked = false;
	let questions = document.getElementsByClassName("question");
	for (let n = 0; n < questions.length; n++)
		questions[n].style.background = "";
}

const submit = document.getElementById("submit")
submit.addEventListener("click", checker);

const tryagain = document.getElementById("tryagain")
	tryagain.addEventListener("click", reset)