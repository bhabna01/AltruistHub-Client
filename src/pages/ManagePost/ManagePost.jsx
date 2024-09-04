import MyNeedVolunteerPost from "../../components/MyNeedVolunteerPost";
import MyRequestPost from "../../components/MyRequestPost";
import SectionHeader from "../../components/SectionHeader";


const ManagePost = () => {
    return (
        <div className="container mx-auto p-6">
            <SectionHeader
                title="Manage My Volunteer Posts"
                subtitle="Keep track of and update the volunteer opportunities you've created."
            />
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <MyNeedVolunteerPost></MyNeedVolunteerPost>
                <MyRequestPost></MyRequestPost>
            </div>
        </div>
    );
};

export default ManagePost;