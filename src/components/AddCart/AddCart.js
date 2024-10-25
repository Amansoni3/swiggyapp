import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { clearCart } from '../../utlis/cartSlice'


const AddCart = () => {
    
    const cartItem = useSelector((store) => store.cart.items)
    const dispatch = useDispatch()

    console.log(cartItem, "it")

    const handleClearCart = () => {
        dispatch(clearCart())
    }

    return (
        <div className='bg-pink-50 w-full'>
            <div className='text-center text-2xl mt-3 p-6 font-bold'>
                Cart
            </div>
            <div className="p-4 max-w-[1200px]">
                {
                    cartItem?.map((item, index) => (
                        <div key={index} className="my-2 flex justify-between items-center">
                            {/* Item Info */}
                            <div className='max-w-[800px]'>
                                <p className="font-semibold">{item?.card?.info?.name}</p>
                                <p className="text-gray-600">{item?.card?.info?.description}</p>
                            </div>
                            <button className='bg-pink-600 px-3 py-2 text-white rounded'>Add more</button>
                            <button onClick={handleClearCart} className='bg-pink-600 px-3 py-2 text-white rounded'>Clear Cart</button>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default AddCart