import { Route } from "react-router";
import Menu from "./components/Menu";
import BluePage from "./pages/BluePage";
import RedPage from "./pages/RedPage";

function App() {
  return (
    <div className="App">
      <Menu />
      <hr />
      <Route path="/red" component={RedPage} />
      <Route path="/blue" component={BluePage} />
    </div>
  );
}

export default App;
