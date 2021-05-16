import React from "react";
import {
  View,
  Text,
  StyleSheet,
} from "react-native";
import { CustomizedOKR } from "../../models/okr";
import { Colors } from "../../styles/Colors";
import { Spacing } from "../../styles/Spacings";
import OKRListChildListView from "./OKRChildListView";
import OKRListHeaderView from "./OKRListHeaderView";

export interface OKRListItemViewProps {
  okr: CustomizedOKR
  onPress: Function
  isExpanded: boolean
}


export const OKRListItemView = (props: OKRListItemViewProps) => {

  return (
    <View style={[styles.container]}>
      {OKRListHeaderView(props)}
      { props.isExpanded ?
        OKRListChildListView(props.okr) : null
      }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: Spacing.s4,
    marginVertical: Spacing.s2,
    backgroundColor: Colors.white,
    borderRadius: Spacing.s2,
    overflow: "hidden"
  },
});