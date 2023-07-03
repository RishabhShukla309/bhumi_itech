import classes from './Newsletter.module.css'
import newsletter from '../../assets/newsletter.svg'

const Newsletter = () => {
  return (
    <div className={classes.newsletter}>
      <div className={classes.leftContainer}>
        <img src={newsletter} alt="newsletter"/>
        <div className={classes.textContainer}>
          <h2 className={classes.newsletterHeading}>Sign Up for Newsletter</h2>
          <p className={classes.newsletterText}> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
            ut
            labore et dolore magna aliqua.</p>
        </div>
      </div>


      <div className={classes.inputContainer}>
        <input type="text" placeholder="Enter your email here" className={classes.input}/>
        <button className={classes.newsletterBtn}><span className={classes.subscribe}>SUBSCRIBE</span></button>
      </div>
    </div>
  )
}

export default Newsletter
