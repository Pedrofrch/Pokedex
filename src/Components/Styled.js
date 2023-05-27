import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
const blueColor = "#6590FF";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
  }
`;

//BACKGROUND
export const Background = styled.img`
  z-index: -1000;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

//CONTAINER
export const Container = styled.div`
  font-family: sans-serif;
  box-sizing: border-box;
  max-width: 1280px;
  padding-left: 48px;
  padding-right: 48px;
  margin-left: auto;
  margin-right: auto;
`;

export const Loading = styled.img`
  width: 200px;
  height: 200px;
  animation: spinner 1.5s linear infinite;
  @keyframes spinner {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  margin-top: 30%;
  margin-left: 40%;
`;

//****************INICIO NAVBAR****************
export const Logo = styled.img`
  margin-top: 20px;
`;

export const GoBack = styled.p`
  font-weight: 600;
  cursor: pointer;
`;

export const TextStart = styled.div`
  display: flex;
  justify-content: start;
  position: absolute;
  margin-top: 70px;
  color: #001d66;
`;

export const CenterOJCT = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 30px 0px;
`;

export const Search = styled.input`
  border-radius: 50px;
  width: 600px;
  height: 50px;
  border: 2px solid ${blueColor};
  font-size: medium;
  background: rgba(255, 255, 255, 0);
  padding-left: 20px;
  color: #001d66;
  &::placeholder {
    color: #001d66;
  }
  &:focus {
    outline: none;
    color: #001d66;
    background: rgba(255, 255, 255, 0.2);
    border: 3px solid ${blueColor};
    box-shadow: 0px 0px 14px rgba(101, 144, 255, 0.4);
  }
`;
//****************FINAL NAVBAR****************

//****************COMEÇO CARD****************

export const Containercards = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 48px;
  margin-top: 50px;
  margin-bottom: 48px;
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

export const Flexitems = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 16px;
  gap: 16px;
`;

export const ColumnDirection = styled.div`
  display: flex;
  flex-direction: column;
  width: 80px;
`;

export const NomePokemon = styled.p`
  padding: 5px 0px 10px;
  font-weight: 600;
`;

export const IdPokemon = styled.p`
  padding: 5px 0px;
`;

export const ImgPokemon = styled.img`
  cursor: pointer;
`;

//****************FIM CARD***********************

//****************COMEÇO DETALHES****************

export const BackgroundDetails = styled.body`
  margin: 0px;
  width: 100%;
  height: 100vh;
  background: linear-gradient(
    to top,
    #ffffff 0%,
    #ffffff 50%,
    #7d79a3 50%,
    #7d79a3 100%
  );
`;

export const PokePhoto = styled.img`
  width: 500px;
  height: 500px;
`;

export const VerticalItens = styled.div`
  display: flex;
  flex-direction: column;
  padding-right: 100px;
  padding-left: 100px;
`;

export const PokeName = styled.h1``;

//****************PAGINA NOT FOUND****************

export const Errorimg = styled.img`
  width: 50%;
`;

export const NotFoundDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  flex-direction: column;
`;

export const GoBackButton = styled.button`
  padding: 10px 30px;
  background-color: #ffffff;
  border: 2px solid #df1818;
  border-radius: 5px;
  font-weight: 600;
  font-size: medium;
  color: #df1818;
  cursor: pointer;
  margin-top: 20px;
  transition: background-color 0.4s ease;

  &:hover {
    background-color: #df1818;
    color: #ffffff;
  }
`;
