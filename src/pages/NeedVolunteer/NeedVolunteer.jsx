import { Button } from "flowbite-react";
import { Link } from "react-router-dom";
import useVolunteers from "../../hooks/useVolunteers";
import SectionHeader from "../../components/SectionHeader";
import { useState } from "react";

const NeedVolunteer = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const volunteers = useVolunteers(searchQuery)
    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
    };

    const handleSearchClick = () => {

    };
    return (

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

            <SectionHeader
                title="Need Volunteers"
                subtitle="Find meaningful ways to contribute to the community with our volunteer programs."
                className="text-center lg:text-left"
            />
            <div className="relative mt-4 mb-4 lg:mt-0">
                <input
                    type="text"
                    placeholder="Search for volunteer posts..."
                    value={searchQuery}
                    onChange={handleSearchChange}
                    className="bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-300 px-4 py-2 rounded-l-lg border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button
                    onClick={handleSearchClick}
                    className="bg-blue-600 text-white px-4 py-2 rounded-r-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                    Search
                </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {volunteers.map((volunteer) => (
                    <div
                        key={volunteer._id}
                        className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden flex flex-col"
                    >
                        <img
                            src={volunteer.thumbnail}
                            alt={volunteer.postTitle}
                            className="h-48 w-full object-cover"
                        />
                        <div className="p-4 flex-1 flex flex-col justify-between">
                            <div className="p-4 bg-white dark:bg-gray-800 rounded-lg">
                                <h5 className="text-2xl font-bold tracking-wide text-gray-900 dark:text-white mb-3">
                                    {volunteer.postTitle}
                                </h5>
                                <p className="text-base font-medium text-blue-600 dark:text-blue-400 mb-2">
                                    Category: {volunteer.category.charAt(0).toUpperCase() + volunteer.category.slice(1)}
                                </p>
                                <p className="text-sm text-gray-600 dark:text-gray-300">
                                    Deadline: {new Date(volunteer.deadline).toLocaleDateString()}
                                </p>
                            </div>

                            <div className="mt-4 flex justify-end">
                                <Link to={`/volunteer/${volunteer._id}`}>
                                    <Button color="blue">View Details</Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>

    );
};

export default NeedVolunteer;