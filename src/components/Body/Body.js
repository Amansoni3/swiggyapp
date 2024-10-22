import React, { useState, useEffect } from 'react'
import ResturantCard from '../ResturantCard/ResturantCard'
import Shimmer from '../Shimmer/Shimmer'
import { Link } from 'react-router-dom'
import useOnlineStatus from '../../utlis/useOnlineStatus'

const Body = () => {

    // Local state variables - Super powerfull variables
    // It is used to create local state variables in your functional components.

    const [listOfResturants, setListOfResturants] = useState([])
    const [filterListOfResturants, setFliterListOfResturants] = useState([])
    const [searchText, setSearchText] = useState('')

    useEffect(() => {
        fetchedData()
    }, [])

    const fetchedData = async () => {
        // akshay api
        // const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.9615398&lng=79.2961468&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")

        // Gwalior api
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.2161788&lng=78.18255239999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
        const json = await data.json()
        setListOfResturants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        setFliterListOfResturants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    }

    const handleSearch = () => {
        const filteredData = listOfResturants?.filter((res) => {
            const name = res?.info?.name?.toLowerCase() || '';
            const search = searchText.toLowerCase();
            return name.includes(search);
        });
        setFliterListOfResturants(filteredData);
    };

    const onlineStatus = useOnlineStatus()

    if(onlineStatus === false) {
        return(
            <h1>
                Looks like you're offline !! Please check your internet connection
            </h1>
        )
    }

    return listOfResturants?.length === 0 ? <Shimmer /> : (
        <div className="bg-pink-50">
            <div className="">
                <div className=' p-4'>
                    <input type='text' className='px-4 py-2 border border-solid border-pink-600 ' value={searchText} onChange={(e) => {
                        setSearchText(e.target.value)
                    }} />
                    <button className='bg-pink-500 text-white px-4 py-2 rounded mx-2' onClick={handleSearch} >Search</button>
                </div>
                <button className='bg-pink-500 text-white px-4 py-2 mx-4 mb-4 rounded' onClick={() => {
                    const filteredList = listOfResturants?.filter(
                        (res) => parseFloat(res?.info?.avgRating) > 4
                    )
                    setFliterListOfResturants(filteredList)

                }}
                >
                    Top rated resturants
                </button>
            </div>
            <div className="flex flex-wrap justify-center gap-x-10 gap-y-3 mb-8">
                {
                    filterListOfResturants?.map((item, index) => {
                        // console.log(item?.info?.id, "data")
                        return (
                            <Link to={`/restaurants/${item?.info?.id}`} key={index}>
                                <ResturantCard data={item?.info} />
                            </Link>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Body