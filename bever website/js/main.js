// Bever drop function

function dropImage() {
    var image = document.getElementById("beaver");
    image.style.display = "block"; 

    var yPos = 0; 
    var dropInterval = setInterval(function() {
      yPos += 1.5; 
      image.style.top = yPos + "rem";
      image.style.rotate = "-30deg"
      
     
      if (yPos >= window.innerHeight) {
        clearInterval(dropInterval);
        image.style.display = "none"; 
        image.style.top = "px"; 
        ;
      }
    }, 5); 
  }

// Bever drop function