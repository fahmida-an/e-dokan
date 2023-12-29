import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { useParams } from "react-router-dom";
import { useState } from "react";
import useProduct from "../../hooks/useProduct";
import OrderTab from "./OrderTab";

const ProductOrder = () => {
    const categories = ['featured', 'toprated',  'bestseller', 'newarrival'];
    const {category} = useParams();
    const initialIndex = category ? categories.indexOf(category.toLowerCase()) : 0;
    const [tabIndex, setTabIndex]= useState(initialIndex)
    const [product] = useProduct()
    const featured = product.filter((item)=> item.category === "featured");
    const toprated = product.filter((item)=> item.category === "toprated");
    const bestseller = product.filter((item)=> item.category === "bestseller");
    const newarrival= product.filter((item)=> item.category === "newarrival");

    return (
        <div className="" id="featured">
            <div>
                <h2 className="text-4xl font-bold flex items-center justify-center p-14">Our Products</h2>
            </div>
         <div>
         <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}  style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <TabList style={{ display: 'flex', justifyContent: 'center', width: '100%'  }}>
          <Tab>Featured</Tab>
          <Tab>New Arrival</Tab>
          <Tab>Best Seller</Tab>
          <Tab>Top Rated</Tab>
        </TabList>
        <TabPanel>
           <OrderTab items={featured}></OrderTab>
        </TabPanel>
        <TabPanel>
            <OrderTab items={newarrival}></OrderTab>
        </TabPanel>
        <TabPanel>
            <OrderTab items={bestseller}></OrderTab>
        </TabPanel>
        <TabPanel>
            <OrderTab items={toprated}></OrderTab>
        </TabPanel>
      </Tabs>
         </div>
        </div>
    );
};

export default ProductOrder;