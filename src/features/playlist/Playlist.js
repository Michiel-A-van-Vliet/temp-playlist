import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addSong, removeSong, songsList } from "./playlistSlice";
import SongForm from "./songForm";
import SongList from "./songList";

function Playlist() {
  const allsongs = useSelector(songsList);
  // console.log("Playlist");
  // console.log(allsongs);

  return (
    <div>
      <SongForm />
      {/* <SongForm addSong={this.addSong} /> */}
      <table style={{ width: "100%" }}>
        <thead>
          <tr className="song-header">
            <th className="song-row__item">Song</th>
            <th className="song-row__item">Artist</th>
            <th className="song-row__item">Genre</th>
            <th className="song-row__item">Rating</th>
          </tr>
        </thead>
        {/* <SongList songs={this.state.songs} /> */}
        <SongList songs={allsongs} />
      </table>
    </div>
  );
}

export default Playlist;
