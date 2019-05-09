import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

const reducer = (prevState = { text: "Helloe" }, action) => {
  switch (action.type) {
    case "BIRTHDAY":
      return { ...prevState, ...action };
    case "WEDDINGDAY":
      return { ...prevState, ...action };

    default:
      return prevState;
  }
};

const store = createStore(reducer, composeWithDevTools());
export default store;
