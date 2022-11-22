document.querySelector("button").addEventListener("click", () => {
    const calculation = document.querySelector("#calculation").value


    
    if(calculation.includes('+')) {
        let numbers = calculation.split("+")
        let results = numbers.reduce((acc,numbers) => acc + numbers);
        document.querySelector("#result").textContent = results 
    }        
    else if(calculation.includes('-')) {
        let numbers = calculation.split("-")
        let results = numbers.reduce((acc,numbers) => acc - numbers);
        document.querySelector("#result").textContent = results 
    }
    else if(calculation.includes('*')) {
        let numbers = calculation.split("*")
        let results = numbers.reduce((acc,numbers) => acc * numbers);
        document.querySelector("#result").textContent = results 
    }
    else if(calculation.includes('/')) {
        let numbers = calculation.split("/")
        let results = numbers.reduce((acc,numbers) => acc / numbers);
        document.querySelector("#result").textContent = results 
    }

})