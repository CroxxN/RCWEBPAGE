import { useState } from "react"
import close from "./close.png"
import menu from "./menu.png"

export default function Nav(){
    const [navi,setNav]= useState(true)
    let click={
        position:"absolute",
        top:"2%",
        left:"2vw",
        height:"20px",
        width:"22px",
        zIndex:"10",
       
    }
    let leftbar=navi?"-50%":"0%"
    let button
    if(navi){
        button=menu;
    }
    if(!navi){
        button=close;
    }
    let navStyle={
        height:"100vh",
        backgroundColor:"#28282B",
        position:"absolute",
        width:"23%",
        top:"0px",
        left:leftbar,
    
 
        zIndex:"2",
        color:"white",
        marginRight:10+"px",
    }
    function handleClick(){
        console.log()
        setNav(prev=>!prev)
    }
    
    return(
        <>
        <img  src={button} className="toggle" alt="close" style={click} onClick={handleClick}/>
        
                <nav style={navStyle} className="main">
            <> 
            
            
            <ul className='parent'>
           
                <li className='childs'>About us</li>
                <li className='childs'>Our activities</li>
                <li className='childs'>Our Achievements</li>
                <li className='childs'>Contact US</li>
                <li className='childs'>Gallery</li>

            </ul>
            </>
           
        </nav>
        </>

    )
}