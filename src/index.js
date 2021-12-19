import React from 'react';
import ReactDOM from 'react-dom';
import "./index.css"

const design = {};

let time = new Date();
time = time.getHours();

console.log(time);
var greet = "hey";

if(time >= 6 && time < 12){
    greet = "Good Morning";
    design.color = "Green";
}
else if(time >= 12 && time < 17){
    greet = "Good Afternoon";
    design.color = "red";
}

else if(time >= 17 && time <= 19){
    greet = "Good Evening";
    design.color = "orange";
}

else{
    greet = "Good Night";
    design.color = "black";
}


ReactDOM.render(
    <>
    <div className = "div_des">
    <h1 className = "heading"> Hello Sir, <span style = {design}> {greet} </span> </h1>
    </div>
    </>,
    document.getElementById('root')
);