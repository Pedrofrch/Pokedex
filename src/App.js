import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PokemonsList from "./Components/PokemonsList";
import PokemonDetails from "./Components/PokemonDetails";
import NotFoundPage from "./Components/NotFoundPage";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PokemonsList />} />
          <Route path="/pokemon/:id" element={<PokemonDetails />} />
          <Route path="/not-found" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;
