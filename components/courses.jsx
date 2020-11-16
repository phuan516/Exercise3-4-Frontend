import React, { useState } from "react";
import { Text, View, StyleSheet, Button, TextInput } from "react-native";
import Constants from "expo-constants";

// You can import from local files

// or any pure javascript modules available in npm

export default function Courses() {
  const [course, setCourse] = React.useState();
  const [id, setId] = React.useState();
  const [name, setName] = React.useState();
  const [description, setDescription] = React.useState();
  const [changeId, setChangeId] = React.useState();
  const [newDescription, setNewDescription] = React.useState();

  const getCourses = () => {
    const url = "https://excerise.uc.r.appspot.com/courses";
    fetch(url)
      .then((resp) => resp.json())
      .then((data) => displayallCourses(data));
  };

  const displayallCourses = (data) => {
    let allCourses = "";
    data.forEach((course) => {
      allCourses += course.course_id += course.course_name +=
        course.description;
      setCourse(allCourses);
    });
  };

  const changeDescription = () => {};

  const addCourse = () => {};

  return (
    <View style={styles.container}>
      <Button title="Get Courses" onPress={() => getCourses()} />
      <Text>{course}</Text>
      <Text>Course Id</Text>
      <TextInput
        style={styles.text}
        onChangeText={(text) => setId(text)}
        value={id}
      />

      <Text>Course Name</Text>
      <TextInput
        style={styles.text}
        onChangeText={(text) => setName(text)}
        value={name}
      />
      <Text>Description</Text>
      <TextInput
        style={styles.text}
        onChangeText={(text) => setDescription(text)}
        value={description}
      />
      <Button title="Add Courses" onPress={() => addCourses()} />
      <Text>{id}</Text>
      <Text>{name}</Text>
      <Text>{description}</Text>
      <Text>Course Id</Text>
      <TextInput
        style={styles.text}
        onChangeText={(text) => setChangeId(text)}
        value={changeId}
      />
      <Text>Description</Text>
      <TextInput
        style={styles.text}
        onChangeText={(text) => setNewDescription(text)}
        value={newDescription}
      />
      <Button title="Change Description" onPress={() => changeDescription()} />
      <Text>{changeId}</Text>
      <Text>{newDescription}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingTop: Constants.statusBarHeight,
    backgroundColor: "#ecf0f1",
    padding: 8,
  },
  text: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
  },
});
