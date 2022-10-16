import React from "react";
import ProgressBar from 'react-bootstrap/ProgressBar';
import './User.css';

const User =()=>{
  return(
    <>
    <div>
      <h1>Progress Bar</h1>
    <ProgressBar>
      <ProgressBar striped variant="success" now={35} key={1} />
      <ProgressBar variant="warning" now={20} key={2} />
      <ProgressBar striped variant="danger" now={10} key={3} />
    </ProgressBar>
    <br></br>
    <button class="btn-get-support" style={{color: "blue"}}>Start Motor</button>
    <br></br><br></br>
    <button class="btn-get-support" style={{color: "blue"}}>Stop Motor</button>
    </div>
    </>
      );
};

export default User;
