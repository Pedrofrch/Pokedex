import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Search } from "./Styled";
import axios from "axios";

function SearchBar() {
  const [searchPokemon, setSearchPokemon] = useState("");
  const navigate = useNavigate();

  // verifica se o nome do Pokémon é válido
  async function isValidPokemonName(pokemonName) {
    try {
      await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
      return true; // O nome do Pokémon é válido
    } catch (error) {
      return false; // O nome do Pokémon não é válido
    }
  }

  async function handleSubmit(event) {
    event.preventDefault();

    // verifica se o nome do Pokémon é válido
    const isPokemonValid = await isValidPokemonName(
      searchPokemon.toLowerCase()
    );

    if (isPokemonValid) {
      // redireciona para a página do Pokémon encontrado
      navigate(`/pokemon/${searchPokemon.toLowerCase()}`);
    } else {
      // redireciona para a página not found caso não seja encontrado
      navigate("./not-found");
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <Search
        type="text"
        placeholder="Pesquise um pokémon pelo nome"
        value={searchPokemon}
        onChange={(e) => setSearchPokemon(e.target.value)}
      />
    </form>
  );
}

export default SearchBar;