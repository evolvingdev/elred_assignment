import React from "react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import "./Mybio.css";
import TextField from "@mui/material/TextField";
import FindInPageIcon from "@mui/icons-material/FindInPage";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { createBrowserHistory } from "history";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";

function Mybio() {
  let history = createBrowserHistory();
  let about = JSON.parse(localStorage.getItem("data"));
  return (
    <div className="parent">
      <div className="header">
        <ArrowBackIosIcon />
        <div className="text">Bio</div>
      </div>
      <div className="about">
        <h3>About me</h3>
        <Link
          to="/editbio"
          style={{
            textDecoration: "none",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "black",
          }}
        >
          {" "}
          <ModeEditIcon style={{ cursor: "pointer" }} />
        </Link>
      </div>
      <div className="aboutmeContent">
        <TextField
          id="standard-basic"
          label="About me"
          variant="standard"
          disabled
          fullWidth
          value={about.about}
        />
      </div>
      <div className="about">
        <h3>Blood Group</h3>
        <Link
          to="/editbio"
          style={{
            textDecoration: "none",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "black",
          }}
        >
          {" "}
          {about.bloodGroup ? (
            about.bloodGroup
          ) : (
            <span style={{ cursor: "pointer" }}>Select</span>
          )}
        </Link>
      </div>
      <div className="resume">
        <div className="resumeText">
          <FindInPageIcon />
          <h3>Resume</h3>
        </div>
        <div className="seeResume">
          <ArrowForwardIosIcon />
        </div>
      </div>
    </div>
  );
}

export default Mybio;
