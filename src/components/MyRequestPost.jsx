import { useEffect, useState } from "react";
import { axiosSecure } from "../hooks/useAxiosSecure";
import { toast } from "react-toastify";
import useAuth from "../hooks/useAuth";
import { Button, Modal, Table } from "flowbite-react";


const MyRequestPost = () => {
    const [posts, setPosts] = useState([]);
    const [selectedPost, setSelectedPost] = useState(null);
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const { user } = useAuth();
    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const { data } = await axiosSecure.get(`/volunteer-request?email=${user?.email}`);
                setPosts(data);
            } catch (error) {
                console.error("Error fetching posts:", error);
                toast.error("Failed to load posts.");
            }
        };
        fetchPosts();
    }, [user?.email]);
    const handleDeleteClick = (post) => {
        setSelectedPost(post);
        setShowDeleteModal(true);
    };

    const handleDeleteConfirm = async () => {
        try {
            await axiosSecure.delete(`/volunteer-request/${selectedPost._id}`);
            setPosts(posts.filter(p => p._id !== selectedPost._id));
            setShowDeleteModal(false);
            toast.success("Request canceled successfully.");
        } catch (error) {
            console.error("Error deleting post:", error);
            toast.error("Failed to cancel request.");
        }
    };


    return (
        <div>
            <h2 className="text-2xl font-bold mb-4 text-center">My Volunteer Request Post</h2>
            {posts.length === 0 ? (
                <p>No volunteer requests available.</p>
            ) : (
                <Table hoverable className="min-w-full">
                    <Table.Head>
                        <Table.HeadCell>Post Title</Table.HeadCell>
                        <Table.HeadCell>Status</Table.HeadCell>
                        <Table.HeadCell>Actions</Table.HeadCell>
                    </Table.Head>
                    <Table.Body className="divide-y">
                        {posts.map(post => (
                            <Table.Row key={post._id} className="bg-white">
                                <Table.Cell>{post.postTitle}</Table.Cell>
                                <Table.Cell>{post.status}</Table.Cell>
                                <Table.Cell>
                                    <Button onClick={() => handleDeleteClick(post)} color="failure">Cancel</Button>
                                </Table.Cell>
                            </Table.Row>
                        ))}
                    </Table.Body>
                </Table>
            )}
            {/* Delete Confirmation Modal */}
            <Modal show={showDeleteModal} onClose={() => setShowDeleteModal(false)}>
                <Modal.Header>Cancel Volunteer Request</Modal.Header>
                <Modal.Body>
                    <p>Are you sure you want to cancel this request?</p>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={handleDeleteConfirm} color="failure">Cancel</Button>
                    <Button onClick={() => setShowDeleteModal(false)}>Close</Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default MyRequestPost;