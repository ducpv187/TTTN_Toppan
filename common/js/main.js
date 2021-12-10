
var slideIndex = 1;
var t = 5000;

showSlides(slideIndex);

function currentSlide(n) {
	showSlides(slideIndex = n);
	t = 1000000;
}
function showSlides(n) {
	var i;
	var slides = document.getElementsByClassName("mySlides");
	var mySlides__process = document.getElementsByClassName("mySlides__process");
	var thumb = document.getElementsByClassName("thumb-main thumb");
	// console.log(mySlides__process);
	if (n > slides.length) { slideIndex = 1 }
	if (n < 1) { slideIndex = slides.length }
	for (i = 0; i < slides.length; i++) {
		slides[i].style.display = "none";
		slides[i].classList.remove("active");
		mySlides__process[i].classList.remove("active");
	}
	slides[slideIndex - 1].style.display = "block";
	slides[slideIndex - 1].classList.add("active");
	mySlides__process[slideIndex - 1].classList.add("active");
	for (i = 0; i < thumb.length; i++) {
		thumb[i].className = thumb[i].className.replace(" active", "");
	}
	thumb[slideIndex-1].className += " active";

	//mobile
	for(var i=0;i<mySlides__process.length;i++){
		if(mySlides__process[i].className === 'mySlides__process active'){
			var thumbProcess = mySlides__process[i].getElementsByClassName("thumb-process thumb");
			for (i = 0; i < mySlides__process.length; i++) {
				thumbProcess[i].className = thumbProcess[i].className.replace(" active", "");
			}
			thumbProcess[slideIndex-1].className += " active";
		}
		
	}
		slideIndex++;
		if (slideIndex > slides.length) { slideIndex = 1 }
		if (slideIndex < 1) { slideIndex = slides.length }
		setTimeout(showSlides, t);	
}
function myTabs(evt, name) {
	var i, tabcontent, tablinks, tab;
	tabcontent = document.getElementsByClassName("tabcontent__product");
	for (i = 0; i < tabcontent.length; i++) {
		tabcontent[i].style.display = "none";
	}
	tablinks = document.getElementsByClassName("tablinks__product");
	// console.log(tablinks);
	for (i = 0; i < tablinks.length; i++) {
		tablinks[i].className = tablinks[i].className.replace(" active", "");
	}
	document.getElementById(name).style.display = "block";
	evt.currentTarget.className += " active";
	tab = document.getElementById("mainTab");
	var index = $('.tablinks__product').filter('.active').index() + 1;
	if(index == 1){
		tab.classList.remove("center");
		tab.classList.remove("right");
		tab.classList.add("left");
	}
	if(index == 2){
		tab.classList.remove("left");
		tab.classList.remove("right");
		tab.classList.add("center");
	}
	if(index == 3){
		tab.classList.remove("center");
		tab.classList.remove("left");
		tab.classList.add("right");
	}
}
function myTabs__search(evt, name) {
	//search
	var i, tablinks__search, tabcontent__search;
	tabcontent__search = document.getElementsByClassName("tabcontent__search");
	for (i = 0; i < tabcontent__search.length; i++) {
		tabcontent__search[i].style.display = "none";
	}
	tablinks__search = document.getElementsByClassName("tablinks__search");
	for (i = 0; i < tablinks__search.length; i++) {
		tablinks__search[i].className = tablinks__search[i].className.replace(" active", "");
	}
	document.getElementById(name).style.display = "block";
	evt.currentTarget.className += " active";
	tab = document.getElementById("mainTab__search");
	var index = $('.tablinks__search').filter('.active').index() + 1;
	if(index == 1){
		tab.classList.remove("center");
		tab.classList.remove("right");
		tab.classList.add("left");
	}
	if(index == 2){
		tab.classList.remove("left");
		tab.classList.remove("right");
		tab.classList.add("center");
	}
	if(index == 3){
		tab.classList.remove("center");
		tab.classList.remove("left");
		tab.classList.add("right");
	}
}
$(function () {

	//Scroll event
	$(window).scroll(function () {
		var scrolled = $(window).scrollTop();
		if (scrolled > 300) $('.go-top').fadeIn('slow');
		if (scrolled < 300) $('.go-top').fadeOut('slow');
	});

	//Click event
	$('.go-top').click(function () {
		$("html, body").animate({ scrollTop: "0" }, 500);
	});

});
// $(".active").siblings().css({"color": "red", "border": "2px solid red"});

