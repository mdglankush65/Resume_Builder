import React,{useState} from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { update } from '../../redux/slices/experience';
import {startState} from './../../redux/slices/experience';
import './../../css/work_exe.css';
import DeleteIcon from "@mui/icons-material/Delete";
import { IconButton } from "@mui/material";

const Experience = (props) => {
    const dispatch = useDispatch();
    const information = useSelector(state=>state.experience);
    const [formData, setFormData] = useState(startState);
    
    const handlechange=async (e)=>{
        const { name, value } = e.target;
        setFormData({
        ...formData,
            [name]: value,
        });
        dispatch(update({ key: props.index, value: formData }));

        // dispatch(update({[props.index]:formData}));
        console.log(information);
    }
    return (
        <div key={props.index} className='container1'>
            <h4>Experience {props.index+1}</h4>
            <hr />
            <div className='tile_organization'>
                <div className='tile'>
                    <label>Job Title:</label>
                    <input type="text" name={'title'} onChange={handlechange} />
                </div>
                <div className='organization'>
                    <label>Organization Name:</label>
                    <input type="text" name={'organization'} onChange={handlechange} />
                </div>
            </div>
            <div className=' start_end_date'>
                <div className='start_date'>
                    <label>Start Year:</label>
                    <input type="date" name={'start'} onSelect={handlechange} />
                </div>
                <div className='end_date'>
                    <label>End Year:</label>
                    <input type="date" name={'end'} onSelect={handlechange} />
                </div>
            </div>
            <IconButton
                onClick={()=>props.delete(props.index)}
                sx={{ mt: 2 }}
            >
                <DeleteIcon />
            </IconButton>
        </div>
    )
}

export default Experience
