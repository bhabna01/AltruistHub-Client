import { Button, Card } from "flowbite-react";
import useVolunteers from "../../../hooks/useVolunteers";
import { Link } from "react-router-dom";


const VolunteerNeed = () => {
    const volunteers = useVolunteers()
    console.log(volunteers)
    return (
        <div className="p-4">
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-6">
                Volunteer Needs Now
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {volunteers.map((volunteers) => (
                    <Card key={volunteers._id} imgSrc={volunteers.thumbnail}>
                        <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                            {volunteers.postTitle}
                        </h5>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                            Category: {volunteers.category}
                        </p>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                            Deadline: {new Date(volunteers.deadline).toLocaleDateString()}
                        </p>
                        <Link to={`/volunteer/${volunteers._id}`}>
                            <Button color="blue">View Details</Button>
                        </Link>
                    </Card>
                ))}
            </div>
            <div className="mt-8 text-center">
                <Link to="/need-volunteer">
                    <Button color="gray" pill>
                        See All
                    </Button>
                </Link>
            </div>
        </div>
    );
};

export default VolunteerNeed;