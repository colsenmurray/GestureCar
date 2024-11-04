import styles from "./IMUInfo.module.scss";
import { motion, useAnimate } from 'framer-motion'
import { useEffect } from "react";
function IMUInfo({ className, id}) {
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
            whileHover={{ scale: 1.01 , transition: { duration: .1, ease:"linear" } }}
>
            <motion.div className={`${styles.Title}`}
            initial={{ filter: "drop-shadow(0px 0px 10px $tertiary)" }}>
                IMU Info
            </motion.div>
            <motion.div className={`${styles.Underline}`}
            intial={{width: 0}}
            animate={{width: "100%"}}
            transition={{ delay: 2 * 0.2  + .75, ease: "easeInOut", duration: .75 }}>
            </motion.div>
            <motion.div className={`${styles.VelocityCard}`}>
                <div className={`${styles.SubTitle}`}></div>
            </motion.div>
            
        </motion.div>
    )
}

export default IMUInfo;