import { Button } from "flowbite-react";
import useVolunteers from "../../../hooks/useVolunteers";
import { Link } from "react-router-dom";
import SectionHeader from "../../../components/SectionHeader";


const VolunteerNeed = () => {
    const volunteers = useVolunteers()
    console.log(volunteers)
    return (
        <div className="p-4 mt-10 dark:bg-gray-800">
            <SectionHeader
                title=" Volunteer Needs Now "
                subtitle="Find meaningful ways to contribute to the community with our volunteer programs."
            />
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
                            {/* <div>
                                <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white mb-2">
                                    {volunteer.postTitle}
                                </h5>
                                <p className="text-sm text-gray-500 dark:text-gray-400">
                                    Category: {volunteer.category}
                                </p>
                                <p className="text-sm text-gray-500 dark:text-gray-400">
                                    Deadline: {new Date(volunteer.deadline).toLocaleDateString()}
                                </p>
                            
                            </div> */}
                            <div className="p-4 bg-white dark:bg-gray-800 rounded-lg ">
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
            <div className="mt-8 text-center flex justify-center">
                <Link to="/need-volunteer">
                    <Button color="blue" pill>
                        See All
                    </Button>
                </Link>
            </div>
        </div>


    );
};

export default VolunteerNeed;