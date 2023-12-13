import { useState } from "react";
import ProductCard from "../ProductCard/ProductCard";
const CardsPerPage = 6;
const OrderTab = ({items}) => {
    const [showAll, setShowAll] = useState(false);
    const visibleItems = showAll ? items : items.slice(0, CardsPerPage);
    return (
       <>
        <div style={{ position: "relative" }} className="grid md:grid-cols-3 gap-8 mt-4 max-w-6xl mx-auto">
        {
             visibleItems.map(item => <ProductCard key={item._id}
             item={item}
             ></ProductCard>)
         }
          
        </div>
        <div className="p-8 flex items-center justify-center">
            {items.length > CardsPerPage && (
        <div>
          <button onClick={() => setShowAll(!showAll)} className="px-8 py-3 text-lg font-semibold border rounded bg-yellow-500">
            {showAll ? "See Less" : "See All"}
          </button>
        </div>
      )}
        </div>
       </>
    );
};

export default OrderTab;