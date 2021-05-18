import React, { useState } from "react";
import { Text, StyleSheet } from "react-native";
import { Image } from "react-native"
import recycle from "../assets/image/recycle.png";


function Home(props) {
    const [titleText, setTitleText] = useState("Recycle Repeat");
    const bodyText = useState("Thank you for choosing to help out mother earth by recycling waste");
    const pText = useState("Recycle Repeat is the place you can come and record the good you have done to then share with the world.");
    const p2Text = useState("Record the rubbish you have collected, earn points and share with your friends!");
    const onPressTitle = () => {
        setTitleText("YOU ARE A HERO!");
      };
    return(
        <div>
    <Text style={styles.baseText}>
      <Text style={styles.titleText} onPress={onPressTitle}>
        {titleText}
        {"\n"}
        <div>
        <img src={ recycle } alt="recycle-image" class="center" width="300" height="300" />
        </div>
      </Text>
      <Text>{bodyText}</Text>
    </Text>
    <div>
    <Text style={styles.pText}>{pText}</Text> <br></br>
    <Text style={styles.p2Text}>{p2Text}</Text>
    </div>
        </div>
    )
}
const styles = StyleSheet.create({
    baseText: {
      fontFamily: "Cochin",
      fontSize: 24
    },
    titleText: {
      fontSize: 24,
      fontWeight: "bold",
    }, 
    bodyText: {
        fontFamily: "Cochin",
        fontSize: 20

    },
    pText: {
        fontFamily: "Cochin",
        fontSize: 24
    },
    p2Text: {
        fontFamily: "Cochin",
        fontSize: 24
    }
    
  });

export default Home;