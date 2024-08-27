import { useEffect, useState } from "react";
import { axiosSecure } from "./useAxiosSecure";


const useVolunteers = () => {
    const [volunteers, setVolunteers] = useState([])
    useEffect(() => {
        axiosSecure('/volunteers')
            .then(res => setVolunteers(res.data))
    }, [])
    return volunteers
};

export default useVolunteers;