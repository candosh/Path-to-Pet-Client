import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { FaFilter, FaImage } from "react-icons/fa";
import { MainColor, DisableMain } from "./";
import { useNavigate, useLocation } from "react-router-dom";

const MBottomNavBar = () => {
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
    <S.Container>
      {isFocus === "img" ? (
        <>
          <S.FocusLink
            onClick={() => {
              handleNavImg();
            }}
          >
            <FaImage size={24} />
            <span>이미지로 찾기</span>
          </S.FocusLink>
          <S.UnFocusLink
            onClick={() => {
              handleNavResearch();
            }}
          >
            <FaFilter size={28} />
            <span>필터로 찾기</span>
          </S.UnFocusLink>
        </>
      ) : (
        <>
          <S.UnFocusLink
            onClick={() => {
              handleNavImg();
            }}
          >
            <FaImage size={24} />
            <span>이미지로 찾기</span>
          </S.UnFocusLink>
          <S.FocusLink
            onClick={() => {
              handleNavResearch();
            }}
          >
            <FaFilter size={28} />
            <span>필터로 찾기</span>
          </S.FocusLink>
        </>
      )}
    </S.Container>
  );
};

const S = {
  Container: styled.div`
    width: 100%;
    height: 64px;
    position: fixed;
    left: 0;
    bottom: 0;
    display: flex;
    z-index: 100000;
    background-color: white;
  `,
  FocusLink: styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: ${() => MainColor};
  `,
  UnFocusLink: styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: ${() => DisableMain};
  `,
};

export default MBottomNavBar;
