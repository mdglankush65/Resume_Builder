import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './../../css/Info.css';
import {
    Avatar,
    Container,
    Button,
    Dialog,
    DialogTitle,
    DialogContent,
} from '@mui/material';

const Profile = ({ profilePhoto }) => {
    return (
        <Container maxWidth="sm" className="profile-container">
            <Avatar alt="User Profile" src={profilePhoto} sx={{ width: 150, height: 150, fontSize: '3rem' }} className="avatar" />
        </Container>
    );
}


function Info() {
    const [formData, setFormData] = useState({
        profilePhoto: '',
        firstName: '',
        lastName: '',
        email: '',
        mobile: '',
        address: '',
        city: '',
        state: '',
        postalCode: '',
        objective: '',
    });

    const [isDialogOpen, setDialogOpen] = useState(false);
    const [selectedImageFile, setSelectedImageFile] = useState(null);

    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleBack = () => {
        navigate('/');
    };

    const handleNext = () => {
        navigate('/education');
    };

    const handleAvatarChange = () => {
        setDialogOpen(true);
    };

    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        setSelectedImageFile(file);
    };

    const handleDialogClose = () => {
        setDialogOpen(false);
        setSelectedImageFile(null);
    };

    const handleApplyProfilePhoto = () => {
        if (selectedImageFile) {
            const reader = new FileReader();
            reader.onload = (e) => {
                setFormData({
                    ...formData,
                    profilePhoto: e.target.result,
                });
                handleDialogClose();
            };
            reader.readAsDataURL(selectedImageFile);
        }
    };

    return (
        <div className="Info">
            <div className="profile-photo-container">
                <Profile profilePhoto={formData.profilePhoto} />
                <Button className="change-avatar" onClick={handleAvatarChange}>
                    Change Profile Photo
                </Button>
            </div>

            <form>
                <div className='first_last_name'>
                    <div>
                        <label htmlFor="firstName">First Name:</label>
                        <input type="text" id="firstName" name="firstName" onChange={handleChange} required />
                    </div>
                    <div>
                        <label htmlFor="lastName">Last Name:</label>
                        <input type="text" id="lastName" name="lastName" onChange={handleChange} required />
                    </div>
                </div>

                <div className='email_mobile'>
                    <div>
                        <label htmlFor="email">Email:</label>
                        <input type="email" id="email" name="email" onChange={handleChange} required />
                    </div>
                    <div>
                        <label htmlFor="mobile">Mobile:</label>
                        <input type="number" id="mobile" name="mobile" onChange={handleChange} required />
                    </div>
                </div>
                <div>
                    <label htmlFor="address">Address:</label>
                    <input type="text" id="address" name="address" onChange={handleChange} required />
                </div>

                <div className='city_state'>
                    <div>
                        <label htmlFor="state">State:</label>
                        <input type="text" id="state" name="state" onChange={handleChange} required />
                    </div>
                    <div>
                        <label htmlFor="city">City:</label>
                        <input type="text" id="city" name="city" onChange={handleChange} required />
                    </div>
                </div>
                <div>
                    <label htmlFor="postalCode">Postal Code:</label>
                    <input type="number" id="postalCode" name="postalCode" onChange={handleChange} required />
                </div>

                <div>
                    <label htmlFor="objective">Objective:</label>
                    <textarea id="objective" name="objective" onChange={handleChange} required></textarea>
                </div>
            </form>

            <div className='back_next'>
                <Button onClick={handleBack}>Cancel</Button>
                <Button onClick={handleNext}>Next</Button>
            </div>


            <Dialog open={isDialogOpen} onClose={handleDialogClose} fullWidth maxWidth="sm">
                <DialogTitle>Update Profile Photo</DialogTitle>
                <DialogContent>
                    <input type="file" accept="image/*" onChange={handleImageUpload} />
                    <Button variant="contained" color="primary" onClick={handleApplyProfilePhoto}>
                        Apply Profile Photo
                    </Button>
                </DialogContent>
            </Dialog>
        </div>
    );
}

export default Info;


