import styles from "./HowToUseCard.module.scss";
import { motion, useAnimate } from 'framer-motion'
import { useEffect } from "react";
import P from "../../../src/assets/P.png";
import Y from "../../../src/assets/Y.png";
import R from "../../../src/assets/R.png";
import O from "../../../src/assets/O.png";
import V from "../../../src/assets/V.png";
import Forward from "../../../src/assets/CarForward.png";
import Left from "../../../src/assets/CarLeft.png";
import Right from "../../../src/assets/CarRight.png";
import Backward from "../../../src/assets/CarReverse.png";
import Stationary from "../../../src/assets/CarStationary.png";

function HowToUseCard({ className, id}) {
    const [scope, animate] = useAnimate()
    useEffect(() =>{
        const animation = async () => {
            await animate(scope.current, { opacity: 1, y: 0 }, { delay: 1 * 0.2 , ease: "easeInOut", duration: .75 })
          }
          
          animation()
    },[])

    return (
        <motion.div className={`${styles.CardCont}`} id={id}
            initial={{ opacity: 0, y: 50 }}
            ref={scope}
>
            <motion.div className={`${styles.Title}`}
            initial={{ filter: "drop-shadow(0px 0px 10px $tertiary)" }}>
                Directions
            </motion.div>
            <motion.div className={`${styles.Underline}`}
            intial={{width: 0}}
            animate={{width: "100%"}}
            transition={{ delay: 2 * 0.2  + .75, ease: "easeInOut", duration: .75 }}>
            </motion.div>
            <motion.div className={`${styles.MainCont}`}>
                <div className={`${styles.OCard} ${styles.Card}`}>
                    <img src={O} className={styles.image}/>
                    <img src={Forward} className={styles.image}/>
                    W: Go
                </div>
                <div className={`${styles.PCard} ${styles.Card}`}>
                    <img src={Y} className={styles.image}/>
                    <img src={Stationary} className={styles.image}/>
                    Y: Stop
                </div>
                <div className={`${styles.YCard} ${styles.Card}`}>
                    <img src={Y} className={styles.image}/>
                    <img src={Left} className={styles.image}/>
                    L: Left
                </div>
                <div className={`${styles.RCard} ${styles.Card}`}>
                    <img src={R} className={styles.image}/>
                    <img src={Right} className={styles.image}/>
                    C: Right
                </div>
                <div className={`${styles.VCard} ${styles.Card}`}>
                    <img src={O} className={styles.image}/>
                    <img src={Backward} className={styles.image}/>
                    O: Reverse
                </div>
                
            </motion.div>
            
        </motion.div>
    )
}

export default HowToUseCard;