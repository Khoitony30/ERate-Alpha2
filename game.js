const params = new URLSearchParams(window.location.search);
const gameId = params.get("id");

const game = games[gameId];

if (game) {
    document.getElementById("game-title").textContent = game.title;
    document.getElementById("game-image").src = game.image;
    document.getElementById("game-description").textContent = game.description;
    document.getElementById("game-rating").textContent = game.rating;
    document.getElementById("game-genre").textContent = game.genre;
    document.getElementById("game-release-date").textContent = game.releaseDate;
    document.getElementById("game-developer").textContent = game.developer;
    document.getElementById("game-publisher").textContent = game.publisher;
} else {
    document.getElementById("game-title").textContent = "Game not found";
}