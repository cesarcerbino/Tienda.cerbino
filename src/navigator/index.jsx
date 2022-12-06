import { Categories, Product, Products } from "../views/index";

import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import Tabs from "./tabNavigator";

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Tabs />
    </NavigationContainer>
  );
};

export default AppNavigator;
