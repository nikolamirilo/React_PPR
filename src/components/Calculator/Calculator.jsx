import React, { useState } from "react";
import Button from "./Button/Button";

const Calculator = () => {
  const [num1, setNum1] = useState("0");
  const [operator, setOperator] = useState("");
  const [num2, setNum2] = useState("");
  const [result, setResult] = useState("");

  const numbers = ["9", "8", "7", "6", "5", "4", "3", "2", "1", "0"];
  const operators = ["+", "-", "*", "/"];

  const buttonClick = (e) => {
    if (operator === "") {
      setNum1(e.target.value);
    } else if ((num1 !== "0") & (operator !== "")) {
      setNum2(e.target.value);
    }
  };

  const operatorClick = (e) => {
    setOperator(e.target.value);
  };

  const reset = () => {
    setResult("");
    setNum1("0");
    setNum2("");
    setOperator("");
  };

  const calculate = () => {
    var result = "";
    switch (operator) {
      case "+":
        result = Number(num1) + Number(num2);
        break;
      case "-":
        result = Number(num1) - Number(num2);
        break;
      case "*":
        result = Number(num1) * Number(num2);
        break;
      case "/":
        result = Number(num1) / Number(num2);
        break;
      default:
        result = "0";
    }
    setResult(result);
    setNum1("");
    setNum2("");
    setOperator("");
  };

  return (
    <div className="calculator-container">
      <div className="calculator">
        <div className="display">
          <p>
            {num1}
            {operator}
            {num2}
            {result !== "" && num1 === "" && num2 === "" ? result : ""}
          </p>
        </div>
        <div className="buttons">
          {numbers.map((item) => {
            return <Button color="primary" value={item} buttonClick={buttonClick} />;
          })}
          <Button color="warning" value="C" buttonClick={reset} />
          <Button color="warning" value="=" buttonClick={calculate} />

          {operators.map((item) => {
            return <Button color="danger" value={item} buttonClick={operatorClick} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Calculator;
