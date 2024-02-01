import React from "react";
import styled from "styled-components";
import { MainColor } from "../components";

const Label = ({ text, data }) => {
  return (
    <S.Row>
      <S.Container>{text}</S.Container>
      <S.TextArea>{data}</S.TextArea>
    </S.Row>
  );
};

const S = {
  Row: styled.div`
    display: flex;
    margin-bottom: 20px;
    align-items: flex-end;
    justify-content: left;
  `,
  Container: styled.div`
    color: ${() => MainColor};
    text-align: center;
    font-weight: 500;
    font-size: 14px;
  `,
  TextArea: styled.div`
    margin-left: 8px;
    text-align: center;
    font-weight: 600;
    font-size: 18px;
  `,
};

export default Label;
