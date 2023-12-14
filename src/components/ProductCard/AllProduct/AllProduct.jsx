import useProduct from "../../../hooks/useProduct";
import AllProductCard from "./AllProductCard";

const AllProduct = () => {
  const [product] = useProduct();
  return (
    <>
      <div>
        <h2 className="text-4xl font-bold flex items-center justify-center p-14">
          All Products
        </h2>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-4 max-w-6xl mx-auto">
        {product.map((item) => (
          <AllProductCard key={item._id} item={item}></AllProductCard>
        ))}
      </div>
    </>
  );
};

export default AllProduct;
