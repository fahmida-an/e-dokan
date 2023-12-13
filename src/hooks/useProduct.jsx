import useAxiosPublic from "./useAxiosPublic";
import {useQuery} from "@tanstack/react-query"
const useProduct = () => {
    const axiosPublic = useAxiosPublic();
    const {data: product=[], isPending:loading, refetch}= useQuery({
        queryKey: ['product'],
        queryFn: async() => {
            const res = await axiosPublic.get('/product');
            return res.data;
        }
    })
    console.log(product);
    return [product, loading, refetch]
};

export default useProduct;