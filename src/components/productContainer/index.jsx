import { Image, Text, TouchableOpacity, View } from "react-native";

import React from "react";
import { styles } from "./style";

const ProductContainer = ({ item, onHandleNavigate }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onHandleNavigate} style={styles.touchable}>
        <Image style={styles.imagen} source={{ uri: item.strMealThumb }} />
        <Text style={styles.tittle}>{item.strMeal} </Text>
      </TouchableOpacity>
    </View>
  );
};

export default ProductContainer;
