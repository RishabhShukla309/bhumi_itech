import classes from './SpecificationCard.module.css'
import image1 from '../../assets/Specification/1.svg'
import image2 from '../../assets/Specification/2.svg'
import image3 from '../../assets/Specification/3.svg'
import image4 from '../../assets/Specification/4.svg'
import {Icons} from "../../icons.js";

const SpecificationCard = () => {
  return (
    <div className={classes.SpecificationCardWrapper}>

      {/*  First*/}
      <div className={classes.specificationCard}>
        <div className={classes.imgContainer}>
          <img draggable={false} src={image1} alt="event_img"/>
        </div>
        <div className={classes.textContainer}>
          <div className={classes.liveText}>
            <p>Explore </p>
            <h3>Classifieds</h3>
          </div>
          <div className={classes.ctaText}>

            <p>Over 5000 + Products</p>
            <Icons.rightArrow fontSize={`large`} className={classes.icon}/>
          </div>
        </div>
      </div>

      {/*  Second*/}
      <div className={classes.specificationCard}>
        <div className={classes.imgContainer}>
          <img draggable={false} src={image2} alt="event_img"/>
        </div>
        <div className={classes.textContainer}>
          <div className={classes.liveText}>
            <p>Add</p>
            <h3>Classifieds</h3>
          </div>
          <div className={classes.ctaText}>

            <p>Ads, Event Ads <br/>
              Service Requests Etc</p>
            <Icons.rightArrow fontSize={`large`} className={classes.icon}/>
          </div>
        </div>
      </div>

      {/*  Third*/}
      <div className={classes.specificationCard}>
        <div className={classes.imgContainer}>
          <img draggable={false} src={image3} alt="event_img"/>
        </div>
        <div className={classes.textContainer}>
          <div className={classes.liveText}>
            <p>Explore </p>
            <h3>Products</h3>
          </div>
          <div className={classes.ctaText}>
            <p>Over 25000 + Products</p>
            <Icons.rightArrow fontSize={`large`} className={classes.icon}/>
          </div>
        </div>
      </div>

      {/*  Fourth*/}
      <div className={classes.specificationCard}>
        <div className={classes.imgContainer}>
          <img draggable={false} src={image4} alt="event_img"/>
        </div>
        <div className={classes.textContainer}>
          <div className={classes.liveText}>
            <p>Partner </p>
            <h3>With Us</h3>
          </div>
          <div className={classes.ctaText}>
            <p>Sell Your Products</p>
            <Icons.rightArrow fontSize={`large`} className={classes.icon}/></div>
        </div>
      </div>


    </div>
  );
};

export default SpecificationCard;


// <div className={classes.SpecificationCardWrapper}>
//   <div className={classes.cardContainer}>
//     <div className={classes.textContainer}>
//       <h3></h3>
//       <h1></h1>
//     </div>
//     <div className={classes.ctaContainer}>
//
//     </div>
//   </div>
// </div>