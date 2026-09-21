let favorites = [
  { name: "Melt Ice Cream", category: "dessert", why: "the honey lavender" }
];

const favoritesList = document.getElementById('favorites-list');

function displayFavorites() {
  favoritesList.innerHTML = '';

  favorites.forEach(function (favorite) {
    const card = document.createElement('article');
    card.className = 'favorite-card';
    card.innerHTML = `
      <h2>${favorite.name}</h2>
      <p class="category">${favorite.category}</p>
      <p class="why">${favorite.why}</p>
    `;
    favoritesList.appendChild(card);
  });
}

displayFavorites();
