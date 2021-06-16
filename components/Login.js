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

export default function LoginScreen(props) {
  const newVal = () => {
    // 2. do calculations and send it to parent
    props.handler;
  };
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
              newVal();
            }}
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
