import COLORS from "../../constants/themes/colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 40,
  },
  flatlist: {
    width: "100%",
  },
});
