import React from "react";

const Child = ({ setCount }) => {
  //*** 주의**  props로 받으면 {} 제외!! , 구조분해할당하여 받으려면 {} 적고 안에다 props의 속성?을 적기 */
  return (
    <div>
      <h1>자식</h1>
      <button
        onClick={() => {
          setCount((prev) => {
            //*** 주의** 함수형은 setCount안에! 함수 작성해줘야된다.
            return prev + 1;
          });
        }}
      ></button>
    </div>
  );
};

export default Child;
