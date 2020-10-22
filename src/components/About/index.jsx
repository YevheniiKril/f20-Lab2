import React from 'react';
import Header from '../shared/Header';
import { Container } from 'react-bootstrap';


const Home = () => {
  return (
 
    <>
     <Header title = "About"></Header>
      {/* You need to use your shared header component... */}
      {/* You need a paragraph describing a fun fact about you */}
      <Container>
        <h1>I have no idea how, but I am always in the slowest queue in the market.</h1> 
      </Container>
    </>
  );
}
 
export default Home;