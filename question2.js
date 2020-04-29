// Fetch URL
const gamesUrl = "https://api.rawg.io/api/games"

fetch(gamesUrl)
.then(function(response){
    return response.json();
})
.then(function(json){
    console.dir(json.results)
    createGames(json.results);
})
.catch(function(error){
    console.log(error)
});

// Create function  createGames()
function createGames(games){
    console.log(games)
    const gameDiv = document.querySelector(".results");
    let html ="";

    for(let i = 0; i < games.length; i++){
        console.log(games[i].name)

        html += `<div class="game">
        <h2>${games[i].name}</h2>
        <img src="${games[i].background_image}" alt="${games[i].name}" width = "350px" height = "250px"/>
        </div>`
    }
    
gameDiv.innerHTML = html;
}

