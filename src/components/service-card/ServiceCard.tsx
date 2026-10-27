import { LINKS } from '../../constants';
import styles from './ServiceCard.module.scss'

type ServicePlan = {
  label: string;
  prepay: string;
  post: string;
  highlight?: boolean;
  badge?: string;
}

type ServicePlansDetails = {
  title: string;
  items: { heading: string; text: string }[];
  link?: { label: string; href: string; download?: boolean };
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
    plansDetails?: ServicePlansDetails,
    buttonTitle: string;
  }
  featured?: boolean;
  id?: string;
}

function ServiceCard({ card, featured, id }: ServiceCardProps) {
  return (
    <div id={id} className={featured ? `${styles.wrapper} ${styles.wrapperFeatured}` : styles.wrapper}>
      <div className={styles.textWrapper}>
        <h3>{card.title}</h3>

        <p className={styles.textDescriptionColor}>{card.description}</p>
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
            {card.plansDetails && (
              <details className={styles.details}>
                <summary className={styles.detailsSummary}>
                  <span>{card.plansDetails.title}</span>
                  <span className={styles.detailsIcon} aria-hidden="true">+</span>
                </summary>
                <div className={styles.detailsBody}>
                  {card.plansDetails.items.map((item, index) => (
                    <p key={index} className={styles.detailsItem}>
                      <strong>{item.heading}.</strong> {item.text}
                    </p>
                  ))}
                  {card.plansDetails.link && (
                    <a
                      className={styles.detailsLink}
                      href={card.plansDetails.link.href}
                      download={card.plansDetails.link.download ? '' : undefined}
                    >
                      {card.plansDetails.link.label} ↓
                    </a>
                  )}
                </div>
              </details>
            )}
          </div>
        ) : (
          <div className={styles.textPrice}>
            <p className={styles.titlePrice}>{card.currentPrice}</p>
            {card.oldPrice && <p className={styles.oldPrice}>{card.oldPrice}</p>}
            {card.descriptionPrice && <p className={styles.descriptionPrice}>{card.descriptionPrice}</p>}
          </div>
        )}
        {card.postPrice && <p className={styles.postPrice}>{card.postPrice}</p>}

        <button onClick={() => window.open(LINKS.privateTg, '_blank')} className={styles.cardButton}>{card.buttonTitle}</button>
      </div>
    </div>
  )
}

export default ServiceCard
