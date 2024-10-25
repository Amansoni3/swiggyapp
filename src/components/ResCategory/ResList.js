import React from 'react'

const ResList = ({item}) => {
    return (
        <div key={index} className="my-2 flex justify-between items-center">
            {/* Item Info */}
            <div className='max-w-[1200px]'>
                <p className="font-semibold">{item?.card?.info?.name}</p>
                <p className="text-gray-600">{item?.card?.info?.description}</p>
            </div>

            {/* Add to Cart Button */}
            <button
                className="ml-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                onClick={() => addToCart(item)}
            >
                Add +
            </button>
        </div>
    )
}

export default ResList