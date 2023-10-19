import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { changeInfo } from '../../redux/slices/education';
import './../../css/education.css';
import { initialState } from '../../redux/slices/education';

const Education = () => {
    const navigate = useNavigate();
    const [formData,setFormData] = useState(initialState);
    const dispatch = useDispatch();
    const education = useSelector(state => state.education);

    const handleChange =(e)=>{
        const {name,value} =e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
        dispatch(changeInfo(formData));
    }
    return (
        <div className='Education-container'>
            <div className='container1'>
                <h4>Education Details</h4>
                <hr />
                <div className='Domain'>
                    <label>Domain:</label>
                    <input type="text" name="domain" onChange={handleChange} />
                </div>
                <div className='university_degree'>
                    <div className='university'>
                        <label>University:</label>
                        <input type="text" name="university" onChange={handleChange} />
                    </div>
                    <div className='Degree'>
                        <label>Degree:</label>
                        <input type="text" name="degree" onChange={handleChange} />
                    </div>
                </div>
                <div className='date_start_end'>
                    <div className='date_start'>
                        <label>Start Year:</label>
                        <input type="date" name="start" onChange={handleChange} />
                    </div>
                    <div className='date_end'>
                        <label>End Year:</label>
                        <input type="date" name="end" onChange={handleChange} />
                    </div>
                </div>
            </div>
            <div className='Education_btn'>
                <button className='Edu_back-btn' onClick={() => navigate('/info')} >Back</button>
                <button className='Edu_next-btn' onClick={() =>{ console.log(education); navigate('/keyskills')}} >Next</button>
            </div>
        </div>
    );
};

export default Education;
