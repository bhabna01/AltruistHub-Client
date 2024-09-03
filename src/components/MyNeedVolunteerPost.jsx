import { useEffect, useState } from "react";
import useAuth from "../hooks/useAuth";
import axios from "axios";
import { Button, Modal, Table } from "flowbite-react";
import UpdateMyPost from "./UpdateMyPost";
import { toast } from "react-toastify";
import { axiosSecure } from "../hooks/useAxiosSecure";


const MyNeedVolunteerPost = () => {
    const { user } = useAuth();
    const url = `http://localhost:5000/volunteers?email=${user?.email}`
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
                    console.log(res.data)

                })
                .catch(error => {
                    console.error('Error fetching volunteers:', error);
                });
        }
    }, [url, user?.email]);
    const handleDeleteClick = async (id) => {
        try {
            await axiosSecure.delete(`/volunteers/${id}`);
            setVolunteers((prev) => prev.filter(post => post._id !== id));
            toast.success("Post deleted successfully");
        } catch (error) {
            console.error('Error deleting post:', error);
            toast.error("Failed to delete post");
        }
    };
    return (
        <div>
            <h2 className="text-2xl font-bold mb-4">My Need Volunteer Post</h2>
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

            {/* Delete Confirmation Modal */}
            <Modal  >
                <Modal.Header>Delete Volunteer Post</Modal.Header>
                <Modal.Body>
                    <p>Are you sure you want to delete this post?</p>
                </Modal.Body>
                <Modal.Footer>
                    <Button color="failure">Delete</Button>
                    <Button >Cancel</Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default MyNeedVolunteerPost;