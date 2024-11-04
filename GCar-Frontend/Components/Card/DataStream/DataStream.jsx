import styles from "./DataStream.module.scss";
import { useState, useEffect, useRef } from 'react';
import { motion, useAnimate } from 'framer-motion'
import Console from "./Console/Console";


function DataStream({ className, id}) {
    const [data, setData] = useState(["Connected to Data Stream", "123", "456", "789", "101112", "131415", "161718", "192021", "222324", "252627", "282930", "313233", "343536", "373839", "404142", "434445", "464748", "495051", "525354", "555657", "585960", "616263", "646566", "676869", "707172", "737475", "767778", "798081", "828384", "858687", "888990", "919293", "949596", "979899", "100"]); 
    
    const consoleRef = useRef(null);
    const [scope, animate] = useAnimate()
    useEffect(() =>{
        const animation = async () => {
            await animate(scope.current, { opacity: 1, y: 0 }, { delay: 0 * 0.2 , ease: "easeInOut", duration: .75 })
          }
          
          animation()
    },[])

    // Scroll to the bottom whenever data is updated
    useEffect(() => {
        if (consoleRef.current) {
            consoleRef.current.scrollTop = consoleRef.current.scrollHeight;
        }
    }, [data]); 

    function handleClearConsole(){
        setData([""]);
    }
    function handleDisconnect(){
        setData([...data, "Disconnected from Data Stream"]);
    }
    return (
        <motion.div className={`${styles.CardCont}`} id={id}
                initial={{ opacity: 0, y: 50 }}
                whileHover={{ scale: 1.01 , transition: { duration: .1, ease:"linear" } }}
                ref={scope}>
            {/* <div className={`${style.Header}`}></div> */}
            <motion.div className={`${styles.Title}`}
                initial={{ filter: "drop-shadow(0px 0px 10px $tertiary)" }}>
                Data Stream
            </motion.div>
            {/* <img></img> */}
            <motion.div className={`${styles.Underline}`}
                intial={{width: 0}}
                animate={{width: "100%"}}
                transition={{ delay: 1 * 0.2  + .75, ease: "easeInOut", duration: .75 }}>
            </motion.div>
            <motion.div className={`${styles.DataCont}`}>
                <div className={`${styles.DataConsoleCont}`} ref={consoleRef}>
                    <Console data={data} setData={setData}/>
                </div>
                <div className={`${styles.DataBtnCont}`}>
                    <button className={`${styles.DisconnectBtn}`} onClick={handleDisconnect}>Disconnect</button>
                    <button className={`${styles.ClearBtn}` } onClick={handleClearConsole}>Clear</button>
                </div>
            </motion.div>
        </motion.div>
    )
}

export default DataStream;