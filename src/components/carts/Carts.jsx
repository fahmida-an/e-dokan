import { Link } from "react-router-dom";
import useCart from "../../hooks/useCart";

const Carts = () => {
  const [carts] = useCart();

  return (
    <>
    <div>
                <h2 className="text-4xl font-bold flex items-center justify-center p-14">My Cart</h2>
            </div>
    <div className="max-w-6xl mx-auto flex gap-8">
         

      <div className="relative overflow-x-auto  ">
        <table className="w-full text-sm text-left rtl:text-right text-slate-600 ">
          <thead className="text-xs uppercase bg-gray-50">
            <tr>
              <th scope="col" className="px-16 py-3">
                Image
              </th>
              <th scope="col" className="px-6 py-3">
                Product
              </th>
              <th scope="col" className="px-6 py-3">
                Price
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {carts.map((item) => (
              <tr
                key={item._id}
                className="bg-white border-b hover:bg-gray-50"
              >
                <td className="p-4">
                  <img
                    src={item.image}
                    className="w-16 md:w-32 max-w-full max-h-full"
                    alt="Image"
                  />
                </td>
                <td className="px-6 py-4 font-semibold ">
                  {item.title}
                </td>
                <td className="px-6 py-4 font-semibold  ">
                  ${item.price}
                </td>
                <td className="px-6 py-4">
                  <a
                    href="#"
                    className="font-medium text-red-600 dark:text-red-500 hover:underline"
                  >
                    Remove
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div>
        

<div className="w-72 h-[320px] p-6 bg-blue-200 border border-gray-200  flex flex-col justify-center items-center  ">
   
    <a href="#">
        <h5 className="mb-2 text-2xl font-semibold tracking-tight ">name</h5>
    </a>
    <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">Price</p>
    <Link>
    <h2 className="px-3 py-2 border inline-flex items-center bg-white text-blue-600 text-xl font-bold ">
       CHECK OUT
    </h2>
    </Link>
</div>

      </div>
    </div>
    </>
  );
};

export default Carts;