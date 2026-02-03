import { LINKS } from '../../constants';
import styles from './ServiceCard.module.scss'

type ServiceCardProps = {
  card: { 
    title: string;
    description: string;
    currentPrice: string;
    oldPrice?: string;
    descriptionPrice?: string,
    postPrice?: string,
    buttonTitle: string;
  }
}

function ServiceCard({ card }: ServiceCardProps) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.textWrapper}>
        <h2>{card.title}</h2>

        <p className={styles.textDescriptionColor}>{card.description}</p>
      </div>

      <div className={styles.priceWrapper}>
        <div className={styles.textPrice}>
          <p className={styles.titlePrice}>{card.currentPrice}</p>
          {card.oldPrice && <p className={styles.oldPrice}>{card.oldPrice}</p>}
          {card.descriptionPrice && <p className={styles.descriptionPrice}>{card.descriptionPrice}</p>}
        </div>
        {card.postPrice && <p className={styles.postPrice}>{card.postPrice}</p>}
        
        <button onClick={() => window.open(LINKS.privateTg, '_blank')} className={styles.cardButton}>{card.buttonTitle}</button>
      </div>
    </div>
  )
}

export default ServiceCard
