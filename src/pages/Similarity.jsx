import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  Header,
  SimilarityCard,
  MHeader,
  MBottomNavBar,
  MainColor,
} from "../components";
import { bg2 } from "../images";
import styled from "styled-components";
import { noItem, noItemText } from "../images";

const Similarity = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const arr = location.state.arr;
  const isMobile = window.innerWidth <= 393;

  return (
    <>
      {isMobile ? <MHeader /> : <Header />}
      <S.Container>
        <S.HeaderBox>
          List of pets
          <br />
          similar to the picture
        </S.HeaderBox>
        {arr.length !== 0 ? (
          <S.AnimalContainer>
            {arr.map((res, i) => (
              <SimilarityCard
                key={i}
                date={res.admission_date}
                kindCd={res.breed}
                sexCd={res.gender}
                neuterYn={res.isneutered ? "Y" : "N"}
                imgUrl={res.photo_url}
                careNm={res.shelter_contact}
                careTel={res.shelter_location}
                weight={"12"}
                similar={Math.round(res.probability)}
                notice={res.notes}
              />
            ))}
          </S.AnimalContainer>
        ) : (
          <div style={{ width: "100%" }}>
            <S.NoItem src={noItem} />
            <S.NoItemText src={noItemText} />
            <S.BackButton
              onClick={() => {
                navigate("/");
              }}>
              돌아가기
            </S.BackButton>
          </div>
        )}
      </S.Container>
      {isMobile && <MBottomNavBar />}
    </>
  );
};
const S = {
  Container: styled.div`
    padding-inline: 80px;
    @media screen and (max-width: 393px) {
      padding-inline: 24px;
    }
    background-image: url(${bg2});
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;
  `,
  HeaderBox: styled.div`
    font-size: 48px;
    padding-top: 12px;
    margin-block: 12px;
    font-weight: bold;
    @media screen and (max-width: 393px) {
      margin-block: 16px;
      font-size: 32px;
    }
  `,
  AnimalContainer: styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    @media screen and (max-width: 393px) {
      grid-template-columns: 1fr;
    }
  `,
  NoItem: styled.img`
    position: absolute;
    top: 30%;
    left: 35%;
    width: 30%;
    height: 30%;
    object-fit: contain;
  `,
  NoItemText: styled.img`
    position: absolute;
    top: 45%;
    left: 35%;
    width: 30%;
    height: 30%;
    object-fit: contain;
  `,
  BackButton: styled.div`
    width: 500px;
    height: 50px;
    position: absolute;
    cursor: pointer;
    top: 65%;
    left: 34%;
    color: white;
    text-align: center;
    padding-top: 15px;
    font-size: 24px;
    border-radius: 16px;
    background-color: ${MainColor};
  `,
};

export default Similarity;
