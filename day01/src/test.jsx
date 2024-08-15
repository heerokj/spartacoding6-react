import { useState } from 'react'
import './App.css'

function App() {
  const [user, setUser] = useState({ name: '홍길동', age: 25 });
  const [items, setItems] = useState(['사과', '바나나', '오렌지']);
  
  const { name, age } = user;
  

  // TODO-2: 새 아이템을 string 타입의 상태로 관리하세요.
  const [inputFruit, setInputFruit] = useState("");

  
  //input을 관리하기 위해서는 2가지!!!!!!
  // value, onChange

  
	// TODO-4: addNewItem 함수를 완성해 보세요. Spread Operator 문법을 활용해 보세요.
  const addNewItem = (e) => {
    e.preventDefault(); //이 코드 왜? 누르면 바로 새로고침 됨.. 막아주기
    //console.log(inputFruit) // 입력한 값
    const newArr = [...items, inputFruit]; // 기존꺼랑 합친 새로운 배열 생성
    //다시 랜더링 시키기
    setItems(newArr)

  };
  
  return (
    <div>
      <h1>사용자 정보</h1>
      <p>이름: {name}</p>
      <p>나이: {age}</p>
      <h2>사용자의 아이템 목록</h2>

      <form onSubmit={addNewItem}>
        <label htmlFor="newItem">새 아이템 추가:</label>
        {/* TODO-3: 새 아이템을 추가하는 폼을 완성하세요. input에 value, onChange 속성을 이용해 보세요. */}
        <input value={inputFruit} onChange={(e)=>{
          const newText = e.target.value; // input에 값이 변경될때 값이 newText에 넣어짐 
          setInputFruit(newText);
        }}/>
        <button>추가</button>
      </form>
      <ul>
        {/* TODO-1: map 메소드를 이용해서 모든 아이템 목록을 렌더링 하세요. */}
        {items.map((item) =>{
          return <li key={item}>{item}</li>
        })}
      </ul>
    </div>
  );
}

export default App
