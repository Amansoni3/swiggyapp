import React from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from '../../utlis/cartSlice';

const ResCategory = ({ data, showItems, setShowIndex }) => {
    const dispatch = useDispatch()

    // Add to Cart function
    const addToCart = (item) => {
        // Dispatch an action
        dispatch(addItem(item))
    };

    const handleClick = () => {
        setShowIndex()
    }

    return (
        <div className="border border-gray-300 rounded-md my-2 w-full max-w-[1400] mx-auto">
            {/* Accordion Header */}
            <div
                className="flex justify-between items-center font-bold p-4 cursor-pointer bg-gray-100 hover:bg-gray-200"
                onClick={handleClick}
            >
                <span>{data?.card?.card?.title}</span>

                {/* Dropdown Icon */}
                <span className="text-lg">
                    {showItems ? '▲' : '▼'}
                </span>
            </div>

            {/* Render accordion content conditionally based on isOpen */}
            {showItems ? (
                <div
                    className={`transition-[max-height] duration-300 ease-in-out bg-white max-h-[300px] overflow-y-auto`}
                >
                    <div className="p-4">
                        {data?.card?.card?.itemCards?.map((item, index) => (
                            <div key={index} className="my-2 flex justify-between items-center">
                                {/* Item Info */}
                                <div className='max-w-[1200px]'>
                                    <p className="font-semibold">{item?.card?.info?.name}</p>
                                    <p className="text-gray-600">{item?.card?.info?.description}</p>
                                </div>

                                {/* Add to Cart Button */}
                                <button
                                    className="ml-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                                    onClick={() => addToCart(item)}
                                >
                                    Add +
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            ) : null} {/* If not open, don't render content */}
        </div>
    );
};

export default ResCategory;
