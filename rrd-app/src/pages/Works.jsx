import React from "react";
import { useNavigate } from "react-router-dom";

const Works = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h1>Works 컴포넌트입니다.</h1>
      <button
        onClick={() => {
          navigate("/");
        }}
      >
        Home으로 이동
      </button>
    </div>
  );
};

export default Works;
