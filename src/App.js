import React from "react";
import {
    BrowserRouter as Router,
    Route,
    Link 
} from "react-router-dom";

import Game from "./pages/game/Game";
import About from "./pages/about/About";
import Privacy from "./pages/privacy/Privacy";
import Feedback from "./pages/feedback/Feedback";
import FeedbackSuccess from "./pages/feedback/FeedbackSuccess";

import logo from "../assets/images/logo-landscape.svg";

import css from './App.sass';

const store = {};
const App = () => {
  return(
    <div>
      <Router>
        <header>
            <span className={css.logo}>
                <img src={logo}/>
            </span>
            <span className={css.tagline}>
                The Pu is silent
            </span>
        </header>
        <Route
            path="/"
            render={(props) => <Game {...props} store={store} />}
             exact
        />
        <Route path="/about/" component={About} />
        <Route path="/privacy/" component={Privacy} />
        <Route path="/feedback/" component={Feedback} />
        <Route
            path="/feedback-success/"
            component={FeedbackSuccess}
        />

      <footer>
        <span className={css.copyright}>
          &copy; 2019 soydos.com
        </span>
        <div className={css.links}>

        <span className={css.footerLink}>
          <Link to="/feedback">Feedback</Link>
        </span>

        <span className={css.footerLink}>
          <a href="https://github.com/soydos/pusoy-dos-ui">
            Contribute
          </a>
        </span>
&nbsp;
        <span className={css.footerLink}>
            <Link to="/privacy">Privacy Policy</Link>
        </span>
      </div>

      <div>
        <small className={css.buildVersion}>
          build: {window.pd_build}
        </small>
      </div>
      </footer>

      </Router>
    </div>
  );
}

export default App;
