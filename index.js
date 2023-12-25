function onClickNavManuToggle(){
    document.getElementById("nav-menu-btn").classList.toggle('is-active');
    document.body.classList.toggle("nav-hidden")
}

function reveal() {
    var reveals = document.querySelectorAll(".reveal");
  
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;
  
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }
  
  window.addEventListener("scroll", reveal);
  reveal()


  function onExploreClick(){
    console.log("explore---")
    document.getElementById("feed-section").scrollIntoView({ behavior: "smooth", inline: "nearest" });
  }