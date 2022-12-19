import './styles.scss'

const Cart = () => {

    return (
        <div className='cart'>
            <h3 className='cart-title'>
                Shopping Cart
            </h3>

            <div className='cart-table'>
                <div className='cart-item'>
                    <div className='image-wrapper'>
                        <img src="http://fakeimg.pl/150/e5e5e5/adadad/?text=IMG" alt="shopping"/>
                    </div>

                    <div className='content'>
                        <div className='title'>
                            title
                        </div>
                        <div className='description'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium ipsum nulla nobis. Laudantium, a illo!
                        </div>
                    </div>

                    <div className='qty'>
                        1
                    </div>

                    <div className='price'>
                        <span>545 $</span>
                    </div>
                </div>

                <div className='cart-item'>
                    <div className='image-wrapper'>
                        <img src="http://fakeimg.pl/150/e5e5e5/adadad/?text=IMG" alt="shopping"/>
                    </div>

                    <div className='content'>
                        <div className='title'>
                            title
                        </div>
                        <div className='description'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium ipsum nulla nobis. Laudantium, a illo!
                        </div>
                    </div>

                    <div className='qty'>
                        1
                    </div>

                    <div className='price'>
                        <span>545 $</span>
                    </div>
                </div>
            </div>

            <div className='cart-total'>
                <span>
                    433 $
                </span>
            </div>
        </div>
    )
}

export default Cart
