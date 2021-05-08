import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

let curDate = new Date(2021, 5, 5, 15);
curDate = curDate.getHours();
let greeting = "";
const cssStyle= {};

if (curDate >= 1 && curDate < 12) {
  greeting = "Good Morning";
  cssStyle.color= 'blue';
} else if(curDate >= 12 && curDate < 19){
  greeting = "Good Afternoon";
  cssStyle.color= 'green';
} else {
  greeting ="Good night";
  cssStyle.color= 'orange';
}

ReactDOM.render(
  <>
  <div>
    <h1>
     Hiii Rajshree,<span style= {cssStyle}> {greeting}</span>
    </h1>,
  </div>
  </>,
  document.getElementById('root')
);
