import React from 'react';
import logo from '../logo.svg';
import sw from '../sw.png';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink
} from "react-router-dom";
import Characters from '../pages/Characters';
import Planets from '../pages/planets/Planets';
import Planet from '../pages/planets/Planet';

class Layout extends React.Component {
    render() {
        return <Router>
            <div className="container-fluid">
                <header className="App-header p-3">
                    <div className="d-flex justify-content-center">
                        <img src={logo} className="App-logo" alt="logo" />
                    </div>

                    <nav className="d-flex justify-content-center">
                        <NavLink to="/" activeClassName="active-link" exact>Home</NavLink>
                        <NavLink to="/characters" activeClassName="active-link">Characters</NavLink>
                        <NavLink to="/planets" activeClassName="active-link">Planets</NavLink>
                    </nav>

                </header>
                <div className="content pb-5">
                    <Switch>
                        <Route exact path="/">
                            <img src={sw} className="w-100" alt="home-bg" />
                        </Route>
                        <Route path="/characters" component={Characters} />
                        <Route path="/planets/:id" component={Planet} />
                        <Route path="/planets" component={Planets} />
                    </Switch>
                </div>

            </div>
        </Router>

    }
}

export default Layout;