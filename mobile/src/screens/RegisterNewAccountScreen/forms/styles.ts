import { StyleSheet } from "react-native";
import { colors } from "../../../theme/colors";

export const styles = StyleSheet.create({
  formContainer: {
    width: "100%",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center"
  },
  formStepTitle: {
    color: colors.text.mainText90,
    alignSelf: "flex-start",
    textAlign: "left",
    fontSize: 16,
    fontFamily: "Poppins",
    fontStyle: "italic",
    marginBottom: 16,
  }
})
