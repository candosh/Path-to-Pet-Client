import React, { useState } from "react";
import styled from "styled-components";
import { closeBtn } from "../images";
import { Label, MainColor } from "./";

function DetailModal2({ open, close, data }) {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  return (
    <>
      {open ? (
        <S.Background>
          <S.Container>
            <S.CloseButton src={closeBtn} onClick={close} />
            <S.Row2>
              <S.Row>
                <S.InImg src={data.imgUrl} alt="img" />
                {/* <S.InModal> */}
                {/* </S.InModal> */}
                <S.TextBox>
                  <S.HeadText>{data.kindCd}</S.HeadText>
                  <Label
                    text={"접수일"}
                    data={
                      data.date.substr(0, 4) +
                      "/" +
                      data.date.substr(4, 2) +
                      "/" +
                      data.date.substr(6, 8)
                    }
                  />

                  <Label
                    text={"성별/중성화여부"}
                    data={data.sexCd + " / " + data.neuterYn}
                  />
                  <Label text={"무게"} data={data.weight} />
                  <Label text={"특이사항"} data={data.notice} />
                </S.TextBox>
              </S.Row>
              <S.SimilarityBox
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                {isHovered ? (
                  <>
                    {data.careNm}
                    <br />
                    {data.caretel}
                  </>
                ) : (
                  <>입양 문의하기</>
                )}
              </S.SimilarityBox>
            </S.Row2>
          </S.Container>
        </S.Background>
      ) : null}
    </>
  );
}

const S = {
  Background: styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.3);
    display: flex;
    justify-content: center;
    align-items: center;
  `,
  Container: styled.div`
    width: 700px;
    height: 500px;
    display: flex;
    flex-direction: column;
    z-index: 999;
    top: 20%;
    left: 50%;
    position: absolute;
    transform: translate(-50%, -5%);
    background-color: white;
    border-radius: 20px;
    @media screen and (max-width: 393px) {
      width: 80%;
      height: auto;
      padding: 0;
    }
  `,

  TextBox: styled.div`
    @media screen and (max-width: 393px) {
      padding-inline: 16px;
    }
  `,
  // InModal: styled.div`
  //   /* height: auto; */
  //   /* padding-right: 24px; */
  //   @media screen and (max-width: 393px) {
  //     padding: 0;
  //   }
  // `,

  /* 모달창 내부 X버튼 */
  CloseButton: styled.img`
    display: flex;
    align-self: flex-end;
    width: 5%;
    padding: 8px;
    cursor: pointer;
    @media screen and (max-width: 393px) {
      width: 8%;
    }
  `,

  InImg: styled.img`
    width: 350px;
    height: 90%;
    padding-right: 32px;
    padding-left: 32px;
    margin-bottom: 32px;
    /* object-fit: cover; */
    @media screen and (max-width: 393px) {
      width: 100%;
      height: 200px;
      padding: 0;
    }
  `,
  HeadText: styled.div`
    color: ${MainColor};
    font-size: 36px;
    font-weight: bold;
    margin-bottom: 20px;
  `,

  Row2: styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
  `,
  Row: styled.div`
    display: flex;
    height: 100%;
    @media screen and (max-width: 393px) {
      flex-direction: column;
    }
  `,
  Title: styled.div`
    font-size: 36px;
    font-weight: bold;
    color: ${() => MainColor};
    margin-bottom: 20px;
  `,
  SimilarityBox: styled.div`
    width: 100%;
    color: white;
    background-color: ${MainColor};
    font-size: 24px;
    text-align: center;
    padding-block: 16px;
    font-weight: 700;
    border-radius: 0 0 20px 20px;
    border-top: 1px solid ${MainColor};
    &:hover {
      border-top: 1px solid ${MainColor};
      font-size: 16px;
      background-color: white;
      color: ${MainColor};
    }
    @media screen and (max-width: 393px) {
      width: 100%;
    }
  `,
};

export default DetailModal2;
