import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm, Controller } from "react-hook-form";
// import {add,remove} from '../../redux/slices/keyskills';
// import {useSelector, useDispatch} from 'react-redux';
import {
  Button,
  TextField,
  Box,
  Container,
  Typography,
  IconButton,
  Divider,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
const Keyskill = () => {
  const navigate = useNavigate();
  const { control, handleSubmit, reset } = useForm();
  const [sections, setSections] = useState([{ id: 1, field: "Experience1" }]);
  const addNewSection = () => {
    const changeid = sections.length + 1;
    setSections([...sections, { id: changeid, field: "" }]);
  };
  const removeSection = (id) => {
    const changeSection = sections.filter((section) => section.id !== id);
    setSections(changeSection);
  };
  const onSubmit = (data) => {
    reset();
  };
  return (
    <Box
      sx={{
        width: 500,
        ml: 52,
        mt: 15,
        boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.3)",
      }}
    >
      <Container>
        <Typography variant="4" gutterBottom={true}>
          <span
            style={{ fontSize: "25px", fontWeight: "bold", marginTop: "60px" }}
          >
            Key Skills
          </span>
        </Typography>
        <Divider style={{ marginBottom: "20px" }} />
        <form onSubmit={handleSubmit(onSubmit)}>
          {sections.map((section,index) => (
            <div key={section.id}>
              <Controller
                name={`skills[${index}].skill`}
                control={control}
                defaultValue=""
                render={({ field }) => (
                <TextField
                sx={{ mt: 5, ml: 10, width: 250,
                    "& .MuiInputBase-root": {
                        height: 15
                    }}}
                {...field}
                id="outlined-multiline-flexible"
                label="Skills"
                multiline
                />
                )}
                /> 
              <IconButton
                onClick={() => removeSection(section.id)}
                sx={{ mt: 4 }}
              >
                <DeleteIcon />
              </IconButton>
            </div>
          ))}
        </form>
      </Container>
      <Button
        variant="contained"
        onClick={addNewSection}
        sx={{ ml: 25, mt: 2, px: 2.5, py: 0.5, "&:hover": { backgroundColor: '#65d5ac', } }}
        style={{fontSize:'10px'}}
      >
        ADD NEW
      </Button>
      <Box sx={{ ml: 2, mt: 1, mb: 2, p: 2 }}
      style={{fontSize:'10px'}}>
        <Button variant="outlined" sx={{ px: 2.5, py: 1, "&:hover":{ backgroundColor: '#65d5ac', } }}
          style={{ fontSize: '10px' }} onClick={() => navigate('/education')} >
          Back
        </Button>
        <Button variant="contained" sx={{ ml: 38, px: 2.5, py: 1, "&:hover": { backgroundColor: '#65d5ac', } }}
        style={{fontSize:'10px'}}
        onClick={()=>navigate('/experience')}
        >
          Next
        </Button>
      </Box>
    </Box>
  );
};
export default Keyskill;