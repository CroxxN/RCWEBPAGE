import { ParallaxBanner, Parallax } from "react-scroll-parallax";
import './wire.css'
import image from './3860709.jpg';

const Wire = () => {
  return (
    <>

      <ParallaxBanner
        layers={[
          { image: image, speed: -20 }


        ]}
        className="backgroundImage"

      >
        <div className="textContainer">
          <Parallax speed={10}>
            <h1 className="text">SOUTHWESTERN STATE COLLEGE <br /> ROBOTICS CLUB</h1>
          </Parallax>
        </div>
      </ParallaxBanner>






    </>

  )
}

export default Wire;