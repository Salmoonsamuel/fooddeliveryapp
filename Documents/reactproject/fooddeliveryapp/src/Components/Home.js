import React from 'react';
import Header from "./Header";
import Footer from "./Footer";
import Slidebar from "./Slidebar";



function Home(props){
    return(
        <React.Fragment>
         
                <Header />
               <Slidebar />
               <Footer />
       
        </React.Fragment>
    );
}

export default Home;