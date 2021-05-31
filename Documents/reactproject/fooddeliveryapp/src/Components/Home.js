import React from 'react';
import Header from "./Header";
import Slide from "./Slide";



function Home(props){
    return(
        <React.Fragment>
             <div>
                <Header />
               <Slide />
           </div>
        </React.Fragment>
    );
}

export default Home;