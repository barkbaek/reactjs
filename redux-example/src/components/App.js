import React from 'react';
import './App.css';

import Counter from './Counter';

class App extends React.Component {
  constructor (props) {
    super(props);
  }

  render() {
      return (
          <Counter/>
      );
  }
}

export default App;
