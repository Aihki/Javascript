let dices = +prompt('how many dice you want to throw')
let ammount = +prompt('what sum you want')

let snake_eye = 0
for(let i =1 ; i <= 10000; i++ ) {
    dice_sum = 0
    for(let j = 1; j <= dices; j++ ) {
        let dice = Math.floor(Math.random()*6)+1 
        dice_sum += dice
        console.log('noppa' + dice)
        console.log(dice_sum)
        if(ammount === dice_sum)
            snake_eye++
          
     
            
    }
} 
let probability = ((snake_eye/ 10000) * 100).toFixed(2)      
document.body.textContent = 'probability to get sum ' + ammount + ' with ' + dices + ' dices is ' + probability  
