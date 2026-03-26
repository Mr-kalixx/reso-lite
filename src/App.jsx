import React, { useState } from "react";
import Player from "./components/Player";
import SongList from "./components/SongList";
import Upload from "./components/Upload";

function App() {
  const [songs, setSongs] = useState([]);
  const [currentSong, setCurrentSong] = useState(null);

  const addSong = (song) => setSongs([...songs, song]);

  const playNext = () => {
    if (!currentSong) return;
    const i = songs.findIndex((s) => s.id === currentSong.id);
    setCurrentSong(songs[(i + 1) % songs.length]);
  };

  const playPrevious = () => {
    if (!currentSong) return;
    const i = songs.findIndex((s) => s.id === currentSong.id);
    setCurrentSong(songs[(i - 1 + songs.length) % songs.length]);
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>🎧 Reso Lite</h1>
      <Upload addSong={addSong} />
      <SongList songs={songs} setCurrentSong={setCurrentSong} />
      <Player currentSong={currentSong} playNext={playNext} playPrevious={playPrevious} />
    </div>
  );
}

export default App;