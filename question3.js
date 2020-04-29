const gameUrl = "https://api.rawg.io/api/games/4200";

fetch(gameUrl)
.then(function(response){
    return response.json();
})
.then(function(json){
    console.dir(json);
    createGameDetails(json);
})
.catch(function(error){
    console.log(error);
})

function createGameDetails(details){
    console.log(details)
    const imageUrl = details.background_image;
    const heading = document.querySelector("h1");
    const img = document.querySelector("div.image");
    const description = document.querySelector(".description");
    
    

    heading.innerText = details.name;
    description.innerText = details.description_raw;
    
}