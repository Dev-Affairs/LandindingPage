const moblieViewQueryList = window.matchMedia("(max-width: 768px)");

function onClickNavManuToggle(){
    document.getElementById("nav-menu-btn").classList.toggle('is-active');
    document.body.classList.toggle("nav-hidden")
}

function reveal() {
    // console.log(window.innerWidth)
    if(moblieViewQueryList.matches){
        var view_reveals = document.querySelectorAll(".small-view-reveal");
      
        for (var i = 0; i < view_reveals.length; i++) {
          var windowHeight = window.innerHeight;
          var elementTop = view_reveals[i].getBoundingClientRect().top;
          var elementVisible = 150;
      
          if (elementTop < windowHeight - elementVisible) {
            view_reveals[i].classList.add("active");
          } else {
            view_reveals[i].classList.remove("active");
          }
        }
    }
    else{
        var view_reveals = document.querySelectorAll(".large-view-reveal");
      
        for (var i = 0; i < view_reveals.length; i++) {
          var windowHeight = window.innerHeight;
          var elementTop = view_reveals[i].getBoundingClientRect().top;
          var elementVisible = 150;
      
          if (elementTop < windowHeight - elementVisible) {
            view_reveals[i].classList.add("active");
          } else {
            view_reveals[i].classList.remove("active");
          }
        }
    }
  }
  
  window.addEventListener("scroll", reveal);
  reveal()


  function onExploreClick(){
    document.getElementById("feed-section").scrollIntoView({ behavior: "smooth", inline: "nearest" });
  }