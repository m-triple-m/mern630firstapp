import { Container } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import app_config from "../config";

const ViewVideo = () => {
  const { id } = useParams();
  const url = app_config.api_url;

  const [video, setVideo] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log(id);

    fetch(url + "/video/getbyid/" + id)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setVideo(data);
        setLoading(false);
      });
  }, []);

  const displayVideo = () => {
    if (!loading) {
      return (
        <div>
          <h2>{video.title}</h2>
          <video
            className="img-fluid"
            src={url + "/" + video.file}
            controls
          ></video>
        </div>
      );
    }
  };

  return <Container>{displayVideo()}</Container>;
};

export default ViewVideo;
