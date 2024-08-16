import React, { useState } from "react";
import Header from "./components/Header";

const App = () => {
  const [countries, setCountries] = useState([]);
  const [newName, setName] = useState("");
  const [newGold, setGold] = useState(0);
  const [newSilver, setSilver] = useState(0);
  const [newBronze, setBronze] = useState(0);

  const addCountries = (e) => {
    e.preventDefault();

    if (!newName) {
      alert("국가를 입력해주세요");
      return;
    }

    const targetCountry = countries.find(function (country) {
      return country.name === newName;
    });

    if (targetCountry) {
      alert("이미 등록된 국가입니다.");
      return;
    }

    const addCountries = [
      ...countries,
      {
        id: new Date().getTime(),
        name: newName,
        gold: Number(newGold),
        silver: Number(newSilver),
        bronze: Number(newBronze),
      },
    ];
    const sortAddCountries = addCountries.sort((a, b) => b.gold - a.gold);
    setCountries(sortAddCountries);
  };

  return (
    <div>
      <Header></Header>
      <form onSubmit={addCountries}>
        <div>
          <label>국가명</label>
          <input
            type="text"
            value={newName}
            onChange={(e) => {
              return setName(e.target.value);
            }}
          />
        </div>
        <div>
          <label htmlFor="">금메달</label>
          <input
            type="Number"
            value={newGold}
            onChange={(e) => {
              return setGold(e.target.value);
            }}
          />
        </div>
        <div>
          <label htmlFor="">은메달</label>
          <input
            type="Number"
            value={newSilver}
            onChange={(e) => {
              return setSilver(e.target.value);
            }}
          />
        </div>
        <div>
          <label htmlFor="">동메달</label>
          <input
            type="Number"
            value={newBronze}
            onChange={(e) => {
              return setBronze(e.target.value);
            }}
          />
        </div>
        <div>
          <button>국가추가</button>
          <button
            type="button"
            onClick={function (e) {
              e.preventDefault();
              //업데이트 할 대상 찾기
              const targetUpdateCountry = countries.find(function (update) {
                return update.name === newName;
              });

              if (!targetUpdateCountry) {
                alert("등록되지 않은 국가입니다.");
                return;
              }

              //다시 map이용
              const updateCountries = countries.map(function (country) {
                if (targetUpdateCountry.name === country.name) {
                  return {
                    ...country,
                    gold: Number(newGold),
                    silver: Number(newSilver),
                    bronze: Number(newBronze),
                  };
                } else {
                  return country;
                }
              });

              //정렬
              const sortUpdateCountries = updateCountries.sort(
                (a, b) => b.gold - a.gold
              );

              setCountries(sortUpdateCountries);
            }}
          >
            업데이트
          </button>
        </div>
      </form>
      <div>
        <table>
          <thead>
            <tr>
              <th>국가명</th>
              <th>금메달</th>
              <th>은메달</th>
              <th>동메달</th>
              <th>액션</th>
            </tr>
          </thead>
          <tbody>
            {countries.map(function (country) {
              return (
                <tr>
                  <td>{country.name}</td>
                  <td>{country.gold}</td>
                  <td>{country.silver}</td>
                  <td>{country.bronze}</td>
                  <td>
                    <button
                      onClick={function (e) {
                        e.preventDefault();
                        const targetCountry = countries.filter(function (tar) {
                          return tar.name != country.name;
                        });
                        setCountries(targetCountry);
                      }}
                    >
                      삭제
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default App;
