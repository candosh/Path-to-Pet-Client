import React from "react";
import styled from "styled-components";
import { Title, bg, mainSearch, mainImg } from "../images";
import { Link } from "react-router-dom";
const Intro = () => {
  return (
    <S.Container>
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
    </S.Container>
  );
};

const S = {
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
  Titleimg: styled.img`
    margin-block: 30px;
  `,
  Row: styled.div`
    display: flex;
    justify-content: space-between;
  `,
  Link: styled(Link)`
    flex: 732 516 0;
  `,
  Middle: styled.div`
    flex: 1 0 auto;
    width: 2em;
  `,
  Link2: styled(Link)`
    flex: 516 732 0;
  `,
  LinkBox: styled.img`
    cursor: pointer;
    max-width: 100%;
    object-fit: contain;
  `,
  LinkBox2: styled.img`
    cursor: pointer;
    max-width: 100%;
    object-fit: contain;
  `,
};

export default Intro;
