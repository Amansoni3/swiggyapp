import React , {useState , useEffect} from 'react'
import ResturantCard from '../ResturantCard/ResturantCard'
import { data } from '../../utlis/data'

const Body = () => {
    const [listOfResturants , setListOfResturants] = useState(data)
    
    useEffect(()=>{
        fetchedData()
    },[])

    const fetchedData = async() => {
        const data = await fetch("https://www.swiggy.com/mapi/homepage/getCards?lat=26.2124007&lng=78.1772053")
        
        const json = await data.json()
        console.log(json?.data)
    }

    return (
        <div className="body">
            <div className="filter">
                <button className='filter-btn' onClick={() => {
                    const filteredList = listOfResturants?.filter(
                        (res) => parseFloat(res.rating) > 4
                    )
                    setListOfResturants(filteredList)
                   
                }}
                >
                    Top rated resturants
                </button>
            </div>
            <div className="res-container">
                {
                    listOfResturants?.map((item, index) => (
                        <ResturantCard key={index} data={item} />
                    ))
                }
            </div>
        </div>
    )
}

export default Body