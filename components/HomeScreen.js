import React, { Component, useState } from "react";
import {
  AppRegistry,
  View,
  StyleSheet,
  PixelRatio,
  TouchableHighlight,
  Image,
} from "react-native";
import {
  Container,
  Header,
  Title,
  Content,
  Footer,
  FooterTab,
  Button,
  Left,
  Right,
  Body,
  Icon,
  Text,
} from "native-base";
import Home from "./Home";
import Profile from "./Profile";
import Cart from "./Cart";
export default function HomeScreen() {
  const [screen, setScreen] = useState("Home");
  const [cart, setCart] = useState([]);
  const [counter, setCounter] = useState(0);
  return (
    <Container>
      <Header>
        <Body>
          <Title>{screen}</Title>
        </Body>
        <Right />
      </Header>
      <Content>
        {(() => {
          if (screen == "Home") {
            return (
              <Home
                cart={cart}
                setCart={setCart}
                counter={counter}
                setCounter={setCounter}
              />
            );
          } else if (screen == "Profile") {
            return <Profile />;
          } else {
            return (
              <Cart
                cart={cart}
                setCart={setCart}
                counter={counter}
                setCounter={setCounter}
              />
            );
          }

          return null;
        })()}

        {/* {() => {
          if (screen == "Home") {
            <Home />;
          }
        }} */}
      </Content>
      <Footer>
        <FooterTab>
          <Button
            full
            onPress={() => {
              setScreen("Profile");
            }}
          >
            <Image
              style={{
                alignSelf: "center",
              }}
              source={require("../assets/person.png")}
            />
            <Text>Profile</Text>
          </Button>
        </FooterTab>
        <FooterTab>
          <Button
            full
            onPress={() => {
              setScreen("Home");
            }}
          >
            <Image
              style={{
                alignSelf: "center",
              }}
              source={require("../assets/home.png")}
            />
            <Text>Home</Text>
          </Button>
        </FooterTab>
        <FooterTab>
          <Button
            full
            onPress={() => {
              setScreen("Cart");
            }}
          >
            <Image
              style={{
                alignSelf: "center",
              }}
              source={require("../assets/Cart.png")}
            />
            <Text>Cart</Text>
          </Button>
        </FooterTab>
      </Footer>
    </Container>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 20,
    paddingBottom: 10,
    // alignItems: "center",
    // justifyContent: "center",
  },
});
