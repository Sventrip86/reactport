import React, { Component } from 'react';

import './resources/styles.css';


import { Element} from 'react-scroll';

import Header from './components/header_footer/Header';
import Home from './components/home';
import About from './components/About';
import Works from './components/works';
import Footer from './components/header_footer/Footer';
import Cards from './components/works/Cards'

//style={{ height:"1500px", background:'white'}}

class App extends Component {
  render() {
    return (
      <div className="App">
      
      <Header></Header>
      <Element name="home">
        <Home></Home>
      </Element>
      <Element name="About">
        <About></About>
      </Element>
      <Element name="works">
        <Works>
         
        </Works>
       
      </Element>
      
      <Footer></Footer>
       
      </div>
    );
  }
}

export default App;
