import React from "react";
import { useEffect } from "react";
import { useRef } from "react";

// 홈페이지 로딩 시 아이디에 포커싱을 주고싶다면 => 아이디 인풋을 useRef로 담은다음 포커싱을 주면 됨(즉, 최초렌더링이 될때 포커싱)
// ref = {idRef} 로 연결!!!
const App = () => {
  const idRef = useRef("");

  //최초 렌더링시에만
  useEffect(() => {
    idRef.current.focus();
  }, []);
  return (
    <div>
      <div>
        아이디 : <input type="text" ref={idRef} />
      </div>
      <div>
        비밀번호 : <input type="password" />
      </div>
    </div>
  );
};

export default App;
