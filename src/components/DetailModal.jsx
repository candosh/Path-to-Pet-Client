import React from "react";
import styled from "styled-components";
import { closeBtn } from "../images";
import { Label } from "./";
import { MainColor } from "./";
import { defaultImg } from "../images";

function DetailModal({ open, close, data }) {
  return (
    <>
      {open ? (
        <S.Background>
          <S.Container>
            <div style={{ justifyContent: "flex-end" }}>
              <S.CloseButton src={closeBtn} onClick={close} />
            </div>
            <S.Row>
              <S.InModal>
                <S.InImg
                  src={data.imgUrl}
                  alt="img"
                  onError={(e) => {
                    e.target.src = defaultImg;
                  }}
                />
              </S.InModal>
              <div>
                <S.HeadText>{data.similar}% match</S.HeadText>
                <Label
                  text={"Date"}
                  data={
                    data.date.substr(0, 4) +
                    "/" +
                    data.date.substr(5, 2) +
                    "/" +
                    data.date.substr(8, 2)
                  }
                />
                <Label text={"Breed"} data={data.kindCd} />
                <Label
                  text={"Gender / Neutered"}
                  data={data.sexCd + " / " + data.neuterYn}
                />
                <Label text={"weight"} data={data.weight} />
                <Label text={"particulars"} data={data.notice} />
              </div>
            </S.Row>
            <S.Row2>
              <Label text={"Protection center"} data={data.careNm} />
              <Label text={"Connect number"} data={data.careTel} />
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
    width: 560px;
    z-index: 999;

    top: 20%;
    left: 50%;
    position: absolute;
    transform: translate(-50%, -5%);
    background-color: white;
    border-radius: 20px;
    padding: 20px 20px 30px 20px;
    /* padding-left: 16px;
    padding-block: 16px; */
    @media screen and (max-width: 393px) {
      width: 80%;
      padding: 0;
    }
  `,
  InModal: styled.div`
    padding-right: 24px;
    @media screen and (max-width: 393px) {
      padding: 0;
    }
  `,
  HeadText: styled.div`
    color: ${MainColor};
    font-size: 36px;
    font-weight: bold;
    /* margin-bottom: 20px; */
  `,
  /* 모달창 내부 X버튼 */
  CloseButton: styled.img`
    /* padding: 8px; */
    float: right;
  `,

  InImg: styled.img`
    width: 300px;
    height: 350px;
    object-fit: cover;
    @media screen and (max-width: 393px) {
      margin-top: 16px;
      width: 280px;
      height: 200px;
    }
  `,
  Row: styled.div`
    clear: both;
    display: flex;
    justify-content: center;
    /* justify-content: space-around; */
    margin-top: 10px;
    @media screen and (max-width: 393px) {
      padding-inline: 16px;
      flex-direction: column;
    }
  `,
  Row2: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    margin-left: 5px;
    margin-top: 15px;
    margin-bottom: -20px;
    @media screen and (max-width: 393px) {
      padding-inline: 16px;
      flex-direction: column;
    }
  `,
};

export default DetailModal;
