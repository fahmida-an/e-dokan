import { useContext } from "react";
import useAxiosPublic from "./useAxiosPublic";
import { AuthContext } from "../Provider/AuthProvider";
import { useQuery } from "@tanstack/react-query";
const useCart = () => {
    const axiosPublic = useAxiosPublic()
    const {user} = useContext(AuthContext)
    const {data: carts=[], refetch} = useQuery({
            queryKey: ['carts', user?.email],
            queryFn: async () => {
                const res = await axiosPublic.get(`/carts?email=${user.email}`)
                return res.data;
            }
    })
    return [carts, refetch]
};

export default useCart;