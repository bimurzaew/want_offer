import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./index.css";
import Main from "./main";
import Preview from "./preview";
import Header from "./ui/header";
import Footer from "./ui/footer";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/">
          <Main />
        </Route>
        <Route path="/preview">
          <Preview />
        </Route>
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
