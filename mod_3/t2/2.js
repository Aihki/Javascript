const items = [
    "First item",
    "Second item",
    "Third item"
]


items.forEach(text => {
    const list = document.createElement("li")
    list.textContent = text
    list.classList.add("my-item")
    document.querySelector("#target").appendChild(list)
})
