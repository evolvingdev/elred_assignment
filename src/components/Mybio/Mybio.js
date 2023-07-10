import React, { useState, useEffect } from "react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import "./Mybio.css";
import TextField from "@mui/material/TextField";
import FindInPageIcon from "@mui/icons-material/FindInPage";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import CloseIcon from "@mui/icons-material/Close";
import { Link } from "react-router-dom";
import Chip from "@mui/material/Chip";
import axios from "axios";
import { Global } from "@emotion/react";
import { styled } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { grey } from "@mui/material/colors";
import Box from "@mui/material/Box";
import Skeleton from "@mui/material/Skeleton";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import StarIcon from "@mui/icons-material/Star";
const drawerBleeding = 16;

const Root = styled("div")(({ theme }) => ({
  height: "100%",
  backgroundColor:
    theme.palette.mode === "light"
      ? grey[100]
      : theme.palette.background.default,
}));

const StyledBox = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "light" ? "#fff" : grey[800],
}));



function Mybio() {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };
  let about = JSON.parse(localStorage.getItem("data"));
  const [skills, setSkills] = useState([]);
  const [hobbies, setHobbies] = useState([]);
  const [favoriteSubject, setFvoriteSubject] = useState([]);
  const [ethicalCodeOfConduct, setEthicalCodeOfConduct] = useState([]);
  const [virtuallyMet, setVirtuallyMet] = useState([]);
  const [isEcoc, setIsEcoc] = useState(true);
  useEffect(() => {
    axios
      .get(
        "https://newpublicbucket.s3.us-east-2.amazonaws.com/reactLiveAssignment/JsonFiles/GetProfessionalSkillsResponse.json"
      )
      .then(function (response) {
        // handle success
        console.log(response);
        setSkills(response.data.result[0].skills);
        localStorage.setItem(
          "skills",
          JSON.stringify(response.data.result[0].skills)
        );
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .finally(function () {
        // always executed
      });
    axios
      .get(
        "https://newpublicbucket.s3.us-east-2.amazonaws.com/reactLiveAssignment/JsonFiles/GetHobbiesResponse.json"
      )
      .then(function (response) {
        // handle success
        console.log(response);
        setHobbies(response.data.result[0].hobbies);
        localStorage.setItem(
          "hobbies",
          JSON.stringify(response.data.result[0].hobbies)
        );
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .finally(function () {
        // always executed
      });
    axios
      .get(
        "https://newpublicbucket.s3.us-east-2.amazonaws.com/reactLiveAssignment/JsonFiles/GetSubjectsResponse.json"
      )
      .then(function (response) {
        // handle success
        console.log(response);
        setFvoriteSubject(response.data.result[0].subjects);
        localStorage.setItem(
          "subjects",
          JSON.stringify(response.data.result[0].subjects)
        );
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .finally(function () {
        // always executed
      });
    axios
      .get(
        "https://newpublicbucket.s3.us-east-2.amazonaws.com/reactLiveAssignment/JsonFiles/RatingsEthicalCodeResponse.json"
      )
      .then(function (response) {
        // handle success
        console.log(response);
        setEthicalCodeOfConduct(response.data.result);
        // localStorage.setItem("ecoc", JSON.stringify(response.data.result));
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .finally(function () {
        // always executed
      });
    axios
      .get(
        "https://newpublicbucket.s3.us-east-2.amazonaws.com/reactLiveAssignment/JsonFiles/RatingsVirtuallyMetResponse.json"
      )
      .then(function (response) {
        // handle success
        console.log(response);
        setVirtuallyMet(response.data.result);
        // localStorage.setItem("vm", JSON.stringify(response.data.result));
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .finally(function () {
        // always executed
      });
  }, []);

  return (
    <>
      <div className="parent">
        <div className="drawer">
          <Root>
            <CssBaseline />
            <Global
              styles={{
                ".MuiDrawer-root > .MuiPaper-root": {
                  height: `calc(90% - ${drawerBleeding}px)`,
                  overflow: "visible",
                  position: "absolute",
                  left: "730px",
                  width: "375px",
                  overflowY: "scroll",
                },
              }}
            />

            <SwipeableDrawer
              // container={container}
              anchor="bottom"
              open={open}
              onClose={toggleDrawer(false)}
              onOpen={toggleDrawer(true)}
              swipeAreaWidth={drawerBleeding}
              disableSwipeToOpen={false}
              ModalProps={{
                keepMounted: true,
              }}
            >
              {/* <Puller /> */}
              <CloseIcon
                onClick={toggleDrawer(false)}
                style={{
                  cursor: "pointer",
                  position: "absolute",
                  right: "10px",
                  top: "20px",
                }}
                fontSize="large"
              />

              {isEcoc
                ? ethicalCodeOfConduct.map((item, idx) => {
                    return (
                      <>
                        <div className="profileContainer">
                          <div className="profile">
                            <img
                              src={item.dpURL}
                              alt="dp"
                              width="70px"
                              height="70px"
                            />
                          </div>
                          <div className="details">
                            <h3 className="name">{item.firstname}</h3>
                            <div className="role">{item.title[0].value}</div>
                          </div>
                        </div>
                        <br />
                        <div className="line"></div>
                        {/* <br /> */}
                      </>
                    );
                  })
                : virtuallyMet.map((item, idx) => {
                    return (
                      <>
                        <div className="profileContainer">
                          <div className="profile">
                            <img
                              src={item.dpURL}
                              alt="dp"
                              width="70px"
                              height="70px"
                            />
                          </div>
                          <div className="details">
                            <h3 className="name">{item.firstname}</h3>
                            <div className="role">{item.title[0].value}</div>
                          </div>
                        </div>
                        <br />
                        <div className="line"></div>
                        {/* <br /> */}
                      </>
                    );
                  })}
              <StyledBox
                sx={{
                  px: 2,
                  pb: 2,
                  height: "100%",
                  overflow: "auto",
                }}
              >
                <Skeleton variant="rectangular" height="100%" />
              </StyledBox>
            </SwipeableDrawer>
          </Root>
        </div>
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
        <div className="skillsContainer">
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <h3>Skills</h3>
            <Link
              to="/editinfo"
              style={{
                textDecoration: "none",
                //   display: "flex",
                //   justifyContent: "center",
                color: "black",
              }}
            >
              {" "}
              <ModeEditIcon style={{ cursor: "pointer" }} />
            </Link>
          </div>

          <div className="skills">
            {skills.length &&
              skills.map((item, idx) => {
                return (
                  <Chip
                    label={item.value}
                    color="primary"
                    style={{ width: "25%", margin: "5px" }}
                  />
                );
              })}
          </div>
        </div>
        <div className="skillsContainer">
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <h3>Hobbies</h3>
            <Link
              to="/editinfo"
              style={{
                textDecoration: "none",
                //   display: "flex",
                //   justifyContent: "center",
                color: "black",
              }}
            >
              {" "}
              <ModeEditIcon style={{ cursor: "pointer" }} />
            </Link>
          </div>
          <div className="skills">
            {hobbies.length &&
              hobbies.map((item, idx) => {
                return (
                  <Chip
                    label={item.value}
                    color="primary"
                    style={{ width: "25%", margin: "5px" }}
                  />
                );
              })}
          </div>
        </div>
        <div className="skillsContainer">
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <h3>Hobbies</h3>
            <Link
              to="/editinfo"
              style={{
                textDecoration: "none",
                //   display: "flex",
                //   justifyContent: "center",
                color: "black",
              }}
            >
              {" "}
              <ModeEditIcon style={{ cursor: "pointer" }} />
            </Link>
          </div>
          <div className="skills">
            {favoriteSubject.length &&
              favoriteSubject.map((item, idx) => {
                return (
                  <Chip
                    label={item.value}
                    color="primary"
                    style={{ width: "25%", margin: "5px" }}
                  />
                );
              })}
          </div>
        </div>
        <StarIcon
          fontSize="large"
          style={{
            position: "relative",
            color: "white",
            top: "35px",
            left: "170px",
          }}
        />

        <div className="ratings">
          <div className="ratingsCard">
            <h3>Ratings</h3>
            <div style={{ cursor: "pointer" }} onClick={toggleDrawer(true)}>
              {ethicalCodeOfConduct.length}{" "}
              <span
                className="ecoc"
                onClick={() => {
                  setIsEcoc(true);
                }}
              >
                Say has ethical code of conduct and is safe to do business with
              </span>
            </div>
            <br />
            <div className="line"></div>
            <br />
            <div onClick={toggleDrawer(true)} style={{ cursor: "pointer" }}>
              {virtuallyMet.length}{" "}
              <span
                className="ecoc"
                onClick={() => {
                  setIsEcoc(false);
                }}
              >
                Have met in real life/ video call
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Mybio;
