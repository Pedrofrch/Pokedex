import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import logo from "../imgs/logo.png";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import Backgroundimg from "../imgs/Backgroundimg.jpg";
import LoadingBall from "../imgs/LoadingBall.png";
import {
  PokePhoto,
  Background,
  Container,
  Logo,
  VerticalItens,
  PokeName,
  GlobalStyle,
  CenterOJCT,
  GoBack,
  TextStart,
  Loading,
} from "./Styled";

// componente estilizado para o container de conteúdo
export const ContentContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
  padding: 80px;
  border-radius: 15px;
  text-align: center;
  background: rgba(255, 255, 255, 0.2);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
  border: 1px solid
    ${(props) => {
      switch (props.pokemonType) {
        case "grass":
        case "bug":
          return "#92D1B4";
        case "fire":
          return "#FF9983";
        case "water":
          return "#5FB1FF";
        case "rock":
        case "ground":
          return "#5E3125";
        case "electric":
          return "#F5FF83";
        case "ghost":
          return "#B056FD";
        case "dark":
          return "#555555";
        default:
          return "#FFC5DA";
      }
    }};
`;

// componente estilizado para os atributos do Pokémon
export const DescPoke = styled.p`
  padding: 10px;
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(5px);
  border-radius: 8px;
  width: 170px;
  margin-top: 15px;
  border: 1px solid
    ${(props) => {
      switch (props.pokemonType) {
        case "grass":
        case "bug":
          return "#92D1B4";
        case "fire":
          return "#FF9983";
        case "water":
          return "#5FB1FF";
        case "rock":
        case "ground":
          return "#5E3125";
        case "electric":
          return "#F5FF83";
        case "ghost":
          return "#B056FD";
        case "dark":
          return "#555555";
        default:
          return "#FFC5DA";
      }
    }};
`;

export default function PokemonDetails() {
  const { id } = useParams();
  const [pokemon, setPokemon] = useState(null);
  const [loading, setLoading] = useState(true); //começa o loading na página
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true); // define o estado de carregamento como true antes de fazer a requisição


    const fetchPokemonDetails = async () => {
      try {
        const response = await axios.get(
          `https://pokeapi.co/api/v2/pokemon/${id}`
        );
        setPokemon(response.data);
        setLoading(false); //seta o loading como false após o carregamento do conteúdo
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };

    setTimeout(fetchPokemonDetails, 1000); // Simula um tempo de carregamento mais longo com setTimeout
  }, [id]);

  const goToHomePage = () => {
    navigate("/");
  };

  return (
    <>
      <GlobalStyle />
      <>
        <Background src={Backgroundimg} />
        <Container>
          <Background />
          {loading ? ( // verifica o estado de carregamento para exibir o componente de loading ou o conteúdo da página
            <Loading src={LoadingBall} /> // exibir o componente de loading enquanto o estado de carregamento for true
          ) : (
            <>
              <TextStart>
                <GoBack onClick={goToHomePage}>ᐊ Voltar</GoBack>
              </TextStart>
              <CenterOJCT>
                <Logo src={logo} />
              </CenterOJCT>
              <ContentContainer pokemonType={pokemon.types[0].type.name}> {/* começo a passar o tipo do pokemon nos componentes para haver a indentificação das cores */}
                <VerticalItens>
                  <DescPoke pokemonType={pokemon.types[0].type.name}>
                    Altura:{pokemon.height}
                  </DescPoke>
                  <DescPoke pokemonType={pokemon.types[0].type.name}>
                    Peso:{pokemon.weight}
                  </DescPoke>
                </VerticalItens>
                <PokePhoto
                  src={pokemon.sprites.other.dream_world.front_default}
                  alt={pokemon.name}
                />
                <VerticalItens>
                  <PokeName>#{pokemon.id}</PokeName>
                  <PokeName>
                    {pokemon.name.charAt(0).toUpperCase() +
                      pokemon.name.slice(1)}
                  </PokeName>
                  <DescPoke pokemonType={pokemon.types[0].type.name}>
                    Tipo:{" "}
                    {pokemon.types.map((type) => type.type.name).join(", ")}
                  </DescPoke>
                  <DescPoke pokemonType={pokemon.types[0].type.name}>
                    {" "}
                    Habilidades:
                    {pokemon.abilities
                      .map((ability) => ability.ability.name)
                      .join(", ")}
                  </DescPoke>
                  <DescPoke pokemonType={pokemon.types[0].type.name}>
                    Ataque:{" "}
                    {
                      pokemon.stats.find((stat) => stat.stat.name === "attack")
                        .base_stat
                    }
                  </DescPoke>
                  <DescPoke pokemonType={pokemon.types[0].type.name}>
                    Defesa:{" "}
                    {
                      pokemon.stats.find((stat) => stat.stat.name === "defense")
                        .base_stat
                    }
                  </DescPoke>
                  <DescPoke pokemonType={pokemon.types[0].type.name}>
                    Vida:{" "}
                    {
                      pokemon.stats.find((stat) => stat.stat.name === "hp")
                        .base_stat
                    }
                  </DescPoke>
                </VerticalItens>
              </ContentContainer>
            </>
          )}
        </Container>
      </>
    </>
  );
}
