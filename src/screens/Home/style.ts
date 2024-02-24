import { StyleSheet } from "react-native";
import { Colors } from "../../colors";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.gray700,
  },
  headerContainerLogo: {
    height: 173,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.gray700,
  },
  input: {
    color: Colors.gray300,
    height: 60,
    width: 271,
    backgroundColor: Colors.gray500,
    borderRadius: 6,
    fontSize: 18,
    marginRight: 5,
    marginLeft: 30,
    marginTop: -65,
    paddingLeft: 15,
    borderColor: Colors.gray700, borderStyle: "solid", borderWidth: 1
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
  form: {
    width: '100%',
    flexDirection: 'row',
    marginTop: 36,
  },
  safeArea: {
    height: '100%',
  },
  containerBasic: {
    backgroundColor: Colors.gray600,
    flex: 1,
    paddingBottom: 40
  },
  taskList: {
    height: '100%',
  },
  clipboard: {
    alignContent: "center",
    alignItems: "center",
    marginTop: 5,
    borderTopColor: Colors.gray400,
    borderStyle: 'solid',
    borderTopWidth: 2,
    padding:40
  },
  clipboardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginHorizontal: 30,
    paddingVertical: 20,
  },
  clipboardHeaderItem: {
    flexDirection: 'row',
    gap: 4
  },
  clipboardHeaderTextCreated: {
    color: Colors.blue,
    fontWeight: 'bold'
  },
  clipboardHeaderTextFinished: {
    color: Colors.purple,
    fontWeight: 'bold'
  },
  clipboardHeaderCounter: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.gray400,
    height: 19,
    width: 25,
    borderRadius: 9,
  },
  clipboardHeaderCounterText: {
    textAlign: "center",
    color: Colors.white,
    fontSize: 12,
  },
  firstLine: {
    marginTop: 15,
    color: Colors.gray300,
    fontSize: 16,
    fontWeight: 'bold'
  },
  secondLine: {
    color: Colors.gray300,
    fontSize: 16,
  }
})