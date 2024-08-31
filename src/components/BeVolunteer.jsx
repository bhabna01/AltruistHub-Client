/* eslint-disable react/prop-types */
import { useState } from "react";
import useAuth from "../hooks/useAuth";

const BeVolunteer = ({ volunteer, closeModal, user }) => {
    const { thumbnail, postTitle, } = volunteer
    const [suggestion, setSuggestion] = useState("");

    const handleRequest = async () => {
        const requestData = {
            ...volunteer,
            volunteerName: user?.displayName,
            volunteerEmail: user?.email,
            suggestion,
            status: "requested"
        };
    }
    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg max-w-lg w-full max-h-[90vh] overflow-y-auto">
                <h2 className="text-2xl font-bold mb-4">Volunteer Request</h2>
                <div className="grid grid-cols-1 gap-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Thumbnail</label>
                        <img src={volunteer.thumbnail} alt={volunteer.postTitle} className="w-full h-32 object-cover rounded-lg" readOnly />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Post Title</label>
                        <input type="text" value={volunteer.postTitle} className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-700 shadow-sm" readOnly />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Description</label>
                        <textarea value={volunteer.description} className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-700 shadow-sm" readOnly />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Category</label>
                        <input type="text" value={volunteer.category} className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-700 shadow-sm" readOnly />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Location</label>
                        <input type="text" value={volunteer.location} className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-700 shadow-sm" readOnly />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">No. of Volunteers Needed</label>
                        <input type="number" value={volunteer.volunteersNeeded} className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-700 shadow-sm" readOnly />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Deadline</label>
                        <input type="text" value={new Date(volunteer.deadline).toLocaleDateString()} className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-700 shadow-sm" readOnly />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Organizer Name</label>
                        <input type="text" value={volunteer.organizerName} className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-700 shadow-sm" readOnly />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Organizer Email</label>
                        <input type="email" value={volunteer.organizerEmail} className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-700 shadow-sm" readOnly />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Volunteer Name</label>
                        <input type="text" value={user?.displayName} className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-700 shadow-sm" readOnly />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Volunteer Email</label>
                        <input type="email" value={user?.email} className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-700 shadow-sm" readOnly />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Suggestion</label>
                        <textarea value={suggestion} onChange={(e) => setSuggestion(e.target.value)} className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-700 shadow-sm"></textarea>
                    </div>
                </div>
                <div className="mt-4 flex justify-end">
                    <button onClick={closeModal} className="bg-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-400 mr-2">Cancel</button>
                    <button onClick={handleRequest} className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">Request</button>
                </div>
            </div>
        </div>

    );
};

export default BeVolunteer;