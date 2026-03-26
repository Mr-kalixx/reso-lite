import React, { useState } from "react";

function Upload({ addSong }) {
  const [file, setFile] = useState(null);

  const upload = () => {
    if (!file) return;
    const url = URL.createObjectURL(file);

    addSong({
      id: Date.now(),
      title: file.name,
      url,
      type: file.type.includes("video") ? "video" : "audio",
    });
  };

  return (
    <div>
      <input type="file" onChange={(e) => setFile(e.target.files[0])} />
      <button onClick={upload}>Upload</button>
    </div>
  );
}

export default Upload;