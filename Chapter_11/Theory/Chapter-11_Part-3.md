## Control and Uncontrol Component

RestaurantMenuCompoenet.jsx

```jsx
import { useParams } from "react-router-dom";
import ShimmerComponent from "./ShimmerComponent";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import CategoryComponent from "./CategoryComponent";
import { useState } from "react";
const RestaurantMenuComponent = () => {
  
  const { resId } = useParams();
  const restaurantMenu = useRestaurantMenu(resId);
  const [showItem , setShowItem] = useState(null);

  
  if (!restaurantMenu || restaurantMenu?.length === 0) {
    return <ShimmerComponent />;
  }

  const { name, costForTwoMessage, cuisines } =
  restaurantMenu?.cards[2]?.card?.card?.info;

  const allCards =  restaurantMenu?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;

  const categoryItems = allCards.filter(c => c?.card?.card?.categories);
  
  return (
    <div className="flex flex-col m-4 p-4 items-center justify-center">
      <div className="bg-lime-950 text-amber-100 w-[500px] p-4 ">
        <h1> <span> Restaurant Name :</span> {name}</h1>
        <h3> <span>Cuisines :</span>  {cuisines?.join(", ")}</h3>
        <h3> <span>Cost for two :</span> {costForTwoMessage}</h3>
      </div>
      {categoryItems.map((item, index) => {
        return <CategoryComponent categoryItems={item} showItem={index === showItem ? true : false} setShowItem={() => {
          if (showItem === index) {
            setShowItem(null);
          }
          else {
            setShowItem(index);
          }
        }} key={item.card.card.categoryId} />
      })}
      
    </div>
  );
};

export default RestaurantMenuComponent;

```

CateogryComponent.jsx

```jsx
import CategoryItems from "./CategoryItems";
import { useState } from "react";
const CategoryComponent = ({categoryItems,showItem,setShowItem }) => {
    const handleClick = () => {
        setShowItem();
    }
    return (
        <div className="category-container w-[500px]">
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
```

CategoryItems.jsx

```jsx
import { CDN_URL } from "../utils/constants";
const CategoryItems = ({ categoryItems }) => {
    const filteredItems = categoryItems.filter(i => i?.itemCards);
     const allItemCards = filteredItems.flatMap(i => i.itemCards);
    console.log("All individual item cards", allItemCards);
    return <div className="w-full">
        {allItemCards.map((item) => {
            return <div className="flex border border-grey-300 p-4 m-2 w-full bg-gray-100 rounded-2xl" key={item?.card?.info?.id}>
                <div className="flex items-center w-[200px]">
                    <img src={ CDN_URL + item?.card?.info?.imageId} alt="" className="h-[100px] w-[100px] rounded" />
                </div>
                <div className="ml-3">
                    <h4 className="font-bold">{item?.card?.info?.name}</h4>
                    <p className="text-xs justify-around">{item?.card?.info?.description}</p>
                    <span className="font-semibold">₹ {item?.card?.info?.price / 100 || item?.card?.info?.defaultPrice / 100}</span>
                </div>
            </div>
        })}
    </div>
}
export default CategoryItems;
```

## Key Differences Between Old and New Code

### **Old Implementation**:

1. **Single Accordion State**: All categories shared the same open/close state
2. **Uncontrolled Component**: `CategoryComponent` managed its own state internally
3. **Multiple Categories Issue**: Clicking any category would open/close ALL categories simultaneously

### **New Implementation**:

1. **Individual Accordion States**: Each category maintains its own open/close state
2. **Controlled Component**: `CategoryComponent` receives state from parent (`RestaurantMenuComponent`)
3. **Proper Accordion Behavior**: Only one category can be open at a time (collapses previous when new one opens)

## Controlled vs Uncontrolled Components

### **Uncontrolled Component** (Old Code):

```jsx
// CategoryComponent manages its own state
const CategoryComponent = ({categoryItems}) => {
    const [isAccordianOpen, setIsAccordianOpen] = useState(false); // INTERNAL STATE
    // ... rest of component
}

```

- **Definition**: Component manages its own state internally
- **Parent doesn't control**: Parent component doesn't know about the open/close state
- **Limited coordination**: Can't coordinate between multiple instances
- **Used in old code**: Each `CategoryComponent` had its own isolated state

### **Controlled Component** (New Code):

```jsx
// RestaurantMenuComponent (Parent)
const [showItem, setShowItem] = useState(null);

// Passing state down as props
<CategoryComponent
  showItem={index === showItem ? true : false}
  setShowItem={() => setShowItem(index)}
/>

// CategoryComponent (Child)
const CategoryComponent = ({categoryItems, showItem, setShowItem}) => {
    // Uses props from parent, no internal state
    const handleClick = () => {
        setShowItem(); // Calls parent's function
    }
}

```

- **Definition**: Parent component manages state and passes it down as props
- **Single source of truth**: State is managed in `RestaurantMenuComponent`
- **Full coordination**: Parent can ensure only one category is open at a time
- **Used in new code**: `CategoryComponent` receives `showItem` and `setShowItem` from parent

## How You're Using Controlled Components

### **1. Lifting State Up**:

```jsx
// State moved from CategoryComponent to RestaurantMenuComponent
const [showItem, setShowItem] = useState(null); // null means none open

```

### **2. Passing State Down**:

```jsx
// Parent determines which category should be open
{categoryItems.map((item, index) => {
  return <CategoryComponent
    showItem={index === showItem ? true : false} // Boolean: is this open?
    setShowItem={() => setShowItem(index)} // Function to open this specific category
  />
})}

```

### **3. Child Uses Parent's State**:

```jsx
// CategoryComponent is now controlled - uses parent's state
const handleClick = () => {
    setShowItem(); // This calls parent's setShowItem(index)
    // When clicked, tells parent: "Open me at index X"
}

```

### **4. Collapsing Previous Category**:

When you click a new category:

1. Parent's `setShowItem(index)` is called
2. `showItem` becomes the new index
3. Previous category automatically closes because `index === showItem` becomes false for it
4. New category opens because `index === showItem` becomes true for it

## Visual Flow:

```
Click Category 2 ↓
│
├── Calls setShowItem(2)
│   ├── showItem = 2 (updates parent state)
│   ├── Re-render all CategoryComponents
│   │   ├── Category 0: showItem={0 === 2? false} → CLOSED
│   │   ├── Category 1: showItem={1 === 2? false} → CLOSED
│   │   └── Category 2: showItem={2 === 2? true} → OPEN
│   └── Only Category 2 shows its items

```

## Benefits of This Approach:

1. **Single Source of Truth**: State is centralized in parent
2. **Better Coordination**: Can implement "only one open at a time" logic
3. **More Predictable**: Parent has full control over UI state
4. **Easier Testing**: Can test state logic separately from UI
5. **Future Flexibility**: Can easily add features like "open first category by default"

This pattern is common in React for managing coordinated UI states where multiple components need to work together without conflicting states.