import { Text, View } from "react-native";

import React from "react";
import { styles } from "./styles";

const Product = ({ navigation, route }) => {
  const [cats, setCategories] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState();

  const { catName } = route.params.id;
  console.warn(catName);

  const url = "www.themealdb.com/api/json/v1/1/filter.php?c=" + catName;

  useEffect(() => {
    fetch(url).then((res) =>
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
    console.log(cats[0].s);
    return (
      <View>
        <FlatList
          data={cats}
          renderItem={RenderItems}
          keyExtractor={(item) => item.idCategory}
          style={styles.flatlist}
        />
      </View>
    );
  };

  return <View style={styles.container}>{getData()}</View>;
};

export default Product;
