// Game data - list of games with images
const games = [
    { name: 'Spider-Man', image: 'game/Spiderman.jpg', rating: 5.0 },
    { name: 'Winds Meet', image: 'game/Where Wind meet.jpg', rating: 5.0 },
    { name: 'Apex Legends', image: 'game/Apex Legends.jpg', rating: 5.0 },
    { name: 'Naraka', image: 'game/Naraka.jpg', rating: 5.0 },
    { name: 'Dota 2', image: 'game/Dota.jpg', rating: 5.0 },
    { name: 'League of Legends', image: 'game/LOL.jpg', rating: 5.0 },
    { name: 'Valorant', image: 'game/Valorant (1).jpg', rating: 5.0 },
    { name: 'PUBG', image: 'game/PUBG.jpg', rating: 5.0 },
    { name: 'Fortnite', image: 'game/Fortnite.jpg', rating: 5.0 },
    { name: 'Counter Strike 2', image: 'game/CS2.jpg', rating: 5.0 },
    { name: 'One Piece', image: 'game/One Piece.jpg', rating: 5.0 },
    { name: 'Doom Eternal', image: 'game/Doom.jpg', rating: 5.0 },
    { name: 'Fallout 76', image: 'game/Fallout76.jpg', rating: 5.0 },
    { name: 'Fallout 4', image: 'game/Fallout 4.jpg', rating: 5.0 },
    { name: 'Split Fiction', image: 'game/Split fiction.jpg', rating: 5.0 },
    // Add more as needed
];

const favorites = games.slice(0, 10); // Example favorites

// Function to render games
function renderGames(gameList, container) {
    container.innerHTML = '';
    gameList.forEach(game => {
        const gameCard = document.createElement('div');
        gameCard.className = 'card';
        gameCard.innerHTML = `
            <div class="card-cover">
                <img src="${game.image}" alt="${game.name}">
            </div>
            <div class="card-body">
                <h3 class="card-title">${game.name}</h3>
                <div class="card-rating">
                    <div class="stars">★★★★★</div>
                    <span>${game.rating}</span>
                </div>
            </div>
        `;
        container.appendChild(gameCard);
    });
}

// Tab switching
document.querySelectorAll('.tab').forEach(tab => {
    tab.addEventListener('click', () => {
        document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        const tabName = tab.dataset.tab;
        const contentArea = document.getElementById('content-area');
        const resultCount = document.getElementById('result-count');
        if (tabName === 'Browse') {
            renderGames(games, contentArea);
            resultCount.textContent = games.length;
        } else if (tabName === 'Favorite') {
            renderGames(favorites, contentArea);
            resultCount.textContent = favorites.length;
        } else if (tabName === 'Profile') {
            contentArea.innerHTML = '<div class="profile-panel"><h3>Profile</h3><p>User profile information here.</p></div>';
            resultCount.textContent = '1';
        }
    });
});

// Search functionality
document.getElementById('search').addEventListener('input', (e) => {
    const query = e.target.value.toLowerCase();
    const activeTab = document.querySelector('.tab.active').dataset.tab;
    let listToFilter = activeTab === 'Browse' ? games : activeTab === 'Favorite' ? favorites : [];
    const filtered = listToFilter.filter(game => game.name.toLowerCase().includes(query));
    renderGames(filtered, document.getElementById('content-area'));
    document.getElementById('result-count').textContent = filtered.length;
});

// Initial load - show recently (first 10 games)
renderGames(games.slice(0, 10), document.getElementById('content-area'));
document.getElementById('result-count').textContent = 10;
