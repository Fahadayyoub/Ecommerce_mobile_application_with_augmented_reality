/**
 * Copyright (c) 2017-present, Viro, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

import React, { Component } from "react";
import {
  AppRegistry,
  View,
  StyleSheet,
  PixelRatio,
  TouchableHighlight,
} from "react-native";
import LoginScreen from "./components/Login";
import { ViroVRSceneNavigator, ViroARSceneNavigator } from "react-viro";
import RegisterScreen from "./components/regester";
import HomeScreen from "./components/HomeScreen";
("./components/AR/ViroARSceneNavigator");
import {
  Container,
  Header,
  Content,
  Item,
  Input,
  Text,
  Form,
  Label,
  Button,
} from "native-base";
import HelloWorldSceneAR from "./components/js/HelloWorldScene";
/*
 TODO: Insert your API key below
 */
var sharedProps = {
  apiKey: "API_KEY_HERE",
};

// Sets the default scene you want for AR and VR
var InitialARScene = require("./js/HelloWorldSceneAR");
var InitialVRScene = require("./js/HelloWorldScene");

var UNSET = "UNSET";
var VR_NAVIGATOR_TYPE = "VR";
var AR_NAVIGATOR_TYPE = "AR";

// This determines which type of experience to launch in, or UNSET, if the user should
// be presented with a choice of AR or VR. By default, we offer the user a choice.
var defaultNavigatorType = UNSET;

export default class ViroSample extends Component {
  constructor() {
    super();

    this.state = {
      navigatorType: defaultNavigatorType,
      sharedProps: sharedProps,
      currentScreen: "Login",
      // currentScreen: "djij",
      viroText: "Jazba",
    };
    this.handler = this.handler.bind(this);
    this._getExperienceSelector = this._getExperienceSelector.bind(this);
    this._getARNavigator = this._getARNavigator.bind(this);
    this._getVRNavigator = this._getVRNavigator.bind(this);
    this._getExperienceButtonOnPress =
      this._getExperienceButtonOnPress.bind(this);
    this._exitViro = this._exitViro.bind(this);
  }
  handler() {
    this.setState({
      currentScreen: "Register",
    });
  }
  // Replace this function with the contents of _getVRNavigator() or _getARNavigator()
  // if you are building a specific type of experience.
  render() {
    // if (this.state.navigatorType == UNSET) {
    if (this.state.currentScreen === "HomeScreen") {
      return (
        <View style={styles.container}>
          <HomeScreen />
        </View>
      );
    } else if (this.state.currentScreen === "Login") {
      return (
        <View style={{ flex: 1, justifyContent: "center" }}>
          <Text
            style={{
              justifyContent: "center",
              alignSelf: "center",
              fontSize: 45,
              color: "#FF4500",
              marginTop: 75,
            }}
          >
            Let's Start
          </Text>

          <Container style={{ marginTop: 95 }}>
            <Form>
              <Item stackedLabel>
                <Label>Username</Label>
                <Input />
              </Item>
              <Item stackedLabel>
                <Label>Password</Label>
                <Input />
              </Item>
              <Button
                warning
                transparent
                bordered
                style={{ alignSelf: "center", marginTop: 60, marginBottom: 20 }}
              >
                <Text>Login</Text>
              </Button>
              <Button
                danger
                transparent
                bordered
                onPress={() => {
                  this.setState({
                    currentScreen: "Register",
                  });
                }}
                style={{ alignSelf: "center", marginTop: 60, marginBottom: 20 }}
              >
                <Text>Register</Text>
              </Button>
            </Form>
          </Container>
        </View>
      );
    } else if (this.state.currentScreen === "Register") {
      return (
        <View style={{ flex: 1, justifyContent: "center" }}>
          <Text
            style={{
              justifyContent: "center",
              alignSelf: "center",
              fontSize: 45,
              color: "#FF4500",
              marginTop: 75,
            }}
          >
            Register yourself
          </Text>

          <Container style={{ marginTop: 95 }}>
            <Form>
              <Item stackedLabel>
                <Label>Username</Label>
                <Input />
              </Item>
              <Item stackedLabel>
                <Label>Password</Label>
                <Input />
              </Item>
              <Button
                danger
                transparent
                bordered
                style={{ alignSelf: "center", marginTop: 60, marginBottom: 20 }}
              >
                <Text>Register</Text>
              </Button>
            </Form>
          </Container>
        </View>
      );
    } else {
      return this._getARNavigator();
    }
  }
  normalElement() {
    return (
      <View>
        <Text>kdjvijd</Text>
      </View>
    );
  }
  _getExperienceSelector() {
    return (
      <View style={localStyles.outer}>
        <View style={localStyles.inner}>
          <Text style={localStyles.titleText}>
            Choose your desired experience:
          </Text>

          <TouchableHighlight
            style={localStyles.buttons}
            onPress={this._getExperienceButtonOnPress(AR_NAVIGATOR_TYPE)}
            underlayColor={"#68a0ff"}
          >
            <Text style={localStyles.buttonText}>AR</Text>
          </TouchableHighlight>

          <TouchableHighlight
            style={localStyles.buttons}
            onPress={this._getExperienceButtonOnPress(VR_NAVIGATOR_TYPE)}
            underlayColor={"#68a0ff"}
          >
            <Text style={localStyles.buttonText}>VR</Text>
          </TouchableHighlight>
        </View>
      </View>
    );
  }

