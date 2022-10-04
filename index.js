import './style.css'; // Import stylesheets

let firstClick = null;
let secondClick = null;

let arrImages = [
  'https://assets.pokemon.com/static2/_ui/img/og-default-image.jpeg',
  'https://assets.pokemon.com/static2/_ui/img/og-default-image.jpeg',
  'https://assets.pokemon.com/static2/_ui/img/og-default-image.jpeg',
  'https://assets.pokemon.com/static2/_ui/img/og-default-image.jpeg',
  'https://assets.pokemon.com/static2/_ui/img/og-default-image.jpeg',
  'https://assets.pokemon.com/static2/_ui/img/og-default-image.jpeg',
  'https://assets.pokemon.com/static2/_ui/img/og-default-image.jpeg',
  'https://assets.pokemon.com/static2/_ui/img/og-default-image.jpeg',
  'https://assets.pokemon.com/static2/_ui/img/og-default-image.jpeg',
  'https://assets.pokemon.com/static2/_ui/img/og-default-image.jpeg',
  'https://vn.portal-pokemon.com/play/resources/pokedex/img/pm/47549471dc54feb8acd4b3de3a27ea8e9e9fd25c.png',
  'https://vn.portal-pokemon.com/play/resources/pokedex/img/pm/47549471dc54feb8acd4b3de3a27ea8e9e9fd25c.png',
  'https://vn.portal-pokemon.com/play/resources/pokedex/img/pm/47549471dc54feb8acd4b3de3a27ea8e9e9fd25c.png',
  'https://vn.portal-pokemon.com/play/resources/pokedex/img/pm/47549471dc54feb8acd4b3de3a27ea8e9e9fd25c.png',
  'https://vn.portal-pokemon.com/play/resources/pokedex/img/pm/47549471dc54feb8acd4b3de3a27ea8e9e9fd25c.png',
  'https://vn.portal-pokemon.com/play/resources/pokedex/img/pm/47549471dc54feb8acd4b3de3a27ea8e9e9fd25c.png',
];
const container = document.getElementById('app');
arrImages.forEach((arrImages) => {
  const child = document.createElement('img');
  child.style.width = '50px';
  child.style.width = '50px';
  child.src = arrImages;

  child.addEventListener('click', (ev) => {
    if (firstClick === null) {
      firstClick = ev.target.src;
    } else if (secondClick === null) {
      secondClick = ev.target.src;
    }
    console.log(firstClick, secondClick);
    if (firstClick === secondClick) {
      ev.target.src = '';
    } else if (firstClick != secondClick) {
      firstClick = ev.target.src;
      secondClick = ev.target.src;
    }
  });

  container.appendChild(child);
});
