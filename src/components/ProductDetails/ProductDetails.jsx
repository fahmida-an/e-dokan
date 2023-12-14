import { useEffect, useState } from "react";
import useProduct from "../../hooks/useProduct";
import { useParams } from "react-router-dom";
import { MdOutlineShoppingCart } from "react-icons/md";
const ProductDetails = () => {
  const [product] = useProduct();
  const { id } = useParams();
  const [productCard, setProductCard] = useState(null);
  useEffect(() => {
    const productDetail = product.find((item) => item._id === id);
    if (productDetail) {
      setProductCard(productDetail);
    } else {
      console.log(console.error);
    }
  }, [id, product]);
  if (!productCard) {
    return <span>Loading...</span>;
  }
  return (
    <div className="max-w-5xl mx-auto h-screen px-16 py-7">
    <img
      className="lg:w-[1000px] lg:h-[450px] w-[600px] h-[300px] mb-7 border border-b-2"
      src={productCard.image}
      alt=""
    />
  

    <div className="flex flex-col space-y-1">
      <h1 className="text-2xl font-bold">Name: {productCard.title}</h1>
      <h1 className="text-2xl font-bold">Price: {productCard.price}</h1>
      <p className="text-lg">{productCard.description}</p>
    </div>

    <div className="flex items-center justify-center mt-7">
      <button className="px-4 lg:px-32 py-3 text-lg font-semibold border rounded bg-yellow-500 flex items-center">
        Add to Cart
        <MdOutlineShoppingCart className="ml-2" />
      </button>
    </div>
  </div>
  );
};

export default ProductDetails;
