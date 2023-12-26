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

  function takeToMailClientOnClick(){
    let firstname = document.getElementById("firstname").value;
    let lastname = document.getElementById("lastname").value;
    let email = document.getElementById("email").value;
    let emailSubject = document.getElementById("email-subject").value;
    let emailContent = document.getElementById("email-content").value;

    if(emailSubject && emailContent){
      var emailLinkStr = `mailto:business@devaffairs.com?subject=${emailSubject}&body=${emailContent}`
      window.location = emailLinkStr;
    }
  }