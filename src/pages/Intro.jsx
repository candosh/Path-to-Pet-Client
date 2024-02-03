import React from "react";
import styled, { keyframes } from "styled-components";
import { Title, bg, mainSearch, mainImg } from "../images";
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
    transform: translateY(-50%) translateX(-50%);
    left: 50%;
    top: 50%;
    position: fixed;
  }
  to {
    transform: translateY(0) translateX(0);
    position: static;
  }
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: scale(0.5);
  }
  to {
    opacity: 1;
    transform: scale(1);
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
          <S.Titleimg src={Title} alt="title" />
          <S.Row>
            <S.Link to="/inputImage">
              <S.LinkBox src={mainImg} alt="img" />
            </S.Link>

            <S.Middle />

            <S.Link2 to="/research">
              <S.LinkBox2 src={mainSearch} alt="research" />
            </S.Link2>
          </S.Row>
        </S.Main>
      </S.Background>
    </S.Container>
  );
};

const S = {
  Titleimg: styled.img`
    margin-block: 30px;
    animation: ${titleMove} 2s ease-out 3s forwards;
  `,
  Background: styled.div`
    animation: ${fadeOutBackground} 2s ease-out 3s forwards;
    background-color: #ffe39e; // 초기 배경색 설정
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
    justify-content: space-between;
  `,
  Link: styled(Link)`
    animation: ${appearFromLeft} 1s ease-out 3s forwards;
  `,
  Link2: styled(Link)`
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
