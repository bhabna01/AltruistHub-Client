import Lottie from "lottie-react";

import animationData from "../../../public/404.json"
import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
            <Lottie animationData={animationData} loop={true} className="w-1/2 h-auto" />

            <Link href="/" className="mt-6 text-blue-500 underline">Go back to Home</Link>
        </div>
    );
};

export default ErrorPage;