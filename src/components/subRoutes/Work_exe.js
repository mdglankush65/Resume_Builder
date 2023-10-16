import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import './../../css/work_exe.css';

const Work_exe = () => {
    const [experienceCount, setExperienceCount] = useState(1);
    const navigate = useNavigate();
    const addExperience = () => {
        setExperienceCount(experienceCount + 1);
    };

    const removeExperience = () => {
        if (experienceCount > 1) {
            setExperienceCount(experienceCount - 1);
        }
    };

    const renderExperiences = () => {
        const experiences = [];

        for (let i = 1; i <= experienceCount; i++) {
            experiences.push(
                <div key={i} className='container1'>
                    <h4>Experience {i}</h4>
                    <hr />
                    <div className='tile_organization'>
                        <div className='tile'>
                            <label>Job Title:</label>
                            <input type="text" name={`jobTitle${i}`} />
                        </div>
                        <div className='organization'>
                            <label>Organization Name:</label>
                            <input type="text" name={`organizationName${i}`} />
                        </div>
                    </div>


                    <div className=' start_end_date'>
                        <div className='start_date'>
                            <label>Start Year:</label>
                            <input type="date" name={`startYear${i}`} />
                        </div>
                        <div className='end_date'>
                            <label>End Year:</label>
                            <input type="date" name={`endYear${i}`} />
                        </div>

                    </div>

                </div>
            );
        }

        return experiences;
    };

    return (
        <div className='container2'>
            <h1>Work Experience</h1>
            {renderExperiences()}
            <div className=' add_remove_btn'>
                <button onClick={addExperience} className='add-btn'>Add New Experience</button>
                <button onClick={removeExperience} className='remove-btn'>Remove Experience</button>
            </div>
            <div className='next-back_btn'>
                <button className='back-btn' onClick={()=>navigate('/keyskills')}>Back</button>
                <button className='next-btn' onClick={()=> navigate('/myresumes')}>Next</button>
            </div>

        </div>
    );
};

export default Work_exe;
