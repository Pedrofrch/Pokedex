import React, { useState, useEffect } from "react";
import axios from "axios";
import PokemonCards from "./PokemonCards";
import logo from "../imgs/logo.png";
import SearchBar from "./SearchBar";
import Backgroundimg from "../imgs/Backgroundimg.jpg";
import {
  Logo,
  Container,
  Containercards,
  GlobalStyle,
  CenterOJCT,
  Background,
} from "./Styled";

function PokemonsList() {
  const [pokemons, setPokemons] = useState([]);
  const [pokemonDetails, setPokemonDetails] = useState([]);

  useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon?limit=9")
      .then((response) => {
        setPokemons(response.data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    const getPokemonDetails = async () => {
      const details = await Promise.all(
        pokemons.map(async (pokemon) => {
          const response = await axios.get(pokemon.url);
          return { ...response.data, id: response.data.id };
        })
      );
      setPokemonDetails(details);
    };
    getPokemonDetails();
  }, [pokemons]);

  return (
    <>
      <GlobalStyle />
      <Background src={Backgroundimg} />
      <Container>
        <CenterOJCT>
          <Logo src={logo} />
        </CenterOJCT>
        <CenterOJCT>
          <SearchBar />
        </CenterOJCT>
        <Containercards>
          {pokemonDetails.map((pokemon) => (
            <PokemonCards
              key={pokemon.id}
              id={pokemon.id}
              name={
                pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)
              }
              image={pokemon.sprites.front_default}
              type={pokemon.types[0].type.name}
            />
          ))}
        </Containercards>
      </Container>
    </>
  );
}

export default PokemonsList;
