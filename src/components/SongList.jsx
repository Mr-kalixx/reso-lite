import React from "react";

function SongList({ songs, setCurrentSong }) {
  return (
    <div>
      <h2>Playlist</h2>
      {songs.map((s) => (
        <div key={s.id} onClick={() => setCurrentSong(s)}>
          {s.title}
        </div>
      ))}
    </div>
  );
}

export default SongList;