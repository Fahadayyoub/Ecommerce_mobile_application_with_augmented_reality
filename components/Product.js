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
export default function Product(props) {
  const [counter, setCounter] = useState(0);
  return (
    <View>
      {props.todos.map((todo, index) => {
        return (
          <View
            style={{
              flex: 1,
              flexDirection: "column",
            }}
          >
            <View style={{ flex: 1, alignSelf: "center" }}>
              <Image
                style={styles.ImageStyle}
                source={require("../assets/ball.png")}
              />
              <View>
                <Text
                  warning
                  transparent
                  bordered
                  style={{ alignSelf: "center", marginRight: 5 }}
                >
                  {todo.title}
                </Text>
                <Button
                  warning
                  transparent
                  bordered
                  style={{ alignSelf: "center" }}
                >
                  <Text>View in AR</Text>
                </Button>
                {() => {
                  if (todo.disabled) {
                  }
                }}
                <Button
                  success
                  transparent
                  bordered
                  style={{ alignSelf: "center", marginTop: 5 }}
                  onPress={() => {
                    // props.updateParent;

                    if (todo.disabled) {
                      var array = [...props.cart];
                      let elementsIndex = props.cart.findIndex(
                        (element) => element.id == todo.id
                      );

                      array.splice(elementsIndex, 1);
                      props.setCart(array);
                      props.updateParent(props.counter - todo.price);
                    } else {
                      props.updateParent(props.counter + todo.price);
                      props.setCart([
                        ...props.cart,
                        {
                          id: todo.id,
                          title: todo.title,
                          price: todo.price,
                          quantity: 1,
                        },
                      ]);
                    }
                    let newArray = [...props.todos];
                    newArray[index] = {
                      ...newArray[index],
                      disabled: !newArray[index].disabled,
                    };
                    props.setTodos(newArray);
                  }}
                >
                  {(() => {
                    if (todo.disabled) {
                      return <Text>Remove from Cart</Text>;
                    } else {
                      return <Text> Add to Cart</Text>;
                    }

                    return null;
                  })()}
                </Button>
              </View>
            </View>
            {/* <View style={{ flex: 1 }}>
              <Image
                style={styles.ImageStyle}
                source={require("../assets/87.png")}
              />
              <View>
                <Button warning transparent bordered style={{ marginLeft: 25 }}>
                  <Text>View in AR</Text>
                </Button>
                <Button
                  success
                  transparent
                  bordered
                  style={{ marginLeft: 18, marginTop: 5 }}
                >
                  <Text>Add to Cart</Text>
                </Button>
              </View>
            </View> */}
          </View>
        );
      })}
    </View>
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
  ImageStyle: {
    padding: 10,
    margin: 5,
    height: 200,
    width: 200,
    resizeMode: "stretch",
    alignItems: "center",
  },
  button: {},
});
