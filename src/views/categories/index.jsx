import { FlatList, View } from "react-native";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { CategorieContainer } from "../../components/index";
import loadCategory from "../../store/actions/category.action";
import { styles } from "./styles";

const Categories = ({ navigation, route }) => {
  const categories = useSelector((state) => state.category.categories);

  const renderItems = ({ item }) => {
    return (
      <CategorieContainer
        item={item}
        onHandleNavigate={() => onHandleNavigate(item)}
      />
    );
  };

  const onHandleNavigate = (item) => {
    navigation.navigate("Products", { id: item.strCategory });
  };

  return (
    <View style={styles.container}>
      <View>
        <FlatList
          data={categories}
          renderItem={renderItems}
          keyExtractor={(item) => item.idCategory}
          style={styles.flatlist}
        />
      </View>
    </View>
  );
};

export default Categories;
