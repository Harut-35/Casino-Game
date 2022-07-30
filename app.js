let submite = document.getElementById('submite');
let coins = document.getElementById('coins');
let balance = document.getElementById('balance');
let hint = document.getElementById('hint');
let random = document.getElementById('random');
let result = document.getElementById('result');


submite.addEventListener('click',() =>{

    if(+hint.value >= 0 && +hint.value <= 10 && +coins.value >= 50 && + +balance.innerText >= +coins.value){

        random.value = Math.round (Math.random()* 10);
        balance.innerText = +balance.innerText - coins.value;

        if (+hint.value === +random.value  ) {
            balance.innerText = +balance.innerText + coins.value*10;
            result.value = "YOU WIN";
        }  else if ( +balance.innerText === 0 ) {

            result.value = "GAME OVER";
    
    
        } 
        else {
            result.value = "YOU LOSE";

        } 
    } 
}

)
