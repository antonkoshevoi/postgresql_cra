import { useNavigate } from "react-router-dom"

import './styles.scss'

const CartModal = ({toggle}) => {
    const navigate = useNavigate()

    const handleClick = (e) => {
        e.preventDefault()
        navigate('/cart')
    }

    return(
        <div className="wrapper" onClick={(e) => {
            e.preventDefault()
            toggle()
        }}>
            <div className='dropdown-menu'>
                <ul>
                    <li className='cart-item'>
                        <div className='product-name'>
                            title tile title
                        </div>
                        <div className='product-count'>
                            1
                        </div>
                        <div className='product-price'>
                            34 $
                        </div>
                    </li>

                    <li className='cart-item'>
                        <div className='product-name'>
                            title tile title
                        </div>
                        <div className='product-count'>
                            1
                        </div>
                        <div className='product-price'>
                            34 $
                        </div>
                    </li>

                    <li className='cart-item'>
                        <div className='product-name'>
                            title tile title
                        </div>
                        <div className='product-count'>
                            1
                        </div>
                        <div className='product-price'>
                            34 $
                        </div>
                    </li>

                    <li className='cart-item'>
                        <div className='product-name'>
                            title tile title
                        </div>
                        <div className='product-count'>
                            1
                        </div>
                        <div className='product-price'>
                            34 $
                        </div>
                    </li>
                </ul>

                <div className='total'>
                    Total: 75 $
                </div>
                <div className='cart-actions'>
                    <button className='btn btn-blue btn-small' onClick={handleClick}>
                        Proceed
                    </button>
                </div>
            </div>

        </div>
    )
}

export default CartModal
