// include bootstrap styles first
import 'bootstrap/dist/css/bootstrap.css';

// project
import './App.css';
import ILovePonies from './assets/images/i-love-ponies.png';

// libs
import Container from 'react-bootstrap/Container';
import Image     from 'react-bootstrap/Image'
import React     from 'react';


// constants
const fullscreen = "vh-100 vw-100 g-0 p-0 m-0";


export default function App() {
  return (
    <main>
      <Container id="app" className={`d-flex align-items-center ${fullscreen}`} fluid>
        <div id="imageParent" className="mx-auto">
          <Image id="image" className="mx-1" src={ILovePonies} fluid/>
        </div>
      </Container>
    </main>
  );
}
