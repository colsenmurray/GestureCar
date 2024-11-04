import styles from "./Console.module.scss";


function Console({ className, id, data, setData }) {

    let dataDisplay = [...data].map((item, index) => {
        return (
            <div key={index + "data"} className={`${styles.DataItem}`}>
                {"> " + item}
            </div>
        )
    })
    return (
        <div className={`${styles.ConsoleCont}`} id={id}>

            {dataDisplay}
        </div>
    )
}

export default Console;