// 3.0 내가 찾은 유기동물 등록하기 페이지

import React, { useState, useRef } from "react";
import { Header, MHeader } from "../components";
import { bg2, RegistDropPet } from "../images";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Registration = () => {
  const isMobile = window.innerWidth <= 393;
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState(null);
  const [imgBase64, setImgBase64] = useState("");
  const inputRef = useRef();

  // 업로드 api 로직 추가 해야함

  const handleCompleteClick = () => {
    navigate("/research");
  };

  // 이미지 변경 핸들러 부분
  const imageChange = (e) => {
    let reader = new FileReader();
    reader.onloadend = () => {
      const base64 = reader.result;
      if (base64) {
        setImgBase64(base64.toString());
      }
    };
    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]);
      setSelectedImage(e.target.files[0]);
    }
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
              <S.ContentWrapper>
                <S.LeftContainer>
                  <S.UploadBox>
                    <label htmlFor="image-upload">
                      {selectedImage ? (
                        <S.UploadAfterImg
                          src={imgBase64}
                          alt="Uploaded Image Preview"
                        />
                      ) : (
                        <S.UploadBeforeImg
                          src={RegistDropPet}
                          alt="Upload Prompt"
                        />
                      )}
                    </label>
                    <S.InputArea
                      id="image-upload"
                      ref={inputRef}
                      accept="image/*"
                      type="file"
                      onChange={imageChange}
                    />
                  </S.UploadBox>
                  <>
                    <S.ContentContainer>
                      <S.ContentTitle>Registrar's Name</S.ContentTitle>
                      <S.ContentInput
                        as="input"
                        type="text"
                        placeholder="Please enter it."
                      />
                    </S.ContentContainer>
                    <S.ContentContainer>
                      <S.ContentTitle>
                        Registrar's Connect Number
                      </S.ContentTitle>
                      <S.ContentInput
                        as="input"
                        type="text"
                        placeholder="Please enter it."
                      />
                    </S.ContentContainer>
                  </>
                </S.LeftContainer>
                <S.RightContainer>
                  <S.ContentContainer>
                    <S.ContentTitle>Breed</S.ContentTitle>
                    <S.ContentInput
                      as="input"
                      type="text"
                      placeholder="Please enter it."
                    />
                  </S.ContentContainer>
                  <S.ContentContainer>
                    <S.ContentTitle>Where You found</S.ContentTitle>
                    <S.ContentInput
                      as="input"
                      type="text"
                      placeholder="Please enter it."
                    />
                  </S.ContentContainer>
                  <S.ContentContainer>
                    <S.ContentTitle>Neutered</S.ContentTitle>
                    <S.ContentInput as="select">
                      <option value="">Please select</option>
                      <option value="yes">Yes</option>
                      <option value="no">No</option>
                      <option value="unknown">Unknown</option>
                    </S.ContentInput>
                  </S.ContentContainer>
                  <S.ContentContainer>
                    <S.ContentTitle>Gender</S.ContentTitle>
                    <S.ContentInput as="select">
                      <option value="">Please select</option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                      <option value="unknown">Unknown</option>
                    </S.ContentInput>
                  </S.ContentContainer>
                  <S.ContentContainer>
                    <S.ContentTitle>Significant to report</S.ContentTitle>
                    <S.OtherContentInput
                      as="textarea"
                      type="text"
                      placeholder="Please enter it."
                    />
                  </S.ContentContainer>
                </S.RightContainer>
              </S.ContentWrapper>
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
  TitleContainer: styled.div`
    color: #ffb941;
    font-size: 30px;
    font-weight: 700;
    padding-left: 35px;
    padding-top: 30px;
  `,
  ContentWrapper: styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    width: 100%;
    padding: 0 25px;
    box-sizing: border-box;
    @media screen and (max-width: 393px) {
      flex-direction: column;
    }
  `,
  LeftContainer: styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 50%;
  `,
  UploadBox: styled.div`
    width: 350px;
    height: 350px;
    padding-top: 20px;
  `,
  InputArea: styled.input`
    display: none;
  `,
  UploadBeforeImg: styled.img`
    object-fit: fit;
    cursor: pointer;
  `,
  UploadAfterImg: styled.img`
    width: 100%;
    height: 100%;
    border-radius: 40px;
    object-fit: contain;
    background-color: white;
    resize: cover;
  `,
  ContentContainer: styled.div`
    height: 58px;
    width: 317px;
    padding-left: 10px;
    padding-top: 30px;
  `,
  ContentTitle: styled.div`
    color: #ffb941;
    font-size: 18px;
    font-weight: 400;
    line-height: 18px;
    position: absolute;
    white-space: nowrap;
  `,
  ContentInput: styled.div`
    height: 32px;
    width: 317px;
    top: 26px;
    position: relative;
    border-color: #989595;
    border-radius: 10px;
    border: 1px solid;
    outline: none;
    color: #3c3c3c;
    font-size: 14px;
    font-weight: 400;
    padding-left: 20px;
  `,
  OtherContentInput: styled.div`
    height: 135px;
    width: 317px;
    top: 26px;
    position: relative;
    border-radius: 10px;
    border: 1px solid;
    outline: none;
    color: #3c3c3c;
    font-size: 14px;
    font-weight: 400;
    padding-left: 20px;
    padding-top: 20px;
    resize: none;
    overflow: auto;
  `,
  RightContainer: styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding-left: 20px;
    width: 50%;
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
};

export default Registration;
