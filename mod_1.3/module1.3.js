
num1 = parseInt(prompt('give a number.'))
num2 = parseInt(prompt('give a number.'))
num3 = parseInt(prompt('give a number.'))
numb1 = num1+num2+num3
numb2 = num1*num2*num3
numb3 = numb1/3

document.querySelector('#p1').innerHTML = 'yhteensa ' + numb1
document.querySelector('#p2').innerHTML = 'summa ' + numb2
document.querySelector('#p3').innerHTML = 'keskiarvo ' + numb3


