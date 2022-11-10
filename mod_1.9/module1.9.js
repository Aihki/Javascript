const numb = parseInt(prompt('give a number.'))
let prime = true

if(numb === 1) {
    document.body.textContent = '1 is not prime number.'
}else if(numb > 1){

    for (let i = 2; i < numb; i++) { 
        if (numb % i  == 0)
            prime = false
            break

        }
    if (prime) {
        document.body.textContent = numb + ' is prime number'
    }else {
        document.body.textContent = numb + ' is not prime number'
    }

}
else {
    document.body.textContent = numb + ' is not prime number'
}
