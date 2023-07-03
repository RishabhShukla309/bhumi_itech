import {createSlice} from '@reduxjs/toolkit';
import image from '../assets/products/placeholder.svg'
import image1 from '../assets/products/placeholder-1.svg'
import image2 from '../assets/products/placeholder-2.svg'
import image3 from '../assets/products/placeholder-3.svg'
import image4 from '../assets/products/placeholder-4.svg'

const initialState = {
  productData: [{
    id: 1,
    productImage: image,
    productFirstName: "PVC bean Bag Black",
    productLastName: "80x80x50centimeter",
    discountedPrice: "876.98",
    originalPrice: "890.99",
    rating: 4.5
  }, {
    id: 2,
    productImage: image1,
    productFirstName: "U2520D 25-Inch UltraSharp",
    productLastName: "QHD USB-C Monitor Black",
    discountedPrice: "876.98",
    originalPrice: "890.99",
    rating: 4.5
  }, {
    id: 3,
    productImage: image2,
    productFirstName: "Flip 5 Waterproof Portable",
    productLastName: "Bluetooth Speaker Black",
    discountedPrice: "876.98",
    originalPrice: "890.99",
    rating: 4.5
  }, {
    id: 4,
    productImage: image3,
    productFirstName: "MacBook Pro With Touch Bar",
    productLastName: "And Touch ID, 13.3-Inch Dis...",
    discountedPrice: "876.98",
    originalPrice: "890.99",
    rating: 4.5
  }, {
    id: 5,
    productImage: image3,
    productFirstName: "PlayStation 5 Console(Disc",
    productLastName: "Version) With Extra Contro..",
    discountedPrice: "876.98",
    originalPrice: "890.99",
    rating: 4.5
  }, {
    id: 6,
    productImage: image4,
    productFirstName: "EOS M200 Mirrorless Came",
    productLastName: "ra With EF-M 15-45mm ...",
    discountedPrice: "1245.33",
    originalPrice: "1300",
    rating: 4.5
  }, {
    id: 7,
    productImage: image,
    productFirstName: "Ultra Book Thin Laptop",
    productLastName: "XL-01",
    discountedPrice: "1245.33",
    originalPrice: "1300",
    rating: 4.5
  }, {
    id: 8,
    productImage: image1,
    productFirstName: "Magic",
    productLastName: "Perfume",
    discountedPrice: "1245.33",
    originalPrice: "1300",
    rating: 4.5
  }, {
    id: 9,
    productImage: image2,
    productFirstName: "Convers",
    productLastName: "Gray",
    discountedPrice: "1245.33",
    originalPrice: "1300",
    rating: 4.5
  }, {
    id: 10,
    productImage: image3,
    productFirstName: "Holy Stone HS470",
    productLastName: "Foldable GPS RC Drone",
    discountedPrice: "300.98",
    originalPrice: "450",
    rating: 4.5
  }, {
    id: 11,
    productImage: image4,
    productFirstName: "Marshall Stockwell 11",
    productLastName: "Portable Speaker",
    discountedPrice: "200.98",
    originalPrice: "350",
    rating: 4.5
  }, {
    id: 12,
    productImage: image1,
    productFirstName: "2020 Ford Mustang GT",
    productLastName: "Fastback",
    discountedPrice: "22,822",
    originalPrice: "25,822",
    rating: 4.5
  },]
};

export const productsSlice = createSlice({
  name: 'products', initialState, reducers: {
    //  reducers come here

  }, extraReducers: () => {
    //  Extra reducers come here
  },
});
export const {openEventPost, closeEventPosts} = productsSlice.actions;
export default productsSlice.reducer;
