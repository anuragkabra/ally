import React, { useEffect, useState } from "react";
import {
  View,
  ActivityIndicator,
  FlatList,
  Alert,
  Button,
  AlertButton,
} from "react-native";
import { AppConstants } from "../../constants/AppConstants";
import { CustomizedOKR, OKRs } from "../../models/okr";
import { getCustomizedOKRs } from "../../utils/OKRUtil";
import { Spacing } from "../../styles/Spacings";
import { OKRListItemView } from "../views/OKRListItemView";
import { Colors, getCategoryColors } from "../../styles/Colors";
import { Strings } from "../../styles/Strings";

function HomeScreen({ navigation }) {

  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState<Array<CustomizedOKR>>([])
  const [filteredData, setfilteredData] = useState<Array<CustomizedOKR>>([])
  const [expandedIndex, setExpandedIndex] = useState(-1)
  const [themeColor, setThemeColor] = useState(Colors.theme)

  useEffect(() => {
    //fetch the data in the hook and render when the data comes.
    const URL = AppConstants.API.Base + AppConstants.API.OKRs;
    setIsLoading(true)
    fetch(URL)
      .then((response: { json: () => any; }) => response.json())
      .then((responseData: OKRs) => {
        const okrs: CustomizedOKR[] = getCustomizedOKRs(responseData)
        setData(okrs)
        setfilteredData(okrs)
        setIsLoading(false)
      })
      .catch(error => {
        //TODO: Handle Error
        // Haven't handled this but need to create a empty state page with a retry button to reinitiate the api call
        setIsLoading(false)
      })

  }, [])

  const renderLoader = () => {
    return <ActivityIndicator style={{ flex: 1 }} />
  }

  const filterApplied = (filter: string) => {
    if (filter === Strings.AllOKRs) {
      setfilteredData(data)
    } else {
      let newData = data.filter(item => item.parent.category === filter)
      setfilteredData(newData)
    }

    //apply the color for the selected category
    let color = getCategoryColors(filter);
    setThemeColor(color)
    navigation.setOptions({
      title: filter, headerStyle: {
        backgroundColor: color,
      },
    })
  }

  //apply filter tapped
  const applyFilter = () => {
    let categories = [...new Set(data.map(item => item.parent.category))];
    let buttons: AlertButton[] = categories.map(item => {
      let alertButton: AlertButton = { text: item, onPress: () => filterApplied(item) }
      return alertButton
    })
    buttons.unshift({ text: Strings.AllOKRs, onPress: () => filterApplied(Strings.AllOKRs) })
    buttons.push({ text: Strings.Cancel, onPress: () => { }, style: "destructive" })
    Alert.alert(Strings.SelectCategory, "", buttons)
  }

  const renderFilter = () => {
    return <View style={{ backgroundColor: themeColor }}>
      <Button title={Strings.Filter} onPress={() => applyFilter()} color={Colors.white} />
    </View>
  }

  const renderList = () => {
    return <View style={{ flex: 1 }}>
      {renderFilter()}
      <FlatList
        data={filteredData}
        style={{ paddingTop: Spacing.s2, marginBottom: Spacing.s4 }}
        keyExtractor={(item, index) => item.parent.title + index}
        renderItem={({ item, index }) => OKRListItemView({
          okr: item,
          onPress: () => onPress(index),
          isExpanded: index === expandedIndex ? true : false
        })
        }
      />
    </View>
  }

  //handle the expand and collapse logic. Currently assumed that only one okr can remain open at a time
  const onPress = (index: number) => {
    if (expandedIndex === index) {
      setExpandedIndex(-1)
    } else {
      setExpandedIndex(index)
    }
  }

  return (
    <View style={{ flex: 1, backgroundColor: Colors.background }}>
      {isLoading ? renderLoader() : renderList()}
    </View>
  );
}

export default HomeScreen;