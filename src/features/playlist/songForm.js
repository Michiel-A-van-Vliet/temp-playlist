import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addSong } from "./playlistSlice";

function SongForm() {
  const dispatch = useDispatch();

  return (
    <div>
      <input
      // className={styles.textbox}
      // aria-label="Set increment amount"
      // value={incrementAmount}
      // onChange={(e) => setIncrementAmount(e.target.value)}
      />
      <input></input>
      <select id="genre" name="genre">
        <option value="empty"></option>
        <option value="rock">Rock</option>
        <option value="jazz">Jazz</option>
        <option value="pop">Pop</option>
      </select>
      <select id="rating" name="rating">
        <option value="empty"></option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
      </select>
      <button
        // className={styles.button}
        // onClick={() => dispatch(incrementByAmount(incrementValue))}
        onClick={() => dispatch(addSong())}
      >
        Add Song
      </button>
    </div>
  );
}

export default SongForm;
