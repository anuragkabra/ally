import React from "react";
import {
  View,
  Text,
  StyleSheet,
} from "react-native";
import { Colors, getCategoryColors } from "../../styles/Colors";
import { FontSize } from "../../styles/FontSize";
import { FontWeight } from "../../styles/FontWeight";
import { Spacing } from "../../styles/Spacings";
import { Strings } from "../../styles/Strings";
import { Tag } from "../elements/Tag";
import { OKRListItemViewProps } from "./OKRListItemView";

const OKRListHeaderView = (props: OKRListItemViewProps) => {
  return (
    <View style={[styles.header, { backgroundColor: getCategoryColors(props.okr.parent.category) }]}>
      <View style={{ flexShrink: 1 }}>
        {Tag("#" + props.okr.parent.category, getCategoryColors(props.okr.parent.category))}
        <Text numberOfLines={0} style={styles.title}>{props.okr.parent.title}</Text>
      </View>
      <Text onPress={() => props.onPress()} style={styles.button}>{props.isExpanded ? Strings.Hide : Strings.Show}</Text>
    </View>

  )
}

const styles = StyleSheet.create({
  header: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: Spacing.s2,
  },
  title: {
    fontSize: FontSize.large,
    color: Colors.white,
    fontWeight: FontWeight.bold,
    flexGrow: 1,
    paddingTop: Spacing.s2
  },
  button: {
    color: Colors.white,
    paddingLeft: Spacing.s4,
    fontWeight: FontWeight.bold
  }
});

export default OKRListHeaderView;