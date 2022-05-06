import React,{useContext} from 'react'
import '../styles/product.css';
import {globalData} from '../context/Globalcontext'


function Product(props) {
    const { product } = props
    const {addToCartHandler} = useContext(globalData)
  return (
    <div className='product'>
    <img src={product.image} alt="product" ></img>
       <h4> {product.title.length > 30 ? product.title.slice(0,30) + '...' : product.title}</h4>
       <p>&#x20B9;{product.price}</p>
        <button className='btn btn-primary' onClick={() => addToCartHandler(product.id)}>
            {
                product.inCart ? "InCart" : "Add To Cart"
            }
        </button>
    </div>
  )
}

export default Product