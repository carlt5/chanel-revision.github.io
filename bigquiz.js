let score = 0;

const begin = document.getElementById("start")
const question = document.getElementById("question");
const a1 = document.getElementById("answer1");
const a2 = document.getElementById("answer2");
const a3 = document.getElementById("answer3");
const a4 = document.getElementById("answer4");
const a5 = document.getElementById("answer5");
const currentScore = document.getElementById("score");
const finalScore = document.getElementById("finalScore");
const endMessage = document.getElementById("endMessage");
const playAgain = document.getElementById("playAgain");
const timerFill = document.getElementById("timerFill");

// array for saving used questions //
const arr = []

// Quiz questions //

const questions = [
	{question: "What year was Gabrielle Chanel born?",
		answer1: "1883",
		answer2: "1893",
		answer3: "1881",
		answer4: "1889",
		answer5: "1901",
		correct: "A",
	},
	{question: "What year was Chanel No. 5 released?",
		answer1: "1920",
		answer2: "1921",
		answer3: "1922",
		answer4: "1923",
		answer5: "1982",
		correct: "B",
	},
	{question: "When did Gabrielle Chanel work at Moulins in paris?",
		answer1: "1889",
		answer2: "1883",
		answer3: "1912",
		answer4: "1901",
		answer5: "1908",
		correct: "D",
	},
	{question: "When did Chanel open her first boutique in Deauville?",
		answer1: "1901",
		answer2: "1909",
		answer3: "1912",
		answer4: "1915",
		answer5: "1918",
		correct: "C",
	},
	{question: "When did Mademoiselle open her couture house at 31 Rue Cambon in Paris?",
		answer1: "1918",
		answer2: "1919",
		answer3: "1915",
		answer4: "1912",
		answer5: "1909",
		correct: "A",
	},
	{question: "What year did Arthur Boy Capel die?",
		answer1: "1909",
		answer2: "1923",
		answer3: "1921",
		answer4: "1912",
		answer5: "1919",
		correct: "E",
	},
	{question: "When did Coco Chanel create the little black dress?",
		answer1: "1919",
		answer2: "1921",
		answer3: "1923",
		answer4: "1926",
		answer5: "1932",
		correct: "D",
	},
	{question: "How long was Mademoiselle Chanel with the Duke of Westminster?",
		answer1: "3 Years",
		answer2: "5 Years",
		answer3: "7 Years",
		answer4: "9 Years",
		answer5: "11 Years",
		correct: "C",
	},
	{question: "When did Gabrielle Chanel launch the iconic 2.55 quilted handbag?",
		answer1: "1923",
		answer2: "1954",
		answer3: "1932",
		answer4: "1957",
		answer5: "1955",
		correct: "D",
	},
	{question: "Which ingredient is <b class='h'>not</b> part of the Fougère Accord?",
		answer1: "Lavender",
		answer2: "Bergamot",
		answer3: "Geranium",
		answer4: "Coumarin",
		answer5: "Moss",
		correct: "B",
	},
	{question: "Which ingredient is <b class='h'>not</b> part of the Chypre Accord?",
		answer1: "Bergamot",
		answer2: "Patchouli",
		answer3: "Cistus Labdanum",
		answer4: "Oak Moss",
		answer5: "Coumarin",
		correct: "E",
	},
	{question: "Which fragrance type is not part of the Trail Facets",
		answer1: "Aldehydes",
		answer2: "Oriental",
		answer3: "Woody",
		answer4: "Musky",
		answer5: "Spicy",
		correct: "A",
	},
	{question: "Which of the Allure fragrances features Peony in the 'Timeless Floral' Olfactory group?",
		answer1: "Allure EDT",
		answer2: "Allure EDP",
		answer3: "Allure Pure Parfum",
		answer4: "Allure Sensuelle",
		answer5: "Allure Sensuelle Pure Parfum",
		correct: "B",
	},
	{question: "Which ingredient is missing? <div id='fragranceTitle'>Cristalle</div> <h4>Head</h4> <ul> <li>???</li> <li>Lemon</li> <li>Mandarin</li> </ul> <div>",
		answer1: "Grapefruit",
		answer2: "Neroli",
		answer3: "Bergamot",
		answer4: "Peach",
		answer5: "Orange",
		correct: "D",
	},
	{question: "Which ingredient is missing? <div id='fragranceTitle'>Cristalle</div> <h4>Heart</h4> <ul> <li></li> <li>Iris</li> <li>Honeysuckle</li> </ul> <div>",
		answer1: "Neroli",
		answer2: "Clary Sage",
		answer3: "Geranium",
		answer4: "Magnolia Accord",
		answer5: "Hyacinth",
		correct: "E",
	},
	{question: "Which ingredient is missing? <div id='fragranceTitle'>Egoiste</div> <h4>Trail</h4> <ul> <li>Sandlewood Note</li> <li>Vanilla</li> <li>???</li> </ul> <div>",
		answer1: "Ambrette Seed",
		answer2: "Clary Sage",
		answer3: "Vetiver",
		answer4: "Cistus Labdanum",
		answer5: "Cedarwood",
		correct: "A",
	},
	{question: "Which ingredient is missing? <div id='fragranceTitle'>Egoiste</div> <h4>Head</h4> <ul> <li>Mandarin</li> <li>???</li> </ul> <div>",
		answer1: "Rosemary",
		answer2: "Coriander",
		answer3: "Lavender",
		answer4: "Bergamot",
		answer5: "Petit Grain",
		correct: "B",
	},
	{question: "Which ingredient is missing? <div id='fragranceTitle'>Platinum Egoiste</div> <h4>Trail</h4> <ul> <li>Vetiver</li> <li>???</li> <li>Cistus Labdanum</li> </ul> <div>",
		answer1: "Ambrette Seed",
		answer2: "Clary Sage",
		answer3: "Vanilla",
		answer4: "Sandalwood",
		answer5: "Cedarwood",
		correct: "E",
	},
	{question: "Which ingredient is missing? <div id='fragranceTitle'>Platinum Egoiste</div> <h4>Heart</h4> <ul> <li>Clary Sage</li> <li>Geranium</li> <li>???</li> </ul> <div>",
		answer1: "Iris",
		answer2: "Rose",
		answer3: "Galbanum",
		answer4: "Hyacinth",
		answer5: "Ylang Ylang",
		correct: "C",
	},
	{question: "Which ingredient is missing? <div id='fragranceTitle'>Platinum Egoiste</div> <h4>Head</h4> <ul> <li>Lavender</li> <li>???</li> <li>Petit Grain</li> </ul> <div>",
		answer1: "Rosemary",
		answer2: "Mandarin",
		answer3: "Coriander",
		answer4: "Bergamot",
		answer5: "Orange",
		correct: "A",
	},
	{question: "Which ingredient is missing? <div id='fragranceTitle'>No. 5 Core Structure</div> <h4>Trail</h4> <ul> <li>Vetiver</li> <li>???</li> <li>Sandalwood</li> </ul> <div>",
		answer1: "Benzoin",
		answer2: "Tonka Bean",
		answer3: "Vanilla",
		answer4: "Patchouli",
		answer5: "Cedarwood",
		correct: "C",
	},
	{question: "Which ingredient is missing? <div id='fragranceTitle'>No. 5 Pure Parfum</div> <h4>Heart</h4> <ul> <li>???</li> <li>Grasse Jasmine</li> <li>Ylang Ylang</li> </ul> <div>",
		answer1: "Narcissus",
		answer2: "Iris",
		answer3: "Lychee",
		answer4: "May Rose",
		answer5: "Geranium",
		correct: "D",
	},
	{question: "Which ingredient is missing? <div id='fragranceTitle'>No. 5 L'eau</div> <h4>Head</h4> <ul> <li>Aldehydes</li> <li>Neroli</li> <li>???</li> <li>Mandarin</li> <li>Lemon</li> </ul> <div>",
		answer1: "Peach",
		answer2: "Orange",
		answer3: "Lychee",
		answer4: "Bergamot",
		answer5: "Neroli",
		correct: "B",
	},
	{question: "Which ingredient is missing? <div id='fragranceTitle'>No. 5 L'eau</div> <h4>Trail</h4> <ul> <li>???</li> <li>Vanilla</li> <li>Sandalwood</li> <li>Cedarwood</li> </ul> <div>",
		answer1: "Musk",
		answer2: "Bergamot",
		answer3: "Tonka Bean",
		answer4: "Patchouli",
		answer5: "Vetiver",
		correct: "E",
	},
	{question: "Which ingredient is missing? <div id='fragranceTitle'>Coco Mademoiselle Core Structure</div> <h4>Trail</h4> <ul> <li>Patchouli</li> <li>???</li> <li>Vanilla</li> <li>Vetiver</li> </ul> <div>",
		answer1: "White Musk",
		answer2: "Bergamot",
		answer3: "Tonka Bean",
		answer4: "Sandalwood",
		answer5: "Jasmine",
		correct: "A",
	},
	{question: "Which ingredient is missing? <div id='fragranceTitle'>Coco Mademoiselle EDT</div> <h4>Heart</h4> <ul> <li>Rose</li> <li>???</li> <li>Lychee</li> </ul> <div>",
		answer1: "White Musk",
		answer2: "Geranium",
		answer3: "Tonka Bean",
		answer4: "Narcissus",
		answer5: "Jasmine",
		correct: "E",
	},
];

