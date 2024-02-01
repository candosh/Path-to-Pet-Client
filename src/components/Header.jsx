import React, { useState, useEffect } from "react";
import { Logo } from "../images";
import styled from "styled-components";
import { MainColor, DisableMain } from "../components";
import { useNavigate, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  const [isFocus, setFocus] = useState("");
  useEffect(() => {
    if (location.pathname === "/research") {
      setFocus("research");
    } else {
      setFocus("img");
    }
  }, [isFocus]);
  const navigate = useNavigate();
  const handleNavImg = () => {
    navigate("/inputImage");
  };
  const handleNavResearch = () => {
    navigate("/research");
  };
  return (
    <S.container>
      <S.logoBox>
        <div
          style={{ marginLeft: "120px", cursor: "pointer" }}
          onClick={() => {
            window.location.href = "/";
          }}
        >
          <img src={Logo} alt="logo" />
        </div>
      </S.logoBox>
      <S.NavBox>
        {isFocus === "img" ? (
          <>
            <div
              style={{ marginRight: "56px", cursor: "pointer" }}
              onClick={() => {
                handleNavImg();
              }}
            >
              <S.LinkText1>이미지로 찾기</S.LinkText1>
            </div>
            <div
              style={{ marginRight: "120px", cursor: "pointer" }}
              onClick={() => {
                handleNavResearch();
              }}
            >
              <S.LinkText2>필터로 찾기</S.LinkText2>
            </div>
          </>
        ) : (
          <>
            <div
              style={{ marginRight: "56px", cursor: "pointer" }}
              onClick={() => {
                handleNavImg();
              }}
            >
              <S.LinkText2>이미지로 찾기</S.LinkText2>
            </div>
            <div
              style={{ marginRight: "120px", cursor: "pointer" }}
              onClick={() => {
                handleNavResearch();
              }}
            >
              <S.LinkText1>필터로 찾기</S.LinkText1>
            </div>
          </>
        )}
      </S.NavBox>
    </S.container>
  );
};

const S = {
  container: styled.div`
    display: flex;
    position: static;
    width: 100%;
    top: 0;
    padding-block: 13px;
    flex: 1;
    align-items: center;
    z-index: 3;
    background-color: #fff;
    justify-content: space-between;
  `,

  logoBox: styled.div`
    justify-content: left;
  `,
  NavBox: styled.div`
    display: flex;
    flex-direction: row;
  `,

  LinkText1: styled.div`
    font-size: 24px;
    font-weight: bold;
    color: ${() => MainColor};
  `,

  LinkText2: styled.div`
    font-size: 24px;
    font-weight: bold;
    color: ${() => DisableMain};
  `,
};

export default Header;
