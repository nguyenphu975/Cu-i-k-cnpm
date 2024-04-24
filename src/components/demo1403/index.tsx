import React, { useState } from "react";
const Demo1403 =() =>{
  const [ketqua1, setKetqua1] = useState(0);
  const [ketqua2, setKetqua2] = useState('');
  const [inputValue, setInputValue] = useState(0);
  const getBinary=(n:number)=>{
  if (isNaN(n)) {
    return('Invalid input');
  } else {
    let binaryResult:string = '';
    let thuong:number = n;
    while (thuong > 0) {
      binaryResult = (thuong % 2).toString() + binaryResult;
       thuong= Math.floor(thuong / 2);
    }
    return (binaryResult||'0');
  }
  }
  function handleClick() {
    //code here
    // let sum:number =0;
    // for(let i=1; i<=inputValue; i++)
    // {
    //   sum+=i;
    // }
    // setKetqua1(sum);
    let tich: number = 1;
    for (let i = 1; i <= inputValue; i++) {
      tich = tich * inputValue;
    }
    setKetqua1(tich);
    setKetqua2(getBinary(inputValue));
  }
return (
  <div>
    <h1> Bài tập React ngày 14-03</h1>
    Nhập vào số tự nhiên:&nbsp;&nbsp;<input type="number" value={inputValue}
      onChange={(e) => {
        setInputValue(Number(e.currentTarget.value));
      }
      }
    />
    <button onClick={handleClick}>Xử lý </button>
    <br />
    Kết quả:<br />
    <p style={{ marginLeft: '20px' }}>a/ {ketqua1}</p>
    <p style={{ marginLeft: '20px' }}>b/ {ketqua2}</p>
  </div>

);
}
export default Demo1403;