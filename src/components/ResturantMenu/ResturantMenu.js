import React, { useState, useEffect } from 'react';
import Shimmer from '../Shimmer/Shimmer'; // Assuming Shimmer is your loading component
import { useParams } from 'react-router-dom';

const RestaurantMenu = () => {
  const [menuData, setMenuData] = useState(null);
  const {resId} = useParams()

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(
      `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=26.2161788&lng=78.18255239999999&restaurantId=${resId}&catalog_qa=undefined&submitAction=ENTER`
    );
    const json = await data.json();
    setMenuData(json?.data);
  };

  if (!menuData) return <Shimmer />; // Show Shimmer if menuData is not available yet

  const restaurantInfo = menuData?.cards?.[2]?.card?.card?.info;
  const menuItems = menuData?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[2]?.card?.card?.itemCards || [];

  // console.log('menu', menuData?.cards)

  return (
    <div className="menu">
      <h1>{restaurantInfo?.name}</h1>
      <h3>Rating: {restaurantInfo?.avgRatingString}</h3>
      <h3>{restaurantInfo?.costForTwoMessage}</h3>
      <h2>Menu</h2>
      <ul>
        {menuItems.map((item, index) => (
          <li key={index}>{item?.card?.info?.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
