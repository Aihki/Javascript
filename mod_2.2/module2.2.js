/*Write a program that asks the user for the number of participants. After this, the program asks for the names of all participants. Finally,
 the program prints the names of the participants on the web page in an ordered list (<ol>) in the same order as they were entered. 
*/
many = parseInt(prompt("number of participants"))

for(let i = 0; i < many; i++) {
    names = prompt('Enter a name')
    element = document.createElement('li')
    element.textContent = names
    console.log(element)
    document.getElementById('one').append(element)
}   


