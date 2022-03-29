import React , { useState, Component} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Text, TextInput, View, Button } from 'react-native';


export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {text: ''};
  }

  render() {
    return (
      <View style={{padding: 10}}>
        <TextInput
          style={{height: 40}}
          placeholder="http://ip_inet_adress:3000"
          onChangeText={(text) => this.setState({text})}
          value={this.state.text}
        />
        <Button
        title="test text"
        onPress={() =>
          console.log(this.state.text)
        }/>
        <Button
        title="Go to chat"
        onPress={() => this.props.navigation.navigate('Chat',  { 
          ip: this.state.text 
        })}
      />
      </View>
    );
  }
}