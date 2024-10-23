import React, { useState } from 'react';

const ResCategory = ({ data }) => {
    const [isOpen, setIsOpen] = useState(false);

    // Toggle function for accordion
    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };

    // Add to Cart function
    const addToCart = (item) => {
        console.log("Item added to cart:", item?.card?.info?.name);
        // You can replace this with logic to actually add the item to the cart (e.g., using a context, state management, etc.)
    };

    return (
        <div className="border border-gray-300 rounded-md my-2 w-full max-w-6xl mx-auto">
            {/* Accordion Title */}
            <div
                className="flex justify-between items-center font-bold p-4 cursor-pointer bg-gray-100 hover:bg-gray-200"
                onClick={toggleAccordion}
            >
                <span>{data?.card?.card?.title}</span>

                {/* Dropdown Icon (▼ when closed, ▲ when open) */}
                <span className="text-lg">
                    {isOpen ? '▲' : '▼'}
                </span>
            </div>

            {/* Accordion Content with smooth transition */}
            <div
                className={`transition-[max-height] duration-300 ease-in-out bg-white ${
                    isOpen ? 'max-h-[300px] overflow-y-auto' : 'max-h-0 overflow-hidden'
                }`}
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
                                Add to Cart
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ResCategory;
