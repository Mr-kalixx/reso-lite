import React, { useRef, useState } from "react";

function Player({ currentSong, playNext, playPrevious }) {
  const ref = useRef();
  const [progress, setProgress] = useState(0);

  if (!currentSong) return null;

  return (
    <div>
      <h3>{currentSong.title}</h3>

      {currentSong.type === "video" ? (
        <video ref={ref} src={currentSong.url} controls autoPlay
          onTimeUpdate={() => {
            const p = (ref.current.currentTime / ref.current.duration) * 100;
            setProgress(p);
          }}
          onEnded={playNext}
          style={{ width: "300px" }}
        />
      ) : (
        <audio ref={ref} src={currentSong.url} controls autoPlay
          onTimeUpdate={() => {
            const p = (ref.current.currentTime / ref.current.duration) * 100;
            setProgress(p);
          }}
          onEnded={playNext}
        />
      )}

      <input type="range" value={progress}
        onChange={(e) => {
          const d = ref.current.duration;
          ref.current.currentTime = (e.target.value / 100) * d;
        }}
      />

      <div>
        <button onClick={playPrevious}>⏮</button>
        <button onClick={playNext}>⏭</button>
      </div>
    </div>
  );
}

export default Player;