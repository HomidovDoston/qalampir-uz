import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastfy/dist/ReactToastfy.css";
import { BrowserRouter } from "react-router-dom";
import { Provider as RootProvider } from "./Context";
import "./index.css";
import thunk from "redux-thunk";
import { rootReducer } from "./Redux/Reducers/rootReducer";
import { Provider as ReduxProvider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";

import Root from "./Root";

const store = createStore(rootReducer, compose(applyMiddleware(thunk)));

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <ReduxProvider store={store}>
      <RootProvider>
        <Root />
      </RootProvider>
    </ReduxProvider>
  </BrowserRouter>
);
