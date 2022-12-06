import { ActivityIndicator, Button, FlatList, Text, View } from "react-native";
import React, { useEffect, useState } from "react";

import { CategorieContainer } from "../../components/index";
import { styles } from "./styles";

const Categories = ({ navigation, route }) => {
  const [cats, setCategories] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState();

  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/categories.php").then(
      (res) =>
        res.json().then(
          (res) => {
            setIsLoading(false);
            setCategories(res.categories);
          },
          (error) => {
            setIsLoading(false);
            setError(error);
          }
        )
    );
  }, []);

  const getData = () => {
    if (isLoading) {
      return <ActivityIndicator size="large" />;
    }
    if (error) {
      return <Text>Error pa: {error} </Text>;
    }

    return (
      <View>
        <FlatList
          data={cats}
          renderItem={renderItems}
          keyExtractor={(item) => item.idCategory}
          style={styles.flatlist}
        />
      </View>
    );
  };

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

  return <View style={styles.container}>{getData()}</View>;
};

export default Categories;
