import styles from "./Controls.module.scss";
import { useState } from "react";
import { motion, useAnimate } from 'framer-motion'
import { useEffect, useContext } from "react";
import { rawOutgoingDataContext } from "../../../src/App";

function Controls({ className, id }) { 
    const { rawOutgoingData, setRawOutgoingData } = useContext(rawOutgoingDataContext);

    const [scope, animate] = useAnimate()
    useEffect(() =>{
        const animation = async () => {
            await animate(scope.current, { opacity: 1, y: 0 }, { delay: 4 * 0.2 , ease: "easeInOut", duration: .75 })
          }
          
          animation()
    },[])

    const [speedValue, setSpeedValue] = useState(50); // Initial value at 50 or any default you want
    const [steeringValue, setSteeringValue] = useState(50); // Initial value at 50 or any default you want

    const handleSpeedSliderChange = (event) => {
        setSpeedValue(event.target.value);
        setRawOutgoingData({speed: event.target.value, steering: steeringValue});
    };

    const handleSteeringSliderChange = (event) => {
        setSteeringValue(event.target.value);
        setRawOutgoingData({speed: speedValue, steering: event.target.value});
    }
    return (
        <motion.div className={`${styles.CardCont}`} id={id}
            initial={{ opacity: 0, y: 50 }}
            ref={scope}>
            <motion.div className={`${styles.Title}`}>Controls
            </motion.div>
                <motion.div className={`${styles.Underline}`}
                intial={{width: 0}}
                animate={{width: "100%"}}
                transition={{ delay: 4 * 0.2  + .75, ease: "easeInOut", duration: .75 }}/>
            <div className={`${styles.MainCont}`}>
                <motion.div className={`${styles.SpeedCard}`}>
                    <div className={`${styles.SubTitle}`}>Speed</div>
                    <input className={`${styles.Slider}`} type="range" id="slider" name="slider" min="0" max="100" value={speedValue} 
                onChange={handleSpeedSliderChange}></input>
                    <label className={`${styles.SliderVal}`}>{speedValue}</label>
                </motion.div>
                <motion.div className={`${styles.SteeringCard}`}>
                    <div className={`${styles.SubTitle}`}>Steering</div>
                    <input className={`${styles.Slider}`} type="range" id="slider" name="slider" min="0" max="100" value={steeringValue}
                    onChange={handleSteeringSliderChange}></input>
                    <label className={`${styles.SliderVal}`}>{steeringValue}</label>
                </motion.div>
            </div>

        </motion.div>
    )
}

export default Controls;