import React from 'react'
import { card_img_url } from '../../utlis/utlis'

const ResturantCard = ({ data }) => {

    return (
        <div className="bg-pink-200 hover:bg-pink-300 m-2 p-4 w-[300px] h-[450px] rounded">
            <img src={card_img_url} alt="res-logo" className="w-[300px] h-[200px] object-cover rounded" />
            <h3 className='text-pink-600 text-xl py-2'>{data.name}</h3>
            <h4 className='text-pink-600 text-xl py-2'>{data?.cuisines[0]}</h4>
            <h4 className='text-pink-600 text-xl py-2'>{data?.avgRating}</h4>
            <h4 className='text-pink-600 text-xl py-2'>{data?.sla?.slaString}</h4>
        </div>
    )
}

// Higher order component 

export const withVegLabel = (ResturantCard) => {
    return (props) => {
        return (
            <div>
                <label className='absolute bg-purple-500 text-white p-2 m-2 rounded-lg'>Only Veg</label>
                <ResturantCard {...props} />
            </div>
        )
    }
}

export default ResturantCard