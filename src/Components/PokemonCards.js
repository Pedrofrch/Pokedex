import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import {
  ImgPokemon,
  NomePokemon,
  Flexitems,
  ColumnDirection,
  IdPokemon,
} from "./Styled";

// estiliza o card baseado no tipo de Pokémon exibido no card
export const Cardtypepoke = styled.p`
  padding: 5px 0px;
  border-radius: 15px;
  text-align: center;
  background: rgba(255, 255, 255, 0.2);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
  border: 1px solid
    ${(props) => {
      switch (props.pokemonType) {
        case "grass":
          return "#92D1B4";
        case "fire":
          return "#FF9983";
        case "water":
          return "#5FB1FF";
        default:
          return "#FFC5DA";
      }
    }};
`;

function PokemonCards(props) {
  const navigate = useNavigate();

  // redireciona o usuário para a página de detalhes do Pokémon pelo id
  const goToDetailPage = () => {
    navigate(`/pokemon/${props.id}`);
  };

  return (
    <Cardtypepoke pokemonType={props.type}>
      <Flexitems>
        <ColumnDirection>
          <IdPokemon>#{props.id}</IdPokemon>
          <NomePokemon>{props.name}</NomePokemon>
          <Cardtypepoke pokemonType={props.type}>{props.type}</Cardtypepoke>
        </ColumnDirection>
        <ImgPokemon
          src={props.image}
          alt={props.name}
          onClick={goToDetailPage}
        />
      </Flexitems>
    </Cardtypepoke>
  );
}

export default PokemonCards;