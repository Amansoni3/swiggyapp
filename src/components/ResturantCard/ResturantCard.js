import React from 'react'
import { card_img_url } from '../../utlis/utlis'

const ResturantCard = ({ data }) => {

    return (
        <div className="res-card">
            <img src={card_img_url} alt="res-logo" className="res-logo" />
            <h3>{data.name}</h3>
            <h4>{data?.cuisines[0]}</h4>
            <h4>{data?.avgRating}</h4>
            <h4>{data?.sla?.slaString}</h4>
        </div>
    )
}

export default ResturantCard