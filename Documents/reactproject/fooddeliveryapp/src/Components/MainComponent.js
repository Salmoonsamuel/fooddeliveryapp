import React from 'react';
import Home from './Home';
import Header from "./Header";
import Footer from "./Footer";
import Slidebar from "./Slidebar";






function Main() {
   
  
        return(
            <React.Fragment>
         
                <Header />
                <Slidebar />
                <Home /> 
           
                <Footer />
           </React.Fragment>
        );
}

export default Main;