import classes from './Navbar.module.css'
import logo from '../../assets/logo.svg'
import { Badge } from '@mui/material'
import { Icons } from '../../icons.js'
import {useSelector} from "react-redux";

const Navbar = () => {
  const {cartData} = useSelector((state) => state.cartSlice);
  return (
    <div className={classes.navbar}>
      <img draggable="false" src={logo} alt="logo" className={classes.logo}/>

      <div className={classes.dropdownBtn}>
        <p className={classes.dropdownText}>Classifieds</p>
        <Icons.downArrow fontSize={`large`} className={classes.icon}/>
      </div>
      <div className={classes.searchContainer}>
        <input placeholder="Search here" className={classes.searchInput}/>
        <Icons.search fontSize={`large`} className={classes.icon}/>
      </div>
      <div className={classes.iconsContainer}>
        <Icons.heart fontSize={`large`} className={classes.icon}/>
        <Badge badgeContent={cartData.products.length} color="primary">
          <Icons.cart fontSize={`large`} className={classes.icon} style={{ marginRight: '0' }}/>
        </Badge>
        <Icons.avatar fontSize={`large`} className={classes.icon}/>
      </div>
      <button className={classes.btn}> Classifieds</button>

    </div>
  )
}

export default Navbar
