import React, { useState } from "react";
import { Text, View, StyleSheet, Button, TextInput } from "react-native";
import Constants from "expo-constants";

const addCourse = () => {
  const [id, setId] = React.useState("test1000");
  const [name, setName] = React.useState("testingprogram");
  const [description, setDescription] = React.useState(
    "testingcomputerprogramdefined"
  );
  const [course, setCourse] = React.useState();

  function insertData() {
    const proxy = "https://cors-anywhere.herokuapp.com/";
    let url = "https://se-api-demo.uc.r.appspot.com/courses/";
    let testurl = "https://excerise.uc.r.appspot.com/courses";

    fetch(proxy + testurl, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        id: id,
        name: name,
        description: description,
      }),
    }).catch(function (error) {
      console.log(error);
    });
  }

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}> New Course Form </Text>
      <Text style={{ marginBottom: 10, fontWeight: "bolder" }}>Course ID</Text>
      <TextInput
        style={styles.text}
        placeholder="Enter course ID"
        value={id}
        onChangeText={(text) => setId(text)}
      />
      <Text style={{ marginBottom: 10, fontWeight: "bolder" }}>
        Course Name
      </Text>
      <TextInput
        style={styles.text}
        placeholder="Enter course name"
        value={name}
        onChangeText={(text) => setName(text)}
      />
      <Text style={{ marginBottom: 10, fontWeight: "bolder" }}>
        Description
      </Text>
      <TextInput
        style={styles.text}
        placeholder="Enter course description"
        value={description}
        onChangeText={(text) => setDescription(text)}
      />
      <Button
        title="Add Course"
        onPress={() => {
          if (id == "" || name == "") {
            alert("Course ID and course name have to be included");
          } else {
            insertData();
            alert("Course added succesfully!");
          }
        }}
      />
      <Text style={{ marginTop: 10, marginBottom: 10 }}>ID: {id}</Text>
      <Text style={{ marginBottom: 10 }}>Name: {name}</Text>
      <Text style={{ marginBottom: 10 }}>Description: {description} </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
    paddingTop: Constants.statusBarHeight,
    padding: 8,
  },
  text: {
    height: 40,
    maxWidth: "100%",
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 10,
  },
  headerText: {
    textAlign: "center",
    marginBottom: 15,
    fontSize: 30,
  },
});

export default addCourse;
