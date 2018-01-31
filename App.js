import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Vessel from './src/Vessel';

const DATA = [
  { id: 0 },
  { id: 1 },
  { id: 2 },
  { id: 3 },
  { id: 4 },
  { id: 5 },
  { id: 6 },
  { id: 7 },
  { id: 8 },
  { id: 9 },
]

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Vessel data={DATA} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
