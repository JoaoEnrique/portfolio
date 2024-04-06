const btnSim = document.getElementById("btnSim")//botao sim
const btnNao = document.getElementById("btnNao")//botao nao



//chamar funcao que cria efeito ao clicar no btnSim
btnSim.addEventListener("click", function(){
    createParticles();
    setTimeout(function() {
        location.reload()
    }, 1000);
})


//Funcao para mover o botao
function moverBotao() {
    //pega tamanho da tela para o botao nao ultrapassar
    const altura = window.innerHeight;
    const largura = window.innerWidth;

    //gera posicao aleatoria
    const novaPosicaoX = Math.floor(Math.random() * (largura - 100)) + 1;
    const novaPosicaoY = Math.floor(Math.random() * (altura - 100)) + 1;

    //define a posicao
    btnNao.style.top = `${novaPosicaoY}px`;
    btnNao.style.left = `${novaPosicaoX}px`;
}

//chama funcao moverBotao ao passar o mouse no botao
btnNao.addEventListener("mouseover", function() {
    moverBotao();
});



//EFEITO DE PARTICULAS
//obs: não sei como foi feito, apenas copiei
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const width = canvas.width = window.innerWidth;
const height = canvas.height = window.innerHeight;

const particles = [];

function Particle() {
  this.x = width / 2;
  this.y = height / 2;
  this.vx = Math.random() * 7 - 2.5;
  this.vy = Math.random() * 7 - 2.5;
  this.color = 'rgb(' + Math.floor(Math.random() * 255) + ',' +
               Math.floor(Math.random() * 255) + ',' +
               Math.floor(Math.random() * 255) + ')';
  this.radius = Math.random() * 10 + 2;
  this.alpha = 1;
}

Particle.prototype.draw = function() {
  ctx.globalAlpha = this.alpha;
  ctx.beginPath();
  ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
  ctx.fillStyle = this.color;
  ctx.fill();
};

Particle.prototype.update = function() {
  this.x += this.vx;
  this.y += this.vy;
  this.radius -= 0.05;
  this.alpha -= 0.01;
};

function createParticles() {
  for (let i = 0; i < 100; i++) {
    const particle = new Particle();
    particles.push(particle);
  }
}

function drawParticles() {
  ctx.clearRect(0, 0, width, height);

  for (let i = 0; i < particles.length; i++) {
    particles[i].draw();
    particles[i].update();

    if (particles[i].alpha <= 0) {
      particles.splice(i, 1);
    }
  }
}

//createParticles();
setInterval(drawParticles, 30);