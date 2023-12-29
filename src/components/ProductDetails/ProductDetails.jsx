import { useContext, useEffect, useState } from "react";
import useProduct from "../../hooks/useProduct";
import { useParams } from "react-router-dom";
import { MdOutlineShoppingCart } from "react-icons/md";
import { AuthContext } from "../../Provider/AuthProvider";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import {toast} from "react-hot-toast"
const ProductDetails = () => {
  const {user} = useContext(AuthContext)
  const [product] = useProduct();
  const { id } = useParams();
  const axiosPublic = useAxiosPublic()
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

  const handleAddToCart = () => {
    if(user && user.email){
      const cartItem = {
        productId: productCard._id,
        email: user.email,
        title: productCard.title,
        image: productCard.image,
        price: productCard.price
      }

      axiosPublic.post("/carts", cartItem).then((res) => {
        if(res.data.insertedId){
          toast.success(`${productCard.title} added to the Cart.`)
        }
      })
    }
  }
  return (
    <div className="max-w-5xl mx-auto h-screen px-16 py-5">
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

    <div className="flex items-center justify-center mt-8">
      <button  onClick={handleAddToCart} className="px-4 lg:px-20 py-3 text-lg font-semibold border rounded bg-yellow-500 flex items-center">
        Add to Cart
        <MdOutlineShoppingCart className="ml-2" />
      </button>
    </div>

    <div className=" grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 lg:max-w-5xl mt-10  lg:mx-auto py-8  border-t-2 rounded-lg">
        <div className="block w-72 lg:w-96 mx-auto p-6 mt-4 bg-red1 border border-t-green1 border-gray-200 rounded-lg shadow hover:bg-white ">
          <h5 className="mb-2 text-lg font-bold tracking-tight text-zinc4">
            Instant Services
          </h5>
          <p className=" text-gray-700 text-sm">
            Your convenience is our priority - we&apos;re ready to serve you as
            soon as you book!
          </p>
        </div>

        <div className="block  w-72 lg:w-96 mx-auto p-6 mt-4 bg-red1 border border-t-green1 border-gray-200 rounded-lg shadow hover:bg-white ">
          <h5 className="mb-2 text-lg font-bold tracking-tight text-zinc4 ">
            24/7 Quality Service
          </h5>
          <p className=" text-gray-700 text-sm ">
          Unmatched Quality, Day and Night: 24/7 Service at Your Service.
          </p>
        </div>

        <div className="block  w-72 lg:w-96 mx-auto p-6 mt-4 bg-red1 border border-t-green1 border-gray-200 rounded-lg shadow hover:bg-white ">
          <h5 className="mb-2 text-lg font-bold tracking-tight text-zinc4">
            Easy Customer Services
          </h5>
          <p className=" text-gray-700 text-sm ">
          Simplify Your Experience with Our Easy Customer Services.
          </p>
        </div>
        <div className="block  w-72 lg:w-96 mx-auto p-6 mt-4 bg-red1 border border-t-green1 border-gray-200 rounded-lg shadow hover:bg-white ">
          <h5 className="mb-2 text-lg font-bold tracking-tight text-zinc4 ">
            Quality Cost Services
          </h5>
          <p className=" text-gray-700 text-sm">
          Quality Services, Affordable Prices: Excellence Need Not Be Expensive. Experience Superior Value with Us Today.
          </p>
        </div>
      </div>
  </div>
  );
};

export default ProductDetails;
