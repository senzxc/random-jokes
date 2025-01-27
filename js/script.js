const jokeContainer = document.getElementById("jokes");
const btn = document.getElementById("btn");
const url = "https://candaan-api.vercel.app/api/text/random";

let getJoke = () => {
    fetch(url)
    .then((response) => response.json())
    .then((result) => {
        jokeContainer.textContent = `${result.data}`;
    })
};

btn.addEventListener("click", getJoke);
getJoke();