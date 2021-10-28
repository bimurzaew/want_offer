import Header from "./ui/header/Header";
import Footer from "./ui/footer/Footer";
import Main from "./main/Main";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Preview from "./preview/Preview";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "../redux/configureStore";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <Footer />
        <Switch>
          <Route exact path="/">
            <Main />
          </Route>
          <Route path="/preview">
            <Preview />
          </Route>
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
