import axios from "axios";

export const axiosSecure = axios.create({
    baseURL: "https://altruist-backend.vercel.app",
    withCredentials: true

})
const useAxiosSecure = () => {
    return axiosSecure
};

export default useAxiosSecure;