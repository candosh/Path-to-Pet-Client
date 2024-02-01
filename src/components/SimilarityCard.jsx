import styled from "styled-components";
import { useState } from "react";
import { MainColor, DetailModal } from "./";
import { defaultImg } from "../images";
const SimilarityCard = ({
  date,
  kindCd,
  sexCd,
  neuterYn,
  imgUrl,
  similar,
  careNm,
  careTel,
  weight,
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
      similar: info.similar,
      careNm: info.careNm,
      careTel: info.careTel,
      weight: info.weight,
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
            similar: similar,
            careNm: careNm,
            careTel: careTel,
            weight: weight,
          });
          openModal();
        }}
      >
        <S.Row>
          <S.AnimalImg
            src={imgUrl}
            onError={(e) => {
              e.target.src = defaultImg;
            }}
          />
          <S.TextContainer>
            <S.TextBox1>접수일</S.TextBox1>
            <S.TextBox2>{date}</S.TextBox2>
            <div style={{ height: "20px" }}></div>
            <S.TextBox1>품종</S.TextBox1>
            <S.TextBox2>{kindCd}</S.TextBox2>
            <div style={{ height: "20px" }}></div>
            <S.TextBox1>성별 / 중성화 여부</S.TextBox1>
            <S.TextBox2>
              {sexCd} / {neuterYn}
            </S.TextBox2>
          </S.TextContainer>
        </S.Row>
        <S.SimilarityBox>사진과 {similar}% 일치해요</S.SimilarityBox>
      </S.Container>
      <DetailModal open={modalOpen} close={closeModal} data={testData} />
    </>
  );
};

const S = {
  Container: styled.div`
    margin: 10px;
    margin-bottom: 40px;
    width: 408px;
    height: 279px;
    display: flex;
    flex-direction: column;
    border-radius: 20px;
    background-color: white;
    cursor: pointer;
    @media screen and (max-width: 393px) {
      margin: 0;
      margin-bottom: 16px;
      width: auto;
      height: auto;
    }
  `,

  Row: styled.div`
    display: flex;
  `,
  AnimalImg: styled.img`
    padding: 26px;
    width: 190px;
    height: 200px;
    border-radius: 20px;
    @media screen and (max-width: 393px) {
      padding: 8px 16px 8px 8px;
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
    margin-top: 10px;
    font-weight: 600;
    font-size: 18px;
  `,

  SimilarityBox: styled.div`
    width: 100%;
    color: white;
    background-color: ${MainColor};
    font-size: 24px;
    text-align: center;
    padding-block: 8px;
    font-weight: 700;
    border-radius: 0 0 20px 20px;
    @media screen and (max-width: 393px) {
      width: 100%;
    }
  `,
};
export default SimilarityCard;
