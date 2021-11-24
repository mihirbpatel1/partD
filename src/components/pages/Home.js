import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Home = () => {


  return (
    <div>
      <h1>HOME PAGE</h1>
      <Link className="btn btn-dark" to="/users">Go To Staff Page</Link>
      </div>
  );
};

export default Home;