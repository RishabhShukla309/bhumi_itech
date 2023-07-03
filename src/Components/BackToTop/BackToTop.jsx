import classes from './BackToTop.module.css'
import { Icons } from '../../icons.js'

const BackToTop = () => {

  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  return (
    <div className={classes.flexContainer} onClick={goToTop}>
      <p className={classes.text}>Back To Top</p>
      <Icons.upArrow fontSize={`large`} className={classes.icon}/>
    </div>
  )
}

export default BackToTop
