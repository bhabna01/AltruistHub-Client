import { useLoaderData } from "react-router-dom";
import SectionHeader from "../../components/SectionHeader";
import { useState } from "react";
import BeVolunteer from "../../components/BeVolunteer";
import useAuth from "../../hooks/useAuth";

const VolunteerDetails = () => {
    const volunteer = useLoaderData();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const { user } = useAuth()
    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    return (
        <div className=" mx-auto  md:p-8">
            <SectionHeader
                title="Volunteer Post Details"
                subtitle="Find meaningful ways to contribute to the community with our volunteer programs."
                className="text-center lg:text-left"
            />
            <div className="mt-4 flex justify-end">
                <button
                    className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    onClick={openModal}
                >
                    Be a Volunteer
                </button>
            </div>

            {isModalOpen && <BeVolunteer user={user} volunteer={volunteer} closeModal={closeModal} />}
            <div className="flex flex-col md:flex-row bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
                <img
                    src={volunteer.thumbnail}
                    alt={volunteer.postTitle}
                    className="w-full md:w-1/2 h-64 object-cover"
                />
                <div className="p-6 flex-1">
                    <h1 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">
                        {volunteer.postTitle}
                    </h1>
                    <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
                        {volunteer.description}
                    </p>
                    <p className="text-base font-medium text-blue-600 dark:text-blue-400 mb-2">
                        Category: {volunteer.category.charAt(0).toUpperCase() + volunteer.category.slice(1)}
                    </p>
                    <p className="text-base text-gray-600 dark:text-gray-300">
                        Location: {volunteer.location}
                    </p>
                    <p className="text-base text-gray-600 dark:text-gray-300">
                        Volunteers Needed: {volunteer.volunteersNeeded}
                    </p>
                    <p className="text-base text-gray-600 dark:text-gray-300">
                        Deadline: {new Date(volunteer.deadline).toLocaleDateString()}
                    </p>
                    <p className="text-base text-gray-600 dark:text-gray-300">
                        Organizer: {volunteer.organizerName} ({volunteer.organizerEmail})
                    </p>
                </div>
            </div>


        </div>
    );
};

export default VolunteerDetails;