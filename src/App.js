import React from 'react';
import GlobalStyle from './globalStyles';
import Home from './pages/HomePage/Home';
import SignUp from './pages/SignUp/SignUp';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import { Navbar, Footer } from './components';
import Contact from './pages/Contact';


function App() {
  return (
    <Router>
      <GlobalStyle />
      <ScrollToTop />
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        {/* <Route path='/domains' component={Services} /> */}
        <Route path='/team' component={Home} />
        <Route path="/contact">
            <Contact />
          </Route>
        <Route path='/sign-up' component={SignUp} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
