import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import useAuth from "../../hooks/useAuth";
import Lottie from "lottie-react";
import animationData from "../../../public/Login.json"
import { GoogleAuthProvider } from "firebase/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Login = () => {
    const { register, handleSubmit, } = useForm();
    const { signIn, googleLogin } = useAuth();
    const googleProvider = new GoogleAuthProvider();
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || '/';
    const onSubmit = async (data) => {
        try {
            await signIn(data.email, data.password);

            toast.success('Successfully logged in!');
            navigate(from, { repalce: true });
            // eslint-disable-next-line no-unused-vars
        } catch (error) {
            toast.error('Login failed! Please check your email and password.');
        }
    };

    const handleGoogleLogin = async () => {
        try {
            await googleLogin(googleProvider);

            toast.success('Successfully logged in with Google!');


            navigate(from, { repalce: true });
            // eslint-disable-next-line no-unused-vars
        } catch (error) {
            toast.error('Google login failed!');
        }
    };

    return (
        <div className="flex flex-col md:flex-row items-center justify-center h-screen bg-gradient-to-r from-blue-50 to-blue-100">
            <div className="w-full md:w-1/2 h-full flex items-center justify-center p-4">
                <Lottie animationData={animationData} height="100%" width="100%" />
            </div>
            <div className="w-full md:w-1/2 h-full flex items-center justify-center p-4">
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 bg-white shadow-lg rounded-lg p-8 max-w-md w-full">
                    <h2 className="text-3xl font-extrabold text-center text-blue-600 mb-6">Login to Your Account</h2>
                    <div className="space-y-4">
                        <input
                            {...register('email')}
                            type="email"
                            placeholder="Email"
                            required
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
                        Login
                    </button>
                    <button
                        type="button"
                        onClick={handleGoogleLogin}
                        className="w-full p-3 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-all duration-300"
                    >
                        Login with Google
                    </button>
                    <p className="text-center text-gray-600">Dont have an account? <Link to="/register" className="text-blue-500 hover:text-blue-600">Register</Link></p>
                </form>
            </div>

        </div>
    );
};

export default Login;