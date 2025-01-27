const jokeContainer = document.getElementById("jokes");
const btn = document.getElementById("btn");
const url = "http://localhost:3000/api/text";

let getJoke = () => {
    fetch(url)
    .then((response) => response.json())
    .then((result) => {
        const jokes = result.data;
        const randomJoke =jokes[Math.floor(Math.random() * jokes.length)];
        jokeContainer.textContent = randomJoke;
    })
};

btn.addEventListener("click", getJoke);
getJoke();