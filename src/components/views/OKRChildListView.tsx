import React from "react";
import {
  View,
  Text,
  StyleSheet,
} from "react-native";
import { CustomizedOKR } from "../../models/okr";
import { FontSize } from "../../styles/FontSize";
import { FontWeight } from "../../styles/FontWeight";
import { Spacing } from "../../styles/Spacings";
import { Strings } from "../../styles/Strings";


const OKRListChildListView = (okr: CustomizedOKR) => {
  return (
    <View style={styles.childList}>
      {okr.childs.length > 0 ? okr.childs.map(okr => {
        return OKRListChildView(okr.title)
      }) : OKRListChildView(Strings.NoChildOKRsAvailable)}
    </View>
  )
}

const OKRListChildView = (title: string) => {
  return (
    <View style={styles.child}>
      <Text style={[styles.text]}>{title ?? ""}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  childList: {
    paddingVertical: Spacing.s4,
  },
  child: {
    flexDirection: "row",
    marginVertical: Spacing.s2,
    marginHorizontal: Spacing.s4
  },
  text: {
    fontSize: FontSize.regular,
    fontWeight: FontWeight.regular
  }
});

export default OKRListChildListView;