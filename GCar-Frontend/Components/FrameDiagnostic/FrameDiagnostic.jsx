import styles from "./FrameDiagnostic.module.scss";

function FrameDiagnostic({ title, description, image, id }) {

    return (
        <div className={`${styles.FrameDiagnosticCont}`} id={id}>
            FrameDiagnostic
        </div>
    )
}

export default FrameDiagnostic;