// random number generator for choosing questions //
const randomQuestion = () => {
	if (arr.length == questions.length) {
		endQuiz()
	} 
	else {
		let random = Math.floor(Math.random() * questions.length);
		if (arr.includes(random)) {
			randomQuestion();
		}
		else {
			renderQuestion(random);
			arr.push(random);
		};
	}
}

const renderQuestion = (i) => {
	// reset timer //
	count = 0;
	timerFill.style.width = "0%";
	question.innerHTML = "<h2>" + questions[i].question + "</h2>";
	a1.innerHTML = questions[i].answer1;
	a2.innerHTML = questions[i].answer2;
	a3.innerHTML = questions[i].answer3;
	a4.innerHTML = questions[i].answer4;
	a5.innerHTML = questions[i].answer5;
}

const checkAnswer = (answer) => {
	// find current question from array //
	let x = arr.length - 1;
	let i = arr[x];
	if (questions[i].correct == answer) {
		scoreAdder()
		updateScore()
		randomQuestion()
	} else {
		endQuiz();
	}
};

const start = () => {
	document.getElementById("quizHolder").style.display = "block";
	document.getElementById("startHolder").style.display = "none";
		countDown = setInterval(timer, 100);
		randomQuestion();
		updateScore();
};

const endQuiz = () => {
	clearInterval(countDown);
	document.getElementById("quizHolder").style.display = "none";
	document.getElementById("endHolder").style.display = "block";
	let scorePercent = Math.round(100 * (score / (questions.length * 3)));
	finalScore.innerHTML = "<h1>You Scored " + score +" Points! (" + scorePercent + "%)</h1>";

	let message = (scorePercent >= 80) ? "Amazing Job! You really know your stuff!" :
				(scorePercent >= 60) ? "Good Job! You know quite a lot!" :
				(scorePercent >= 40) ? "You're getting there! Why not give it another shot!" :
				(scorePercent >= 20) ? "Thats a good start! Have a quick look over the revision pages, then give it another go!" :
				 "Hmmm... Maybe you should try revising a little more?";
	endMessage.innerHTML = message;
};

