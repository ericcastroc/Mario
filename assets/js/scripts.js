const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const gameOver = document.querySelector('.game-over-soon');
const exit = document.querySelector('.exit');
const continueButtom = document.querySelector('.continue');


continueButtom.addEventListener("click", function(){
    location.reload();
})

exit.addEventListener("click", function(){
    window.location.href = "https://github.com/ericcastroc/Mario";
})
function jump(){
    mario.classList.add('jump');

    setTimeout(() =>{

        mario.classList.remove('jump');
    },500);
}

const loop = setInterval(() =>{


    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');

   if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {
    
    pipe.style.animation = 'none';
    pipe.style.left = `${pipePosition}px`;

    mario.style.animation = 'none';
    mario.style.bottom = `${marioPosition}px` ;
   
    mario.src ='https://github.com/ericcastroc/Mario/blob/main/image/game-over.png?raw=true';
    mario.style.width = '70px';
    mario.style.marginLeft = '50px';

    gameOver.src = "https://github.com/ericcastroc/Mario/blob/main/image/game-over-soon.png?raw=true";
    continueButtom.src = "https://github.com/ericcastroc/Mario/blob/main/image/continue.png?raw=true";
    exit.src ="https://github.com/ericcastroc/Mario/blob/main/image/exit.png?raw=true";
    clearInterval(loop);
   }

},10);


document.addEventListener('keydown', jump);