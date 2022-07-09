import Navbar from '../components/Navbar'
import CartP from '../components/CartP'
import cartS from '../styles/cart.module.css'

function cart() {
  return (
    <div>
        <Navbar />
        <div className={cartS.cartM}>
            <h1>Cart</h1>
        </div>
        <div className={cartS.cartB}>
            <div className={cartS.scrollC}>
                <div className={cartS.scroll}>
                    <ul className={cartS.ulB}>
                        <li>Product</li>
                        <li>Name</li>
                        <li>Unit price</li>
                        <li>Quantity</li>
                        <li>Total</li>
                    </ul>
                    <div className={cartS.productC}>
                        <h3>Empty</h3>
                    </div>
                </div>
            </div>
            <CartP />
            <div className={cartS.cartTC}>
                <h3>Cart totals</h3>
                <div>
                    <div className={cartS.ulC}>
                        <ul>
                            <li>Subtotal</li>
                            <li>$0.00</li>
                        </ul>
                    </div>
                    <div className={cartS.ulC}>
                        <ul>
                            <li>Shipping</li>
                            <li>$10.00</li>
                        </ul>
                    </div>
                    <div className={cartS.ulC}>
                        <ul>
                            <li>Total</li>
                            <li>$10.00</li>
                        </ul>
                    </div>
                </div>
                <button className={cartS.check}>PROCEED TO CHECKOUT</button>
            </div>
        </div>
    </div>
  )
}

export default cart