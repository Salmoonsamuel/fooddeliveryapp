import React from 'react';
import {Button, Input, InputGroup, InputGroupAddon} from 'reactstrap';
import Package from "./Package";
import Guide from "./Guide";
import packagesData from "../shared/packagesData";
import guideData from "../shared/guideData";

  function Text(){
       document.getElementById("message").innerHTML =  "Congrats! You 're in Service Area!";
  }

const Home = (props) => {
    const packageComponent = packagesData.map(item => <Package key={item.id} package={item} />)
    const guideComponent = guideData.map(item => <Guide key={item.id} guide={item} /> )
    return (
         <div className="container">
             <div className="row text-center offset-2">
                 <div className="col-sm-10">
                     <h3 className="py-2 fw-bold bg-dark text-light">Get your Craving Food in one Click</h3>
                 </div>
                 <div className="col-sm-10 fw-bold mt-4">
                     <p>Order Food from your choice of Restaurant. <br /> We will deliver to you with best price and As soon As possible.</p>
                 </div>
             </div>
             <div className="row offset-1">
                 <div className="col-sm-10">
                     <InputGroup >
                        <Input  className="text-center" placeholder="Type your Zip-code here!" />
                        <InputGroupAddon addonType="append">
                           <Button  onClick={Text} >Submit</Button>
                        </InputGroupAddon>
                     </InputGroup>
                   <p className="text-center fw-bold text-dark" id="message">Check Your in Service Area or Not:</p>
                 </div>
             </div>
             <div className="row ">
                {guideComponent}  
             </div>
             <br />
             <br />
             <div className="row text-center offset-2">
                 <div className="col-sm-10">
                     <h4 className="bg-dark text-light pb-1 mb-5 fw-bold py-2">Membership Packages Includes:</h4>
                 </div>
             </div>
             <div className="row">
               {packageComponent}
             </div>
         </div>
    );
  };

export default Home;