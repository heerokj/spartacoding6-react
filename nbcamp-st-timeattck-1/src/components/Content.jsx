import React, { useState } from "react";

const Content = ({ countries, setCountries }) => {
  const [newName, setName] = useState("");
  const [newGold, setGold] = useState(0);
  const [newSilver, setSilver] = useState(0);
  const [newBronze, setBronze] = useState(0);

  // 추가
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

  // 업데이트
  const updateCountries = (e) => {
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
    const sortUpdateCountries = updateCountries.sort((a, b) => b.gold - a.gold);

    setCountries(sortUpdateCountries);
  };

  return (
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
        <button type="button" onClick={updateCountries}>
          업데이트
        </button>
      </div>
    </form>
  );
};

export default Content;
