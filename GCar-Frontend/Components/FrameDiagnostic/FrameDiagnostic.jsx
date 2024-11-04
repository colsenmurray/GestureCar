import styles from "./FrameDiagnostic.module.scss";
import frame1 from "../../src/assets/carTopViewWireframe-removebg-preview 1.svg"
import frame2 from "../../src/assets/Frame_2__1_-removebg-preview.png"
function FrameDiagnostic({ title, description, image, id }) {

    return (
        <div className={`${styles.FrameDiagnosticCont}`} id={id}>
            <img src={frame1} alt="Frame Diagnostic" />
        </div>
    )
}

export default FrameDiagnostic;