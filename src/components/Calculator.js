/* eslint-disable import/prefer-default-export */
import { useState } from 'react';
import calculate from '../logic/Calculate';

export const Calculator = () => {
  const initialState = {
    total: null,
    next: null,
    operation: null,
  };

  const [result, setResult] = useState(initialState);

  const handleClick = (event) => {
    const button = event.target.innerText;
    const answer = calculate(result, button);
    setResult(answer);
  };

  const { total, next, operation } = result;

  return (
    <div className="container">
      <div className="calculator">
        <div className="display">
          {total}
          {' '}
          {operation}
          {' '}
          {next}
        </div>
        <div className="row">
          <div
            className="number"
            onClick={handleClick}
            onKeyDown={() => {}}
            role="button"
            tabIndex="0"
          >
            AC
          </div>
          <div
            className="number"
            onClick={handleClick}
            onKeyDown={() => {}}
            role="button"
            tabIndex="0"
          >
            +/-
          </div>
          <div
            className="number"
            onClick={handleClick}
            onKeyDown={() => {}}
            role="button"
            tabIndex="0"
          >
            %
          </div>
          <div
            className="symbol"
            onClick={handleClick}
            onKeyDown={() => {}}
            role="button"
            tabIndex="0"
          >
            ÷
          </div>
        </div>
        <div className="row">
          <div
            className="number"
            onClick={handleClick}
            onKeyDown={() => {}}
            role="button"
            tabIndex="0"
          >
            7
          </div>
          <div
            className="number"
            onClick={handleClick}
            onKeyDown={() => {}}
            role="button"
            tabIndex="0"
          >
            8
          </div>
          <div
            className="number"
            onClick={handleClick}
            onKeyDown={() => {}}
            role="button"
            tabIndex="0"
          >
            9
          </div>
          <div
            className="symbol"
            onClick={handleClick}
            onKeyDown={() => {}}
            role="button"
            tabIndex="0"
          >
            x
          </div>
        </div>
        <div className="row">
          <div
            className="number"
            onClick={handleClick}
            onKeyDown={() => {}}
            role="button"
            tabIndex="0"
          >
            4
          </div>
          <div
            className="number"
            onClick={handleClick}
            onKeyDown={() => {}}
            role="button"
            tabIndex="0"
          >
            5
          </div>
          <div
            className="number"
            onClick={handleClick}
            onKeyDown={() => {}}
            role="button"
            tabIndex="0"
          >
            6
          </div>
          <div
            className="symbol"
            onClick={handleClick}
            onKeyDown={() => {}}
            role="button"
            tabIndex="0"
          >
            -
          </div>
        </div>
        <div className="row">
          <div
            className="number"
            onClick={handleClick}
            onKeyDown={() => {}}
            role="button"
            tabIndex="0"
          >
            1
          </div>
          <div
            className="number"
            onClick={handleClick}
            onKeyDown={() => {}}
            role="button"
            tabIndex="0"
          >
            2
          </div>
          <div
            className="number"
            onClick={handleClick}
            onKeyDown={() => {}}
            role="button"
            tabIndex="0"
          >
            3
          </div>
          <div
            className="symbol"
            onClick={handleClick}
            onKeyDown={() => {}}
            role="button"
            tabIndex="0"
          >
            +
          </div>
        </div>
        <div className="row">
          <div className="row">
            <div
              className="special"
              onClick={handleClick}
              onKeyDown={() => {}}
              role="button"
              tabIndex="0"
            >
              0
            </div>
          </div>
          <div className="row">
            <div
              className="number"
              onClick={handleClick}
              onKeyDown={() => {}}
              role="button"
              tabIndex="0"
            >
              .
            </div>
            <div
              className="symbol"
              onClick={handleClick}
              onKeyDown={() => {}}
              role="button"
              tabIndex="0"
            >
              =
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
