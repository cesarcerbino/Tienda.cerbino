import { Categories, Product, Products } from "../views";

import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

const ShopNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Categories">
      <Stack.Screen
        name="Categories"
        component={Categories}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen name="Product" component={Product} />
      <Stack.Screen name="Products" component={Products} />
    </Stack.Navigator>
  );
};

export default ShopNavigator;
