import axios from 'axios';
import './style.css';

const app = document.getElementById('app');

const getPokemonByName = async (name) => {
    return axios
        .get(`https://pokeapi.co/api/v2/pokemon/${name}`)
        .then((response) => response.data);
};

const printPokemon = (pokemon) => {
    app.querySelector('.pokemon-list').innerHTML += `
        <div class="pokemon">
            <div class="pokemon-name">${pokemon.name}</div>
            <div class="pokemon-photos">
                <img src="${pokemon.sprites.front_default}"/>
                <img src="${pokemon.sprites.back_default}"/>
            </div>
        </div>
    `;
};

const form = document.getElementById('formSearchPokemon');
const handleSearchPokemonFormSubmit = async (event) => {
    event.preventDefault();

    const pokemonName = form.querySelector('input').value.trim();

    if (!pokemonName) {
        alert('Digite o nome do pokémon');
        return;
    }

    const pokemon = await getPokemonByName(pokemonName);
    printPokemon(pokemon);
};
form.addEventListener('submit', handleSearchPokemonFormSubmit);

async function main() {}

main();
