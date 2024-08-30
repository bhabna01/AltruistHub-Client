import { useState } from "react";
import { useForm } from "react-hook-form";
import { axiosSecure } from "../../hooks/useAxiosSecure";
import useAuth from "../../hooks/useAuth";
import { toast } from "react-toastify";
import DatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.css';


const AddVolunteer = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const [deadline, setDeadline] = useState(null);
    const { user } = useAuth()
    const onSubmit = async (data) => {
        const postData = {
            ...data,
            deadline,
            organizerName: user?.displayName,
            organizerEmail: user?.email,
        };

        try {
            await axiosSecure.post('/volunteers', postData);

            toast.success('Volunteer post added successfully!');
            reset();

        } catch (error) {
            console.error('Error adding volunteer post:', error); // Detailed error logging
            toast.error(`Failed to add post: ${error.response?.data?.message || error.message}`);
        }
    };
    return (
        <div className="max-w-3xl mx-auto p-8 bg-white shadow-md rounded-lg">
            <h2 className="text-2xl font-bold mb-6">Add Volunteer Post</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                {/* Thumbnail */}
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">Thumbnail</label>
                    <input
                        type="text"
                        {...register('thumbnail', { required: true })}
                        placeholder="Enter image URL"
                        className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                    />
                </div>

                {/* Post Title */}
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">Post Title</label>
                    <input
                        type="text"
                        {...register('postTitle', { required: true })}
                        placeholder="Post Title"
                        className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                    />
                </div>

                {/* Description */}
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">Description</label>
                    <textarea
                        {...register('description', { required: true })}
                        placeholder="Description"
                        className="mt-1 block w-full border border-gray-300 rounded-md p-2 h-24"
                    />
                </div>

                {/* Category */}
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">Category</label>
                    <select
                        {...register('category', { required: true })}
                        className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                    >
                        <option value="healthcare">Healthcare</option>
                        <option value="education">Education</option>
                        <option value="social service">Social Service</option>
                        <option value="animal welfare">Animal Welfare</option>
                    </select>
                </div>

                {/* Location */}
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">Location</label>
                    <input
                        type="text"
                        {...register('location', { required: true })}
                        placeholder="Location"
                        className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                    />
                </div>

                {/* No. of Volunteers Needed */}
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">No. of Volunteers Needed</label>
                    <input
                        type="number"
                        {...register('volunteersNeeded', { required: true })}
                        placeholder="Number of Volunteers Needed"
                        className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                    />
                </div>

                {/* Deadline */}
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">Deadline</label>
                    <DatePicker
                        selected={deadline}
                        onChange={date => setDeadline(date)}
                        className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                        dateFormat="yyyy/MM/dd"
                    />
                </div>

                {/* Organizer Name */}
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">Organizer Name</label>
                    <input
                        type="text"
                        value={user?.displayName || ''}
                        readOnly
                        className="mt-1 block w-full border border-gray-300 rounded-md p-2 bg-gray-100"
                    />
                </div>

                {/* Organizer Email */}
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">Organizer Email</label>
                    <input
                        type="email"
                        value={user?.email || ''}
                        readOnly
                        className="mt-1 block w-full border border-gray-300 rounded-md p-2 bg-gray-100"
                    />
                </div>

                <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700"
                >
                    Add Post
                </button>
            </form>

        </div>


    );
};

export default AddVolunteer;