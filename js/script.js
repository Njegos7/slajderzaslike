var slideIndex = 0;

function showSlides() {
  var i;
  var slajdovi = document.getElementsByClassName("slajd");
  var tackice = document.getElementsByClassName("kvadrat");
  for (i = 0; i < slajdovi.length; i++) {
    slajdovi[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slajdovi.length) {slideIndex = 1}    
  for (i = 0; i < tackice.length; i++) {
    tackice[i].className = tackice[i].className.replace("active", "");
  }
  slajdovi[slideIndex - 1].style.display = "block";  
  tackice[slideIndex - 1].className += "active";
  setTimeout(showSlides, 3000);
}
showSlides();
