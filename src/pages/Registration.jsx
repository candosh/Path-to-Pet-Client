// 3.0 내가 찾은 유기동물 등록하기 페이지

import { Header, MHeader } from "../components";
import { bg2 } from "../images";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Registration = () => {
  const isMobile = window.innerWidth <= 393;

  const navigate = useNavigate();

  const handleCompleteClick = () => {
    navigate("/research");
  };

  return (
    <>
      {isMobile ? <MHeader /> : <Header />}
      <S.Container>
        <S.Container2>
          <S.InputBoxContainer>
            <S.InputBox>
              <S.TitleContainer>
                Registering an abandoned animal you found
              </S.TitleContainer>
              <S.CompleteContainer>
                <S.CompleteText onClick={handleCompleteClick}>
                  complete
                </S.CompleteText>
              </S.CompleteContainer>
            </S.InputBox>
          </S.InputBoxContainer>
        </S.Container2>
      </S.Container>
    </>
  );
};

const S = {
  Container: styled.div`
    padding-inline: 120px;
    @media screen and (max-width: 393px) {
      padding: 0;
    }
    background-image: url(${bg2});
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;
    overflow-x: hidden;
  `,
  Container2: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    padding-block: 16px;
    @media screen and (max-width: 393px) {
      padding: 0;
    }
  `,

  InputBoxContainer: styled.div`
    height: 745px;
    width: 800px;
    margin-top: 25px;
  `,

  InputBox: styled.div`
    height: 745px;
    width: 800px;
    background-color: #ffffff;
    border-radius: 20px;
    box-shadow: 5px 5px 4px #00000040;
    position: relative;
  `,
  CompleteContainer: styled.div`
    height: 80px;
    width: 800px;
    background-color: #ffb941;
    border-radius: 0px 0px 20px 20px;
    position: absolute;
    bottom: 0;
    cursor: pointer;
  `,

  CompleteText: styled.div`
    color: #ffffff;
    font-size: 28px;
    font-weight: 700;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
  `,
  TitleContainer: styled.div`
    color: #ffb941;
    font-size: 30px;
    font-weight: 700;
    margin-left: 20px;
  `,
};

export default Registration;
