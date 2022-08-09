import React from 'react'

export default function LottoResult(props) {
    const parsedLottoNumbers = props.lottoNumbers.map((number, index) => {
    return <li>Number {index+1}: {number} </li>
})
  return parsedLottoNumbers;
}
