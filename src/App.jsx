import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.scss";
import Components from "./components";
import BoardContent from "./components/BoardContent/BoardContent";
import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Switch>
          <Route path="/b/:id" exact component={BoardContent} />
          <Components />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
