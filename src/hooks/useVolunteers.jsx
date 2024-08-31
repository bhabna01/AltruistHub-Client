import { useEffect, useState } from "react";
import { axiosSecure } from "./useAxiosSecure";


const useVolunteers = (searchQuery = '') => {
    const [volunteers, setVolunteers] = useState([])
    useEffect(() => {
        axiosSecure('/volunteers', {
            params: { search: searchQuery }
        })
            .then(res => setVolunteers(res.data))
    }, [searchQuery])

    return volunteers
};

export default useVolunteers;