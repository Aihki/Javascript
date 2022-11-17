/*Write a program that asks for the names of six dogs. The program prints dog names to unordered list <ul> in reverse alphabetical order. (2p) 
*/

const doge = []
for(let i = 1; i < 6; i++) {
    doge.push(names = prompt('give a dog name'))
} 

doge.sort((a, b) => {
    if (a > b) return -1
    if (a < b) return 1
    return 0
})
doge.forEach(dog => {
    element = document.createElement('li')
    element.textContent = dog
    document.getElementById('dogs').append(element)
})
console.log(doge)