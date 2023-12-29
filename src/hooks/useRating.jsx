import useAxiosPublic from "./useAxiosPublic";
import {useQuery} from "@tanstack/react-query"
const useRating = () => {
    const axiosPublic = useAxiosPublic();
    const {data: rating = [], refetch} = useQuery({
        queryKey: ['rating'],
        queryFn: async () => {
            const res = await axiosPublic.get('/rating');
            return res.data;
        }
    })
    return [rating, refetch];
};

export default useRating;