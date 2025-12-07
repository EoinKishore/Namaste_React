import { CDN_URL } from "../utils/constants";
const CategoryItems = ({ categoryItems }) => {
    const filteredItems = categoryItems.filter(i => i?.itemCards);
    const innerFilterCard = filteredItems.map(i => i?.itemCards);
     const allItemCards = filteredItems.flatMap(i => i.itemCards);
    console.log("All individual item cards", allItemCards);

    return <div className="w-full">
        {allItemCards.map((item) => {
            return <div className="flex border border-grey-300 p-4 m-2 w-full bg-gray-100 rounded-2xl" key={item.card.info.id}>
                <div className="flex items-center w-[200px]">
                    <img src={ CDN_URL + item.card.info.imageId} alt="" className="h-[100px] w-[100px] rounded" />
                </div>
                <div className="ml-3">
                    <h4 className="font-bold">{item.card.info.name}</h4>
                    <p className="text-xs justify-around">{item.card.info.description}</p>
                    <span className="font-semibold">₹ {item.card.info.price / 100 || item.card.info.defaultPrice / 100}</span>
                </div>
            </div>
        })}
    </div>
}
export default CategoryItems;