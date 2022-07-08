const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const gameOver = document.querySelector('.game-over-soon-before');
const exit = document.querySelector('.exit-before');
const continueButtom = document.querySelector('.continue-before');
var count = document.querySelector('.count')
var countNumber = 0;


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

const loopScore = setInterval(() =>{
    countNumber = countNumber + 1;
    count.innerHTML = countNumber;
},150);

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

    gameOver.classList.add('game-over-soon');
    gameOver.src = "https://github.com/ericcastroc/Mario/blob/main/image/game-over-soon.png?raw=true";
    continueButtom.classList.remove('continue-before');
    continueButtom.classList.add('continue');
    continueButtom.src = "https://github.com/ericcastroc/Mario/blob/main/image/continue.png?raw=true";
    exit.classList.remove('exit-before');
    exit.classList.add('exit');
    exit.src ="https://github.com/ericcastroc/Mario/blob/main/image/exit.png?raw=true";
    clearInterval(loop);
    clearInterval(loopScore);
   }

},10);


document.addEventListener('keydown', jump);