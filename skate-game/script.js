const skate = document.querySelector('.skate');
const background = document.querySelector('.background');
let isJumping = false;
let isAtualizar = false;
let position = 0;
let xp = 0;

function handleKeyUp(event) {
    if (event.keyCode === 32) {
        if (!isJumping){
            jump();
        }
    }
}

function jump() { 


    isJumping = true;

    let upInterval = setInterval(() => {
       if (position >= 150) {
        clearInterval(upInterval);

        //descendo
        let downInterval = setInterval(() => {
            if (position <= 0) {
               clearInterval(downInterval); 
               isJumping = false;
            } else {
                position -= 20;
                skate.style.bottom = position + 'px';
            }


        }, 20);

       } else{
           //subindo
        position += 20;
        skate.style.bottom = position + 'px';
        
       }
    

    }, 20);
}

function createcone() {
    const cone = document.createElement('div');
    let conePosition = 1000;
    let randomTime = Math.random() * 8000;


    cone.classList.add('cone');
    cone.style.left = 1000 + 'px';
    background.appendChild(cone);

    let leftInterval = setInterval(() => {
        

        if (conePosition < -60) {
            clearInterval(leftInterval);
            background.removeChild(cone);

            xp += 1;
            document.getElementById("xp").innerHTML = "Pontos: " + xp + " xp";

        } else if (conePosition > 0 && conePosition < 60 && position < 60) {
            //game over

            clearInterval(leftInterval);
            document.body.innerHTML = '<div class="container"><img src="game-over.png" class="game-over"></div><div class="container"><button onClick="window.location.reload();" class="button">Jogar Novamente</button></div>';
            

        } else {
            conePosition -= 10;
            cone.style.left = conePosition + 'px';
        }
    }, 20);

    setTimeout(createcone, randomTime)
}

createcone();
document.addEventListener('keyup', handleKeyUp);






