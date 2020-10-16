import React from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
// eslint-disable-next-line no-unused-vars
import calculate from '../logic/calculate';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      total: null,
      next: null,
      operation: null,
    };
  }

  render() {
    return (
      <div className="app">
        <Display />
        <ButtonPanel />
      </div>
    );
  }
}

export default App;
