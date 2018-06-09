// @flow

import React, { PureComponent } from 'react';
import PaceCalculatorInputController from './PaceCalculatorInputController';
import PaceCalculatorView from './PaceCalculatorView';

class App extends PureComponent<{}> {
  render() {
    return (
      <div className="App">
        <header>
          <h1>
            <span role="img" aria-label="runner">
              🏃‍♂️
            </span>How <em>fast</em> must I run?<span
              role="img"
              aria-label="runner"
            >
              🏃🏽‍♀️
            </span>
          </h1>
        </header>

        <PaceCalculatorInputController
          render={props => <PaceCalculatorView {...props} />}
        />
      </div>
    );
  }
}

export default App;
