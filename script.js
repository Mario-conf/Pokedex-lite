const poke_container = document.getElementById('poke-container');
const pokemon_count = 151;

const colors = {
    fire: '#fa5f49',
    grass: '#a3ffac',
    electric: '#FFD700',
    water: '#95b8f6',
    ground: '#d8af97',
    rock: '#ffffeb',
    fairy: '#f79ae5',
    poison: '#e79eff',
    bug: '#9bd3ae',
    dragon: '#97b3e6',
    psychic: '#e3b1c8',
    flying: '#F5F5F5',
    fighting: '#E6E0D4',
    normal: '#F5F5F5'
};

const main_types = Object.keys(colors);

const imageUrlTemplate = "pokemon_images/pokemon{number}.jpg";

const fetchPokemons = async () => {
    for (let i = 1; i <= pokemon_count; i++) {
        await getPokemon(i);
    }
};

const getPokemon = async (id) => {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    const res = await fetch(url);
    const data = await res.json();
    const pokemonImageUrl = imageUrlTemplate.replace("{number}", id);
    const pokemonName = data.name;
    const types = data.types.map(typeData => typeData.type.name);
    
    createPokemonCard(id, pokemonImageUrl, pokemonName, types);
};

const createPokemonCard = (id, imageUrl, name, types) => {
    const pokemonEl = document.createElement('div');
    pokemonEl.classList.add('pokemon');

    // Obtener el tipo principal
    const type = types.find(type => main_types.includes(type)) || "unknown";
    
    // Obtener el color asociado al tipo
    const color = colors[type] || colors["unknown"];

    const pokemonInnerHTML = `
    <div class="img-container">
        <img src="${imageUrl}" alt="${name}">
    </div>
    <div class="info">
        <span class="number">#${id}</span>
        <h3 class="name">${name}</h3>
        <small class="type">Type: <span>${type}</span> </small>
    </div>
    `;

    pokemonEl.style.backgroundColor = color;
    pokemonEl.innerHTML = pokemonInnerHTML;

    poke_container.appendChild(pokemonEl);
};

fetchPokemons();
