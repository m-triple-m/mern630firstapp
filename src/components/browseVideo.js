import {
  Backdrop,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  CircularProgress,
  Container,
  Grid,
} from "@mui/material";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import app_config from "../config";

const BrowseVideos = () => {
  const [videoList, setVideoList] = useState([]);
  const [loading, setLoading] = useState(true);
  const url = app_config.api_url;

  const fetchVideos = () => {
    fetch(url + "/video/getall")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setVideoList(data);
        setLoading(false);
      });
  };

  useEffect(() => {
    setTimeout(() => {
      fetchVideos();
    }, 5000);
  }, []);

  const displayVideos = () => {
    if (!loading) {
      return (
        <Grid container spacing={5}>
          {videoList.map((video) => {
            return (
              <Grid item md={4} key={video._id}>
                <Card>
                  <CardMedia
                    component="img"
                    image={url + "/" + video.thumbnail}
                  />
                  <CardContent>
                    <h4>{video.title}</h4>
                    <p>{video.description}</p>
                  </CardContent>
                  <CardActions>
                    <Link
                      component={Button}
                      variant="contained"
                      color="primary"
                      to={"/view/" + video._id}
                    >
                      View
                    </Link>
                  </CardActions>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      );
    } else {
      return (
        <Backdrop
          sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={true}
        >
          <CircularProgress color="inherit" />
        </Backdrop>
      );
    }
  };

  return (
    <Container>
      <h2>Browse Videos</h2>
      <hr />
      {displayVideos()}
    </Container>
  );
};

export default BrowseVideos;
