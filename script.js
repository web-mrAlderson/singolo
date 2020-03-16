let NAV = document.getElementById('nav'),
	SLIDES  		= document.getElementsByClassName('sliders-item'),
	navheader		= document.getElementById('navheader'),
	layout4			= document.getElementById('layout4'),
	prevBtn 		= document.getElementById('left-button'),
	nextBtn 		= document.getElementById('right-button'),
	iPhone2 		= document.getElementById('iPhone2'),
	click			= document.getElementById('click'),
	click1			= document.getElementById('click1'),
	navItemWork		= document.getElementById('navItemWork'),
	navItemWork2	= document.getElementById('navItemWork2'),
	navItemWork3	= document.getElementById('navItemWork3'),
	navItemWork4	= document.getElementById('navItemWork4'),
	button			= document.getElementById('btn'),
	closeButton		= document.getElementById('closeBtn'),
	clickPortfolio	= document.getElementById('portfolioImge'),
	slideIndex 		= 1;



NAV.addEventListener('click', (event) => {
	NAV.querySelectorAll('a').forEach(el => el.classList.remove('active'));
	event.target.classList.add('active');
});
layout4.addEventListener('click', (event) => {
	layout4.querySelectorAll('img').forEach(el => el.classList.remove('itemActive'));
	event.target.classList.add('itemActive');
});
navheader.addEventListener('click', (event) => {
	navheader.querySelectorAll('a').forEach(el => el.classList.remove('active2'));
	event.target.classList.add('active2');
});
button.addEventListener('click', (e) => {
	let subject 	= document.getElementById('subject').value.toString();
	let description = document.querySelector('textarea').value.toString();
	let name 		= document.getElementById('name').value.toString();
	let mail		= document.getElementById('email').value.toString();
	if(mail.length == 0){
		return;
	}
	if(name.length == 0){
		return;
	}
	if(subject.length == 0){
		subject = "Без темы";
	}
	if(description.length == ""){
		description = "Без описания"; 
	}
	document.getElementById('result').innerText = subject;
	document.getElementById('descript').innerText = description;
	document.getElementById('message-block').classList.remove('hidden');
	e.preventDefault();
});
closeButton.addEventListener('click', () => {
	document.getElementById('result').innerText = '';
	document.getElementById('message-block').classList.add('hidden');
});


//Slider
showSliders(slideIndex);

function showSliders(n) {
	if (n < 1) {
		slideIndex = SLIDES.length;
	}
	else if (n > SLIDES.length) {
		slideIndex = 1;
	}
	for (let i = 0; i < SLIDES.length; i++) {
		SLIDES[i].style.display = 'none';
	}
	SLIDES[slideIndex - 1].style.display = 'block'
}

function plusSlides(n) {
	showSliders(slideIndex += n);
}
prevBtn.onclick = function () {
	plusSlides(-1);
}
nextBtn.onclick = function () {
	plusSlides(1);
}


// iPhone Screens
function FuncImages() {
	document.getElementById("elem").style.display = "block";
	document.getElementById("click").style.display = "none";
}
function FuncImages2() {
	document.getElementById("elem1").style.display = "block";
	document.getElementById("click1").style.display = "none";
}

click.onclick = function () {
	FuncImages();
}
click1.onclick = function () {
	FuncImages2();
}

let elems = Array.from(layout4.getElementsByTagName('*'))
function shuffle(elems) {
	let currentIndex = elems.length; 
	let randomIndex;
	let temporaryValue;
	while (0 !== currentIndex) {
  
	  randomIndex = Math.floor(Math.random() * currentIndex);
	  currentIndex -= 1;
  
	  temporaryValue = elems[currentIndex];
	  elems[currentIndex] = elems[randomIndex];
	  elems[randomIndex] = temporaryValue;
	}
	for(let i = 0; i < elems.length; i++)
		layout4.append(elems[i]);
  	}
  function removeChildren(layout4) {
		var children = layout4.childNodes
		while(children.length) {
			layout4.removeChild(children[0])
		}
	}
	
  navItemWork.onclick = function () {
	removeChildren(layout4);
	shuffle(elems);
}
navItemWork2.onclick = function () {
	removeChildren(layout4);
	shuffle(elems);
}
navItemWork3.onclick = function () {
	removeChildren(layout4);
	shuffle(elems);
}
navItemWork4.onclick = function () {
	removeChildren(layout4);
	shuffle(elems);
}