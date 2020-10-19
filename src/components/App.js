import React from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import calculate from '../logic/calculate';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      total: null,
      next: null,
      operation: null,
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(buttonName) {
    this.setState(state => (
      calculate(state, buttonName)
    ));
  }

  render() {
    const { total, next, operation } = this.state;
    const dataToDisplay = [total, operation, next].filter(x => x).join('');
    return (
      <div className="app">
        <Display result={dataToDisplay.length ? dataToDisplay : '0'} />
        <ButtonPanel handleClick={this.handleClick} />
      </div>
    );
  }
}

export default App;
