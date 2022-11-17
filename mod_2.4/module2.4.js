/*Write a program that asks the user for numbers until he gives zero. 
The given numbers are printed in
 the console from the largest to the smallest. 
*/

const numbers = []



while (true) {
    let numb = prompt('Enter a number: ')
    numbers.push(numb)

    if (numb == 0) break
}
numbers.sort((a, b) => b-a)  
console.log(numbers)