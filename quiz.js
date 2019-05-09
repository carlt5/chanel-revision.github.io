let score = 0;
let correctanswers = [0,2,2]

const checker = () => {
	let length = document.getElementsByClassName("question").length
	for (let int = 0; int < length; int++) {
	let radios = document.getElementsByName("q" + int);
	let x = correctanswers[int];
		if (radios[x].checked) {
			score++;
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
}

const submit = document.getElementById("submit")
submit.addEventListener("click", checker);

const tryagain = document.getElementById("tryagain")
	tryagain.addEventListener("click", reset)