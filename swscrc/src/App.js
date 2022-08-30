import { ParallaxProvider } from 'react-scroll-parallax'
import './App.css';
import Wire from './components/Wire';
import Nav from './components/Nav';
import Whatis from './components/Whatis';
import Fbanner from './components/Fbanner';

function App() {

  return (
    <ParallaxProvider>
      <div className='App'>
        <Wire />


    
      <Whatis/>
      <Fbanner/>
      </div>
    </ParallaxProvider>

  );
}

export default App;
