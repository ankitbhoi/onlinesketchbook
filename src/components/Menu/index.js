import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPencil,faEraser,faRotateRight,faFileArrowDown, faRotateLeft } from "@fortawesome/free-solid-svg-icons"

import styles from './index.module.css'
//bcz we are using module.css that is why we are writing styles in braces instead of strings->good practise
//This line imports the styles from the index.module.css file. The styles variable will now contain an object with keys representing different class names defined in the CSS module.
const Menu=()=>{
    return(
        <div className={styles.menuContainer}>
            <div className={styles.iconWrapper}>
                <FontAwesomeIcon icon={faPencil} className={styles.icon}/>
            </div> 
            <div className={styles.iconWrapper}>
                <FontAwesomeIcon icon={faRotateLeft} className={styles.icon}/>
            </div>
            <div className={styles.iconWrapper}>
                <FontAwesomeIcon icon={faRotateRight} className={styles.icon}/>
            </div>
            <div className={styles.iconWrapper}>
                <FontAwesomeIcon icon={faPencil} className={styles.icon}/>
            </div>
            <div className={styles.iconWrapper}>
                <FontAwesomeIcon icon={faFileArrowDown} className={styles.icon}/>
            </div>
            
        </div>
    )
}

export default Menu;