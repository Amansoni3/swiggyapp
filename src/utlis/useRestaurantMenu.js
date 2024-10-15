import { useEffect, useState } from "react"

const useRestaurantMenu = (resId) => {
    // fetch data
    const [resInfo, setResInfo] = useState(null)

    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = async () => {
        const data = await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=26.2161788&lng=78.18255239999999&restaurantId=${resId}&catalog_qa=undefined&submitAction=ENTER`)

        const json = await data.json()
        setResInfo(json.data)
    }

    return resInfo
}

export default useRestaurantMenu
