import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  TextInput,
  View,
  Alert,
  TouchableOpacity
} from 'react-native';

class MyApp extends Component {
  
  constructor(props) {
    super(props);

    this.state = {
      result: '尚未輸入'
    };

    this._click = this._click.bind(this);
  }
  
  _click() {
    let height = parseFloat(this.state.height) / 100.0;
    let weight = parseFloat(this.state.weight);
    
    this.setState({
      result: "BMI=" + (weight / (height * height))
    });
  }
  
  render() {
    return (
      <View style={styles.container}>
      
        <Text>身高</Text>
        <TextInput onChangeText={(text) => this.setState({height: text})} />
        
        <Text>體重</Text>
        <TextInput onChangeText={(text) => this.setState({weight: text})}  />

        <TouchableOpacity onPress={this._click}>
          <Text>計算BMI</Text>
        </TouchableOpacity>
        
        <Text>{this.state.result}</Text>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('MyApp', () => MyApp);
