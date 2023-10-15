import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
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
    console.log(data);
    reset();
  };
  return (
    <Box
      component="form"
      sx={{
        width: 500,
        ml: 60,
        mt: 15,
        boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.6)",
      }}
    >
      <Container>
        <Typography variant="4" gutterBottom="true">
          <span
            style={{ fontSize: "25px", fontWeight: "bold", marginTop: "60px" }}
          >
            Key Skills
          </span>
        </Typography>
        <Divider style={{ marginBottom: "20px" }} />
        <form onSubmit={handleSubmit(onSubmit)}>
          {sections.map((section) => (
            <div key={section.id}>
              <Controller
                name="Skill"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <TextField
                    sx={{mt: 5, ml: 13,heigth:2 , width: 250 }}
                    {...field}
                    label="Skills"
                    variant="outlined"
                    margin="normal"
                  />
                )}
              />
              <IconButton
                onClick={() => removeSection(section.id)}
                sx={{ mt: 8 }}
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
        sx={{ ml: 25, mt: 2 }}
      >
        ADD NEW
      </Button>
      <Box sx={{ ml: 33, mt: 1, mb: 2, p: 2 }}>
        <Button variant="outlined" sx={{ px: 3 }}>
          Back
        </Button>
        <Button variant="contained" sx={{ ml: 2 }}>
          Submit
        </Button>
      </Box>
    </Box>
  );
};
export default Keyskill;
