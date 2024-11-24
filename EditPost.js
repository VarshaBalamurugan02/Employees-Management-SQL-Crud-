import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const EditPost = () => {
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        const fetchPost = async () => {
            try {
                const res = await axios.get(`http://localhost:3001/getpost/${id}`);
                setEmail(res.data[0].title);
                setAddress(res.data[0].body);
            } catch (err) {
                console.error(err);
            }
        };
        fetchPost();
    }, [id]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.put(`http://localhost:3001/updatepost/${id}`, { title: email, body: address });
            navigate('/'); // Redirect to the posts list page
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-header">
                            <h3>Edit Delivery Address</h3>
                        </div>
                        <div className="card-body">
                            <form onSubmit={handleSubmit}>
                                <div className="form-group">
                                    <label htmlFor="email">Email</label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        id="email"
                                        placeholder="Edit your email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="address">Address</label>
                                    <textarea
                                        className="form-control"
                                        id="address"
                                        rows="5"
                                        placeholder="Edit your address"
                                        value={address}
                                        onChange={(e) => setAddress(e.target.value)}
                                    />
                                </div>
                                <button type="submit" className="btn btn-primary mt-3">
                                    Update Address
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EditPost;
