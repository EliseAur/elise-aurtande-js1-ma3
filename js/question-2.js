// Question 2

const url = "https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating&key=bcf5d7365b034e76ba9b9e8fa0f3cb99";

const gameContainer = document.querySelector(".container");

async function getGameFacts() {
    try {
        const response = await fetch(url);
        const gameFacts = await response.json();

        const gameList = gameFacts.results;

        setTimeout(function () {

            gameContainer.innerHTML = "";

            for (let i = 0; i < gameList.length; i++) {

                if (i === 8) {
                    break;
                }

                gameContainer.innerHTML += `<div class="results">
                                                <div>
                                                    <h2>Title: <span class="value">${gameList[i].name}</span></h2>
                                                    <ul>
                                                        <li>Rating: <span class="value">${gameList[i].rating}</span></li>
                                                        <li>Number of tags: <span class="value">${gameList[i].tags.length}</span></li>
                                                    </ul>
                                                </div>
                                            </div>`;
            }
        }, 1500);

    } catch (error) {

        setTimeout(function () {
            console.log("Error when calling the API:", error);
            gameContainer.innerHTML = "";
            gameContainer.innerHTML += displayError("An error occoured when loading the games");
        }, 1500);
    }
}

getGameFacts();
