import React, { useState } from "react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import "./Editinfo.css";
import { Link } from "react-router-dom";
import { Chip } from "@mui/material";
function Editinfo() {
  let skills = JSON.parse(localStorage.getItem("skills"));
  let subjects = JSON.parse(localStorage.getItem("subjects"));
  let hobbies = JSON.parse(localStorage.getItem("hobbies"));

  const [skillsState, setSkillsState] = useState(skills);
  const [subjectsState, setSubjectsState] = useState(subjects);
  const [hobbiesState, setHobbiesState] = useState(hobbies);

  const handleDeleteSkills = (value) => {
    let arr = [...skillsState];
    let obj = arr.find((o) => o.value === value);
    console.log(obj);

    const index = arr.indexOf(obj);
    console.log(index);
    if (index > -1) {
      arr.splice(index, 1);
      console.log(arr);
      setSkillsState(arr);
    }
  };
  const handleDeleteHobbies = (value) => {
    let arr = [...hobbiesState];
    let obj = arr.find((o) => o.value === value);
    console.log(obj);

    const index = arr.indexOf(obj);
    console.log(index);
    if (index > -1) {
      arr.splice(index, 1);
      console.log(arr);
      setHobbiesState(arr);
    }
  };
  const handleDeleteSubjects = (value) => {
    let arr = [...subjectsState];
    let obj = arr.find((o) => o.value === value);
    console.log(obj);

    const index = arr.indexOf(obj);
    console.log(index);
    if (index > -1) {
      arr.splice(index, 1);
      console.log(arr);
      setSubjectsState(arr);
    }
  };
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
      <div className="chipContainer">
        <div className="inputContainer">
          <h3>Skills</h3>
          <div className="chipInput">
            {skillsState.map((item, idx) => {
              return (
                <Chip
                  label={item.value}
                  color="primary"
                  style={{ width: "25%", margin: "5px" }}
                  onDelete={() => handleDeleteSkills(item.value)}
                />
              );
            })}
          </div>
        </div>

        <div className="inputContainer">
          <h3>Hobbies</h3>
          <div className="chipInput">
            {hobbiesState.map((item, idx) => {
              return (
                <Chip
                  label={item.value}
                  color="primary"
                  style={{ width: "25%", margin: "5px" }}
                  onDelete={() => handleDeleteHobbies(item.value)}
                />
              );
            })}
          </div>
        </div>
        <div className="inputContainer">
          <h3>Subjects</h3>
          <div className="chipInput">
            {subjectsState.map((item, idx) => {
              return (
                <Chip
                  label={item.value}
                  color="primary"
                  style={{ width: "25%", margin: "5px" }}
                  onDelete={() => handleDeleteSubjects(item.value)}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Editinfo;
