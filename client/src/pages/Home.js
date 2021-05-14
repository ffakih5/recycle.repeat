import React, { useState } from "react";
import { Text, StyleSheet } from "react-native";
import recycle from "../assets/image/recycle.png"



function Home(props) {
    const [titleText, setTitleText] = useState("Recycle Repeat");
    const bodyText = useState("Thank you for choosing to help out mother earth by recycling waste");

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
        <img src={ recycle } alt="recycle-image"/>
        </div>
      </Text>
      <Text numberOfLines={5}>{bodyText}</Text>
    </Text>
    <div>
    <p>
                                recycle repeat is the place you can come and record the good you have done to then share with the world.
                                </p>
                                <p>
                               Record the rubbish you have collected, earn points and share with your friends!
                                </p>
    </div>
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