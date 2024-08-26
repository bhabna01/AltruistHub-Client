
import img1 from "../../../assets/Banner1.png"
import img2 from "../../../assets/Banner2.png"
import img3 from "../../../assets/Banner3.png"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Fade } from "react-awesome-reveal";

const Banner = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
    return (
        <div className="relative slider-container">
            <Slider {...settings}>
                <div className="relative">
                    <img src={img1} alt="Slide 1" className="w-full h-auto max-h-[500px] object-cover" />
                    <Fade left>
                        <div className="absolute top-1/2 left-4 lg:left-8 transform -translate-y-1/2 text-left max-w-md p-4 bg-opacity-50 bg-black rounded-lg ">
                            <h2 className="text-xl lg:text-3xl font-bold text-white">
                                Empowering Communities
                            </h2>
                            <p className="text-sm lg:text-lg text-gray-200 mt-2 lg:mt-4">
                                Join our mission to connect volunteers with meaningful causes. Together, we can create a positive impact in the community.
                            </p>
                        </div>
                    </Fade>
                </div>
                <div className="relative">
                    <img src={img2} alt="Slide 2" className="w-full h-auto max-h-[500px] object-cover" />
                    <Fade left>
                        <div className="absolute top-1/2 left-4 lg:left-8 transform -translate-y-1/2 text-left max-w-md p-4 bg-opacity-50 bg-black rounded-lg ">
                            <h2 className="text-xl lg:text-3xl font-bold text-white">
                                Make a Difference
                            </h2>
                            <p className="text-sm lg:text-lg text-gray-200 mt-2 lg:mt-4">
                                Discover volunteer opportunities that match your skills and passions. Your contribution can make a world of difference.
                            </p>
                        </div>
                    </Fade>
                </div>
                <div className="relative">
                    <img src={img3} alt="Slide 3" className="w-full h-auto max-h-[500px] object-cover" />
                    <Fade left>
                        <div className="absolute top-1/2 left-4 lg:left-8 transform -translate-y-1/2 text-left max-w-md p-4 bg-opacity-50 bg-black rounded-lg ">
                            <h2 className="text-xl lg:text-3xl font-bold text-white">
                                Connect and Grow
                            </h2>
                            <p className="text-sm lg:text-lg text-gray-200 mt-2 lg:mt-4">
                                Build connections and grow as you volunteer. Engage with others who share your commitment to making a difference.
                            </p>
                        </div>
                    </Fade>
                </div>
            </Slider>
        </div>
    );
};

export default Banner;