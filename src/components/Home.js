import React from 'react';
import { Jumbotron, Button, Container,Alert } from 'reactstrap';


const Home = () => {
  return (
    <div>
      <Jumbotron fluid className="text-center">
        <h1 >Hello, world!</h1>
        <p >Jumbotron-style component for calling extra attention to featured content or information.</p>
        <Container fluid>
        <Button outline color="warning">Lrn More</Button>
        </Container>
        <div style={{padding:10}}>
        <Alert color="primary">
        This is a primary alert — check it out!
      </Alert>
        </div>    
      </Jumbotron>
    </div>
  );
};

export default Home;