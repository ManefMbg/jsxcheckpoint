import React from 'react';
import './App.css';
import {Card, Button} from 'react-bootstrap'
import Image from './components/Image';
import Name from  './components/Name';
import Description from './components/Description'
import Price from  './components/Price';

function App() {
  /*Declaring fistName*/
  let firstName= 'manef'

  return (
    <div className="App">
      <Card style={{ width: '18rem' }}>
      <Image />
      <Card.Body>
        <Name/>
        <Description/>
        <Button variant="primary"><Price/></Button>
      </Card.Body>
    </Card>



    <>  
    <h3>{firstName ? `Hello, ${firstName}`: `Hello,There!!`}</h3>
    
    {firstName && <img src='images/Apple-iPhone-15-Plus-Pink-thumbnail.avif' alt='phone'></img>}
    {/* // <img src={nokia} alt='nokia'></img>} */}
    </>

    </div>
  );
}

export default App;
