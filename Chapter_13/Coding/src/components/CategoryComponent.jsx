import CategoryItems from "./CategoryItems";
import { useState } from "react";
const CategoryComponent = ({categoryItems,showItem,setShowItem }) => {
   
    const handleClick = () => {
        setShowItem();
    }
    return (
        <div className="category-container w-[600px]">
                <div key={categoryItems.card.card.categoryId} >
                    <div className="flex bg-gray-200 justify-between p-4 m-4 rounded-lg cursor-pointer" onClick={handleClick}>
                        <h4>{categoryItems.card.card.title}</h4>
                        <span>⬇️</span>
                    </div>
                    {showItem && categoryItems.card.card.categories &&
                    <CategoryItems categoryItems={categoryItems.card.card.categories} /> }
                </div>
        </div>   
    )
}
export default CategoryComponent;