import React, { useState } from "react";

const App = () => {
  const [countries, setCountries] = useState([]);
  const [newName, setName] = useState("");
  const [newGold, setGold] = useState(0);
  const [newSilver, setSilver] = useState(0);
  const [newBronze, setBronze] = useState(0);

  return (
    <div>
      <h1>2024 파리 올림픽</h1>
      <form
        onSubmit={function (e) {
          e.preventDefault();
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

          // const sortAddCountries = addCountries

          setCountries(addCountries);
        }}
      >
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
                return (update.name = newName);
              });
              console.log(targetUpdateCountry);

              //다시 map이용
              const updateCountries = countries.map(function (country) {
                //
                return {
                  ...country,
                  gold: Number(newGold),
                  silver: Number(newSilver),
                  bronze: Number(newBronze),
                };
              });

              setCountries(updateCountries);
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
