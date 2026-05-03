function changeColor() {
    let colors = ["sapphire","lightblue","lightgreen","lightpink","lightyellow","lavender"];

    let randomColor = colors[Math.floor(Math.random() * colors.length)];

    document.body.style.backgroundColor = randomColor;
}
fetch("https://jsonplaceholder.typicode.com/posts/1")
.then(response => response.json())
.then(data => {
    document.getElementById("apiData").innerHTML = `
        <h3>${data.title}</h3>
        <p>${data.body}</p>
    `;
})
.catch(error => {
    document.getElementById("apiData").innerHTML = "Data not found";
});