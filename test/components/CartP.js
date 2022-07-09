import React, {useState} from 'react'
import cartS from '../styles/cart.module.css'

function CartP() {
    const [shopping, setshopping] = useState(false)
    const [update, setupdate] = useState(false)

    const handlemouseE =()=> {
        setshopping(true)
    }

    const handlemouseL = ()=> {
        setshopping(false)
    }

    
    const handlemouseE2 =()=> {
        setupdate(true)
    }

    const handlemouseL2 = ()=> {
        setupdate(false)
    }
  return (
    <div className={cartS.buttonC}>
        <div className={cartS.shoppingC} onMouseEnter={handlemouseE} onMouseLeave={handlemouseL}>
            <div className={`${cartS.purpleC} ${shopping && cartS.show}`}>
                <div className={cartS.purple1}></div>
                <div className={cartS.purple2}></div>
            </div>
            <div className={cartS.textC}>
                <h3>CONTINUE SHOPPING</h3>
            </div>
        </div>

        <div className={cartS.updateC} onMouseEnter={handlemouseE2} onMouseLeave={handlemouseL2}>
            <div className={`${cartS.purpleC} ${update && cartS.show}`}>
                <div className={cartS.purple1}></div>
                <div className={cartS.purple2}></div>
            </div>
            <div className={cartS.textC}>
                <h3>UPDATE CART</h3>
            </div>
        </div>
    </div>
  )
}

export default CartP