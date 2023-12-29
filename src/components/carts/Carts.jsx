import { Link } from "react-router-dom";
import useCart from "../../hooks/useCart";

const Carts = () => {
  const [carts] = useCart();
const totalPrice = carts.reduce((total,item) => total + parseFloat(item.price), 0)
  return (
    <>
    <div>
                <h2 className="text-4xl font-bold flex items-center justify-center p-14">My Cart</h2>
            </div>
    <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
         

      <div className="relative overflow-x-auto  ">
        <table className="w-full text-sm text-left rtl:text-right text-slate-600 ">
          <thead className="text-xs uppercase bg-slate-200">
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
                className="bg-white border-b "
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
        

<div className="w-72 h-[320px] p-6 mt-10 bg-slate-200 border border-gray-200  flex flex-col justify-center items-center mx-auto  ">
    <h3 className="mb-10 border-b-2 w-full border-gray-500 py-1 text-xl">Order Summary</h3>
   
        <h5 className="mb-2 font-semibold tracking-tight  py-2 border border-gray-600 w-full flex justify-center ">Total Order: {carts.length}</h5>

    <p className="mb-3 font-semibold py-2 border border-gray-600 w-full flex justify-center">Total Price: ${totalPrice}</p>
   { carts.length?  <Link to={'/payment'}>
    <button  className="px-3 py-2 w-full border inline-flex items-center bg-yellow-500  rounded-lg text-xl font-bold ">
       CHECKOUT
    </button>
    </Link>
  :   
  <button  disabled className="px-3 py-2 w-full border inline-flex items-center bg-yellow-500  rounded-lg text-xl font-bold ">
       CHECKOUT
    </button>
  }
</div>

      </div>
    </div>
    </>
  );
};

export default Carts;