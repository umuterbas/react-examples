import React, { useState } from 'react';
import LottoResult from './LottoResult';

export default function LottoButton() {
  const [lottoNumbers, setLottoNumbers] = useState([]);
  const generateNumbers = () => {
    const newLottoNumbers = [];
    for (let index = 0; index < 7; index++) {
      const randomNumber = Math.random();
      const lottoNumber = Math.floor(randomNumber * 50 + 1);
      newLottoNumbers.push(lottoNumber);
    }
    setLottoNumbers(newLottoNumbers);
  };
  // console.log('lottoNumbers', lottoNumbers);

  return (
    <div>
      <button onClick={generateNumbers}>
        <h3>Get me rich!</h3>
      </button>
      <ul>
        <LottoResult lottoNumbers={lottoNumbers} />
      </ul>
    </div>
  );
}
