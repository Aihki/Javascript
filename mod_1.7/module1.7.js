let dice_amount =  +prompt('how many dice you want to throw')

let dice_sum = 0
for(let i =1 ; i <= dice_amount; i++ ){
    let dice = Math.ceil(Math.random() * 6) 
    console.log(dice)
    dice_sum += dice
}
document.body.textContent = 'noppien summa ' +  dice_sum