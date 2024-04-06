window.addEventListener('scroll', function() {
    let header = document.querySelector('.header');
    let links = document.querySelectorAll('.a_tag');
    if (window.scrollY > 0) {
      header.classList.add('gray');
      header.classList.remove('transparent');
      Array.from(links).forEach(function(link) {
        link.style.color = '#424244';
      });
    } else {
      header.classList.remove('gray');
      header.classList.add('transparent');
      Array.from(links).forEach(function(link) {
        link.style.color = '#ffff';
        link.addEventListener('mouseenter', function() {
            link.style.color = '#FF6700';
          });
        
          
          link.addEventListener('mouseleave', function() {
            link.style.color = ''; 
          });
      });
    
    }
  });
  var cardsData = {
    card1: {
      title: "Book Flight",
      about: "book memorable journey with our flight booking services! we're thrilled to present you flight options to suit your travel needs.",
      imgAddress: "Unilab_img/image 2 (1).png"
    },
    card2: {
      title: "Book Hotels",
      about: "book memorable journey with our flight booking services! we're thrilled to present you flight options to suit your travel needs.",
      imgAddress: "Unilab_img/image 2 (2).png"
    },
    card3: {
      title: "Book Cruises",
      about: "book memorable journey with our flight booking services! we're thrilled to present you flight options to suit your travel needs..",
      imgAddress: "Unilab_img/image 2 (3).png"
    },
    card4: {
        imgAddress: "Unilab_img/image 2.png",
      about: "book memorable journey with our flight booking services! we're thrilled to present you flight options to suit your travel needs.",
      title: "Book family Vacation",
      
            
    }
  };
  
  function createCard(cardInfo) {
    var card = document.createElement('div');
    card.classList.add('card');

  
    var title = document.createElement('h2');
    title.textContent = cardInfo.title;
    title.style.color="#424244"
  
    var about = document.createElement('p');
    about.textContent = cardInfo.about;
    about.style.color="#424244"
  
    var img = document.createElement('img');
    img.src = cardInfo.imgAddress;
    img.alt = cardInfo.title;

    
  
    card.appendChild(img);
    card.appendChild(title);
    card.appendChild(about);
    
  
    return card;
  }
  
  
  var cardContainer0 = document.getElementById('cardContainer0');
  var cardContainer = document.getElementById('cardContainer');

  let h1 = document.createElement("h1");
   h1.textContent = "Discover Our Services";
  let p = document.createElement("p");
//   p.stle.width="800px"y
  p.textContent = "ExploreEra provides a one-stop solution for individuals seeking well-planned journeys.  These services include expert advice on destination selection, flight and accommodation bookings, and customized itineraries to individual preferences.";
  cardContainer0.appendChild(h1);
    cardContainer0.appendChild(p);
 
  for (var key in cardsData) {
    var newCard = createCard(cardsData[key]);
    var cardSection = document.createElement('section');
    cardSection.classList.add('card-section');
    cardSection.appendChild(newCard);
    cardContainer.appendChild(cardSection);
    

  }
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
 
  