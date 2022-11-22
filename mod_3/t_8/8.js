document.querySelector("button").addEventListener("click", () => {
    const num1 = parseInt(document.querySelector("#num1").value)
    const num2 = parseInt(document.querySelector("#num2").value)
    const op = document.querySelector("#operation").value
    document.querySelector("#result")





    if (op == 'add') result.textContent = num1 + num2;
    
    else if (op == 'sub') result.textContent = num1 - num2;
    
    else if (op == 'multi') result.textContent = num1 * num2;
    
    else if (op == 'div')  result.textContent = num1 / num2;
    
    
})
