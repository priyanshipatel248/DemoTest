import { StyleSheet,Platform } from "react-native";
import { Color, FontFamily, FontSize } from "./theme";
export const globalStyles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: Color.white,
  },
 
  viewContainer: {
    marginHorizontal: 20,
    

  },
  text: {
    color: Color.TEXT_BLUE,
    fontFamily: Platform.OS =='ios'? FontFamily.INTER_LIGHT:FontFamily.INTER_MEDIUM,
    fontSize: FontSize.SIZE_14,
    marginTop: 10,

    fontWeight: '500',
  },
  textInputLabel: {
    marginTop: 15,
    marginBottom: 4,
    color: Color.labelColor,
    fontFamily: FontFamily.INTER_REGULAR,
    fontSize: FontSize.SIZE_14,
  },
  title: {
    color: "#090A0A",

    fontFamily:  Platform.OS =='ios'?FontFamily.INTER_REGULAR:FontFamily.INTER_BOLD,
    fontSize: FontSize.SIZE_24,

    fontWeight: "600",
  },
});
