import { SERVICE_CARD } from '../../constants'
import ServiceCard from '../service-card/ServiceCard'
import styles from './ServiceBlock.module.scss'

function ServiceBlock() {
  const simpleCards = SERVICE_CARD.filter((card) => !card.plans)
  const featuredCard = SERVICE_CARD.find((card) => card.plans)

  return (
    <div id="services" className={styles.wrapper}>
      <h2>С чем могу помочь:</h2>

      <div className={styles.cardWrapper}>
        {simpleCards.map((card, index) => <ServiceCard key={index} card={card} />)}
      </div>

      {featuredCard && <ServiceCard card={featuredCard} featured id="mentorship" />}
    </div>
  )
}

export default ServiceBlock
