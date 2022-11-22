const easterEgg = [
    "Darth Vader: Luke, you do not yet realize your importance. You have only begun to discover your power. Join me, and I will complete your training. With our combined strength, we can end this destructive conflict and bring order to the galaxy.",
    "Luke Skywalker: I'll never join you!",
    "Darth Vader: If you only knew the power of The Dark Side! Obi-Wan never told you what happened to your father.",
    "Luke Skywalker: He told me enough! He told me you killed him!",
    "Darth Vader: No.... I am your father.",
    "Luke Skywalker: No... No. That's not true! That's impossible!",
    "Darth Vader: Search your feelings. You know it to be true.",
    "Luke Skywalker: NOOOOOOOOOOOOOO! NOOOOOOOO!"

]


document.querySelector("#source").addEventListener("submit", event => {
    event.preventDefault()
    const firstName = document.querySelector(`input[name = firstname]`).value
    const lastName =document.querySelector(`input[name = lastname]`).value

    

    if(firstName == 'Luke' && lastName == 'Skywalker')
        easterEgg.forEach(text => {
           const line = document.createElement("p")
           line.textContent = text
           document.querySelector("#target").appendChild(line)
        })
    else
        document.querySelector("#target").textContent = `your name is ${firstName} ${lastName}`    

})

