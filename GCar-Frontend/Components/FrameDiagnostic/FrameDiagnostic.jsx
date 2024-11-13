import styles from "./FrameDiagnostic.module.scss";
<<<<<<< HEAD

=======
import Stationary from "../../src/assets/CarStationary.png"
import Forward from "../../src/assets/CarForward.png"
import Left from "../../src/assets/CarLeft.png"
import Right from "../../src/assets/CarRight.png"
>>>>>>> Front-end
function FrameDiagnostic({ title, description, image, id }) {

    return (
        <div className={`${styles.FrameDiagnosticCont}`} id={id}>
<<<<<<< HEAD
            FrameDiagnostic
=======
            <img src={Left} alt="Frame Diagnostic" />
>>>>>>> Front-end
        </div>
    )
}

export default FrameDiagnostic;