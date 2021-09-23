import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AnimatedCursor from "react-animated-cursor";

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Events from './pages/Events';
import EventDetails from './pages/EventDetails';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';

// Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const App = () => {
    return (
        <Router>
            <div className='min-h-screen'>
                <AnimatedCursor
                    innerSize={10}
                    outerSize={8}
                    color='255, 0, 84'
                    outerAlpha={0.2}
                    innerScale={0.7}
                    outerScale={5}
                />
                <Navbar />
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route exact path='/about' component={About} />
                    <Route exact path='/events' component={Events} />
                    <Route path='/events/:id' component={EventDetails} />
                    <Route exact path='/contact' component={Contact} />
                    <Route path='*' component={NotFound} />
                </Switch>
                <Footer />
            </div>
        </Router>
    )
}

export default App;
