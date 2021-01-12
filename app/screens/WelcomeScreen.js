import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";

function WelcomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>habit hero</Text>
      <TouchableOpacity onPress={() => navigation.navigate("Month")}>
        <View>
          <Image
            style={styles.milton}
            source={require("../assets/milton5.png")}
          />
        </View>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E6ACBB",
    alignItems: "center",
    justifyContent: "center",
  },
  milton: {
    aspectRatio: 0.42,
    resizeMode: "contain",
  },
  titleText: {
    fontSize: 50,
    fontFamily: "Thonburi-Bold",
    fontWeight: "bold",
    color: "#AE4D66",
  },
});

export default WelcomeScreen;
