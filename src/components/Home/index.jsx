import React from 'react';
import { Button, Container } from 'react-bootstrap';


// Don't forget to import your components


import About from '../About';

// You need to import your shared header...
import Header from '../shared/Header';

const Home = () => {
  return (
    <>
      <Header title = "Home"></Header>
      {/* You need to use your shared header component... */}
      {/* You need a link to your about page as a call to action */}
      <Container>
      <Button href="/about">About</Button>
     </Container>
    </>
  );
}
 
export default Home;