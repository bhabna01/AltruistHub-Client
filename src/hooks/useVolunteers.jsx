import { useEffect, useState } from "react";
import { axiosSecure } from "./useAxiosSecure";
import useAuth from "./useAuth";

const useVolunteers = (searchQuery = '', includeEmail = false) => {
    const [volunteers, setVolunteers] = useState([]);
    const { user } = useAuth()// Assuming you're using AuthContext to get the user

    useEffect(() => {
        const params = { search: searchQuery };
        if (includeEmail && user?.email) {
            params.email = user.email;
        }

        axiosSecure('/volunteers', { params })
            .then(res => setVolunteers(res.data))
            .catch(err => console.error("Failed to fetch volunteers:", err));
    }, [searchQuery, includeEmail, user?.email]);

    return volunteers;
};

export default useVolunteers;