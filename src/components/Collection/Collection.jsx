import useCollection from "../../hooks/useCollection";
// import "./marquee.css"
import Marquee from "react-fast-marquee";
const Collection = () => {
  const [collection] = useCollection();
  return (
    <div className="max-w-screen-2xl mx-auto lg:p-0 p-6">
      <Marquee>
        {collection.map((item) => (
          <div key={item._id} className="inline-block bg-white mr-4">
            <img
              src={item.image}
              alt=""
              className="object-cover object-center p-6 lg:w-[350px] w-[250px] rounded-t-md lg:h-[410px] h-[300px]"
            />
            <div className="relative">
              <h3 className="absolute bottom-12 left-12 py-2 px-4 text-white bg-black opacity-75">
                {item.title}
              </h3>
            </div>
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default Collection;
