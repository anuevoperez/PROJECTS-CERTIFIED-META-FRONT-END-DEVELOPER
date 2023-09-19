import React, { useState } from "react";
import "./App.css";
import iphone from "./assets/iphone.png";
import battery from "./assets/battery.png"
import Switch from "react-switch";

const App = () => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState(0);
  const [operator, setOperator] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [calculatorOn, setCalculatorOn] = useState(true);

  const handleInputChange = (event) => {
    const inputValue = event.target.value;
    setInput(inputValue);
    if (!isValidNumber(inputValue)) {
      setErrorMessage("Only numeric values can be entered.");
    } else {
      setErrorMessage("");
    }
  };

  const isValidNumber = (value) => {
    return /^\d*\.?\d*$/.test(value);
  };

  const handleOperation = (selectedOperator) => {
    if (isValidNumber(input)) {
      setOperator(selectedOperator);
      setResult(parseFloat(input));
      setInput("");
      setErrorMessage("");
    } else {
      setErrorMessage("Only numeric values can be entered.");
    }
  };

  const handleEquals = () => {
    if (isValidNumber(input)) {
      const inputValue = parseFloat(input);
      switch (operator) {
        case "+":
          setResult(result + inputValue);
          break;
        case "-":
          setResult(result - inputValue);
          break;
        case "*":
          setResult(result * inputValue);
          break;
        case "/":
          if (inputValue === 0) {
            setErrorMessage("You cannot divide by zero.");
            return;
          }
          setResult(result / inputValue);
          break;
        default:
          break;
      }
      setInput("");
      setOperator("");
      setErrorMessage("");
    } else {
      setErrorMessage("Only numeric values can be entered.");
    }
  };

  const handleResetInput = () => {
    setInput("");
    setErrorMessage("");
  };

  const handleResetResult = () => {
    setInput("");
    setResult(0);
    setOperator("");
    setErrorMessage("");
  };

  const toggleCalculator = () => {
    setCalculatorOn(!calculatorOn);
    setInput("");
    setResult(0);
    setOperator("");
    setErrorMessage("");
  };

  return (
    <div className={`main ${calculatorOn ? "" : "off"}`}>
      <h1 className="title">iPhone-style calculator</h1>
      <div className="content">
        <img className="iphone" src={iphone} alt="iPhone template" />
        {calculatorOn && (
          <div className="calculator">
            <img className="battery-icon" src={battery} alt="iPhone Battery Meter"/>
            <div className="input">
              <input
                type="text"
                placeholder="Enter a number"
                value={input}
                onChange={handleInputChange}
              />
            </div>
            <div className={`error-popup ${errorMessage ? "active" : ""}`}>
              {errorMessage}
            </div>
            <div className="result">
              <p> {result}</p>
            </div>
            <div className="buttons">
              <button
                className="btn-oper"
                onClick={() => handleOperation("+")}
              >
                +
              </button>
              <button
                className="btn-oper"
                onClick={() => handleOperation("-")}
              >
                -
              </button>
              <button
                className="btn-oper"
                onClick={() => handleOperation("*")}
              >
                *
              </button>
              <button
                className="btn-oper"
                onClick={() => handleOperation("/")}
              >
                /
              </button>
              <button onClick={handleEquals}>=</button>
              <button onClick={handleResetInput}>RI</button>
              <button onClick={handleResetResult}>AC</button>
            </div>
          </div>
        )}
        <div className="power-switch">
            <Switch
              onChange={toggleCalculator}
              checked={calculatorOn}
              className="react-switch"
            />
        </div>
      </div>
    </div>
  );
};

export default App;