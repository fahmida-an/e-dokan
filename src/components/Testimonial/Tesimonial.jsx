import useRating from "../../hooks/useRating";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { FaQuoteLeft } from "react-icons/fa6";
import { FaQuoteRight } from "react-icons/fa6";
const Testimonial = () => {
  const [rating] = useRating();
  return (
    <>
      <div>
        <h2 className="text-4xl font-bold flex items-center justify-center p-14">
          Client Reviews
        </h2>
      </div>

      <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-4">
        {rating.map((test) => (
          <div key={test._id} className="bg-gray-100">
            <div className="max-w-sm mx-auto h-[350px] p-6 space-y-5  bg-slate-50 border hover:bg-white hover:shadow-2xl border-gray-200 rounded-lg shadow ">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
                {test.name}
              </h5>
              <Rating style={{ maxWidth: 180 }} value={test.rating} readOnly />
              <div>
                <span className="text-xl text-yellow-500">
                  <FaQuoteLeft />{" "}
                </span>
                {test.details.length > 50 ? (
                  <p className="mt-2 text-gray-700 ">
                    {test.details.split(" ").slice(0, 30).join(" ")}...
                  </p>
                ) : (
                  <p className="mt-2 text-gray-700 ">
                    {test.details}
                  </p>
                )}
                <span className="text-xl text-yellow-500">
                  <FaQuoteRight />
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Testimonial;
