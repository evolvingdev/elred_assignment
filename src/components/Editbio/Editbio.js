import React, { useState, useEffect } from "react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import "./Editbio.css";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
function Editbio() {
  const [data, setData] = useState({
    about: "",
    bloodGroup: "",
  });

  const handleChange = (event) => {
    setData({ ...data, bloodGroup: event.target.value });
  };
  let details = JSON.parse(localStorage.getItem("data"));

  useEffect(() => {
    setData({
      about: details.about,
      bloodGroup: details.bloodGroup,
    });
  }, [details.about, details.bloodGroup]);

  return (
    <div className="parent">
      <div className="header">
        <Link
          to="/"
          style={{
            textDecoration: "none",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "black",
          }}
        >
          <ArrowBackIosIcon />
          <div className="text">Bio</div>
        </Link>
      </div>
      <div className="aboutMeSection">
        <span className="text">Write something about yourself?</span>
        <TextField
          id="outlined-multiline-static"
          label="Write something..."
          multiline
          rows={4}
          onChange={(e) => {
            setData({
              ...data,
              about: e.target.value,
            });
          }}
          value={data.about}
          maxLength={500}
        />
      </div>
      <div className="fileUploadSection">
        <Button variant="contained" component="label" color="warning">
          Upload Resume
          <input type="file" hidden />
        </Button>
      </div>
      <div className="bloodGroupSection">
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Age</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={data.bloodGroup}
            label="Blood Group"
            onChange={handleChange}
          >
            <MenuItem value="A Positive">A Positive</MenuItem>
            <MenuItem value="B Positive">B Positive</MenuItem>
            <MenuItem value="C Positive">O Positive</MenuItem>
          </Select>
        </FormControl>
      </div>
      <Link
        to="/"
        style={{
          textDecoration: "none",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "black",
        }}
      >
        <div
          className="button"
          onClick={() => {
            localStorage.setItem("data", JSON.stringify(data));
          }}
        >
          Save
        </div>
      </Link>
    </div>
  );
}

export default Editbio;
