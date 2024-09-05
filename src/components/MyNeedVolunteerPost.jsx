import { useEffect, useState } from "react";
import useAuth from "../hooks/useAuth";
import axios from "axios";
import { Button, Table } from "flowbite-react";
import UpdateMyPost from "./UpdateMyPost";
import { toast } from "react-toastify";
import { axiosSecure } from "../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const MyNeedVolunteerPost = () => {


    const { user } = useAuth();
    const url = `https://altruist-backend.vercel.app/volunteers?email=${user?.email}`
    const [volunteers, setVolunteers] = useState([]);
    const [selectedPost, setSelectedPost] = useState(null);
    const [showUpdateModal, setShowUpdateModal] = useState(false);




    const handleUpdateClick = (post) => {
        setSelectedPost(post);
        setShowUpdateModal(true);
    };

    useEffect(() => {
        if (user?.email) {
            axios.get(url)
                .then(res => {
                    setVolunteers(res.data);


                })
                .catch(error => {
                    console.error('Error fetching volunteers:', error);
                });
        }
    }, [url, user?.email]);
    const handleDeleteClick = async (id) => {
        try {
            await axiosSecure.delete(`/volunteers/${id}`);
            Swal.fire({
                title: "Are you sure?",
                text: "You won't be able to revert this!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, delete it!"
            }).then((result) => {
                if (result.isConfirmed) {
                    Swal.fire({
                        title: "Deleted!",
                        text: "Your file has been deleted.",
                        icon: "success"
                    });
                }
            });
            setVolunteers((prev) => prev.filter(post => post._id !== id));


        } catch (error) {
            console.error('Error deleting post:', error);
            toast.error("Failed to delete post");
        }
    };
    return (
        <div>
            <h2 className="text-2xl font-bold mb-4 text-center">My Need Volunteer Post</h2>
            {volunteers.length === 0 ? (
                <p>No posts available. Add a post to see it here.</p>
            ) : (
                <Table hoverable className="min-w-full">
                    <Table.Head>
                        <Table.HeadCell>Post Title</Table.HeadCell>
                        <Table.HeadCell>Category</Table.HeadCell>
                        <Table.HeadCell>Location</Table.HeadCell>
                        <Table.HeadCell>Actions</Table.HeadCell>
                    </Table.Head>
                    <Table.Body className="divide-y">
                        {volunteers.map(post => (
                            <Table.Row key={post._id} className="bg-white">
                                <Table.Cell>{post.postTitle}</Table.Cell>
                                <Table.Cell>{post.category}</Table.Cell>
                                <Table.Cell>{post.location}</Table.Cell>
                                <Table.Cell>
                                    <Button className="mr-2" onClick={() => handleUpdateClick(post)}>Update</Button>
                                    <Button onClick={() => handleDeleteClick(post._id)} color="failure">Delete</Button>
                                </Table.Cell>
                            </Table.Row>
                        ))}
                    </Table.Body>
                </Table>
            )}

            {/* Update Post Modal */}
            {selectedPost && (
                <UpdateMyPost
                    volunteer={selectedPost}
                    showModal={showUpdateModal}
                    closeModal={() => setShowUpdateModal(false)}
                />
            )}


        </div>
    );
};

export default MyNeedVolunteerPost;