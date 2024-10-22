import Shimmer from '../Shimmer/Shimmer'; // Assuming Shimmer is your loading component
import { useParams } from 'react-router-dom';
import useRestaurantMenu from '../../utlis/useRestaurantMenu';

const RestaurantMenu = () => {

  const { resId } = useParams()

  const menuData = useRestaurantMenu(resId)

  if (!menuData) return <Shimmer />; // Show Shimmer if menuData is not available yet

  const restaurantInfo = menuData?.cards?.[2]?.card?.card?.info;
  const menuItems = menuData?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[2]?.card?.card?.itemCards || [];

  // console.log('menu', menuData?.cards)

  return (
    <div className="bg-pink-100 p-8 flex flex-col justify-center items-center">
      <div className='flex bg-pink-400 px-4 py-3 gap-5 rounded-[20px] mb-4'>
        <h1 className='text-2xl font-medium mt-2'>{restaurantInfo?.name}</h1>
        <h3 className='text-2xl font-medium mt-2'>Rating: {restaurantInfo?.avgRatingString}</h3>
        <h3 className='text-2xl font-medium mt-2'>{restaurantInfo?.costForTwoMessage}</h3>
       
      </div>
      <h2 className='text-2xl font-medium mt-2 bg-pink-400 px-4 py-3 gap-5 rounded-[20px] mb-4'>Menu</h2>
      <ul className='flex gap-5  flex-wrap'>
        {menuItems.map((item, index) => (
          <li key={index} className='rounded-[20px] mt-2 text-xl font-normal bg-pink-400 py-4 px-3 '>{item?.card?.info?.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
