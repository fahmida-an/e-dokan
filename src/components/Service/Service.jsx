import { MdOutlineShoppingCartCheckout } from "react-icons/md";
import { TbShirt } from "react-icons/tb";
import { RiWalletLine } from "react-icons/ri";
import { BiSupport } from "react-icons/bi";
const Service = () => {
    return (
        <div className="grid grid-cols-2 gap-6 lg:grid-cols-4 max-w-screen-xl mx-auto py-20 px-10">
            <div className="flex items-center justify-center gap-6 flex-1">
                <MdOutlineShoppingCartCheckout  className="text-yellow-500 text-6xl"/>
               <div>
               <h2 className="text-xl font-bold">Free Shipping</h2>
                <p className="text-gray-600">Order Over 99.99$</p>
               </div>
            </div>
            <div className="flex items-center justify-center gap-6 flex-1">
                <TbShirt  className="text-yellow-500 text-6xl"/>
               <div>
               <h2 className="text-xl font-bold">90 Days Return</h2>
                <p className="text-gray-600">For Goods Issue</p>
               </div>
            </div>
            <div className="flex items-center justify-center gap-6 flex-1">
                <RiWalletLine className="text-yellow-500 text-6xl"/>
               <div>
               <h2 className="text-xl font-bold">Secure Payments</h2>
                <p className="text-gray-600">100% Secure & Safe</p>
               </div>
            </div>
            <div className="flex items-center justify-center gap-6 flex-1">
                <BiSupport className="text-yellow-500 text-6xl"/>
               <div>
               <h2 className="text-xl font-bold">24/7 Support Help</h2>
                <p className="text-gray-600">Dedicated Support</p>
               </div>
            </div>
           
        </div>
    );
};

export default Service;