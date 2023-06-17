import { StyleSheet, TextStyle } from "react-native";
import { colors } from "../../../theme/colors";

export const styles = StyleSheet.create<{
  brandInputContainer: {},
  brandInputText: TextStyle,
}>({
  brandInputContainer: {
    minWidth: 280,
    width: "100%",
    minHeight: 48,
    maxHeight: 58,
    backgroundColor: "white",
    paddingVertical: 10,
    paddingLeft: 14,
    justifyContent: "center",
    borderRadius: 12,
    elevation: 6,
  },
  brandInputText: {
    justifyContent: "center",
    width: "100%",
    height: "100%",
    fontFamily: "Poppins",
    fontSize: 14,
    lineHeight: 30,
    color: colors.text.mainText90,
    textAlign: "left",
    alignSelf: "center",
  },
});