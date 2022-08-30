import { useState, useRef, useEffect } from "react";

import { Parallax } from "react-scroll-parallax";
import './whatis.css';
import monitor from './favpng_electronics-vector-graphics-electricity-electrical-engineering-illustration.png';


const Whatis =()=>{
  
    
    return(
        <div className="container">
            <div className="textAbout">
            <Parallax speed={-2}>
            <h1 className="title">WHAT IS SWSCRC?</h1>
         </Parallax>
            <Parallax speed={1}>
                <div className="innerContent">
                    <Parallax speed={5}>
                        <img className="image" src={monitor}/>
                </Parallax>
                <p className="body">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum sit vel praesentium. Minima totam vel, atque sunt placeat eveniet non quibusdam voluptatem praesentium similique esse odio at soluta labore deleniti.
                    Doloribus accusamus voluptatum, molestias aperiam corporis sed perspiciatis veniam id quibusdam incidunt dolores aspernatur ea ex accusantium nemo itaque perferendis laboriosam praesentium laudantium mollitia nihil blanditiis iste aliquam. Quasi, vel.
                    Non corrupti, sint, quisquam cumque quasi magni mollitia accusantium repudiandae velit numquam modi, necessitatibus facilis dicta dolorem animi qui ratione molestiae! Numquam delectus minima, doloremque pariatur facere nesciunt necessitatibus voluptatum.
                    Ducimus libero reprehenderit dolores quae totam dicta, iure fuga esse, aspernatur sapiente neque deserunt dignissimos optio laborum fugit aliquam voluptate ab similique, veniam doloremque veritatis odit cupiditate. Voluptates, dolores id?
                    Dolor officiis atque necessitatibus, porro eum ipsam, natus quod laudantium quam debitis commodi quos quo aliquam deleniti praesentium, velit eius omnis assumenda. Aliquam possimus ab eos doloremque tempora ipsa voluptatibus?
                    

                </p>
                
                </div>
                
            </Parallax>


        
    </div>
    </div>
    )
    

};

export default Whatis;