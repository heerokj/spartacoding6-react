import React from "react";

const List = ({ countries, setCountries }) => {
  return (
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
  );
};

export default List;
