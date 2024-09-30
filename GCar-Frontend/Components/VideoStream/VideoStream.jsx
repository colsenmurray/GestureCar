import styles from "./VideoStream.module.scss";

function VideoStream({ title, description, image, id }) {

    return (
        <div className={`${styles.VideoStreamCont}`} id={id}>
            VideoStream
        </div>
    )
}

export default VideoStream;