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
      title: "Fifa ball",
      price: 25,
      disabled: false,
      image: "../assets/87.png",
    },
    {
      id: 2,
      title: "Foot Ball",
      price: 50,
      disabled: false,
      image: "../assets/87.png",
    },
    {
      id: 3,
      title: "Ball",
      price: 100,
      disabled: false,
      image: "../assets/87.png",
    },
    {
      id: 1,
      title: "Basket ball",
      price: 25,
      disabled: false,
      image: "../assets/87.png",
    },
    {
      id: 2,
      title: "uefaball",
      price: 50,
      disabled: false,
      image: "../assets/87.png",
    },
    {
      id: 3,
      title: "New Ball",
      price: 100,
      disabled: false,
      image: "../assets/87.png",
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
