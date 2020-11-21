var podcastslideIndex = 1;
podcastshowSlides(podcastslideIndex);



function podcastcurrentSlide(m) {
  podcastshowSlides(podcastslideIndex = m);
}

function podcastshowSlides(m) {
  var j;
  var podcastslides = document.getElementsByClassName("podcastSlides");
  var podcastdots = document.getElementsByClassName("podcastdot");
  if (m > podcastslides.length) {podcastslideIndex = 1}    
  if (m < 1) {podcastslideIndex = podcastslides.length}
  for (j = 0; j < podcastslides.length; j++) {
      podcastslides[j].style.display = "none";  
  }
  for (j = 0; j < podcastdots.length; j++) {
      podcastdots[j].className = podcastdots[j].className.replace(" podcastactive", "");
  }
  podcastslides[podcastslideIndex-1].style.display = "block";  
  podcastdots[podcastslideIndex-1].className += " podcastactive";
}