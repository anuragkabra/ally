import { StyleSheet } from "react-native";
import { FontSize } from "./FontSize";
import { Colors } from "./Colors";
import { FontWeight } from "./FontWeight";

export const TextStyles = StyleSheet.create({
  tag: {
    fontWeight: FontWeight.thin,
    fontSize: FontSize.small,
    color: Colors.text.white
  }
});
