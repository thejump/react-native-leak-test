import React, { Component } from 'react';
import {
  Text,
  View,
  TouchableOpacity
} from 'react-native';

type Props = {};
export default class App extends Component<Props> {
  state = {}

  items() {
    let Items = []
    for (let i = 0; i < 5000; i++) {
      if (this.state.showText) {
        Items.push(<Text key={i + 'key'}>random filler text random filler text random filler text random filler
          text </Text>)
      }
    }
    return Items
  }


  render() {
    return (
      <View style={{ position: 'absolute', top: 100, left: 0, right: 0, bottom: 0, backgroundColor: 'white' }}>
        <TouchableOpacity onPress={() => {
          this.setState({ showText: !this.state.showText })
        }}><Text>Load text</Text></TouchableOpacity>
        <View>
          {this.items()}
        </View>
      </View>
    );
  }
}
