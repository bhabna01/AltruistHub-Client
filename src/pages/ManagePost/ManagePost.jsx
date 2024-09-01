import MyNeedVolunteerPost from "../../components/MyNeedVolunteerPost";
import MyRequestPost from "../../components/MyRequestPost";


const ManagePost = () => {
    return (
        <div className="container mx-auto p-6">
            <h1 className="text-3xl font-bold mb-8 text-center">Manage My Volunteer Posts</h1>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <MyNeedVolunteerPost></MyNeedVolunteerPost>
                <MyRequestPost></MyRequestPost>
            </div>
        </div>
    );
};

export default ManagePost;