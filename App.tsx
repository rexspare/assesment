import React from "react";
import { NativeBaseProvider, Box } from "native-base";
import HomeScreen from "./src/screens/home/homeScreen";
import { Provider } from 'react-redux';
import store from "./src/store/store";

export default function App() {
  return (
    <Provider store={store}>
      <NativeBaseProvider>
        <HomeScreen />
      </NativeBaseProvider>
    </Provider>
  );
}