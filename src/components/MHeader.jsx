import React from "react";
import { Logo } from "../images";
import styled from "styled-components";
// import { Link } from "react-router-dom";

const MHeader = () => {
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
    </S.container>
  );
};

const S = {
  container: styled.div`
    display: flex;
    position: sticky;
    top: 0;
    /* padding-inline: 32px; */
    padding-block: 13px;
    flex: 1;
    align-items: center;
    z-index: 3;
    background-color: #fff;
    /* background-color: pink; */
  `,

  logoBox: styled.div`
    justify-content: left;
  `,
};

export default MHeader;
