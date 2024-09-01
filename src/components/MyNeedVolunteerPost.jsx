import { useEffect, useState } from "react";
import useAuth from "../hooks/useAuth";
import axios from "axios";


const MyNeedVolunteerPost = () => {
    const { user } = useAuth();
    const url = `http://localhost:5000/volunteers?email=${user?.email}`
    const [volunteers, setVolunteers] = useState([]);

    useEffect(() => {
        if (user?.email) {
            axios.get(url)
                .then(res => {
                    setVolunteers(res.data);

                })
                .catch(error => {
                    console.error('Error fetching volunteers:', error);
                });
        }
    }, [url, user?.email]);
    return (
        <div>

        </div>
    );
};

export default MyNeedVolunteerPost;