import PropTypes from "prop-types";
import { useState } from "react";
import "./VideoForm.css";

const VideoForm = ({ onAddVideo }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [videoLink, setVideoLink] = useState("");
  const [imageLink, setImageLink] = useState("");
  const [category, setCategory] = useState("Youtube");

  const handleSubmit = (e) => {
    e.preventDefault();
    const videoData = {
      title,
      description,
      videoLink,
      imageLink, 
      category,
    };
    onAddVideo(videoData);
    setTitle("");
    setDescription("");
    setVideoLink("");
    setImageLink("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1 style={{ marginBottom: "10px" }}>
        <center>Video Storage!</center>
      </h1>
      <div>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title"
          required
        />
      </div>
      <div>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Description"
          // required
        />
      </div>
      <div>
        <input
          type="url"
          value={videoLink}
          onChange={(e) => setVideoLink(e.target.value)}
          placeholder="Video Link"
          required
        />
      </div>
      <div>
        <input
          type="url"
          value={imageLink}
          onChange={(e) => setImageLink(e.target.value)}
          placeholder="Image Link (URL)"
        />
      </div>
      <div>
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="Youtube">Youtube</option>
          <option value="Tiktok">Tiktok</option>
          <option value="Facebook">Facebook</option>
          <option value="Instagram">Instagram</option>
          <option value="Telegram">Telegram</option>
        </select>
      </div>
      <button type="submit">Add Video</button>
    </form>
  );
};

VideoForm.propTypes = {
  onAddVideo: PropTypes.func.isRequired,
};

export default VideoForm;
