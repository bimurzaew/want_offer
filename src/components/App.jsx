import Header from "./header/Header";
import Footer from "./footer/Footer";
import Main from "./main/Main";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Preview from "./preview/Preview";
import './index.css'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Header />
          <Main />
          <Footer />
        </Route>
        <Route path="/preview">
          <Header />
          <Preview />
          <Footer />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
