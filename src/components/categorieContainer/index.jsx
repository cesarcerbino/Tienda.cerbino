import { Image, Text, TouchableOpacity, View } from "react-native";

import React from "react";
import { styles } from "./style";

const CategorieContainer = ({ item, onHandleNavigate }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onHandleNavigate} style={styles.touchable}>
        <Image style={styles.imagen} source={{ uri: item.strCategoryThumb }} />
        <Text style={styles.tittle}>{item.strCategory} </Text>
      </TouchableOpacity>
    </View>
  );
};

export default CategorieContainer;
