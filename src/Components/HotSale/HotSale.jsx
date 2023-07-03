import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import classes from './HotSale.module.css';
import ProductCard from "../ProductCard/ProductCard.jsx";
import {useSelector} from "react-redux";

const HotSale = () => {
  const {productData} = useSelector((state) => state.productsSlice);

  const responsive = {
    desktop: {
      breakpoint: {max: 3000, min: 1024}, items: 4, slidesToSlide: 4 // optional, default to 1.
    }, tablet: {
      breakpoint: {max: 1024, min: 768}, items: 3, slidesToSlide: 3 // optional, default to 1.
    }, mobile: {
      breakpoint: {max: 768, min: 600}, items: 2, slidesToSlide: 2 // optional, default to 1.
    }
  };
  return (<div className={classes.hotSaleContainer}>
    <Carousel
      swipeable={false}
      draggable={false}
      showDots={true}
      responsive={responsive}
      infinite={true}
      autoPlaySpeed={1000}
      keyBoardControl={true}
      customTransition="all .5"
      transitionDuration={500}
      containerClass="carousel-container"
      removeArrowOnDeviceType={["tablet", "mobile"]}
      dotListClass="custom-dot-list-style"
      itemClass="carousel-item-padding-40-px"
    >

      {productData.map((option) => (<ProductCard
        key={option.id}
        productData={option}
        // productImage={image}
        // productFirstName={`Rishabh`}
        // productLastName={`Shukla`}
        // discountedPrice={`$876.25`}
        // originalPrice={`$876.25`}
        // rating={`4.5`}
      />))}
    </Carousel>;
  </div>);
};

export default HotSale;