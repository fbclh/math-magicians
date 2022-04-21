import { Component } from 'react';
import calculate from '../logic/Calculate';

export default class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      next: null,
      operation: null,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    const button = event.target.innerText;
    const answer = calculate(this.state, button);
    this.updateState(answer);
  }

  updateState(objects) {
    this.setState(objects);
  }

  render() {
    const { total, next, operation } = this.state;
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
              onClick={this.handleClick}
              onKeyDown={this.onKeyDown}
              role="button"
              tabIndex="0"
            >
              AC
            </div>
            <div
              className="number"
              onClick={this.handleClick}
              onKeyDown={this.onKeyDown}
              role="button"
              tabIndex="0"
            >
              +/-
            </div>
            <div
              className="number"
              onClick={this.handleClick}
              onKeyDown={this.onKeyDown}
              role="button"
              tabIndex="0"
            >
              %
            </div>
            <div
              className="symbol"
              onClick={this.handleClick}
              onKeyDown={this.onKeyDown}
              role="button"
              tabIndex="0"
            >
              ÷
            </div>
          </div>
          <div className="row">
            <div
              className="number"
              onClick={this.handleClick}
              onKeyDown={this.onKeyDown}
              role="button"
              tabIndex="0"
            >
              7
            </div>
            <div
              className="number"
              onClick={this.handleClick}
              onKeyDown={this.onKeyDown}
              role="button"
              tabIndex="0"
            >
              8
            </div>
            <div
              className="number"
              onClick={this.handleClick}
              onKeyDown={this.onKeyDown}
              role="button"
              tabIndex="0"
            >
              9
            </div>
            <div
              className="symbol"
              onClick={this.handleClick}
              onKeyDown={this.onKeyDown}
              role="button"
              tabIndex="0"
            >
              x
            </div>
          </div>
          <div className="row">
            <div
              className="number"
              onClick={this.handleClick}
              onKeyDown={this.onKeyDown}
              role="button"
              tabIndex="0"
            >
              4
            </div>
            <div
              className="number"
              onClick={this.handleClick}
              onKeyDown={this.onKeyDown}
              role="button"
              tabIndex="0"
            >
              5
            </div>
            <div
              className="number"
              onClick={this.handleClick}
              onKeyDown={this.onKeyDown}
              role="button"
              tabIndex="0"
            >
              6
            </div>
            <div
              className="symbol"
              onClick={this.handleClick}
              onKeyDown={this.onKeyDown}
              role="button"
              tabIndex="0"
            >
              -
            </div>
          </div>
          <div className="row">
            <div
              className="number"
              onClick={this.handleClick}
              onKeyDown={this.onKeyDown}
              role="button"
              tabIndex="0"
            >
              1
            </div>
            <div
              className="number"
              onClick={this.handleClick}
              onKeyDown={this.onKeyDown}
              role="button"
              tabIndex="0"
            >
              2
            </div>
            <div
              className="number"
              onClick={this.handleClick}
              onKeyDown={this.onKeyDown}
              role="button"
              tabIndex="0"
            >
              3
            </div>
            <div
              className="symbol"
              onClick={this.handleClick}
              onKeyDown={this.onKeyDown}
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
                onClick={this.handleClick}
                onKeyDown={this.onKeyDown}
                role="button"
                tabIndex="0"
              >
                0
              </div>
            </div>
            <div className="row">
              <div
                className="number"
                onClick={this.handleClick}
                onKeyDown={this.onKeyDown}
                role="button"
                tabIndex="0"
              >
                .
              </div>
              <div
                className="symbol"
                onClick={this.handleClick}
                onKeyDown={this.onKeyDown}
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
  }
}
