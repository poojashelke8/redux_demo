import React from "react";
import { Provider } from "react-redux";
import store from "../src/App/store";
import Todo from "../src/Components/Todo";
const App = () => {
  return (
    // <Provider store={store}>
       <Todo /> 
    // </Provider>
  );
};
export default App;