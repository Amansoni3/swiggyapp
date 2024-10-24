import React from 'react';

const ResCategory = ({ data , showItems , setShowIndex }) => {

    // Add to Cart function
    const addToCart = (item) => {
        console.log("Item added to cart:", item?.card?.info?.name);
        // Add your logic here for cart functionality
    };

    const handleClick = () => {
        setShowIndex()
    }

    return (
        <div className="border border-gray-300 rounded-md my-2 w-full max-w-6xl mx-auto">
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
                                <div>
                                    <p className="font-semibold">{item?.card?.info?.name}</p>
                                    <p className="text-gray-600">{item?.card?.info?.description}</p>
                                </div>

                                {/* Add to Cart Button */}
                                <button
                                    className="ml-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                                    onClick={() => addToCart(item)}
                                >
                                    Add
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
