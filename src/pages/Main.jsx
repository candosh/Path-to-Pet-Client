import React, { useState, useRef } from "react";
import styled from "styled-components";
import { useNavigate, useLocation } from "react-router-dom";
import { DropPet, DogInput, MobileDogInput, bg2 } from "../images";
import {
  Header,
  DisableMain,
  MainColor,
  Loading,
  MHeader,
  MBottomNavBar,
} from "../components";
import axios from "axios";

const Main = () => {
  const location = useLocation();
  const queryString = location.search.slice(1);

  const isMobile = window.innerWidth <= 393;

  const [selectedImage, setSelectedImage] = useState(null); //이미지 선택 저장
  const [imgBase64, setImgBase64] = useState(""); // 파일 base64
  const inputREF = useRef(); //요소 선택 저장
  const imageChange = (e) => {
    // const files = e.target.files[0];
    let reader = new FileReader();
    reader.onloadend = () => {
      // 2. 읽기가 완료되면 아래코드가 실행됩니다.
      const base64 = reader.result;
      if (base64) {
        setImgBase64(base64.toString()); // 파일 base64 상태 업데이트
      }
    };
    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]); // 1. 파일을 읽어 버퍼에 저장합니다.
      setSelectedImage(e.target.files[0]); // 파일 상태 업데이트
    }
  };

  const [isLoading, setLoading] = useState();

  //임시 타이머
  // const navigate = useNavigate();
  // const handleLodingAndNavigate = () => {
  //   setLoading(true);
  //   setTimeout(() => {
  //     navigate("/similarity");
  //   }, 5000);
  // };

  const navigate = useNavigate();
  const handleLodingAndNavigate = () => {
    setLoading(true);
    const formData = new FormData();

    formData.append("photo", selectedImage);
    formData.append("is_dog", queryString === "dog" ? true : false);
    formData.append("breed", "BritishShorthair");

    axios
      .post("https://34.64.68.236.nip.io/animals/image", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        // 업로드 성공 후에 수행할 작업
        // console.log(response);
        setLoading(false);
        setTimeout(() => {
          navigate("/similarity", { state: { arr: response.data } });
        }, 2000);
      })
      .catch((error) => {
        // 업로드 실패 시에 수행할 작업
        setLoading(false);
        console.error("Upload failed:", error);
      });
  };
  return (
    <>
      {isLoading && <Loading />}
      {isMobile ? <MHeader /> : <Header />}

      <S.Container>
        <S.Container2>
          <S.UploadBox
            onClick={() => {
              inputREF.current.click();
            }}>
            {/* 이미지 업로드  */}
            <S.InputArea
              ref={inputREF}
              accept="image/*"
              type="file"
              onChange={imageChange}
            />
            {/* 이미지를 저장하는 변수에 값이 저장 되면 해당 이미지 렌더링 , 아닐 경우 이미지를 추가하라는 이미지 렌더링 */}
            {selectedImage ? (
              <S.Row>
                {isMobile ? (
                  <S.UploadBeforeImg src={MobileDogInput} alt="Dog" />
                ) : (
                  <S.UploadBeforeImg src={DropPet} alt="Dog" />
                )}
                <S.UploadAfterImg id="srcImg" src={imgBase64} alt="Thumb" />
              </S.Row>
            ) : (
              <S.Row>
                {isMobile ? (
                  <S.UploadBeforeImg src={MobileDogInput} alt="Dog" />
                ) : (
                  <S.UploadBeforeImg src={DropPet} alt="Dog" />
                )}
              </S.Row>
            )}
          </S.UploadBox>

          {isMobile ? (
            <>
              {selectedImage ? (
                <S.MNextpageBtn onClick={() => handleLodingAndNavigate()}>
                  Find {queryString}
                </S.MNextpageBtn>
              ) : (
                <S.MNextpageBtnNon>Find {queryString}</S.MNextpageBtnNon>
              )}
            </>
          ) : (
            <>
              {selectedImage ? (
                <S.NextpageBtn onClick={() => handleLodingAndNavigate()}>
                  Find {queryString}
                </S.NextpageBtn>
              ) : (
                <S.NextpageBtnNon>Find {queryString}</S.NextpageBtnNon>
              )}
            </>
          )}
        </S.Container2>
        {isMobile && <MBottomNavBar />}
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
      /* align-items: flex-start; */
    }
  `,
  Row: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
  `,

  UploadBox: styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    align-self: center;
    justify-content: center;
  `,
  InputArea: styled.input`
    display: none;
  `,
  UploadBeforeImg: styled.img`
    height: 70vh;
    object-fit: fit;
    @media screen and (max-width: 393px) {
      width: 90%;
      height: auto;
      margin-top: 24px;
    }
  `,

  UploadAfterImg: styled.img`
    width: 40%;
    height: 85%;
    border-radius: 40px;
    object-fit: contain;
    background-color: white;
    resize: cover;
    align-self: center;
    justify-content: center;
    position: absolute;
    top: 10px;
    @media screen and (max-width: 393px) {
      margin-top: 20px;
      width: 80%;
    }
  `,
  ///
  NextpageBtn: styled.div`
    background: ${() => MainColor};
    border-radius: 20px;
    color: white;
    font-size: 24px;
    font-weight: 700;
    padding: 24.5px 200px;
    text-align: center;

    -webkit-tap-highlight-color: transparent;
  `,

  NextpageBtnNon: styled.div`
    background: ${() => DisableMain};
    border-radius: 20px;
    color: white;
    font-size: 24px;
    font-weight: 700;
    padding: 24.5px 200px;
    text-align: center;
    margin-bottom: 20px;
    -webkit-tap-highlight-color: transparent;
  `,
  //

  MNextpageBtn: styled.div`
    background: ${() => MainColor};
    border-radius: 8px;
    color: white;
    font-size: 24px;
    font-weight: 700;
    padding-block: 16px;
    width: 85%;
    text-align: center;
    margin-top: 24px;
    -webkit-tap-highlight-color: transparent;
  `,

  MNextpageBtnNon: styled.div`
    background: ${() => DisableMain};
    border-radius: 8px;
    color: white;
    font-size: 24px;
    font-weight: 700;
    padding-block: 16px;
    margin-top: 24px;
    width: 85%;
    text-align: center;
    margin-top: 24px;
    -webkit-tap-highlight-color: transparent;
  `,
};

export default Main;
