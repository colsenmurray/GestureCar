import styles from "./Card.module.scss";
import { motion } from 'framer-motion'

function Card({ title, className, id, index }) {

    return (
        <motion.div className={`${styles.CardCont}`} id={id}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 , ease: "easeInOut", duration: .75 }}
        >
            <motion.div className={`${styles.Title}`}
            initial={{ filter: "drop-shadow(0px 0px 10px $tertiary)" }}
            >
                {title}
            </motion.div>
        </motion.div>
    )
}

export default Card;