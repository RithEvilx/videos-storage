import PropTypes from "prop-types";
import "./VideoList.css";

const VideoList = ({ videos, category }) => {
  return (
    <>
      <h2>
        <center>{category} Videos</center>
      </h2>
      <div className="container">
        {videos
          .filter((video) => video.category === category)
          .map((video, index) => (
            <div key={index} className="items">
              <div className="item">
                <div>
                  <h3>{video.title}</h3>
                  <p>{video.description}</p>
                </div>
                <div className="img">
                  {video.imageLink && (
                    <img src={video.imageLink} alt={video.title} />
                  )}
                  <a
                    href={video.videoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Watch Video
                  </a>
                </div>
              </div>
            </div>
          ))}
      </div>
    </>
  );
};

VideoList.propTypes = {
  videos: PropTypes.array.isRequired,
  category: PropTypes.string.isRequired,
};

export default VideoList;
