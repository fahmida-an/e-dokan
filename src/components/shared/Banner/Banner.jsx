import banner from "../../../assets/banner/banner.png"
const Banner = () => {
    return (
        <>
        <section className="bg-amber-50 px-20">
        <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
            <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
                <h1 className="text-4xl font-bold leadi sm:text-5xl">Elegant <span className="text-yellow-500">Furniture </span>for home and office.
                </h1>
                <p className="mt-6 mb-8 text-lg sm:mb-12">Transform your living and workspace with our curated selection of stylish furniture for both your home and office.
                </p>
                <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
                   
                    <a rel="noopener noreferrer" href="#" className="px-8 py-3 text-lg font-semibold border rounded bg-yellow-500">Shop Now</a>
                </div>
            </div>
            <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
                <img src={banner} alt="" className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128" />
            </div>
        </div>
    </section>
        </>
    );
};

export default Banner;