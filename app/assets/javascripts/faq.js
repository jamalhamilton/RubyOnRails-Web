
$("[id^=faqtoggle]").click(function(){
  $('#faqtarget'+ this.id.match(/\d+$/)[0]).toggle('fast');
  $("i", this).toggleClass("icon-down-dir icon-up-dir");
});


var theButtons = document.querySelectorAll(".faq-toggle-list");

// Turn node list into a JS Array
var buttonArray = Array.from(theButtons);

// Loop over the buttons and give each its click event handler
buttonArray.forEach(function(button){
  button.addEventListener("click", function(){ 
    // We will pass a reference to the current button to the function
    myFunction(this); 
  });
});

// The function now expects to be passed a reference to the button that was clicked
function myFunction(element) { 
  // Get a reference to div that follows the button and then search that div
  // for the first div element inside of it:
  var answer = element.nextElementSibling.querySelector("div");
  
  // All we need to do is toggle the visibility of that pre element
  answer.classList.toggle("hidden");
}


    function findFAQ() {
      var input, filter, ul, li, a, i, txtValue;
      
      input = document.getElementById("myInput");
      filter = input.value.toUpperCase();
      ul = document.getElementById("faqall");
      li = ul.getElementsByTagName("li");
      for (i = 0; i < li.length; i++) {
          
          a = li[i].getElementsByTagName("button")[0];
          b = li[i].getElementsByTagName("div")[0];
          txtValue = a.textContent || a.innerText;
           if (filter && txtValue.toUpperCase().indexOf(filter) > -1) {
              a.style.display = "block";
              b.style.display = "block";
              
          } else {
              a.style.display = "none";
              b.style.display = "none";
          }
    }
    }
