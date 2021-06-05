import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, Button, Input, InputGroup, InputGroupAddon} from 'reactstrap';

  function Text(){
       document.getElementById("message").innerHTML =  "Congrats! You 're in Service Area!";
  }

const Home = (props) => {
    return (
    //   <div>
    //     <Card>
    //       <CardImg top width="100%" src="/assets/318x180.svg" alt="Card image cap" />
    //       <CardBody>
    //         <CardTitle tag="h5">Card title</CardTitle>
    //         <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
    //       </CardBody>
    //     </Card>
    //   </div>
         <div className="container">
             <div className="row text-center offset-2">
                 <div className="col-sm-10">
                     <h2 className="fw-bold">Get your Craving Food in one Click</h2>
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
                   <p className="text-center fw-bold text-danger" id="message">Check Your in Service Area or Not:</p>
                 </div>
             </div>
             <div className="row pt-5">
                 <div className="col-sm-4 ">
                     <Card className="bg-dark text-white px-3 mx-5">
                         <CardBody>
                             <CardTitle class="bg-light text-dark text-center"><h5>Register</h5></CardTitle>
                             <h6 class="card-subtitle mb-2 text-muted">Sign-up</h6>
                             <p class="card-text"> <strong>Register / Sign-up</strong> for an account with your personal details and a credit card. </p>
                             
                         </CardBody>
                     </Card>
                 </div>
                 <div className="col-sm-4">
                     <Card className="bg-dark text-white px-3">
                         <CardBody>
                         <CardTitle class="bg-light text-dark text-center">
                             <h5>Order</h5>
                         </CardTitle>
                         <h6 class="card-subtitle mb-2 text-muted">from your choice of restaurant</h6>
                         <p class="card-text"><strong>Provide us your receipt number</strong> and we will pickup your food and deliver to your address.</p>
                         </CardBody>
                     </Card>
                 </div>
                 <div className="col-sm-4">
                     <Card className="bg-dark text-white px-3 mx-5">
                         <CardBody>
                         <CardTitle class="bg-light text-dark text-center"><h5>Search</h5></CardTitle>
                         </CardBody>
                         <h6 class="card-subtitle mb-2 text-muted">for the nearest driver.</h6>
                         <p class="card-text"><strong>Enter your Zip-code</strong> above and search for nearest driver, and check for estimated time for delivery</p>
                     </Card>
                 </div>
             </div>
         </div>
    );
  };

export default Home;