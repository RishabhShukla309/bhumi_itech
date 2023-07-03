import classes from './ProductCard.module.css'
import Button from '@mui/material/Button'
import { Icons } from '../../icons.js'
import { addToCart, removeFromCart } from '../../Store/cartSlice.js'
import { useDispatch, useSelector } from 'react-redux'
// eslint-disable-next-line react/prop-types
const ProductCard = ({ productData }) => {
  // eslint-disable-next-line react/prop-types
  const { id, productImage, productFirstName, productLastName, discountedPrice, originalPrice, rating } = productData
  const dispatch = useDispatch()
  const { cartData } = useSelector((state) => state.cartSlice)
  const addToCartHandler = () => {
    dispatch(addToCart(productData))
  }
  const removeFromCartHandler = () => {
    dispatch(removeFromCart(productData))
  }
  return (
    <div className={classes.cardWrapper}>
      <div className={classes.imgContainer}>
        <img src={productImage} alt={`image`}/>
      </div>
      <h1 className={classes.productName}>
        {productFirstName} <br/> {productLastName}
      </h1>
      <div className={classes.priceContainer}>
        <h1 className={classes.discountedPrice}>{discountedPrice}</h1>
        <div className={classes.flexContainer}>
          <p className={classes.originalPrice}>{originalPrice}</p>
          <div className={classes.flexContainer}>
            <p className={classes.rating}>{rating}</p>
            <Icons.star fontSize={`medium`} className={classes.icon}/>
          </div>
        </div>
      </div>
      <div className={classes.btnContainer} style={{ width: '100%' }}>
        {
          cartData.products.some(product => product.id === id) ?
            <Button size={`large`} fullWidth variant={`contained`} sx={{ fontSize: '1.8rem', fontWeight: '400' }}
                    onClick={removeFromCartHandler}>
              Remove from cart
            </Button>
            :
            <Button size={`large`} fullWidth variant={`outlined`} sx={{ fontSize: '1.8rem', fontWeight: '400' }} onClick={addToCartHandler}>
              Add to cart
            </Button>
        }
      </div>
    </div>
  )
}

export default ProductCard