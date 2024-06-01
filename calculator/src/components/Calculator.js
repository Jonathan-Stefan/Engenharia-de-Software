import React, { useState } from 'react';
import './Calculator.css';

const Calculator = () => {
  const [display, setDisplay] = useState('0');
  const [prevValue, setPrevValue] = useState('');
  const [operator, setOperator] = useState('');

  const handleButtonClick = (value) => {
    if (value === 'C') {
      setDisplay('0');
      setPrevValue('');
      setOperator('');
    } else if (value === '=') {
      calculateResult();
    } else if (value === '+' || value === '-' || value === '*' || value === '/') {
      setPrevValue(display);
      setOperator(value);
      setDisplay('0');
    } else {
      if (display === '0') {
        setDisplay(value);
      } else {
        setDisplay(display + value);
      }
    }
  };

  const calculateResult = () => {
    const current = parseFloat(display);
    const previous = parseFloat(prevValue);
    let result = 0;
    switch (operator) {
      case '+':
        result = previous + current;
        break;
      case '-':
        result = previous - current;
        break;
      case '*':
        result = previous * current;
        break;
      case '/':
        result = previous / current;
        break;
      default:
        result = current;
    }
    setDisplay(result.toString());
    setPrevValue('');
    setOperator('');
  };

  return (
    <div className="calculator">
      <div className="display">{display}</div>
      <div className="buttons">
        <button onClick={() => handleButtonClick('7')}>7</button>
        <button onClick={() => handleButtonClick('8')}>8</button>
        <button onClick={() => handleButtonClick('9')}>9</button>
        <button onClick={() => handleButtonClick('+')}>+</button>
        <button onClick={() => handleButtonClick('4')}>4</button>
        <button onClick={() => handleButtonClick('5')}>5</button>
        <button onClick={() => handleButtonClick('6')}>6</button>
        <button onClick={() => handleButtonClick('-')}>-</button>
        <button onClick={() => handleButtonClick('1')}>1</button>
        <button onClick={() => handleButtonClick('2')}>2</button>
        <button onClick={() => handleButtonClick('3')}>3</button>
        <button onClick={() => handleButtonClick('*')}>*</button>
        <button onClick={() => handleButtonClick('0')}>0</button>
        <button onClick={() => handleButtonClick('.')}>.</button>
        <button onClick={() => handleButtonClick('=')}>=</button>
        <button onClick={() => handleButtonClick('/')}>/</button>
        <button onClick={() => handleButtonClick('C')}>C</button>
      </div>
    </div>
  );
};

export default Calculator;


