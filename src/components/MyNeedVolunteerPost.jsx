import { useEffect, useState } from "react";
import useAuth from "../hooks/useAuth";
import axios from "axios";
import { Button, Modal, Table } from "flowbite-react";


const MyNeedVolunteerPost = () => {
    const { user } = useAuth();
    const url = `http://localhost:5000/volunteers?email=${user?.email}`
    const [volunteers, setVolunteers] = useState([]);

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
                                    <Button className="mr-2">Update</Button>
                                    <Button color="failure">Delete</Button>
                                </Table.Cell>
                            </Table.Row>
                        ))}
                    </Table.Body>
                </Table>
            )}

            {/* Update Post Modal */}
            <Modal >
                <Modal.Header>Update Volunteer Post</Modal.Header>
                <Modal.Body>
                    <form >
                        <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-700">Post Title</label>
                            <input
                                type="text"

                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                            />
                        </div>
                        {/* Repeat for other fields: Description, Category, Location, etc. */}
                        <Button type="submit">Update Post</Button>
                    </form>
                </Modal.Body>
            </Modal>

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