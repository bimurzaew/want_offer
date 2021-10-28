import Header from "./ui/header/Header";
import Footer from "./ui/footer/Footer";
import Main from "./main/Main";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Preview from "./preview/Preview";
import "./index.css";


function App() {
  return (
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
  );
}

export default App;
