import React, { useState } from 'react'


//TO DO LIST 만들기
const App = () => {

  const 초기값 = [
    {
      id:1,
      title:"빨래하기",
      isDone:false,
    },
    {
      id:2,
      title:"고양이밥주기",
      isDone:true,
    },
    {
      id:3,
      title:"환기하기",
      isDone:false,
    },
  ];
  const [todos, setTodos] = useState(초기값);
  const [inputTodo, setInputTodo] = useState("");

const addToDo = (e) => {
  e.preventDefault();
  const newArr = [...todos, inputTodo]
  return setTodos(newArr);
}

  return (
    <div>
      <form onSubmit={function(e){
        e.preventDefault();
        const inputTodo = [
          ...todos,
          {

          }
        ]
        setTodos(newArr)
      }}>
        <input value={inputTodo} onChange={(e) => {
          setInputTodo(e.target.value);
        }} />
        <button>추가</button>
      </form>
      <h3>할일목록</h3>
      {todos.filter((할일) => 할일.isDone != true).map((할일)=>{
        console.log(todos)
        //{할일.isDone} 이렇게하면 String 이 아니라 출력이 안됨 ***
        //{할일.isDone === true ? "완료" : "미완료"}
        return <div key={할일.id}>{할일.title}</div>
      })}

      <h3>완료목록</h3>
      {todos.filter((할일) => 할일.isDone != false).map((할일)=>{
        console.log(todos)
        return <div key={할일.id}>{할일.title}</div>
      })}
    </div>
  )
}

export default App

