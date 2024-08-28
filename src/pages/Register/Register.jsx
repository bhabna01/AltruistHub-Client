import { useForm } from "react-hook-form";
import useAuth from "../../hooks/useAuth";
import { toast } from "react-toastify";
import Lottie from "lottie-react";
import animationData from "../../../public/Login.json"
import { Link } from "react-router-dom";
const Register = () => {
    const { register, handleSubmit, watch } = useForm();
    const { createUser } = useAuth();
    const password = watch('password');

    const onSubmit = async (data) => {
        if (!/^(?=.*[a-z])(?=.*[A-Z]).{6,}$/.test(password)) {
            toast.error('Password must have an uppercase letter, a lowercase letter, and be at least 6 characters long.');
            return;
        }

        try {
            await createUser(data.email, data.password);
            toast.success('Successfully registered!');
        } catch (error) {
            toast.error('Registration failed!');
        }
    };
    return (

        <div className="flex flex-col md:flex-row items-center justify-center h-screen overflow-hidden">
            <div className="w-full md:w-1/2 h-full flex items-center justify-center p-4">
                <Lottie animationData={animationData} height="100%" width="100%" />
            </div>
            <div className="w-full md:w-1/2 h-full flex items-center justify-center p-4">
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 bg-white shadow-lg rounded-lg p-8 max-w-md w-full">
                    <h2 className="text-3xl font-extrabold text-center text-blue-600 mb-6">Create Your Account</h2>
                    <div className="space-y-4">
                        <input
                            {...register('name')}
                            type="text"
                            placeholder="Name"
                            required
                            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
                        />
                        <input
                            {...register('email')}
                            type="email"
                            placeholder="Email"
                            required
                            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
                        />
                        <input
                            {...register('photoURL')}
                            type="text"
                            placeholder="Photo URL (Optional)"
                            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
                        />
                        <input
                            {...register('password')}
                            type="password"
                            placeholder="Password"
                            required
                            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full p-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-all duration-300"
                    >
                        Register
                    </button>
                    <p className="text-center text-gray-600">Already have an account? <Link to="/login" className="text-blue-500 hover:text-blue-600">Login</Link></p>
                </form>
            </div>

        </div>

    );
};

export default Register;