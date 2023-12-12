import Collection from "../../components/Collection/Collection";
import Service from "../../components/Service/Service";
import Banner from "../../components/shared/Banner/Banner";
import Navbar from "../../components/shared/Navbar/Navbar";

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <Service></Service>
            <Collection></Collection>
        </div>
    );
};

export default Home;