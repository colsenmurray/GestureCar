import styles from "./DataStream.module.scss";
import { useState, useEffect, useRef, useContext } from 'react';
import { motion, useAnimate } from 'framer-motion';
import Connection from "../../../src/assets/Connection.png";
import ConnectionBroken from "../../../src/assets/ConnectionBroken.png";
import Console from "./Console/Console";
import { rawOutgoingDataContext } from "../../../src/App";
import { connectedContext } from "../../../src/App";




function DataStream({ className, id, toDisconnect, toConnect, sliderData}) {
    const [data, setData] = useState([]); 
    const rawOutgoingData = useContext(rawOutgoingDataContext);
    const [connected, setConnected] = useContext(connectedContext);
    // * This is the data that will be displayed in the console
    const consoleRef = useRef(null);
    const [scope, animate] = useAnimate()
    useEffect(() =>{
        const animation = async () => {
            await animate(scope.current, { opacity: 1, y: 0 }, { delay: 0 * 0.2 , ease: "easeInOut", duration: .75 })
          }
          
          animation()
    },[])

    useEffect(() =>{
        connected?setData([...data, "Connected to Data Stream"]):setData([...data, "Disconnected from Data Stream"]);
    }, [connected]);

    useEffect(()=>{
        if(sliderData){
            setData([...data, `Data Packet Sent(Speed: ${sliderData.speed}, Steering: ${sliderData.steering})`]);
        }
    }, [sliderData])

    function handleDisconnect(){
        toDisconnect();
    }
    function handleConnection(){
        toConnect();
    }

    function handleClearConsole(){
        setData([]);
    }
    
    return (
        <motion.div className={`${styles.CardCont}`} id={id}
                initial={{ opacity: 0, y: 50 }}
                ref={scope}>
            <div className={`${styles.Header}`}>

                <motion.div className={`${styles.Title}`}
                    initial={{ filter: "drop-shadow(0px 0px 10px $tertiary)" }}>
                    Data Stream
                </motion.div>
                <img src={connected?Connection:ConnectionBroken} className={`${styles.ConnectionIcon}`}></img>
            </div>
            <motion.div className={`${styles.Underline}`}
                intial={{width: 0}}
                animate={{width: "100%"}}
                transition={{ delay: 1 * 0.2  + .75, ease: "easeInOut", duration: .75 }}>
            </motion.div>
            <motion.div className={`${styles.DataCont}`}>
                <div className={`${styles.DataConsoleCont}`} ref={consoleRef}>
                    <Console data={data} setData={setData} />
                </div>
                <div className={`${styles.DataBtnCont}`}>
                    {connected?<button className={`${styles.DisconnectBtn}`} onClick={handleDisconnect}>Disconnect</button>:<button className={`${styles.ConnectBtn}`} onClick={handleConnection}>Connect</button>}
                    
                    <button className={`${styles.ClearBtn}` } onClick={handleClearConsole}>Clear</button>
                </div>
            </motion.div>
        </motion.div>
    )
}

export default DataStream;