  // Returns the ViroARSceneNavigator which will start the AR experience
  // _getARNavigator() {
  //   return (
  //     <ViroARSceneNavigator {...this.state.sharedProps}
  //       initialScene={{scene: InitialARScene}} />
  //   );
  // }

  // Returns the ViroSceneNavigator which will start the VR experience
  // _getVRNavigator() {
  //   return (
  //     <ViroVRSceneNavigator {...this.state.sharedProps}
  //       initialScene={{scene: InitialVRScene}} onExitViro={this._exitViro}/>
  //   );
  // }

  // This function returns an anonymous/lambda function to be used
  // by the experience selector buttons
  // _getExperienceButtonOnPress(navigatorType) {
  //   return () => {
  //     this.setState({
  //       navigatorType : navigatorType
  //     })
  //   }
  // }

  // // This function "exits" Viro by setting the navigatorType to UNSET.
  // _exitViro() {
  //   this.setState({
  //     navigatorType : UNSET
  //   })
  // }
  _getARNavigator() {
    return (
      <ViroARSceneNavigator
        {...this.state.sharedProps}
        initialScene={{ scene: InitialARScene }}
        viroAppProps={this.state.viroText}
      />
    );
  }
  _displaybutton() {
    return <Text>dnchdnc</Text>;
  }
  // Returns the ViroSceneNavigator which will start the VR experience
  _getVRNavigator() {
    return (
      <ViroVRSceneNavigator
        {...this.state.sharedProps}
        initialScene={{ scene: InitialVRScene }}
        onExitViro={this._exitViro}
      />
    );
  }

  // This function returns an anonymous/lambda function to be used
  // by the experience selector buttons
  _getExperienceButtonOnPress(navigatorType) {
    return () => {
      this.setState({
        navigatorType: navigatorType,
      });
    };
  }

  // This function "exits" Viro by setting the navigatorType to UNSET.
  _exitViro() {
    this.setState({
      navigatorType: UNSET,
    });
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // paddingTop: 20,
    // paddingBottom: 10,
    // alignItems: "center",
    // justifyContent: "center",
  },
});
var localStyles = StyleSheet.create({
  viroContainer: {
    flex: 1,
    backgroundColor: "black",
  },
  outer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "black",
  },
  inner: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "black",
  },
  titleText: {
    paddingTop: 30,
    paddingBottom: 20,
    color: "#fff",
    textAlign: "center",
    fontSize: 25,
  },
  buttonText: {
    color: "#fff",
    textAlign: "center",
    fontSize: 20,
  },
  buttons: {
    height: 80,
    width: 150,
    paddingTop: 20,
    paddingBottom: 20,
    marginTop: 10,
    marginBottom: 10,
    backgroundColor: "#68a0cf",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#fff",
  },
  exitButton: {
    height: 50,
    width: 100,
    paddingTop: 10,
    paddingBottom: 10,
    marginTop: 10,
    marginBottom: 10,
    backgroundColor: "#68a0cf",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#fff",
  },
});

module.exports = ViroSample;
