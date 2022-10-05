// Question 2

//const apiKey = "bcf5d7365b034e76ba9b9e8fa0f3cb99";

//const url = `https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating&key=${apiKey}`;

const url = "https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating&key=bcf5d7365b034e76ba9b9e8fa0f3cb99";

const gameContainer = document.querySelector(".container");

async function getGameFacts() {
    try {
        const response = await fetch(url);
        const gameFacts = await response.json();
        console.log(gameFacts);

        const gameList = gameFacts.results;

        gameContainer.innerHTML = "";

        for (let i = 0; i < gameList.length; i++) {
            console.log(gameList[i].name);
            console.log(gameList[i].rating);
            console.log(gameList[i].tags.length);

            if (i === 8) {
                break;
            }

            gameContainer.innerHTML += `<div class="results">
                                            <div>
                                                <h2>Title: <span class="game-title">${gameList[i].name}</span></h2>
                                                <ul>
                                                    <li><span class="bold-text">Rating:</span> ${gameList[i].rating}</li>
                                                </ul>
                                            </div>
                                        </div>`;
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
