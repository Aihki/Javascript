/*Write a function that returns a random dice roll between 1 and 6. 
The function should not have any parameters. Write a main program that 
rolls the dice until the result is 6. The main program should print out the 
result of each roll in an unordered list (<ul>).
*/

const numbers = []

while(true) {
    let numb = prompt('Enter a number: ')

    if(numbers.includes(numb)){
        console.log('hups taisi tulla sama luku toisee kertaa')
        break
    }else{
    numbers.push(numb)
    }

    
}

numbers.sort((a, b) => a-b)  
document.querySelector('#number').innerHTML = numbers
