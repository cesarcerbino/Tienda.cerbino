import { ActivityIndicator, FlatList, Text, View } from "react-native";
import React, { useEffect, useState } from "react";

import { ProductContainer } from "../../components/index";
import { styles } from "./styles";

const Products = ({ navigation, route }) => {
  const [meals, setMeals] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState();

  // !  arreglar fetch, Aplicar ya redux.
  //const { id } = route.params;
  // const url = "www.themealdb.com/api/json/v1/1/filter.php?c=" + id

  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/filter.php?c=Pasta").then(
      (res) =>
        res.json().then(
          (res) => {
            setIsLoading(false);
            setMeals(res.meals);
          },
          (error) => {
            setIsLoading(false);
            setError(error);
          }
        )
    );
  }, []);

  const renderItems = ({ item }) => {
    return <ProductContainer item={item} onHandleNavigate={() => null} />;
  };

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
          data={meals}
          renderItem={renderItems}
          keyExtractor={(item) => item.idMeal}
          style={styles.flatlist}
        />
      </View>
    );
  };

  return <View style={styles.container}>{getData()}</View>;
};

export default Products;
