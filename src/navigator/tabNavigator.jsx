import { Orders, Shop } from "../views/index";

import COLORS from "../constants/themes/colors";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import ShopNavigator from "./shop";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const BottomTab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <BottomTab.Navigator
      initialRouteName="ShopTab"
      screenOptions={{
        headerShown: false,
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: "600",
        },
        tabBarActiveTintColor: COLORS.secondary,
        tabBarInactiveTintColor: COLORS.darkblue,
      }}
    >
      <BottomTab.Screen
        name="Orders"
        options={{
          tabBarIcon: ({ focused }) => (
            <Ionicons
              size={22}
              color={COLORS.darkblue}
              name={focused ? "list" : "list-outline"}
            />
          ),
        }}
        component={Orders}
      />
      <BottomTab.Screen
        name="ShopTab"
        options={{
          tabBarIcon: ({ focused }) => (
            <Ionicons
              size={22}
              color={COLORS.darkblue}
              name={focused ? "home" : "home-outline"}
            />
          ),
        }}
        component={ShopNavigator}
      />

      <BottomTab.Screen
        name="Cart"
        options={{
          tabBarIcon: ({ focused }) => (
            <Ionicons
              size={22}
              color={COLORS.darkblue}
              name={focused ? "cart" : "cart-outline"}
            />
          ),
        }}
        component={Shop}
      />
    </BottomTab.Navigator>
  );
};

export default Tabs;
