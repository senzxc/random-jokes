const jokeContainer = document.getElementById("jokes");
const btn = document.getElementById("btn");
const url = "https://candaan-api.vercel.app//api/text/random";

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