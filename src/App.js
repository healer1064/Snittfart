// @flow

import React, { PureComponent } from 'react';
import { View, Text, ScrollView } from 'react-native';
import PaceCalculatorInputController from './PaceCalculatorInputController';
import PaceCalculatorView from './PaceCalculatorView';

class App extends PureComponent<{}> {
  render() {
    return (
      <ScrollView style={{ flex: 1, padding: 30, backgroundColor: '#fff' }}>
        <View style={{ marginBottom: 20 }}>
          <Text
            style={{
              fontSize: 54,
              fontWeight: '900',
              color: '#a53313'
            }}
          >
            Running Pace Calculator{' '}
            <Text>
              {'🏃🏽‍♀️'}
              {'🏃‍♂️'}
            </Text>
          </Text>
        </View>

        <PaceCalculatorInputController
          render={props => <PaceCalculatorView {...props} />}
        />

        <View>
          <Text>Made by koren.im</Text>
        </View>
      </ScrollView>
    );
  }
}

export default App;
