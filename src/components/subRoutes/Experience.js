import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import {
  Button,
  TextField,
  MenuItem,
  Select,
  Box,
  Container,
  Typography,
  FormControl,
  FormHelperText,
  InputLabel,
  IconButton,
  Divider,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

const Experience = () => {
  const { control, handleSubmit, reset } = useForm();
  const [age, setage] = React.useState();
  const [sections, setSections] = useState([{ id: 1, field: "Experience1" }]);
  const handleChange = (event) => {
    setage(event.target.value);
  };
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
      sx={{ m: 1, width: 800, height: 500, border: "1px dashed grey" }}
    >
      <Container>
        <Typography variant="4" gutterBottom="true" style={{}} mb={70}>
          <span style={{ fontSize: "25px", fontWeight: "bold" }}>
            Work Experience
          </span>
        </Typography>
        <Divider style={{ marginBottom: "20px" }} />

        <form onSubmit={handleSubmit(onSubmit)}>
          {sections.map((section) => (
            <div key={section.id}>
              <Typography variant="4">
                <span style={{ fontSize: "20px" }}>Experience{section.id}</span>
              </Typography>
              <Divider style={{ marginBottom: "5px" }} />

              <Controller
                name="Job Title"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <TextField
                    sx={{ mt: 5, ml: 6, width: 300 }}
                    {...field}
                    label="Job Title"
                    variant="outlined"
                    margin="normal"
                  />
                )}
              />
              <Controller
                name="Organization Name"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <TextField
                    sx={{ mt: 5, ml: 5, width: 300 }}
                    {...field}
                    label="Organization Name"
                    variant="outlined"
                    margin="normal"
                  />
                )}
              />

              <FormControl sx={{ mt: 5, ml: 6, width: 300 }}>
                <InputLabel id="demo-simple-select-label">
                  Start Year
                </InputLabel>
                <Select
                  LabelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={age}
                  label="age"
                  onChange={handleChange}
                >
                  <MenuItem value={2016}> 2016</MenuItem>
                  <MenuItem value={2017}>2017</MenuItem>
                  <MenuItem value={2018}>2018</MenuItem>
                  <MenuItem value={2019}>2019</MenuItem>
                  <MenuItem value={2020}>2020</MenuItem>
                  <MenuItem value={2021}>2021</MenuItem>
                  <MenuItem value={2022}>2022</MenuItem>
                  <MenuItem value={2023}>2023</MenuItem>
                  <MenuItem value={2024}>2024</MenuItem>
                  <MenuItem value={2025}>2025</MenuItem>
                </Select>
                <FormHelperText>please select the Start year </FormHelperText>
              </FormControl>

              <FormControl sx={{ mt: 5, ml: 5, width: 300 }}>
                <InputLabel id="demo-simple-select-label2">End Year</InputLabel>
                <Select
                  labelId="demo-simple-select-label2"
                  id="demo-simple-select2"
                  value={age}
                  label="age"
                  onChange={handleChange}
                >
                  <MenuItem value={2016}>2016</MenuItem>
                  <MenuItem value={2017}>2017</MenuItem>
                  <MenuItem value={2018}>2018</MenuItem>
                  <MenuItem value={2019}>2019</MenuItem>
                  <MenuItem value={2020}>2020</MenuItem>
                  <MenuItem value={2021}>2021</MenuItem>
                  <MenuItem value={2022}>2022</MenuItem>
                  <MenuItem value={2023}>2023</MenuItem>
                  <MenuItem value={2024}>2024</MenuItem>
                  <MenuItem value={2025}>2025</MenuItem>
                  <MenuItem value={2026}>2026</MenuItem>
                  <MenuItem value={2027}>2027</MenuItem>
                  <MenuItem value={2028}>2028</MenuItem>
                  <MenuItem value={2029}>2029</MenuItem>
                  <MenuItem value={2030}>2030</MenuItem>
                </Select>
                <FormHelperText>please select the end year </FormHelperText>
              </FormControl>

              <IconButton
                onClick={() => removeSection(section.id)}
                sx={{ mt: 15 }}
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
        sx={{ ml: 40, mt: 4 }}
      >
        ADD NEW
      </Button>

      <Button variant="outlined" sx={{ px: 4, ml: 60, mt: 3 }}>
        Back
      </Button>
      <Button variant="contained" sx={{ mx: 2, px: 4, mt: 3 }}>
        Next
      </Button>
    </Box>
  );
};

export default Experience;
