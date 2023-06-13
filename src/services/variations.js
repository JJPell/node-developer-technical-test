const axios = require('axios');

const pokeapiUrl = 'https://pokeapi.co/api/v2/';

async function fetchPokemon(pokemonName) {
  const pokemonUrl = `${pokeapiUrl}pokemon/${pokemonName}`;

  try {
    const response = await axios.get(pokemonUrl);

    return response.data;
  } catch (error) {
    if (error.response.status === 404) return undefined;

    throw error;
  }
}

function buildVariations(evolutionChain) {
  const evolvesTo = evolutionChain.evolves_to || [];

  const variations = evolvesTo.map((chain) => buildVariations(chain));

  return {
    name: evolutionChain.species.name,
    variations,
  };
}

async function getVariations(pokemonName) {
  if (!pokemonName || typeof pokemonName !== 'string') return undefined;

  const pokemon = await fetchPokemon(pokemonName);

  if (!pokemon) return undefined;

  const species = (await axios.get(pokemon.species.url)).data;

  const evolutionChain = (await axios.get(species.evolution_chain.url)).data;

  return buildVariations(evolutionChain.chain);
}

module.exports = {
  getVariations,
};
