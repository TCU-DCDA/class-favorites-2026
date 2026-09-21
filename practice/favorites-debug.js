// Practice data for Class Favorites.
// Replace only the favorites declaration in app.js with this declaration.
// Keep the existing rendering function and its final call.

let favorites = [
  { name: 'Melt Ice Cream', category: 'dessert', why: 'the honey lavender' },
  { name: 'Campus Library', category: 'study', why: 'quiet tables upstairs' },
  { name: 'Maple Street Cafe', category: 'coffee', Why: 'room to read between classes' },
  { name: 'River Trail', category: 'outdoors ', why: 'a walk after class' },
  { name: 'Corner Espresso', category: 'Coffee', why: 'a good afternoon break' },
  { name: '   ', category: 'food', why: 'quick lunches near campus' },
  { name: 'Oak Park', category: 'outdoors', why: ['shade', 'walking paths'] },
  { name: 'Melt Ice Cream', category: 'dessert', why: 'the honey lavender' }
];


// LAB13.5's add-and-render flow, adapted to the Class Favorites fields.
// Load ONE favorites dataset before this file, after the HTML elements.
const form = document.getElementById('add-favorite-form');
const favoritesList = document.getElementById('favorites-list');

function addFavorite(event) {
  event.preventDefault();

  const name = document.getElementById('name').value.trim();
  const category = document.getElementById('category').value;
  const why = document.getElementById('why').value.trim();

  if (!name || !category || !why) {
    alert('Please fill in name, category, and a reason.');
    return;
  }

  const newFavorite = {
    name: name,
    category: category,
    why: why
  };

  favorites.push(newFavorite);
  form.reset();
  displayFavorites();
}

function displayFavorites() {
  favoritesList.innerHTML = '';

  if (favorites.length === 0) {
    favoritesList.textContent = 'No favorites yet. Add your first favorite place above!';
    return;
  }

  favorites.forEach(function(favorite) {
    // Use textContent for form-entered text so it is displayed as text.
    // String() preserves the visible undefined/array clues in the debug data.
    const card = document.createElement('article');
    card.className = 'favorite-card';

    const heading = document.createElement('h2');
    heading.textContent = String(favorite.name);

    const category = document.createElement('p');
    category.className = 'category';
    category.textContent = String(favorite.category);

    const why = document.createElement('p');
    why.className = 'why';
    why.textContent = String(favorite.why);

    card.append(heading, category, why);
    favoritesList.append(card);
  });
}

form.addEventListener('submit', addFavorite);
displayFavorites();
