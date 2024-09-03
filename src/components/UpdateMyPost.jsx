/* eslint-disable react/prop-types */
import axios from "axios";
import { Button, Modal } from "flowbite-react";
import { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import { toast } from "react-toastify";
import { axiosSecure } from "../hooks/useAxiosSecure";


const UpdateMyPost = ({ volunteer, showModal, closeModal }) => {
    const [formData, setFormData] = useState(volunteer);
    const [deadline, setDeadline] = useState(new Date(volunteer.deadline));

    useEffect(() => {
        setFormData(volunteer);
    }, [volunteer]);
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value
        }));
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axiosSecure.patch(`/volunteers/${volunteer._id}`, formData);

            toast.success("Post updated successfully");
            closeModal();
        } catch (error) {
            console.error('Error updating post:', error);
            toast.error("Failed to update post");
        }
    };
    const handleDateChange = (date) => {
        setDeadline(date);
        setFormData((prev) => ({
            ...prev,
            deadline: date.toISOString() // Convert date to ISO string for submission
        }));
    };

    return (
        <Modal show={showModal} onClose={closeModal} size="lg">
            <Modal.Header>Update Volunteer Post</Modal.Header>
            <Modal.Body>
                <div className="max-h-[70vh] overflow-y-auto">
                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-700">Thumbnail URL</label>
                            <input
                                type="text"
                                name="thumbnail"
                                value={formData.thumbnail}
                                onChange={handleChange}
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-700">Post Title</label>
                            <input
                                type="text"
                                name="postTitle"
                                value={formData.postTitle}
                                onChange={handleChange}
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-700">Description</label>
                            <textarea
                                name="description"
                                value={formData.description}
                                onChange={handleChange}
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-700">Category</label>
                            <input
                                type="text"
                                name="category"
                                value={formData.category}
                                onChange={handleChange}
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-700">Location</label>
                            <input
                                type="text"
                                name="location"
                                value={formData.location}
                                onChange={handleChange}
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-700">No. of Volunteers Needed</label>
                            <input
                                type="number"
                                name="volunteersNeeded"
                                value={formData.volunteersNeeded}
                                onChange={handleChange}
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-700">Deadline</label>
                            <DatePicker
                                selected={deadline}
                                onChange={handleDateChange}
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                dateFormat="yyyy-MM-dd"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-700">Organizer Name</label>
                            <input
                                type="text"
                                name="organizerName"
                                value={formData.organizerName}
                                readOnly
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm bg-gray-100 cursor-not-allowed sm:text-sm"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-700">Organizer Email</label>
                            <input
                                type="email"
                                name="organizerEmail"
                                value={formData.organizerEmail}
                                readOnly
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm bg-gray-100 cursor-not-allowed sm:text-sm"
                            />
                        </div>
                        <Button type="submit">Update Post</Button>
                    </form>
                </div>
            </Modal.Body>
        </Modal>
    );
};

export default UpdateMyPost;