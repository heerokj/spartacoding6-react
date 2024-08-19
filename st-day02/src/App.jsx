import { useState } from "react";
import styled from "styled-components";

// TODO: button이 눌렸을 때, gray 처리
// TODO: 취소 버튼이 눌리면 gray 처리된 것이 없도록
const App = () => {
  const 초기값 = [
    {
      id: 1,
      name: "홍길동",
      isFemale: false,
      score: 30,
    },
    {
      id: 2,
      name: "홍길순",
      isFemale: true,
      score: 60,
    },
    {
      id: 3,
      name: "김르탄",
      isFemale: true,
      score: 80,
    },
  ];

  const [people, setPeople] = useState(초기값);
  const [activeId, setActiveId] = useState(0);

  return (
    <div>
      <div>
        {people.map(function (person) {
          return (
            <StyledButton
              key={person.id}
              $p={person}
              $activeId={activeId}
              onClick={() => {
                setActiveId(person.id);
              }}
            >
              {person.name}
            </StyledButton>
          );
        })}
      </div>
      <button
        style={{
          marginTop: "20px",
          width: "100%",
          backgroundColor: "aquamarine",
        }}
        onClick={() => {
          setActiveId(0); //id값 넣어야됨
        }}
      >
        취소
      </button>
    </div>
  );
};

export default App;

// TODO: 여기를 바꾸세요.
// 점수가 50점 이하 : 빨간색
// 점수가 51점 ~ 70점 : 초록색
// 점수가 71점 이상 : 파란색
const StyledButton = styled.button`
  background-color: ${({ $p, $activeId }) => {
    if ($p.id === $activeId) {
      return "gray";
    }

    if ($p.score <= 50) {
      return "red";
    } else if ($p.score < 70) {
      return "green";
    } else {
      return "blue";
    }
  }};
`;
