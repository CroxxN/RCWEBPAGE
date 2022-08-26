import { ParallaxProvider } from 'react-scroll-parallax'
import './App.css';
import Wire from './components/Wire';
import Nav from './components/Nav';

function App() {

  return (
    <ParallaxProvider>
      <div className='App'>
        <Wire />


    
       
      </div>
    </ParallaxProvider>

  );
}

export default App;
