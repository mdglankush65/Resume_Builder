import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import './../../css/keyskill.css';

library.add(faTrash);

function Keyskill() {
    const [skills, setSkills] = useState(['', '']);

    const addSkill = () => {
        setSkills([...skills, '']);
    };

    const removeSkill = (index) => {
        const updatedSkills = [...skills];
        updatedSkills.splice(index, 1);
        setSkills(updatedSkills);
    };

    const handleSkillChange = (index, value) => {
        const updatedSkills = [...skills];
        updatedSkills[index] = value;
        setSkills(updatedSkills);
    };

    return (
        <div className='key-container'>
            <h1>Key Skill</h1>
            <hr />

            {skills.map((skill, index) => (
                <div key={index} className='skill-row'>
                    <input
                        type="text"
                        value={skill}
                        onChange={(e) => handleSkillChange(index, e.target.value)}
                    />

                    {index !== 0 && (
                        <button className="remove-button" onClick={() => removeSkill(index)}>
                            <FontAwesomeIcon icon="trash" />
                        </button>
                    )}
                </div>
            ))}
            <div className=' allbutton'>
                <button onClick={addSkill} className='addnewbtn'>Add New</button>
                <div className="button-container">
                    <button className="back">Back</button>
                    <button className="next">Next</button>
                </div>
            </div>
        </div>
    );
}

export default Keyskill;
