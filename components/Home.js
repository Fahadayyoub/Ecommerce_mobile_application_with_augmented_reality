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
import Product from "./Product";
export default function HomeScreen(props) {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "This is first list",
      price: 25,
      disabled: false,
    },
    {
      id: 2,
      title: "This is second list",
      price: 50,
      disabled: false,
    },
    {
      id: 3,
      title: "This is third list",
      price: 100,
      disabled: false,
    },
  ]);

  // const updateMyCounter = () => {
  //   setCounter(counter + 1);
  // };
  return (
    <View>
      <Product
        todos={todos}
        updateParent={props.setCounter}
        counter={props.counter}
        setTodos={setTodos}
        cart={props.cart}
        setCart={props.setCart}
      />
    </View>
  );
}
