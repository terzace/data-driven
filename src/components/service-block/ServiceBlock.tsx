import { SERVICE_CARD } from '../../constants'
import ServiceCard from '../service-card/ServiceCard'
import styles from './ServiceBlock.module.scss'

function ServiceBlock() {
  return (
    <div className={styles.wrapper}>
      <h2>С чем могу помочь:</h2>

      <div className={styles.cardWrapper}>
        {SERVICE_CARD.map((card, index) => <ServiceCard key={index} card={card} />)}
      </div>
    </div>
  )
}

export default ServiceBlock
