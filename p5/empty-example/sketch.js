
var main = document.getElementById("body");



window.addEventListener("scroll", function(e) {


  if(window.scrollY > 300) {
    
    console.log("hey 300 happened!")
    main.style.backgroundColor = "aqua";
    
    
  } else if (window.scrollY < 300) {
    
    main.style.backgroundColor = "hotpink";
  }
  
  
  console.log(window.scrollY);
  
})