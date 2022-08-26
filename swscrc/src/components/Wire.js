import { ParallaxBanner } from "react-scroll-parallax";
import './wire.css'

const Wire = () => {
  const url = 'https://scontent.fbir5-1.fna.fbcdn.net/v/t1.6435-9/142783023_926408908102736_6219158196718826291_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=lRcppSKZE1kAX-WQ6JE&tn=zuGiGGLO5MHedOVw&_nc_ht=scontent.fbir5-1.fna&oh=00_AT9L3qoA7PYEYhSFwToERqCWd2k_lsUI9lO_Wi-oiYPN-A&oe=632CEEA9';
  return(
    <>
   
   <ParallaxBanner
      layers={[
        { image: url, speed: -20 }
      
      
      ]}
      className="backgroundImage"
      
    >
       <div className="textContainer">
        <h1 className="text">SOUTHWESTERN STATE COLLEGE <br/> ROBOTICS CLUB</h1>
      </div> 
    </ParallaxBanner>
    
  
  
     

  

   </>

  )
}

export default Wire;