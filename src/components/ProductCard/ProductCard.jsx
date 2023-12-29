import { Link } from "react-router-dom";

const ProductCard = ({item}) => {
    const {image, price, title,_id} = item;
    return (
      <div className="card w-80 h-[400px] bg-base-100 shadow-xl rounded-none">
  <figure>
    <img src={image} alt={title} className="transition-transform transform hover:scale-110 h-[200px] object-cover" />
  </figure>
  <div className="card-body flex flex-col items-center h-1/3">
    <h2 className="card-title line-clamp-1">{title}</h2>
    <h2 className="card-title font-normal text-lg">Price: {price}</h2>
    <div className="card-actions justify-end">
      <Link to={`/product/${_id}`}>
        <button
          className="px-6 py-2 text-lg rounded-lg font-semibold bg-slate-300 border-yellow-500 border-0 border-b-4 mt-2 hover:bg-yellow-500"
        >
          See Details
        </button>
      </Link>
    </div>
  </div>
</div>
    );
};

export default ProductCard;