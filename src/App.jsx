import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Events from './pages/Events';
import EventDetails from './pages/EventDetails';

// Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const App = () => {
    return (
        <Router>
            <div className='min-h-screen'>
                <Navbar />
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route exact path='/about' component={About} />
                    <Route exact path='/events' component={Events} />
                    <Route path='/events/:id' component={EventDetails} />
                </Switch>
                <Footer />
            </div>
        </Router>
    )
}

export default App;
