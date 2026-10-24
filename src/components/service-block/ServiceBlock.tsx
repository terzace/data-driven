import { SERVICE_CARD } from '../../constants'
import Section from '../section/Section'
import ServiceCard from '../service-card/ServiceCard'
import styles from './ServiceBlock.module.scss'

function ServiceBlock() {
  const simpleCards = SERVICE_CARD.filter((card) => !card.plans)
  const featuredCard = SERVICE_CARD.find((card) => card.plans)

  return (
    <Section
      id="services"
      num="03"
      title="Услуги и цены"
      note="Начать можно с разовой консультации, а менторство обсудим после неё."
    >
      <div className={styles.cardWrapper}>
        {simpleCards.map((card, index) => <ServiceCard key={index} card={card} />)}
      </div>

      {featuredCard && <ServiceCard card={featuredCard} featured id="mentorship" />}
    </Section>
  )
}

export default ServiceBlock
