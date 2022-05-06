import React,{useContext, useEffect, useState} from 'react';
import {globalData} from '../context/Globalcontext'

function Cart() {
    const {cartProduct, getCartProduct} = useContext(globalData)
    
    useEffect(() =>
    {
        getCartProduct()
    },[cartProduct])

    return (
        <div>
            {
                cartProduct.map(_product => (
                   <div>
                    <p>Title:{_product.title}</p>
                    <div>
                          <div>  
                            <i class="fa fa-arrow-left p-1 mx-1 border border-dark"></i>
                                Count:{_product.quantity}
                            <i class="fa fa-arrow-right p-1 mx-1 border border-dark"></i>   
                          </div>  
                        
                    </div>
                    <img src={_product.image} style={{position : 'relative',height:'100px', margin:"20px"}} ></img>
                   </div>
                ))
            }
        </div>
    )
}

export default Cart;


