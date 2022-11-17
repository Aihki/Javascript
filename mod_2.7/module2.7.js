/*Write a function that returns a random dice roll between 1 and 6. 
The function should not have any parameters. Write a main program that 
rolls the dice until the result is 6. The main program should print out the 
result of each roll in an unordered list (<ul>)..
*/
const sides = parseInt(prompt('how many sides are in dice'))
function throwDice(sides) {
        return Math.ceil(Math.random() * sides)
    }


while (true) {
    const dice = throwDice(sides)
    const list =  document.createElement('li')
    list.textContent = dice
    document.getElementById('thorws').appendChild(list)
    if (dice == sides) break

}

throwDice(sides)
