import {useQuery} from "@tanstack/react-query"
import useAxiosPublic from "./useAxiosPublic";

const useCollection = () => {
    const axiosPublic = useAxiosPublic()
    const {data: collection=[], refetch} = useQuery({
        queryKey: ['collection'],
        queryFn: async () => {
            const res = await axiosPublic.get('/collection');
            return res.data;
        }
    })
    return [collection, refetch]
};

export default useCollection;