import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Redirect,
    Switch
} from 'react-router-dom';

import CustomNavbar from './components/CustomNavbar';
import ProfilePage from './pages/ProfilePage';
import ArticlesPage from './pages/ArticlesPage';
import HomePage from './pages/HomePage';

const App = (props) => {
    return (
        <Router>
            <div>
                <CustomNavbar />
            </div>
            <main>
                <Switch>
                    <Route path="/profile" component={ProfilePage} />
                    <Route path="/articles" component={ArticlesPage} />
                    <Route path="/" exact component={HomePage} />
                    <Redirect to="/" component={HomePage} />
                </Switch>
            </main>
        </Router>
    );
};

export default App;
