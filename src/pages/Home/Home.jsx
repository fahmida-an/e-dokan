import Collection from "../../components/Collection/Collection";
import Contact from "../../components/Contact/Contact";
import Footer from "../../components/Footer/Footer";
import ProductOrder from "../../components/ProductOrder/ProductOrder";
import Service from "../../components/Service/Service";
import Tesimonial from "../../components/Testimonial/Tesimonial";
import Banner from "../../components/shared/Banner/Banner";
import Navbar from "../../components/shared/Navbar/Navbar";

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <Service></Service>
            <Collection></Collection>
            <ProductOrder></ProductOrder>
            <Tesimonial></Tesimonial>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;