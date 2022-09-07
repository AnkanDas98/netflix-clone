import React from "react";
import Featured from "../../components/featured/Featured";
import List from "../../components/list/List";
import Navbar from "../../components/navbar/Navbar";

import "./home.scss";

const Home = () => {
  const screenSize = window.matchMedia("(max-width:46em)");

  return (
    <div className="home">
      <Navbar />
      <Featured />
      <List title="New Movies" />
      <List title="Thriller" />
      {!screenSize.matches && <List title="Old Movies" />}
      {!screenSize.matches && <List title="New Movies" />}
      {!screenSize.matches && <List title="New Movies" />}
      {!screenSize.matches && <List title="New Movies" />}
    </div>
  );
};

export default Home;