const scoreAdder = () => {
	if (count <= 50) {
		score += 3;
	} else if (count <= 100) {
		score += 2;
	} else {
		score++;
	}
};

const updateScore = () => {
	currentScore.innerHTML = "<h2>Current Score: " + score +"</h2>"
}

const reset = () => {
	arr.length = 0;
	score = 0;
	document.getElementById("endHolder").style.display = "none";
	document.getElementById("startHolder").style.display = "block";
}

// Timer //
const total = 200;
let count = 0;

const timer = () => {
	if (count < total) {
		timerFill.style.width = (count / 2) + "%";
		timerColor()
		count++;
	} else {
		endQuiz()
	}
};

const timerColor = () => {
	if (count <= 25) {
		timerFill.style.backgroundColor = "#48ff00";
	} else if (count <= 50) {
		timerFill.style.backgroundColor = "#b0f442";
	} else if (count <= 75) {
		timerFill.style.backgroundColor = "#ffd000";
	} else if (count <= 100) {
		timerFill.style.backgroundColor = "#ffb428";
	} else if (count <= 150) {
		timerFill.style.backgroundColor = "#e85e14";
	} else {
		timerFill.style.backgroundColor = "#ef330e";
	}
};

begin.addEventListener("click", start);
a1.addEventListener("click", function() {checkAnswer("A"); });
a2.addEventListener("click", function() {checkAnswer("B"); });
a3.addEventListener("click", function() {checkAnswer("C"); });
a4.addEventListener("click", function() {checkAnswer("D"); });
a5.addEventListener("click", function() {checkAnswer("E"); });
playAgain.addEventListener("click", reset);
