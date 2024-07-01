import styles from "./Card.module.scss"

//Component that contains child inside
const Card = ({children, cardClass}) => {
  return (
    <div className={`${styles.card} ${cardClass}`}>
        {children}
    </div>
  )
}

export default Card