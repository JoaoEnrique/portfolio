window.onload = function(){
  var txtTitulo = 'João Enrique Alves';
  var txt1 = document.getElementById("name");
  
  var speed = 100;
  var cont = 0;

  const delay = (delayInms) => {
      return new Promise(resolve => setTimeout(resolve, delayInms));
    }

    async function typeWriter () {
      if(cont < txtTitulo.length){
        txt1.innerHTML += txtTitulo.charAt(cont) + "<span class='barra-escrita'>|<span>";
        cont++;
        setTimeout(typeWriter, speed);
        if(cont < txtTitulo.length){
          let delayres = await delay(100);
          txt1.innerHTML = txt1.innerHTML.replace("|", "")
        }
      }else{
        cont = 0;
      }
      }

    typeWriter();
    // active_link()



    
  $(function() {
    $(window).on("scroll", function() {
      if($(window).scrollTop() > 100) {
        $(".navbar").addClass("bg-dark");
      } else {
        $(".navbar").removeClass("bg-dark");
      }
    });
  });
};



// // CARROUSEL LINGUAGENS
// Function to initialize carousels
function initCarousel(carousel) {
const controls = carousel.querySelectorAll(".control");
let currentItem = 0;
const items = carousel.querySelectorAll(".card-tecnologies");
const maxItems = items.length;

controls.forEach((control) => {
  control.addEventListener("click", (e) => {
    isLeft = e.target.classList.contains("arrow-left");

    if (isLeft) {
      currentItem -= 1;
    } else {
      currentItem += 1;
    }

    if (currentItem >= maxItems) {
      currentItem = 0;
    }

    if (currentItem < 0) {
      currentItem = maxItems - 1;
    }

    items[currentItem].scrollIntoView({
      behavior: "smooth",
      inline: "center",
    });
  });
});
}

// Initialize each carousel on the page
document.querySelectorAll(".carousel").forEach(initCarousel);





// MUDAR COR DO MENU AO ROLAR PAGE
window.addEventListener("scroll", () => {
  $(function() {
      $(window).on("scroll", function() {
        if($(window).scrollTop() > 100) {
          $(".navbar").addClass("bg-dark");
        } else {
          $(".navbar").removeClass("bg-dark");
        }
      });
    });
})


// Função para verificar quando a div#sobre está visível na janela
// function active_link(){
// function isElementInViewport(el) {
//     if(el){
//         var rect = el.getBoundingClientRect();
//         console.log("--")
//         return (
//             rect.top >= 0 &&
//             rect.bottom < ((window.innerHeight || document.documentElement.clientHeight) + 100)
//         );
//     }
// }

// // Função para adicionar a classe "active" ao link quando a div#sobre estiver visível
// function checkSobreVisibility() {
//     var linkHome = document.getElementById('link-home');
//     var linkTecnologia = document.getElementById('link-tecnologias');
//     var linkService = document.getElementById('link-service');
//     var linkProject = document.getElementById('link-project');
//     // var linkContact = document.getElementById('link-contact');

//     var divHome = document.getElementById('home');
//     var divTecnologia = document.getElementById('tecnologias');
//     // var divContact = document.getElementById('contact');

//     if (isElementInViewport(divHome)) {
//         linkHome.classList.add('active');
//     } else {
//         linkHome.classList.remove('active');
//     }

//     if (isElementInViewport(divTecnologia)) {
//       linkTecnologia.classList.add('active');
//     } else {
//       linkTecnologia.classList.remove('active');
//     }

// }


// // Verificar a visibilidade da div#sobre ao carregar a página e ao rolar
// window.addEventListener('load', checkSobreVisibility);
// window.addEventListener('scroll', checkSobreVisibility);
// }


document.addEventListener('DOMContentLoaded', function () {
  // Function to initialize carousels
  function initCarousel(carousel) {
      const controls = carousel.querySelectorAll(".control");
      let currentItem = 0;
      const items = carousel.querySelectorAll(".card-tecnologies");
      const maxItems = items.length;

      controls.forEach((control) => {
          control.addEventListener("click", (e) => {
              const isLeft = e.target.classList.contains("arrow-left");

              if (isLeft) {
                  currentItem = (currentItem - 1 + maxItems) % maxItems;
              } else {
                  currentItem = (currentItem + 1) % maxItems;
              }

              items[currentItem].scrollIntoView({
                  behavior: "smooth",
                  inline: "center",
              });
          });
      });
  }

  // Initialize each carousel on the page
  document.querySelectorAll(".carousel").forEach(initCarousel);
});




console.log('%cDesenvolvido pelo João Enrique', 'font-size: 30px; color: red;');
console.log('%cwww.github.com/joaoenrique', 'font-size: 20px; color: red;');