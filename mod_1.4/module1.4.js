/*const classList = ["Daredevil", "Slytherin", "Hufflepuff", "Ravenclaw"]
let nimi = prompt('Type your name.')

let result;
result = Math.floor(Math.random()*4)


console.log(nimi + ', you are '+ classList[result])
document.writeln(nimi + ', you are '+ classList[result])*/


let nimi = prompt('Type your name.')

let house = Math.floor(Math.random()*4)




if  (house === 0){
house = "Daredevil"}

else if (house === 1){
house = "Slytherin"}

else if (house === 2){
house = "Hufflepuff"}

else if (house === 3){
house = "Ravenclaw"}


console.log(nimi + ', you are '+ house)
document.body.textContent = nimi + ', you are '+ house