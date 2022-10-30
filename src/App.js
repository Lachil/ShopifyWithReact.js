import Home from './pages/Home';
import React from 'react';
import NavBar from './components/NavBar';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link
} from "react-router-dom";
import ProductPage from './pages/ProductPage';
import Cart from './components/Cart';
import NavMenu from './components/NavMenu';
import Footer from './components/Footer';
function App() {
  return (
    <div className="App">
    <Router>
      <NavBar />
      <Cart />
      <NavMenu />
       <Switch>
      <Route path="/products/:handle" >
        <ProductPage />
        </Route>
        <Route path="/" >
        <Home />
        </Route>
        </Switch>
        <Footer />
        </Router>
    </div>
    
  );
}

export default App;
