import classes from './Header.module.css'
import { Icons } from '../../icons.js'

const Header = () => {
  return (
    <div className={classes.header}>

      <div className={classes.leftContainer}>
        <div className={classes.iconLabelWrapper}>
          <Icons.phone fontSize={`large`} className={classes.icon}/>
          <p className={classes.label}>+221 33 66 22</p>
        </div>
        <div className={classes.flexContainer}>
          <Icons.mail fontSize={`large`} className={classes.icon}/>
          <p className={classes.label}>support@elextra.io</p>
        </div>
      </div>

      <div className={classes.rightContainer}>
        <div className={classes.iconLabelWrapper}>
          <Icons.location fontSize={`large`} className={classes.icon}/>
          <p className={classes.label}>Locations</p>
        </div>
        <div className={classes.iconLabelWrapper}>
          <Icons.dollar fontSize={`large`} className={classes.icon}/>
          <p className={classes.label}>Dollar(US)</p>
        </div>
        <div className={classes.iconLabelWrapper} style={{ marginRight: '0' }}>
          <p className={classes.label}>EN</p>
          <Icons.downArrow fontSize={`large`} className={classes.icon}/>
        </div>
      </div>

    </div>
  )
}

export default Header
