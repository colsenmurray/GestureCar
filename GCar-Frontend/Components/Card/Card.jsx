import styles from "./Card.module.scss";


function Card({ title, className, id }) {

    return (
        <div className={`${styles.CardCont}`} id={id}>
            {title}
        </div>
    )
}

export default Card;