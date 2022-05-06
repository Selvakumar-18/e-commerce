import React,{useContext} from 'react'
import Navbar from "./Navbar";
import {globalData} from '../context/Globalcontext'
import  Product  from "./Product";
import"../styles/product.css";


function Wrapper(props) {
    const {productData} = useContext(globalData)
  return (
    <div >
        <Navbar/>
        <div className='container product-container my-5'>
            {
                productData.map(product => <Product key={product.id} product={product}/>)
            }
           
        </div>
    </div>
  )
}

export default Wrapper