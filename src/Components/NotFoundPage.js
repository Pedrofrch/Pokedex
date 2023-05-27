import React from "react";
import ErrorImg from "../imgs/404page.png";
import { NotFoundDiv, Errorimg, GoBackButton } from "./Styled";
import { useNavigate } from "react-router-dom";

export default function NotFoundPage() {
  const navigate = useNavigate();
  const goToHomePage = () => {
    navigate("/");
  };
  return (
    <>
      <NotFoundDiv>
        <Errorimg src={ErrorImg} alt="error404" />
        <GoBackButton onClick={goToHomePage}> Go back</GoBackButton>
      </NotFoundDiv>
    </>
  );
}
