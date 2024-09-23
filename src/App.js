import "./App.css";
import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import Main from "./Main";
import Nav from "./Nav";

function App() {  
  return ( 
    <React.Fragment>
      <Header />
      <Nav />
      <Main />
      <Footer />
    </React.Fragment> 
  ); 
} 
 
export default App; 
