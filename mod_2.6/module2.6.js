/*Write a function that returns a random dice roll between 1 and 6. 
The function should not have any parameters. Write a main program that 
rolls the dice until the result is 6. The main program should print out the 
result of each roll in an unordered list (<ul>)..
*/

function throwDice() {
        return Math.ceil(Math.random() * 6)
    }

while (true) {
    const dice = throwDice()
    const list =  document.createElement('li')
    list.textContent = dice
    document.getElementById('thorws').appendChild(list)
    if (dice == 6)  break

}
