import { StatusBar } from "expo-status-bar";
import React, { useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  useState,
  FlatList,
  SafeAreaView,
} from "react-native";
import {
  Container,
  Header,
  Content,
  Form,
  Item,
  Input,
  Button,
} from "native-base";
import Firebase from "./firebaseconfig";
const renderItem = ({ item }) => {
  return <Text>{item.data}</Text>;
};
export default function App() {
  const [data, setdata] = React.useState([{ id: "12", data: "dsk" }]);
  const [text, setText] = React.useState("");

  var database = Firebase.database();
  var prod = database.ref("products/");

  const presshandler = () => {
    var newprod = prod.push();
    newprod.set(text);
    setText("");
    var arr = [];
    var ref = database.ref("products");
    ref.once("value").then((snapshot) => {
      snapshot.forEach((childsnapshot) => {
        console.log(childsnapshot.val());
        arr.push({ id: childsnapshot.key, data: childsnapshot.val() });
      });
    });
    setdata(arr);
    console.log(data);
    return;
  };

  return (
    <Container>
      <Header />
      <Content>
        <Form>
          <Item>
            <Input
              placeholder="product"
              style={{ height: 40 }}
              onChangeText={(text) => setText(text)}
              defaultValue={text}
            />
          </Item>
          <Button success onPress={presshandler}>
            <Text> Add </Text>
          </Button>
        </Form>

        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      </Content>
    </Container>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
