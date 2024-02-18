import React from "react";
import styled, { keyframes } from "styled-components";
import {
  MainTitle,
  bg,
  FoundCat,
  ListCat,
  ListDog,
  FoundDog,
  LostCat,
  LostDog,
} from "../images";
import { Link, useLocation } from "react-router-dom";

const Select = () => {
  const location = useLocation();
  const queryString = location.search.slice(1);
  console.log(queryString);
  return (
    <S.Container>
      <S.Background>
        <S.Main>
          <S.Titleimg src={MainTitle} alt="title" />
          <S.Row>
            <S.Link2 to={`/registration?${queryString}`}>
              <S.LinkBox2
                src={queryString === "dog" ? FoundDog : FoundCat}
                alt="registration"
              />
            </S.Link2>
            <S.Link2 to={`/inputImage?${queryString}`}>
              <S.LinkBox2
                src={queryString === "dog" ? LostDog : LostCat}
                alt="research"
              />
            </S.Link2>
            <S.Link2 to={`/research?${queryString}`}>
              <S.LinkBox2
                src={queryString === "dog" ? ListDog : ListCat}
                alt="research"
              />
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
    /* inherits: false; */
    /* position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%); */
  `,
  Background: styled.div`
    /* background-color: #ffe39e; */
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
    padding-top: 50px;
    justify-content: space-between;
  `,
  Link: styled(Link)``,
  Link2: styled(Link)`
    /* display: none; */
    margin-left: 20px;
    margin-right: 20px;
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
  Middle: styled.div`
    flex: 1 0 auto;
    width: 2em;
  `,
};

export default Select;
