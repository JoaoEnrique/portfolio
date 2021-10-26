window.onload = function(){
    var txtTitulo = 'João Enrique Barbosa Santos Alves';
    var txt1 = document.getElementById("titulo");
    
    var speed = 100;
    var cont = 0;

    function typeWriter () {
      if(cont < txtTitulo.length){
        txt1.innerHTML += "<u>" + txtTitulo.charAt(cont) + "</u>";
        cont++;
        setTimeout(typeWriter, speed);
       }else{
         cont = 0;
       }
      }

     typeWriter();
  };
  



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


    $(function() {
        $(window).on("scroll", function() {
          if($(window).scrollTop() > 100) {
            $(".Menu-descer").addClass("teste2");
          } else {
            $(".Menu-descer").removeClass("teste2");
          }
        });
      });
})

