year = parseInt(prompt('give a year.'))

if (0 == year % 4 && 0 != year % 100 || 0 == year % 400) { 
document.body.textContent = year + ' on karkausvuosi'
    }  else {
        document.body.textContent = year + ' ei ole karkausvuosi'
        }
    
