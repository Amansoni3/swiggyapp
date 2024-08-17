import React from 'react'
import { card_img_url } from '../../utlis/utlis'

const ResturantCard = ({ data }) => {
    return (
        <div className="res-card">
            <img src={card_img_url} alt="res-logo" className="res-logo" />
            <h3>{data.name}</h3>
            <h4>{data.dish}</h4>
            <h4>{data.rating}</h4>
            <h4>{data.time}</h4>
        </div>
    )
}

export default ResturantCard