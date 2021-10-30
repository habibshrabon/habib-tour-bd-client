import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import NotFound from "./components/NotFound/NotFound";
import Packages from "./components/Packages/Packages";
import Login from "./components/Login/Login";
import Header from "./components/Header/Header";
import AuthProvider from "./context/AuthProvider";
import AddPackage from "./components/AddPackage/AddPackage";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/ourPackages">
              <Packages />
            </Route>
            <Route path="/manageOrder"></Route>
            <Route path="/addPackage">
              <AddPackage />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
          <Footer />
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
