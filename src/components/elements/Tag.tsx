import React from "react";
import { StyleSheet, Text, View } from "react-native"
import { Colors } from "../../styles/Colors"
import { FontSize } from "../../styles/FontSize";
import { FontWeight } from "../../styles/FontWeight";
import { Spacing } from "../../styles/Spacings"

export const Tag = (text: string, color: string) => {
  return (
    <View style={styles.container}>
      <Text style={[styles.text, { color: color }]}>{text}</Text>
      <View />
    </View >)
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "flex-start",
    flexDirection: "row",
    flex: 1
  },
  text: {
    padding: Spacing.s1,
    backgroundColor: Colors.white,
    fontSize: FontSize.small,
    fontWeight: FontWeight.bold
  }
})