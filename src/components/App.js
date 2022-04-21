import React from "react";
import Header from "./Header";
import PlantControl from "./PlantControl";
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';

function App(){
  return ( 
    <React.Fragment>
      <Container>
        <Header />
        <PlantControl />
      </Container>
    </React.Fragment>
  );
}

export default App;
