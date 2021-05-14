import React, { useState } from "react";
import { Text, StyleSheet } from "react-native";

function Home(props) {
    const [titleText, setTitleText] = useState("Recyle Repeat");
    const bodyText = useState("Thank you for choosing to help out mother earth by recycling waste");

    const onPressTitle = () => {
        setTitleText("Recycle Repeat [pressed]");
      };
    return (
        <div>
           return (
    <Text style={styles.baseText}>
      <Text style={styles.titleText} onPress={onPressTitle}>
        {titleText}
        {"\n"}
        {"\n"}
      </Text>
      <Text numberOfLines={5}>{bodyText}</Text>
    </Text>
  );


        </div>
    )
}
const styles = StyleSheet.create({
    baseText: {
      fontFamily: "Cochin"
    },
    titleText: {
      fontSize: 20,
      fontWeight: "bold"
    }
  });
  

export default Home;