import styles from "./FrameDiagnostic.module.scss";
import Stationary from "../../src/assets/CarStationary.png"
import Forward from "../../src/assets/CarForward.png"
import Left from "../../src/assets/CarLeft.png"
import Right from "../../src/assets/CarRight.png"
function FrameDiagnostic({ title, description, image, id }) {

    return (
        <div className={`${styles.FrameDiagnosticCont}`} id={id}>
            <img src={Left} alt="Frame Diagnostic" />
        </div>
    )
}

export default FrameDiagnostic;