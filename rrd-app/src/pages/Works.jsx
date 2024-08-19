// src/pages/Works.js

import React from "react";
import { Link, useParams } from "react-router-dom";

const data = [
  { id: 1, todo: "리액트 배우기" },
  { id: 2, todo: "노드 배우기" },
  { id: 3, todo: "자바스크립트 배우기" },
  { id: 4, todo: "파이어 베이스 배우기" },
  { id: 5, todo: "넥스트 배우기" },
  { id: 6, todo: "HTTP 프로토콜 배우기" },
];

const Works = () => {
  const param = useParams();

  const targetWork = data.find((work) => {
    return work.id === Number(param.id);
  });

  return (
    <div>
      <h3>현재페이지는 {targetWork.todo} 입니다.</h3>
      {data.map((work) => {
        return (
          <div key={work.id}>
            <div>할일: {work.id}</div>
            <Link to={`/works/${work.id}`}>
              <span style={{ cursor: "pointer" }}>➡️ Go to: {work.todo}</span>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default Works;
