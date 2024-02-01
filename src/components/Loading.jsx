import React from "react";
import styled from "styled-components";
import { loading } from "../images";

const Loading = () => {
  return (
    <S.Container>
      <S.SubArea>
        <S.Row>
          <S.InnerText>사진과 유사한 강아지들을 찾는 중이에요...</S.InnerText>
          <S.img src={loading} alt="loading" />
        </S.Row>
      </S.SubArea>
    </S.Container>
  );
};

const S = {
  Container: styled.div`
    position: fixed;
    background-color: rgba(0, 0, 0, 0.3);
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
    z-index: 100;
  `,
  SubArea: styled.div`
    border-radius: 20px;
    width: 500px;
    /* height: 200px; */
    @media screen and (max-width: 393px) {
      width: 85%;
      margin-bottom: 45%;
    }
  `,
  Row: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: white;
    border-radius: 20px;
    padding-inline: 50px;
    @media screen and (max-width: 393px) {
      padding-inline: 24px;
    }
  `,

  InnerText: styled.p`
    margin: 0;
    padding-top: 24px;
    font-weight: bold;
    font-size: 24px;
    @media screen and (max-width: 393px) {
      padding-top: 50px;
      font-size: 24px;
    }
  `,
  img: styled.img`
    width: 80%;
    height: 80%;
    object-fit: contain;
  `,
};

export default Loading;
