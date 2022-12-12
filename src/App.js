import { Categories, Product, Products } from "./views/index";
import { Text, View } from "react-native";

import AppNavigator from "./navigator/index";
import { Provider } from "react-redux";
import React from "react";
import store from "./store/index";

export default function App() {
  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  );
}
