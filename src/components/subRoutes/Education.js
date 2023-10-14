import React from 'react';
import './../../css/education.css';

const Education = () => {
    return (
        <div className='Education-container'>
            <div className='container1'>
                <h4>Education Details</h4>
                <hr />
                <div className='Domain'>
                    <label>Domain:</label>
                    <input type="text" name="domain" />
                </div>
                <div className='university_degree'>
                    <div className='university'>
                        <label>University:</label>
                        <input type="text" name="university" />
                    </div>
                    <div className='Degree'>
                        <label>Degree:</label>
                        <input type="text" name="Degree" />
                    </div>
                </div>
                <div className='date_start_end'>
                    <div className='date_start'>
                        <label>Start Year:</label>
                        <input type="date" name="startYear1" />
                    </div>
                    <div className='date_end'>
                        <label>End Year:</label>
                        <input type="date" name="endYear1" />
                    </div>
                </div>
            </div>
            <div className='Education_btn'>
                <button className='Edu_back-btn'>Back</button>
                <button className='Edu_next-btn'>Next</button>
            </div>
        </div>
    );
};

export default Education;
