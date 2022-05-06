import React,{useState} from 'react';
import data from "../sampledata";

export const globalData = React.createContext();

export function Globalcontext({children}) {
    const [productData, setProductData] = useState(data);
    const [cartCount, setCartCount] = useState(0);
    const [cartProduct, setcartProduct] = useState([]);
    
    const addToCartHandler = (id) =>{
        let _updatedProductData = productData.map(_product =>{
            if(_product.id === id){
                if(!_product.inCart){
                    _product.inCart = true
                    setCartCount(cartCount + 1)
                }
                _product.quantity += 1
            }
            return _product
        })

        setProductData(_updatedProductData)
    }

    const getCartProduct = () =>{
        let _cartProduct= productData.filter(_product => _product['inCart'])
        setcartProduct(_cartProduct)
    }
    
    const clearCart = () =>{
        let _productData = productData.map(_product => {
            _product.inCart = false
            _product.quantity = 0
            return _product
        })
        setProductData(_productData)
        setcartProduct([]);
    }

    return (
        <div>
            <globalData.Provider value={{
               productData,
               cartCount,
               cartProduct,
               addToCartHandler,
               getCartProduct,
               setcartProduct,
               clearCart
            }
            }>
                {
                    children
                }
            </globalData.Provider>
        </div>
    )

}