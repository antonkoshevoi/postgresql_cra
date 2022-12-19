import { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../../Context/authContext'
import { productServices } from '../../Services/productServices'
import './styles.scss'

const Products = () => {
    const [ authState ] = useContext(AuthContext)
    const navigate = useNavigate()

    const [products, setProducts] = useState([])
    const [inventory, setInventory] = useState([])

    const handleClick = (e) => {
        console.log('click')
    }

    useEffect(() => {
        if(!authState.signedIn) {
            navigate('/')
        } else {
            let isSubscribed = true;
    
            const fetchData = async () => {
              const data = await productServices.getAllProducts()
              const json = await data.data.products
              const results = await data.data.inventory
    
              if (isSubscribed) {
                setProducts(json)
                setInventory(results)
              }
            }
          
            fetchData()
              .catch(console.error)
            return () => isSubscribed = false;
        }

      }, [authState.signedIn, navigate])

    return (
        <div className='container'>
            
            <div className='products'>

                <div className='products-list'>

                    {products?.length ? products.map((item, i) => {
                        return (
                            <div key={`${i}-${item.id}`} className='product-item' onClick={e => handleClick(e)}>
                                <div className='image-wrapper'>
                                    {item.image ? <img src={item.image} alt="shopping"/> 
                                    : <img src="http://fakeimg.pl/150/e5e5e5/adadad/?text=IMG" alt="shopping"/>}
                                </div>
                                <div className='content'>
                                    <div className='title'>
                                        {item.title}
                                    </div>
                                    <div className='description'>
                                        {item.description}
                                    </div>
                                </div>

                                <div className='price'>
                                    <span>{item.price} $</span>

                                    {/* <button className='btn  btn-blue btn-small'>
                                        Add to cart
                                    </button> */}
                                </div>
                            </div>
                        )
                    })
                    : <div className="loading">Loading...</div>}

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

                            {/* <button className='btn  btn-blue btn-small'>
                                Add to cart
                            </button> */}
                        </div>
                    </div>
                </div>
            </div>
            
            <div className='inventory'>


            {inventory?.map((item, idx) => {
                return (
                    <div key={`${idx}-${item.totalAmount}`} className='inventory-item'>
                        <div className='seller-name'>
                            {item['user.email']}
                        </div>
                        <div className='seller-count'>
                            {item.count}
                        </div>
                        <div className='seller-total'>
                            {item.totalAmount} $
                        </div>
                    </div>
                )
            })}    
            </div>
        </div>
    )
}

export default Products