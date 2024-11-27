import styles from "./Instruction.module.scss";
import { motion, useAnimate } from 'framer-motion'
import { useEffect, useState, useContext } from "react";
import imageSrc from "../../../src/assets/image (2).png";
import { rawIncomingDataContext } from "../../../src/App";

function Instruction({ className, id}) {
    const [gesture, setGesture] = useState("L");
    const [instruction, setInstruction] = useState("Turn Left");
    const [scope, animate] = useAnimate()

    const rawIncomingData = useContext(rawIncomingDataContext);
    //TODO  - Add a useEffect to update the gesture and instruction state with the rawIncomingData
    useEffect(() =>{
        const animation = async () => {
            await animate(scope.current, { opacity: 1, y: 0 }, { delay: 3 * 0.2 , ease: "easeInOut", duration: .75 })
          }
          
          animation()
    },[])

    useEffect(() =>{
        if(rawIncomingData){
            setGesture(rawIncomingData.data);
            if(rawIncomingData.data.slice(1, rawIncomingData.data.indexOf('%')) > 60){
                switch(rawIncomingData.data[0]){
                    case "P":
                        setInstruction("Stop");
                        break;
                    case "Y":
                        setInstruction("Turn Right");
                        break;
                    case "R":
                        setInstruction("Turn Left");
                        break;
                    case "O":
                        setInstruction("Go Straight");
                        break;
                    case "V":
                        setInstruction("Reverse");
                        break;
                }
            }else{
                setInstruction("None");
                setGesture("N/A");
            }
        }
    },[rawIncomingData]);
    return (
        <motion.div className={`${styles.CardCont}`} id={id}
            initial={{ opacity: 0, y: 50 }}
            ref={scope}
            
        >
            <motion.div className={`${styles.Title}`}
            >
                Instruction
            </motion.div>
                <motion.div className={`${styles.Underline}`}
                initial={{width: 0}}
                animate={{width: "100%"}}
                transition={{ delay: 3 * 0.2  + .75, ease: "easeInOut", duration: .75 }}
                ></motion.div>
            <div className={`${styles.MainCont}`}>
                <motion.div className={`${styles.GestureCont}`}>
                    <motion.div className={`${styles.GestureTitle}`}>
                        GestureDetected
                        <motion.div className={`${styles.Sign}`}>{gesture}</motion.div>
                    </motion.div>
                    <img src={imageSrc} className={`${styles.Img}`}></img>
                </motion.div>
                <motion.div className={`${styles.InstructCont}`}>
                    <motion.p className={`${styles.InstructTitle}`}>
                        {instruction}
                    </motion.p>
                </motion.div>
            </div>
            
        </motion.div>
    )
}

export default Instruction;