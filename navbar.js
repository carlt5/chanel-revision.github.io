
const navload = () => {
	const navbar = document.getElementById("navbody");

	navbar.innerHTML = 
			`<nav>
		<ul id="nav">
			<li><img src="../fragrance_imgs/chanellogo.jpg" height="65px"></li>
			<li><a href="../index.html">HOME</a></li>
			<li class="dropdown">
				<p class="dropbtn">HERITAGE RANGE</p>
				<div class="dropdown-content">
					<a href="../heritage/no5.html"><div>No. 5</div></a>
					<a href="../heritage/cocomlle.html"><div>Coco Madamoiselle & Coco Noir</div></a>
					<a href="../heritage/allure.html"><div>Allure</div></a>
					<a href="../heritage/coco.html"><div>Coco</div></a>
					<a href="../heritage/no19.html"><div>No. 19</div></a>
					<a href="../heritage/cristalle.html"><div>Cristalle</div></a>
					<a href="../heritage/allurehomme.html"><div>Allure Homme</div></a>
					<a href="../heritage/egoiste.html"><div>Egoiste/Platinum Egoiste</div></a>
					<a href="../heritage/pourmonsieur.html"><div>Pour Monsieur & Antaeus</div></a>
				</div>
			</li>
			<li class="dropdown">
				<p class="dropbtn">LES EXSCLUSIFS</p>
				<div class="dropdown-content">
					<a href="../exsclusifs/roaring20.html"><div>The Roaring 20's</div></a>
					<a href="../exsclusifs/locations.html"><div>The Favourite Locations</div></a>
					<a href="../exsclusifs/addressoal.html"><div>The Address of a Lifetime</div></a>
					<a href="../exsclusifs/gabrielleahcf.html"><div>Gabrielle Chanel and Her Close Friends</div></a>
					<a href="../exsclusifs/leseaux.html"><div>Les Eaux</div></a>
				</div>
			</li>
			<li class="dropdown">
				<p class="dropbtn">OTHER</p>
				<div class="dropdown-content">
					<a href="../other/olfactory.html"><div>Olfactory Families</div></a>
					<a href="../other/odourfacets.html"><div>Odour Facets</div></a>
					<a href="../other/notableaccords.html"><div>Notable Accords</div></a>
					<a href="../other/timeline.html"><div>Chanel History Timeline</div></a>
				</div>
			</li>
			<li class="dropdown" id="questionmark">
				<i class="far fa-question-circle"></i>
				<div class="dropdown-content rightDrop" id="quizdrop">
					<a href="../quizs/quiz1.html"><div>Quiz 1. Ingredients</div></a>
					<a href="../quizs/quiz2.html"><div>Quiz 2. Which Fragrance?</div></a>
					<a href="../quizs/quiz3.html"><div>Quiz 3. The Big Quiz!</div></a>
				</div>
			</li>
		</ul>
	</nav>`
};

navload()