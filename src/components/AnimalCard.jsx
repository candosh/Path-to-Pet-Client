import styled from "styled-components";
import { useState } from "react";
import { MainColor, DetailModal2 } from "./";
import { defaultImg } from "../images";

const AnimalCard = ({
  date,
  kindCd,
  sexCd,
  neuterYn,
  imgUrl,
  notice,
  colorCd,
  caretel,
  weight,
  careNm,
}) => {
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };

  const [testData, setTestData] = useState({});
  const DataChoice = (info) => {
    setTestData({
      date: info.date,
      kindCd: info.kindCd,
      sexCd: info.sexCd,
      neuterYn: info.neuterYn,
      imgUrl: info.imgUrl,
      notice: notice,
      colorCd: colorCd,
      caretel: caretel,
      weight: weight,
      careNm: careNm,
    });
  };
  return (
    <>
      <S.Container
        onClick={() => {
          DataChoice({
            date: date,
            kindCd: kindCd,
            sexCd: sexCd,
            neuterYn: neuterYn,
            imgUrl: imgUrl,
            notice: notice,
            colorCd: colorCd,
            caretel: caretel,
            weight: weight,
            careNm: careNm,
          });
          openModal();
        }}
      >
        <S.AnimalImg
          src={imgUrl}
          onError={(e) => {
            e.target.src = defaultImg;
          }}
        />
        <S.TextContainer>
          <S.TextBox1>Date</S.TextBox1>
          <S.TextBox2>{date}</S.TextBox2>
          <div style={{ height: "20px" }}></div>
          <S.TextBox1>Breed</S.TextBox1>
          <S.TextBox2>{kindCd}</S.TextBox2>
          <div style={{ height: "20px" }}></div>
          <S.TextBox1>Gender / Neutered</S.TextBox1>
          <S.TextBox2>
            {sexCd} / {neuterYn ? "Y" : "N"}
          </S.TextBox2>
        </S.TextContainer>
      </S.Container>
      <DetailModal2 open={modalOpen} close={closeModal} data={testData} />
    </>
  );
};

const S = {
  Container: styled.div`
    margin: 10px;
    width: calc(100% - 10px);
    height: 200px;
    display: flex;
    border-radius: 20px;
    align-items: center;
    background-color: white;
    cursor: pointer;
    @media screen and (max-width: 393px) {
      margin: 0;
      margin-bottom: 16px;
      width: 350px;
    }
  `,
  AnimalImg: styled.img`
    width: 190px;
    height: 100%;
    object-fit: cover;
    border-radius: 20px 0px 0px 20px;
    margin-right: 16px;
    cursor: pointer;
    @media screen and (max-width: 393px) {
      border-radius: 20px 0px 0px 20px;
      height: 100%;
      width: 150px;
    }
  `,

  TextContainer: styled.div`
    padding: 26px 0 26px 0;
    margin-top: 5px;
    @media screen and (max-width: 393px) {
      padding: 0;
      width: 150px;
    }
  `,
  TextBox1: styled.div`
    display: inline;
    border-radius: 4px;
    color: ${() => MainColor};
    font-weight: 500;
    font-size: 14px;
  `,
  TextBox2: styled.div`
    display: block;
    font-weight: 600;
    font-size: 18px;
  `,
};
export default AnimalCard;
