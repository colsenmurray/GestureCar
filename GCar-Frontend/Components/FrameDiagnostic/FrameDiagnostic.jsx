import styles from "./FrameDiagnostic.module.scss";
import Stationary from "../../src/assets/CarStationary.png"
import Forward from "../../src/assets/CarForward.png"
import Left from "../../src/assets/CarLeft.png"
import Right from "../../src/assets/CarRight.png"
import Backward from "../../src/assets/CarReverse.png"
import { useEffect, useContext, useState } from "react";
import { rawIncomingDataContext } from "../../src/App";

function FrameDiagnostic({ title, description, image, id }) {
    const rawIncomingData = useContext(rawIncomingDataContext);
    const [imageType, setImageType] = useState(Stationary);

    useEffect(() => {
        if(rawIncomingData?.data.slice(1, rawIncomingData?.data.indexOf('%')) < 60){
            setImageType(Stationary);
        }else{
            switch(rawIncomingData?.data[0]){
                case "P":
                    setImageType(Stationary);
                    break;
                case "Y":
                    setImageType(Left);
                    break;
                case "R":
                    setImageType(Right);
                    break;
                case "O":
                    setImageType(Forward);
                    break;
                case "V":
                    setImageType(Backward);
                    break;
                
            }
        }
    }, [rawIncomingData]);
    return (
        <div className={`${styles.FrameDiagnosticCont}`} id={id}>
            <img src={imageType} alt="Frame Diagnostic" className={styles.Image}/>
        </div>
    )
}

export default FrameDiagnostic;