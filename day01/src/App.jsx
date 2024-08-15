import React, { useState } from "react";

// TODOLIST 만들기
const App = () => {
  const 초기값 = [
    {
      id: 1,
      title: "빨래하기",
      isDone: false,
    },
    {
      id: 2,
      title: "고양이 밥주기",
      isDone: true,
    },
    {
      id: 3,
      title: "환기하기",
      isDone: false,
    },
  ];
  const [todos, setTodos] = useState(초기값);
  const [newTodoTitle, setNewTodoTitle] = useState("abc");

  return (
    <div>
      <form
        onSubmit={function (e) { //** onSubmit이 있어야지..!
          e.preventDefault();

          // 1) 갱신할 배열(객체로 이루어진)를 새롭게 만들어주기(아이템 하나가 추가된 배열)
          const newTodoList = [
            ...todos,
            {
              id: new Date().getTime(),
              title: newTodoTitle,
              isDone: false,
            },
          ];

          // 2) setTodos
          setTodos(newTodoList);

          setNewTodoTitle("");
        }}
      >
        <input
          value={newTodoTitle}
          onChange={function (e) {
            setNewTodoTitle(e.target.value);
          }}
        />
        <button type="submit">추가</button>
      </form>

      <h3>할일목록</h3>
      {todos
        .filter(function (todo) {
          if (todo.isDone === true) {
            return false;
          } else {
            return true;
          }
        })
        .map(function (할일) {
          return (
            <div key={할일.id}>
              {할일.title}{" "}
              <span
                onClick={function () {
                  console.log("선택된 아이템 => ", 할일);

                  // 원래 있던 todos에서 이 할일만 제거(setState)
                  const 필터링결과 = todos.filter(function (대상) {
                    if (대상.id === 할일.id) {
                      return false;
                    } else {
                      return true;
                    }
                  });
                  setTodos(필터링결과);
                }}
              >
                [x]
              </span>
              <button
                onClick={function () {
                  const 완료처리가된배열 = todos.map(function (todo) {
                    if (todo.id === 할일.id) {
                      return { ...todo, isDone: true };
                    } else {
                      return todo;
                    }
                  });
                  setTodos(완료처리가된배열);
                }}
              >
                완료
              </button>
            </div>
          );
        })}

      <h3>완료목록</h3>
      {todos
        .filter(function (todo) {
          if (todo.isDone === true) {
            return true;
          } else {
            return false;
          }
        })
        .map(function (할일) {
          return (
            <div key={할일.id}>
              {할일.title}{" "}
              <span
                onClick={function () {
                  console.log("선택된 아이템 => ", 할일);

                  // 원래 있던 todos에서 이 할일만 제거(setState)
                  const 필터링결과 = todos.filter(function (대상) {
                    if (대상.id === 할일.id) {
                      return false;
                    } else {
                      return true;
                    }
                  });
                  setTodos(필터링결과);
                }}
              >
                [x]
              </span>
              <button>취소</button>
            </div>
          );
        })}
    </div>
  );
};

export default App;



