import { Link } from "react-router-dom";

const ProductCard = ({item}) => {
    const {image, price, title,_id} = item;
    return (
        <div data-aos="fade-up" className="card w-96 h-[400px] bg-base-100 shadow-xl rounded-none">
        <figure>
          <img src={image} className="transition-transform transform hover:scale-110 h-[300px] "/>
        </figure>
        {/* <p className="absolute right-0 mr-8 mt-8 px-4 bg-black text-white ">
          ${price}
        </p> */}
        <div className="card-body flex felx-col items-center">
          <h2 className="card-title">{title}</h2>
          <h2 className="card-title font-normal text-lg">Price: {price}</h2>
          <div className="card-actions justify-end">
          <Link to={`/product/${_id}`}>
          <button
              className=" px-6 py-2 text-lg rounded-lg font-semibold bg-slate-300 border-yellow-500 border-0 border-b-4 mt-2 hover:bg-yellow-500  "
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