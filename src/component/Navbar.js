import React,{useContext} from 'react'
import '../styles/nav.css'
import {globalData} from '../context/Globalcontext'
import Cart from "./Cart";

function Navbar() {
  
  const {cartCount,clearCart} = useContext(globalData)

  return (
    <div className='nav px-2 py-1 pr-5 d-flex align-items-center'>
        <h3>CartHouse</h3>

        <div className='cart-container ml-auto' style={{position : 'relative'}} >
          <button type="button" class="btn btn-success" data-toggle="modal" data-target="#exampleModal">
         
            <i className='fa fa-shopping-cart ' style={{fontSize:2.5+'rem'}}></i>
            <div className='bg-danger cart-circle'>{cartCount}</div>
         
          </button>
          </div>

        <div className="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">List of Products</h5>
                  <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
              </div>
          <div className="modal-body">

          <Cart/>


          </div>
        <div className="modal-footer">
          <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
          <button type="button" className="btn btn-primary" onClick={clearCart}>Empty Cart</button>
        </div>
        </div>
    
  </div>
  
</div>  
        </div>
  )
}

export default Navbar




