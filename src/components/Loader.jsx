import Lottie from "lottie-react";

import animationData from "../../public/Loading.json"
const Loader = () => {
    return (
        <div className="flex items-center justify-center h-screen bg-white">
            <Lottie animationData={animationData} loop={true} className="w-1/2 h-auto" />
        </div>
    );
};

export default Loader;