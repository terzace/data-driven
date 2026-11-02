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
      num="04"
      title="Услуги и цены"
      note="Начни с бесплатной встречи на 30 минут: решим, нужно ли тебе менторство. Консультация, мок и резюме это отдельные разовые услуги."
    >
      <div className={styles.cardWrapper}>
        {simpleCards.map((card, index) => <ServiceCard key={index} card={card} />)}
      </div>

      {featuredCard && <ServiceCard card={featuredCard} featured id="mentorship" />}
    </Section>
  )
}

export default ServiceBlock
