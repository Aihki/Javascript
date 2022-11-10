const answer = confirm("Should I calculate the square root?")
let numb = 0
if (answer == true) {
const numb = parseInt(prompt('give numb'))
    if (numb < 0){
        document.body.textContent ='The square root of negative number is not defined'
        }else {
            document.body.textContent = Math.sqrt(numb)
        }
    }
else {
    document.body.textContent = 'The square root is not calculated'
}
