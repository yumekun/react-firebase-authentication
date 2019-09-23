import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navigation from "../Navigation";
import LandingPage from "../Landing";
import SignUpPage from "../SignUp";
import SignInPage from "../SignIn";
import PasswordForgetPage from "../PasswordForget";
import HomePage from "../Home";
import AccountPage from "../Account";
import AdminPage from "../Admin";
import * as ROUTER from "../../constants/routes";
import Logo from "../Logo";
import { withAuthentication } from "../Session";

const App = () => (
  <Router>
    <div className="Layout">
      <div className="header">
        <Logo />
        <Navigation />
        <hr />
      </div>
      <div className="content">
        <Route exact path={ROUTER.LANDING} component={LandingPage} />
        <Route path={ROUTER.SIGN_UP} component={SignUpPage} />
        <Route path={ROUTER.SIGN_IN} component={SignInPage} />
        <Route path={ROUTER.PASSWORD_FORGET} component={PasswordForgetPage} />
        <Route path={ROUTER.HOME} component={HomePage} />
        <Route path={ROUTER.ACCOUNT} component={AccountPage} />
        <Route Path={ROUTER.ADMIN} component={AdminPage} />
      </div>
    </div>
  </Router>
);
export default withAuthentication(App);
