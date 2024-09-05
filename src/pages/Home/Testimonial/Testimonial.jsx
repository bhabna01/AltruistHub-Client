import { useEffect, useState } from "react";
import SectionHeader from "../../../components/SectionHeader";
import { motion } from 'framer-motion';
import axios from "axios";
const Testimonial = () => {
    const [testimonials, setTestimonials] = useState([]);

    useEffect(() => {
        const fetchTestimonials = async () => {
            try {
                const response = await axios.get('https://altruist-backend.vercel.app/testimonials');
                setTestimonials(response.data);
            } catch (error) {
                console.error('Error fetching testimonials:', error);
            }
        };

        fetchTestimonials();
    }, []);
    return (
        <div className="mt-10">
            <SectionHeader
                title="What Our Volunteers Say"
                subtitle="Hear from those who have made a difference through our volunteer programs."
            />
            <section className="bg-gray-100 py-12">
                <div className="container mx-auto px-4">

                    <div className="flex flex-wrap justify-center">
                        {testimonials.map((testimonial, index) => (
                            <motion.div
                                key={index}
                                className="max-w-xs mx-4 my-4 p-6 bg-white shadow-lg rounded-lg"
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5 }}
                            >
                                <img
                                    src={testimonial.img}
                                    alt={testimonial.name}
                                    className="w-16 h-16 rounded-full mb-4 mx-auto"
                                />
                                <h3 className="text-xl font-semibold text-center mb-2">{testimonial.name}</h3>
                                <p className="text-gray-600 text-center mb-4">{testimonial.role}</p>
                                <p className="text-gray-800 text-center">{testimonial.testimonial}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

        </div>
    );
};

export default Testimonial;