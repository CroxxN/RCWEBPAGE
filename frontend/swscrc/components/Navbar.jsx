import styles from '../styles/Navbar.module.css'
export default function Navbar (){
    return(
        <div className={styles.container}>
            <div className={styles.leftSide}>
                <a href="#">
                    LOGO
                </a>
            </div>
            <div className="otherLinks">
                <a href="#"> HOME</a>
                <a href="#"> CONTACT US </a>
                <a href="#"> ACHIEVEMENTS</a>
                <a href="#"> TEAM </a>
            </div>
        </div>
    )
}