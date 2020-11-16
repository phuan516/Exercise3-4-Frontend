import React, { useState } from "react";
import { Text, View, StyleSheet, Button, TextInput } from "react-native";
import Constants from "expo-constants";

// You can import from local files

// or any pure javascript modules available in npm
/*
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
      
      <Text>Course ID</Text>
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
*/

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

  const getCourses = () => {
    const proxy = "https://cors-anywhere.herokuapp.com/";
    const url = "https://excerise.uc.r.appspot.com/courses";
    fetch(proxy + url)
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

  return (
    <View style={styles.container}>
      <Text
        style={{
          textAlign: "center",
          marginBottom: 15,
          fontSize: 20,
          fontWeight: "bolder",
        }}
      >
        {" "}
        New Course Form{" "}
      </Text>
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
          insertData();
        }}
      />
      <Text>ID: {id}</Text>
      <Text>Name: {name}</Text>
      <Text>Description: {description} </Text>
      <Button title="Get Courses" onPress={() => getCourses()} />
      <Text>{course}</Text>
    </View>
  );
};

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
    marginBottom: 10,
  },
});

export default addCourse;
