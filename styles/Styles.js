import React from "react";
import { StyleSheet } from "react-native";

export const PRIMARY_COLOR = "#00c497";
export const PRIMARY_DARK = "#00c497";

// Stylesheet for Login and SignUp screens.
export const authPageStyle = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  icon: {
    paddingHorizontal: 16,
    alignSelf: "center",
  },
  searchSection: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    margin: 8,
    paddingHorizontal: 8,
    paddingVertical: 16,
    fontSize: 20,
    borderRadius: 8,
  },
  input: {
    flex: 1,
    paddingLeft: 0,
    backgroundColor: "#fff",
    color: "#424242",
  },
  button: {
    textAlign: "center",
    padding: 16,
    backgroundColor: PRIMARY_COLOR,
    color: "#fff",
    elevation: 2,
    marginHorizontal: 8,
    borderRadius: 4,
  },
  inputHolder: {
    justifyContent: "center",
    marginBottom: 16,
  },
  text: { width: "100%", textAlign: "center", color: "#000", fontSize: 16 },
  avatar: {
    alignSelf: "center",
  },
});

// Stylesheet for Dashboard screens.
export const dashboardStyle = StyleSheet.create({
  container: {
    borderRadius: 8,
    height: "100%",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  input: {
    margin: "2%",
    borderBottomColor: "#262626",
    borderBottomWidth: 1,
    paddingHorizontal: 8,
    paddingVertical: 16,
    fontSize: 20,
  },
  button: {
    textAlign: "center",
    padding: 16,
    backgroundColor: PRIMARY_COLOR,
    color: "#fff",
    elevation: 2,
    marginHorizontal: 8,
    borderRadius: 4,
  },
  inputHolder: {
    flex: 1,
    justifyContent: "center",
  },
  text: { width: "100%", textAlign: "center", color: "#000", fontSize: 16 },
});

// Stylesheet for Post component.
export const postStyle = StyleSheet.create({
  container: {
    borderBottomColor: "#c1c1c1",
    borderBottomWidth: 1,
    marginTop: "2%",
    padding: "4%",
  },
  title: {
    fontWeight: "bold",
    fontSize: 24,
  },
  body: {
    fontStyle: "italic",
    fontSize: 16,
    borderLeftWidth: 4,
    borderLeftColor: "#00c497",
    paddingLeft: 16,
    marginVertical: 8,
    borderRadius: 4,
  },
});
