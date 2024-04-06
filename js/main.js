window.onload = function(){//EFEITO MAQUINA DE ESCREVER
  var txtTitulo = 'João Enrique Barbosa Santos Alves';
  var txt1 = document.getElementById("titulo");
  var speed = 100;
  var cont = 0;

  const delay = (delayInms) => {
    return new Promise(resolve => setTimeout(resolve, delayInms));
  }
  

  async function typeWriter () {
      if(cont < txtTitulo.length){
        txt1.innerHTML += txtTitulo.charAt(cont) + "<a class='barra-escrita'>|<a>";
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
};
//EFEITO APARECER
window.addEventListener("scroll", () => {

  document.querySelectorAll(".esquerda").forEach((animacao, index) => {
      if(animacao.getBoundingClientRect().top < window.innerHeight - 50){

          animacao.classList.add("efeitoScroll")

      }
  })

  document.querySelectorAll(".direita").forEach((animacao, index) => {
      if(animacao.getBoundingClientRect().top < window.innerHeight - 50){

          animacao.classList.add("efeitoScroll")

      }
  })

  document.querySelectorAll(".baixo").forEach((animacao, index) => {
      if(animacao.getBoundingClientRect().top < window.innerHeight - 50){

          animacao.classList.add("efeitoScroll")

      }
  })

  document.querySelectorAll(".cima").forEach((animacao, index) => {
    if(animacao.getBoundingClientRect().top < window.innerHeight - 50){

        animacao.classList.add("efeitoScroll")

    }
})


//MUDAR COR DO MENU AO DESCER
  $(function() {
      $(window).on("scroll", function() {
        if($(window).scrollTop() > 100) {
          $(".Menu-descer").addClass("bg-blue");
        } else {
          $(".Menu-descer").removeClass("bg-blue");
        }
      });
    });
})

// VALIDAR FORMULARIO
(function () {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  var forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.prototype.slice.call(forms)
    .forEach(function (form) {
      form.addEventListener('submit', function (event) {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }
      
        form.classList.add('was-validated')
      }, false)
    })
})()