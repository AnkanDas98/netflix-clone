import React from "react";

import { PlayArrow, InfoOutlined } from "@material-ui/icons";

import classes from "./featured.module.scss";

const Featured = ({ type }) => {
  return (
    <div className={classes.featured}>
      {type && (
        <div className={classes.category}>
          <span>{type === "movies" ? "Movies" : "Series"}</span>
          <select name="genre" id="genre">
            <option>Genre</option>
            <option value="adventure">Adventure</option>
            <option value="comedy">Comedy</option>
            <option value="crime">Crime</option>
            <option value="fantasy">Fantasy</option>
            <option value="historical">Historical</option>
            <option value="horror">Horror</option>
            <option value="romance">Romance</option>
            <option value="sci-fi">Sci-fi</option>
            <option value="thriller">Thriller</option>
            <option value="western">Western</option>
            <option value="animation">Animation</option>
            <option value="drama">Drama</option>
            <option value="documentary">Documentary</option>
          </select>
        </div>
      )}
      <img
        src="/images/women_enjoying_music.jpg"
        alt="Photography of a Woman Listening to Music By Andrea Piacquadio"
      />
      <div className={classes.info}>
        <img src="/images/the-matrix-img.webp" alt="The Matrix" />
        <span className={classes.desc}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum,
          mollitia ipsam earum sunt laborum, aperiam aut in quisquam harum nisi
          doloribus? Itaque reiciendis similique animi, quam dolores impedit
          doloribus alias?
        </span>
        <div className={classes.buttons}>
          <button className={classes.play}>
            <PlayArrow />
            <span>Play</span>
          </button>
          <button className={classes.more}>
            <InfoOutlined />
            <span>More</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
