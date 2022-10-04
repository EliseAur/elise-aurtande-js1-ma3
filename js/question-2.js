// Question 2

const apiKey = "bcf5d7365b034e76ba9b9e8fa0f3cb99";

//const url = `https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating&key=${apiKey}`;

const url = "https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating&key=bcf5d7365b034e76ba9b9e8fa0f3cb99";

const gameContainer = document.querySelector(".container");

async function getGameFacts() {
    try {
        const response = await fetch(url);
        const gameFacts = await response.json();
        console.log(gameFacts);

        resultsContainer.innerHTML = "";

        for (let i = 0; i < gameFacts.results.length; i++) {
            console.log(gameFacts.results[i].name);

            if (i === 8) {
                break;
            }

            gameContainer.innerHTML += `<div class="results">${gameFacts.results[i].name}</div>`;
        }
    } catch (error) {
        console.log("An error occoured when calling the API:", error);
    }
}

getGameFacts();

// const facts = {
//     name: results[i].name,
//     rating: results[i].rating,
//     numOfTags: results[i].tags.length,
// };
