import React from "react";
import styled from "styled-components";
import { Logo, Title, mgoImg, mgoResearch } from "../images";
import { Link } from "react-router-dom";
const MIntro = () => {
  return (
    <S.Container>
      <S.Titleimg src={Title} alt="title" />
      <S.tempArea />
      <Link to="/inputImage" style={{ marginBottom: "16px" }}>
        <S.LinkText src={mgoImg} alt="img" />
      </Link>
      <Link to="/research">
        <S.LinkText src={mgoResearch} alt="research" />
      </Link>
      <S.ImgArea>
        <S.LogoImg src={Logo} alt="logo" />
      </S.ImgArea>
    </S.Container>
  );
};

const S = {
  Container: styled.div`
    padding-inline: 24px;
    padding-block: 20%;
    background-color: white;
  `,
  Titleimg: styled.img`
    margin-bottom: 60px;
    width: 70%;
  `,
  tempArea: styled.div`
    min-height: 16vh;
  `,
  LinkText: styled.img`
    margin-bottom: 16px;
    cursor: pointer;
  `,
  ImgArea: styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    /* width: 100%; */
  `,
  LogoImg: styled.img`
    margin-top: 8px;
    width: 90%;
  `,
};

export default MIntro;
