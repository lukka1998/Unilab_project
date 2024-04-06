function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  function myFunction1() {
    document.getElementById("myDropdown1").classList.toggle("show");
  }
  function  myFunction2(){
    document.getElementById("myDropdown2").classList.toggle("show");
  }
  
  // Close the dropdown if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }
  let form=document.querySelector("form");
  let formflex=document.querySelector(".modals-flex")
  let arrspan =document.querySelectorAll(".click");
  let header=document.querySelector(".header1")
  let footer=document.querySelector("footer")
  let elememntbody=document.body;
  for(let i of arrspan){
    i.addEventListener("click",function(){
        form.style.display="none"
        formflex.style.display="block"
        header.style.top="0"
        header.style.zIndex="-3"
        footer.style.position="fixed"
        footer.style.bottom="0"
        footer.style.zIndex="-4"


       
        
      })
  }