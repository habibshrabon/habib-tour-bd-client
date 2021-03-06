import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import NotFound from "./components/NotFound/NotFound";
import Login from "./components/Login/Login";
import Header from "./components/Header/Header";
import AuthProvider from "./context/AuthProvider";
import AddPackage from "./components/AddPackage/AddPackage";
import Footer from "./components/Footer/Footer";
import PackageDetails from "./components/PackageDetails/PackageDetails";
import ManageOrder from "./components/ManageOrder/ManageOrder";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import MyOrders from "./components/MyOrders/MyOrders";

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
            <PrivateRoute path="/myOrders">
              <MyOrders />
            </PrivateRoute>
            <Route path="/manageOrder">
              <ManageOrder />
            </Route>
            <Route path="/addPackage">
              <AddPackage />
            </Route>
            <PrivateRoute path="/packageDetails/:id">
              <PackageDetails />
            </PrivateRoute>
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
