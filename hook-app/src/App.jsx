// src/SokSae.js

import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const 속세 = () => {
  const nav = useNavigate();

  useEffect(() => {
    //clean up 함수
    return () => {
      console.log(
        "안녕히 계세요 여러분! 전 이 세상의 모든 굴레와 속박을 벗어 던지고 제 행복을 찾아 떠납니다! 여러분도 행복하세요~~!"
      );
    };
  }, []);

  return (
    <button
      onClick={() => {
        nav("/todos");
      }}
    >
      속세를 벗어나는 버튼
    </button>
  );
};

export default 속세;
