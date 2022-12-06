import COLORS from "../../constants/themes/colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  touchable: {
    backgroundColor: COLORS.primary,
    alignItems: "center",
    width: 330,
    height: 70,
    padding: 10,
    flexDirection: "row",
    borderRadius: 10,
    marginVertical: 8,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  imagen: {
    width: 60,
    height: 60,
    borderRadius: 10,
  },
  tittle: {
    fontSize: 20,
    textAlign: "center",
    marginHorizontal: 10,
    fontWeight: "600",
  },
});
