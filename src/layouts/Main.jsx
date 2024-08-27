import { Outlet } from "react-router-dom";
import Navbar from "../shared/Navbar/Navbar";
import Footer from "../shared/Footer/Footer";
import { useEffect, useState } from "react";
import Loader from "../components/Loader";


const Main = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Simulate a loading delay (e.g., fetch data or load assets)
        setTimeout(() => {
            setLoading(false);
        }, 3000); // Adjust the delay as needed
    }, []);
    return (
        <>
            {loading ? (
                <Loader />
            ) : (
                <div >
                    <Navbar></Navbar>
                    <Outlet></Outlet>
                    <Footer></Footer>
                </div>
            )}
        </>
    );
};

export default Main;