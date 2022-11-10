start_year = parseInt(prompt('give a year.'))
end_year = parseInt(prompt('give a year.'))

for(let year = start_year; year <= end_year ; year++){
    if (0 == year % 4 && 0 != year % 100 || 0 == year % 400){ 
        element = document.createElement("li")
        element.textContent = year
        console.log(element)
        document.getElementById("years").append(element)
    }
}