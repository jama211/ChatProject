import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ""
    };
  }

  continue = () => {
    this.props.navigation.navigate("Chat", { name: this.state.name });
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.circle} />
        <View style={{marginTop: 100}}>
          <Image 
            source={require("../assets/splash.png")}
            style={{ width: 400, height: 400, alignSelf: "center" }} 
          />
        </View>
        <View style={{marginHorizontal: 32, marginTop: -280}}>
          <Text style={styles.header}>Enter Username:</Text>
          <TextInput 
            style={styles.input} 
            placeholder="AwesomeJamie" 
            onChangeText={name => { 
              this.setState( { name } ) 
            }}
            value={this.state.name} 
          />
          <View style={{alignItems: "center", marginTop: 30}}>
            <TouchableOpacity style={styles.continue} onPress={this.continue}>
              {/* <Ionicons name="md-arrow-round-forward" size={24} color="#FFF" /> */}
              <Text style={{color: "white"}}>Login</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4F5F7',
  },
  circle: {
    width: 500,
    height: 500,
    borderRadius: 250,
    backgroundColor: "#FFF",
    position: "absolute",
    left: -120,
    top: -20
  },
  header: {
    fontWeight: "800",
    fontSize: 30,
    color: "#514E5A",
    marginTop: 32
  },
  input: {
    marginTop: 20,
    height: 50,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: "#BAB7C3",
    borderRadius: 30,
    paddingHorizontal: 16,
    color: "#514E5A",
    fontWeight: "600"
  },
  continue: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: "#9075E3",
    alignItems: "center",
    justifyContent: "center"
  }
});
