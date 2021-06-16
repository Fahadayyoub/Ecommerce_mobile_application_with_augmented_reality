import React, { Component } from "react";
import {
  AppRegistry,
  View,
  StyleSheet,
  PixelRatio,
  TouchableHighlight,
} from "react-native";
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

export default function RegisterScreen() {
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
}
// export default class LoginScreen extends Component {
//   constructor() {
//     super();
//   }
//   render() {
//     return (
//       <View>
//         <Text>Login Screens</Text>
//       </View>
//     );
//   }
// }
// module.exports = LoginScreen;
