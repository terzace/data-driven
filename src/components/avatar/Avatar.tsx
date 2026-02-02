import styles from './Avatar.module.scss'
import avatar from '../../assets/avatar.jpg'
import { LINKS } from '../../constants'

function Avatar() {
  return (
    <div>
      <img onClick={() => window.open(LINKS.groupTg, '_blank')} className={styles.avatarImg} src={avatar} alt="avatar" />
    </div>
  )
}

export default Avatar
