import React from "react";
import styled, { keyframes } from "styled-components";
import {
  MainTitle,
  bg,
  ListCat,
  LostCat,
  mainImg,
  MainCat,
  MainDog,
} from "../images";
import { Link } from "react-router-dom";

const fadeOutBackground = keyframes`
  from {
    background-color: #FFE39E;
  }
  to {
    background-color: transparent;
  }
`;

const titleMove = keyframes`
  from {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  to {
    position: absolute;
    top: 50px;
    left: 100px;
    transform: translate(0, 0);
  }
`;

const appearFromLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-100%);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const appearFromRight = keyframes`
  from {
    opacity: 0;
    transform: translateX(100%);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const Intro = () => {
  return (
    <S.Container>
      <S.Background>
        <S.Main>
          <S.Titleimg src={MainTitle} alt="title" />
          <S.Row>
            <S.Link2 to="/select?cat">
              <S.LinkBox2 src={MainCat} alt="research" />
            </S.Link2>
            <S.Link2 to="/select?dog">
              <S.LinkBox2 src={MainDog} alt="research" />
            </S.Link2>
          </S.Row>
        </S.Main>
      </S.Background>
    </S.Container>
  );
};

const S = {
  Titleimg: styled.img`
    inherits: false;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    animation: ${titleMove} 2s ease-out 3s forwards;
  `,
  Background: styled.div`
    animation: ${fadeOutBackground} 2s ease-out 3s forwards;
    background-color: #ffe39e;
    width: 100%;
    height: 100vh;
    position: relative;
  `,
  Container: styled.div`
    height: 100vh;
    width: 100vw;
    background-image: url(${bg});
    background-repeat: no-repeat;
    background-size: cover;
    overflow-x: hidden;
  `,
  Main: styled.div`
    width: 100em;
    max-width: calc(100vw - 10em);
    margin: 0 auto;
  `,
  Row: styled.div`
    display: flex;
    padding-top: 300px;
    justify-content: space-between;
  `,
  Link: styled(Link)`
    opacity: 0;
    animation: ${appearFromLeft} 1s ease-out 3s forwards;
  `,
  Link2: styled(Link)`
    /* display: none; */
    opacity: 0;
    margin-left: 20px;
    margin-right: 20px;
    animation: ${appearFromRight} 1s ease-out 3s forwards;
  `,
  LinkBox: styled.img`
    cursor: pointer;
    max-width: 100%;
    object-fit: contain;
    animation: ${appearFromLeft} 1s ease-out 3s forwards;
  `,
  LinkBox2: styled.img`
    cursor: pointer;
    max-width: 100%;
    object-fit: contain;
    animation: ${appearFromRight} 1s ease-out 3s forwards;
  `,
  Middle: styled.div`
    flex: 1 0 auto;
    width: 2em;
  `,
};

export default Intro;
