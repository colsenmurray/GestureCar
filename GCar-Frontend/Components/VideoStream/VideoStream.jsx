import styles from "./VideoStream.module.scss";
import { useEffect, useState, useContext } from 'react';
import io from 'socket.io-client';
import placeholder from '../../src/assets/image (2).png';
import { rawIncomingDataContext } from "../../src/App";

const SOCKET_SERVER_URL = "http://localhost:4000"; // or your server URL


function VideoStream({ title, description, image, id }) {

    const rawIncomingData = useContext(rawIncomingDataContext);

    const [frameData, setFrameData] = useState(null);

    useEffect(() => {
        if (rawIncomingData?.image) {
            setFrameData(rawIncomingData.image);
        }
    }, [rawIncomingData?.image]);

    if (frameData){
        return (
            <div className={`${styles.VideoStreamCont}`} id={id}>
                {frameData && <img src={`data:image/jpeg;base64,${frameData}`} alt="Streamed Video"  className={`${styles.phImage}`}/>}
            </div>
        );
    }
        

    return (
        <div className={`${styles.VideoStreamCont}`} id={id}>
            <img src={placeholder} className={`${styles.phImage}`}></img>
        </div>
    )
}

export default VideoStream;