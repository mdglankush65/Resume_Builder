import React, { useState } from 'react';
import Experience from './Experience';
import { v4 as uuidv4 } from 'uuid';
import { useNavigate } from 'react-router-dom';
import './../../css/work_exe.css';

let data = [];
const Work_exe = () => {
    const [count, setCount] = useState(0);
    const navigate = useNavigate();
    const addExperience = () => {
        data.push({});
        setCount(count + 1);
    }
    const removeExperience = (index) => {
        data = data.filter((_, i) => i !== index);
        setCount(count-1);
    }
    return (
        <div className='container2'>
            <h1>Work Experience</h1>
            {data.map((value,index)=>{
                return <Experience key={uuidv4()} index={index} value={value} delete={removeExperience} />
            })}
            <div className=' add_remove_btn'>
                <button onClick={addExperience} className='add-btn'>Add New Experience</button>
            </div>
            <div className='next-back_btn'>
                <button className='back-btn' onClick={() => navigate('/keyskills')} >Back</button>
                <button className='next-btn' onClick={() => navigate('/myresumes')} >Next</button>
            </div>
        </div>
    );
};

export default Work_exe;
