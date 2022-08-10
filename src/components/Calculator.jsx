import React, { useState } from 'react';
import calculate from '../logic/calculate';
import './Calculator.css';

const Calculator = () => {
  const [state, setState] = useState({
    total: 0,
    next: null,
    operator: null,
  });

  const handleClick = (e) => {
    const result = calculate(state, e.target.textContent);
    setState(result);
  };

  const resultDisplayClick = (e) => {
    setState({
      total: e.target.textContent,
    });
  };

  const { total, next, operation } = state;
  return (
    <>
      <div className="math">
        <h2>Lets do some math!</h2>
      </div>
      <div className="global">
        <div className="answer-span" onChange={resultDisplayClick}>
          {total}
          {operation}
          {next}
        </div>
        <div className="box-one">
          <button
            onClick={handleClick}
            type="button"
            className="btn delete number"
          >
            AC
          </button>
          <button
            onClick={handleClick}
            type="button"
            className="btn  number number"
          >
            +/-
          </button>
          <button
            onClick={handleClick}
            type="button"
            className="btn clear number"
          >
            %
          </button>
          <button
            onClick={handleClick}
            type="button"
            className="btn  equal-to operator"
          >
            ÷
          </button>
        </div>
        <div className="box-two">
          <button onClick={handleClick} type="button" className="btn number">
            7
          </button>
          <button onClick={handleClick} type="button" className="btn number">
            8
          </button>
          <button onClick={handleClick} type="button" className="btn number">
            9
          </button>
          <button
            onClick={handleClick}
            type="button"
            className="btn number operator"
          >
            x
          </button>
        </div>
        <div className="box-three">
          <button onClick={handleClick} type="button" className="btn number">
            4
          </button>
          <button onClick={handleClick} type="button" className="btn number">
            5
          </button>
          <button onClick={handleClick} type="button" className="btn number">
            6
          </button>
          <button
            onClick={handleClick}
            type="button"
            className="btn number  operator"
          >
            -
          </button>
        </div>
        <div className="box-four">
          <button onClick={handleClick} type="button" className="btn number">
            1
          </button>
          <button onClick={handleClick} type="button" className="btn number">
            2
          </button>
          <button onClick={handleClick} type="button" className="btn number">
            3
          </button>
          <button
            onClick={handleClick}
            type="button"
            className="btn number operator"
          >
            +
          </button>
        </div>
        <div className="box-five">
          <button
            onClick={handleClick}
            type="button"
            className="btn number zero"
          >
            0
          </button>
          <button
            onClick={handleClick}
            type="button"
            className="btn number dot"
          >
            .
          </button>

          <button
            onClick={handleClick}
            type="button"
            className="btn number operator"
          >
            =
          </button>
        </div>
      </div>
    </>
  );
};
export default Calculator;
