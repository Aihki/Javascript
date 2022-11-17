/*
Write a function called even(), which receives an array containing numbers as a parameter. The function returns a second (usually smaller) array which has the even numbers of the original array. The function must not make changes to the original table. (3p)

    Example: In a three-item array, there are items 2, 7 and 4. The function returns a two-item array with items 2 and 4.
    Print both the original array and the new array to the console in the main program after you have called the function.
    You can hardcode the array, no need for prompt().


*/

const numb = prompt('how many canditate candidate')
let candidates = []

for (let i =0 ; i < numb; i++ ) {
    names = prompt('Name for candidate')
    if(candidates.some(v=>v.names == names)){
        alert("same candidate alert")
        i--
        continue;
    }
    candidates.push({name:names, votes: 0})
}

    

const voters = prompt('how many voters there are')    
for (let i =0 ; i < voters; i++ ) {
    let namer = prompt('Name for candidate')
    for(const candidate of candidates){
        if(candidate.name == namer){
            candidate.votes++
            break
        }
    }
}




candidates.sort((a, b) => b.votes - a.votes)

 console.log(`the winner is ${candidates[0].name} with ${candidates[0].votes} votes.`)
 for(const candida of candidates)
 console.log(`${candida.name} : ${candida.votes} votes.`)