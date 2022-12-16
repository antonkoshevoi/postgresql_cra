import './styles.scss'

const Products = () => {
    return (
        <div className='container'>
            
            <div className='products'>

                <div className='products-list'>
                    <div className='product-item'>
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

                        <div className='price'>
                            <span>545 $</span>

                            <button className='btn  btn-blue btn-small'>
                                Add to cart
                            </button>
                        </div>
                    </div>

                    <div className='product-item'>
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

                        <div className='price'>
                            <span>545 $</span>

                            <button className='btn  btn-blue btn-small'>
                                Add to cart
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Products