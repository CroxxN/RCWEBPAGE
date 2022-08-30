import './fbanner.css'
import { ParallaxBanner,ParallaxBannerLayer } from 'react-scroll-parallax';
import bannerImage from '../images/banner.jpg'

const Fbanner = () => {
    return(
        <div className="container">
        <ParallaxBanner className='banner'>
            <ParallaxBannerLayer image={bannerImage} className='bannerImg' speed={-20} />
           
        </ParallaxBanner>
    </div>
    )
    
}

export default Fbanner;