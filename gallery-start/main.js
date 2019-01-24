//MDN function exercise

var displayedImage = document.querySelector('.displayed-img');
var thumbBar = document.querySelector('.thumb-bar');

btn = document.querySelector('button');
var overlay = document.querySelector('.overlay');

/* Looping through images to add all images to the thumbar*/

var addImages = function(){
	for (var i = 1; i<=5; i++){
		var newImage = document.createElement('img');
		newImage.setAttribute('src', `images/pic${i}.jpg`);
		thumbBar.appendChild(newImage);
	}
}

addImages();
/* Wiring up the Darken/Lighten button */


var darkenLighten = function(){
	if (btn.textContent === "Darken"){
		overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';
		btn.setAttribute('class','light');
		btn.textContent = 'Lighten';
	} else {
		overlay.style.backgroundColor = 'rgba(0,0,0,0)';
		btn.setAttribute('class','dark');
		btn.textContent ='Darken';
	}
}

btn.addEventListener('click',darkenLighten)

// Set thumbar images to main after clicking

var thumbImages = document.querySelectorAll('img');

var message = function(){
	console.log(this.src);
}

var setMain = function(){
	displayedImage.setAttribute('src',this.src);
}

var addEvents = function(){
	for (var i=0; i<thumbImages.length; i++){
		thumbImages[i].addEventListener('click',setMain)
	}
}

addEvents();
