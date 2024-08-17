import React from 'react'
import ResturantCard from '../ResturantCard/ResturantCard'

const Body = () => {
    const data = {
        name: "Meghna Foods",
        dish: "Biryani, North India, Asian",
        rating: "4.4 Stars",
        time: "38 mins"
    }

    return (
        <div className="body">
            <div className="search">
                Search
            </div>
            <div className="res-container">
                <ResturantCard data={data} />
            </div>
        </div>
    )
}

export default Body