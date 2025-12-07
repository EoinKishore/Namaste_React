import CategoryItems from "./CategoryItems";
import React from "react";
import { useState } from "react";
const CategoryComponent = ({categoryItems}) => {
    const [isAccordianOpen , setIsAccordianOpen] = useState(false);

    return (
        <div className="category-container w-[500px]">
            {categoryItems.map((c) => {
                return (
                <div key={c.card.card.categoryId} >
                    <div className="flex bg-gray-200 justify-between p-4 m-4 rounded-lg cursor-pointer" onClick={() => setIsAccordianOpen(!isAccordianOpen)}>
                        <h4>{c.card.card.title}</h4>
                        <span>⬇️</span>
                    </div>
                    {isAccordianOpen && c.card.card.categories &&
                    <CategoryItems categoryItems={c.card.card.categories} /> }
                </div>
                )
            })}
        </div>   
    )
}
export default CategoryComponent;