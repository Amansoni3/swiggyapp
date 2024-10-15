import Shimmer from '../Shimmer/Shimmer'; // Assuming Shimmer is your loading component
import { useParams } from 'react-router-dom';
import useRestaurantMenu from '../../utlis/useRestaurantMenu';

const RestaurantMenu = () => {
  
  const {resId} = useParams()
  
  const menuData = useRestaurantMenu(resId)

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
