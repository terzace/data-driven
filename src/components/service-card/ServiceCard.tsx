import { LINKS, bookTg } from '../../constants';
import styles from './ServiceCard.module.scss'

type ServicePlan = {
  label: string;
  prepay: string;
  post: string;
  highlight?: boolean;
  badge?: string;
}

type ServiceCardProps = {
  card: {
    title: string;
    description: string;
    currentPrice?: string;
    oldPrice?: string;
    descriptionPrice?: string,
    postPrice?: string,
    plans?: ServicePlan[],
    plansNote?: string,
    buttonTitle: string;
    bookSource?: string;
  }
  featured?: boolean;
  id?: string;
}

function ServiceCard({ card, featured, id }: ServiceCardProps) {
  const bullets = card.description.includes('•')
    ? card.description.split('\n').map((line) => line.replace(/^\s*•\s*/, '').trim()).filter(Boolean)
    : null

  return (
    <div id={id} className={featured ? `${styles.wrapper} ${styles.wrapperFeatured}` : styles.wrapper} data-tilt={featured ? undefined : true}>
      <div className={styles.textWrapper}>
        <h3>{card.title}</h3>

        {bullets ? (
          <ul className={styles.bullets}>
            {bullets.map((line) => <li key={line}>{line}</li>)}
          </ul>
        ) : (
          <p className={styles.textDescriptionColor}>{card.description}</p>
        )}
      </div>

      <div className={styles.priceWrapper}>
        {card.plans ? (
          <div className={styles.plansWrapper}>
            {card.plans.map((plan, index) => (
              <div key={index} className={plan.highlight ? `${styles.plan} ${styles.planHighlight}` : plan.badge ? `${styles.plan} ${styles.planAccent}` : styles.plan}>
                <div className={styles.planHeader}>
                  <span className={styles.planLabel}>{plan.label}</span>
                  {plan.badge && <span className={plan.highlight ? styles.planBadge : `${styles.planBadge} ${styles.planBadgeMuted}`}>{plan.badge}</span>}
                </div>
                <div className={styles.planPrice}>
                  <span className={styles.planPrepay}>{plan.prepay}</span>
                  <span className={styles.planPost}>{plan.post}</span>
                </div>
              </div>
            ))}
            {card.plansNote && <p className={styles.descriptionPrice}>{card.plansNote}</p>}
          </div>
        ) : (
          <div className={styles.textPrice}>
            <p className={styles.titlePrice}>{card.currentPrice}</p>
            {card.oldPrice && <p className={styles.oldPrice}>{card.oldPrice}</p>}
            {card.descriptionPrice && <p className={styles.descriptionPrice}>{card.descriptionPrice}</p>}
          </div>
        )}
        {card.postPrice && <p className={styles.postPrice}>{card.postPrice}</p>}

        <a
          className={styles.cardButton}
          href={card.bookSource ? bookTg(card.bookSource) : LINKS.privateTg}
          target="_blank"
          rel="noreferrer"
        >
          {card.buttonTitle}
        </a>
      </div>
    </div>
  )
}

export default ServiceCard
