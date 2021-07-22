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
  Item,
  Input,
} from "native-base";

export default function Cart(props) {
  return (
    <View>
      <Text
        style={{
          textAlign: "center",
          fontSize: 58,
          color: "#1a1a1a",
          marginBottom: 50,
          marginTop: 30,
        }}
      >
        Cart
      </Text>
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          "justify-content": "space-evenly",
          borderBottomColor: "red",
          borderBottomWidth: 2,
          marginBottom: 30,
        }}
      >
        <Text style={{ flex: 2.7, paddingLeft: 10 }}>Product Name</Text>
        <Text style={{ flex: 2 }}>Quantity </Text>
        <Text style={{ flex: 1 }}>Price</Text>
        <Text style={{ flex: 1 }}>Total</Text>
      </View>
      {props.cart.map((item, index) => {
        return (
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              "justify-content": "space-evenly",
              marginTop: 50,
              borderBottomColor: "red",
              borderBottomWidth: 2,
              marginBottom: 30,
              paddingLeft: 10,
            }}
          >
            <Text style={{ flex: 3 }}>{item.title}</Text>
            <Text style={{ flex: 1 }}>{item.quantity} </Text>
            <Text style={{ flex: 1 }}>{item.price}</Text>
            <Text style={{ flex: 1 }}>{item.price * item.quantity}</Text>
          </View>
        );
      })}
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          "justify-content": "space-evenly",
          marginTop: 50,
          borderBottomColor: "red",
          borderBottomWidth: 2,
          marginBottom: 30,
          paddingLeft: 10,
        }}
      >
        <Text style={{ flex: 5 }}>Grand Total</Text>
        <Text style={{ flex: 1, "align-self": "flex-end" }}>
          {props.counter}
        </Text>
      </View>
      <Content>
        <Item>
          <Input placeholder="Enter your address" />
        </Item>
      </Content>
      <Button
        warning
        transparent
        bordered
        style={{ alignSelf: "center", marginTop: 60, marginBottom: 20 }}
      >
        <Text>Place an Order</Text>
      </Button>
    </View>
  );
}
