import { Component } from 'react';
import { Calculator } from './components/Calculator';
import './styles/Calculator.css';
import './styles/index.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return <Calculator />;
  }
}

export default App;
