import React from "react";
import {BrowserRouter as Router} from 'react-router-dom';
import {Route,Switch} from "react-router";
import Home from "./components/module/pages/Home";
function App() {
    return (
        <div className="App">
            <Router>
                <Switch>
                    <Route  path={"/"} render={(route) => <Home {...route} />} />
                    <Route  path={"/home"} render={(route) => <Home {...route} />} />
                </Switch>
            </Router>

        </div>
    );
}

export default App;
