import { StyleSheet } from "react-native"
import { Colors } from "@/colors"

export const styles = StyleSheet.create({
  headerContainerLogo: {
    height: 173,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.gray700,
  },
  containerTarefa: {
    flex:1,
    alignItems: 'center',
    //justifyContent: 'stretch',
    gap: 4,
    backgroundColor: Colors.gray500,
    height: 50,
    borderRadius: 9,
    marginBottom: 6,
    marginHorizontal: 30,
    //paddingHorizontal: 20,
    flexDirection: "row"
  },
  circle: {
    height: 24,
    color: Colors.white,
    fontSize: 14,
    marginLeft: 8,
    marginRight: 10,
  },
  textTarefa:{
    width: 255,
    color: Colors.white,
    fontSize: 14,
    height: 24
  },
  trash: {
    color: Colors.white,
    fontSize: 14,
  },
  buttonText: {
    color: Colors.white,
    fontSize: 24
  },
  button: {
    width: 56,
    height: 56,
    borderRadius: 5,
    backgroundColor: Colors.blueDark,
    alignItems: "center",
    justifyContent: "center",
    marginTop: -65,
  },

})
