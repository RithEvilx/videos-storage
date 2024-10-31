import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import VideoForm from "./components/VideoForm/VideoForm";
import VideoList from "./components/VideoList/VideoList";
import Navbar from "./components/Navbar/Navbar";

const App = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const storedVideos = JSON.parse(localStorage.getItem("videos")) || [];
    setVideos(storedVideos);
  }, []);

  const addVideo = (video) => {
    const updatedVideos = [...videos, video];
    setVideos(updatedVideos);
    localStorage.setItem("videos", JSON.stringify(updatedVideos));
  };

  return (
    <Router>
      <div>
        <Navbar />
        <div className="containers">
          <Routes>
            <Route path="/" element={<VideoForm onAddVideo={addVideo} />} />
            <Route path="/videos-storage" element={<VideoForm onAddVideo={addVideo} />} />
            <Route
              path="/youtube"
              element={<VideoList videos={videos} category="Youtube" />}
            />
            <Route
              path="/tiktok"
              element={<VideoList videos={videos} category="Tiktok" />}
            />
            <Route
              path="/facebook"
              element={<VideoList videos={videos} category="Facebook" />}
            />
            <Route
              path="/instagram"
              element={<VideoList videos={videos} category="Instagram" />}
            />
            <Route
              path="/telegram"
              element={<VideoList videos={videos} category="Telegram" />}
            />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
