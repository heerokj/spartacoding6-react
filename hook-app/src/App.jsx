import React from "react";
import { useState } from "react";
import { useEffect } from "react";

const App = () => {
  const [value, setValue] = useState("");
  useEffect(() => {
    console.log("useEffect");
  }, []); // useEffect는 동작에 대한 트리거가 존재 (트리거 : useEffect동작을 이끌어내는 변수)두번째 인자인 의존성배열로 해결 가능

  //의존성 배열 : useEffect가 의존하고 있는 값의 배열
  //=>이 베열에 값을 넣으면 그 값이 바뀔 때만 useEffect를 실행할게!
  // => [] 넣으면 리랜더링 될때마다 useEffect 호출되지않아 (트리거 없음)

  return (
    <div>
      <h1>useEffect</h1>
      <input
        type="text"
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />
    </div>
  );
};

export default App;
