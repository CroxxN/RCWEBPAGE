import {ParallaxProvider} from 'react-scroll-parallax'
import './App.css';
import Wire from './components/Wire.js';
import Navbar from './components/Navbar';

function App() {

  return (
      <ParallaxProvider>
        <div className='App'>
          <Navbar/>
         <Wire/>
         
        

        </div>
        </ParallaxProvider>
  );
}

export default App;
