import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import "../../styles/blog.css";
import { FaPlus } from "react-icons/fa";
import axios from "axios";

const Blog = () => {
	const currentPath = window.location.pathname;
	const [show, setShow] = useState(false);

  const [formData, setFormData] = useState({
    category: '',
    image: null,
    title: '',
    message: '',
  });

  const handleChange = (e) => {
    if (e.target.type === 'file') {
      setFormData(prevFormData => ({ ...prevFormData, [e.target.name]: e.target.files[0] }));
    } else {
      setFormData(prevFormData => ({ ...prevFormData, [e.target.name]: e.target.value }));
    }
  
    console.log('Updated formData:', formData);
  };
  

	const handleClose = () => setShow(false);
	const HandleModal = () => {
		setShow(true);
	};

	const HandleSubmit = async (e) => {
    e.preventDefault();
    try {
        const formDataToSend = new FormData();
        formDataToSend.append('category', formData.category);
        formDataToSend.append('title', formData.title);
        formDataToSend.append('message', formData.message);
        formDataToSend.append('image', formData.image); // Ensure formData.image is appended

        const response = await axios.post('http://localhost:5500/api/blog', formDataToSend, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
        console.log(response.data);
    } catch (error) {
        console.error('Error:', error.message);
    }
};
	return (
		<div className="container">
			<span className="breadcrumb pt-3 pb-2 text-uppercase px-4">
				Admin{currentPath}
			</span>
			<div className="row">
				<div className="col-md-12">
					<div className="d-flex justify-content-between px-4">
						<div className="search">
							<input type="search" className="form-control" />
						</div>
						<div className="button">
							<button className="btn btn-main" onClick={HandleModal}>
								<FaPlus /> Create Post
							</button>
						</div>
					</div>
					<table className="table-responsive my-4">
						<thead>
							<tr>
								<th>S/N</th>
								<th>Topic</th>
								<th>Creator</th>
								<th>Category</th>
								<th>Date</th>
								<th>Action</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>1</td>
								<td>Science Potentials</td>
								<td>Charles Charles</td>
								<td>PUBLISHING TIPS</td>
								<td>25th March 2023</td>
								<td>
									<span id="pending">Edit</span> <span id="reject">Edit</span>
								</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
			<Modal show={show} onHide={handleClose}>
				<Modal.Header closeButton>
					<h4 className="text-info">Create Post</h4>
				</Modal.Header>
				<Modal.Body>
					<form onSubmit={HandleSubmit} className="form-controls">
						<div>
							<label htmlFor="">Title</label>
							<input type="text" className="form-control" name="title" value={formData.title} onChange={handleChange} />
						</div>
						<div>
							<label htmlFor="">Message</label>
							<textarea cols="30" rows="10" className="form-control" name="message" value={formData.message} onChange={handleChange}></textarea>
						</div>
						<div>
							<label htmlFor="">Category</label>
							<input type="text" className="form-control" name="category" value={formData.category} onChange={handleChange} />
						</div>
						<div className="py-3">
							<label htmlFor="">Image</label>
							<input type="file" className="form-control" name="image" onChange={handleChange} />
						</div>

						<button type="submit" className="btn btn-info">
							Submit
						</button>
					</form>
				</Modal.Body>
			</Modal>
		</div>
	);
};

export default Blog;
