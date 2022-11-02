import {
  Typography,
  Container,
  Grid,
  ImageListItem,
  ImageList,
  createTheme,
  ThemeProvider,
} from "@mui/material";
import { useSyncExternalStore } from "react";
import { useState, useEffect } from "react";

const theme = createTheme({
  typography: {
    h5: {
      fontWeight: 700,
      fontSize: 50,
    },
    subtitle1: {
      fontSize: 12,
    },
  },
});

const PALAWAN_DATE_OF_ARRIVAL = new Date(2023, 1, 20, 21, 55, 0);

const getTimeDelta = () => {
  const now = new Date();
  const timedelta = PALAWAN_DATE_OF_ARRIVAL.getTime() - now.getTime();

  // Diff in days
  const days = Math.floor(timedelta / (24 * 60 * 60 * 1000));
  // Diff in hours
  const hours = Math.floor(
    (timedelta % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000)
  );
  // Diff in minutes
  const minutes = Math.floor((timedelta % (60 * 60 * 1000)) / (60 * 1000));

  // Diff in seconds
  const seconds = Math.floor((timedelta % (60 * 1000)) / 1000);

  return { days, hours, minutes, seconds };
};

const img_data = [
  {
    img: "%PUBLIC_URL%/logo192.png",
    title: "Amilissa Graduation Picture",
  },
];

function Home() {
  const [countdown, setCountdown] = useState();
  const [loading, setLoading] = useState(true);
  const [isArrived, setIsArrived] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      const timedelta = getTimeDelta();

      setCountdown(timedelta);
      setLoading(false);

      if (timedelta.seconds < 0) {
        setIsArrived(true);
      }
    }, 1000);

    return () => clearInterval(interval);
  });

  if (loading) {
    return <Typography variant="h5">Loading...</Typography>;
  }

  if (isArrived) {
    return (
      <ThemeProvider theme={theme}>
        <Typography variant="h5">
          <Typography
            variant="h5"
            letterSpacing={2}
            style={{
              color: "#FFD369",
              border: "black",
              display: "inline-block",
            }}
          >
            Yehey!
          </Typography>{" "}
          I'm in{" "}
          <Typography
            variant="h5"
            letterSpacing={2}
            style={{
              color: "#FFD369",
              border: "black",
              display: "inline-block",
            }}
          >
            Palawan
          </Typography>
          . 🥳
        </Typography>
      </ThemeProvider>
    );
  }

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Grid container>
          <Grid item lg={12} xs={12} md={12} sm={12}>
            <Typography variant="h5">
              I'll be in{" "}
              <Typography
                variant="h5"
                sx={{ textDecoration: "underline" }}
                letterSpacing={2}
                style={{
                  color: "#FFD369",
                  border: "black",
                  display: "inline-block",
                  borderRadius: "20px",
                }}
              >
                Palawan
              </Typography>{" "}
              in{" "}
            </Typography>
            <Grid container spacing={12}>
              <Grid item lg={3} xs={12} md={4} sm={12}>
                <Typography
                  variant="h5"
                  style={{
                    borderRadius: "20px",
                    backgroundColor: "#FFD369",
                    color: "#222831",
                  }}
                >
                  {countdown.days}
                </Typography>
                <Typography variant="h6">DAYS</Typography>
              </Grid>
              <Grid item lg={3} xs={12} md={4} sm={12}>
                <Typography
                  variant="h5"
                  style={{
                    borderRadius: "20px",
                    backgroundColor: "#FFD369",
                    color: "#222831",
                  }}
                >
                  {countdown.hours}
                </Typography>
                <Typography variant="h6">HOURS</Typography>
              </Grid>
              <Grid item lg={3} xs={12} md={4} sm={12}>
                <Typography
                  variant="h5"
                  style={{
                    borderRadius: "20px",
                    backgroundColor: "#FFD369",
                    color: "#222831",
                  }}
                >
                  {countdown.minutes}
                </Typography>
                <Typography variant="h6">MINUTES</Typography>
              </Grid>
              <Grid item lg={3} xs={12} md={4} sm={12}>
                <Typography
                  variant="h5"
                  style={{
                    borderRadius: "20px",
                    backgroundColor: "#FFD369",
                    color: "#222831",
                  }}
                >
                  {countdown.seconds}
                </Typography>
                <Typography variant="h6">SECONDS</Typography>{" "}
                <Typography variant="subtitle1" style={{ color: "#393E46", marginTop: '10px' }}>
                  to meet my{" "}
                  <Typography
                    variant="subtitle1"
                    sx={{ textDecoration: "underline" }}
                    letterSpacing={1}
                    style={{
                      fontWeight: 700,
                      color: "#222831",
                      border: "black",
                      display: "inline-block",
                      borderRadius: "20px",
                    }}
                  >
                    bebe
                  </Typography>
                  .
                  {" "}
                  <Typography
                    variant="subtitle1"
                    letterSpacing={1}
                    style={{
                      fontWeight: 700,
                      color: "#FFD369",
                      border: "black",
                      display: "inline-block",
                      borderRadius: "20px",
                    }}
                  >
                    uwu 👉👈
                  </Typography>{" "}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          {/* <Grid item lg={3} xs={12} md={4} sm={12}>
            <Typography variant="h4">Amilissa Araneta</Typography>
            <Typography variant="h4">Full Stack Web Developer</Typography>
            <ImageList sx={{ width: 500, height: 450 }}>
              {img_data.map((item) => (
                <ImageListItem key={item.img}>
                  <img
                    src={`${item.img}?w=248&fit=crop&auto=format`}
                    srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                    alt={item.title}
                    loading="lazy"
                  />
                </ImageListItem>
              ))}
            </ImageList>
          </Grid>
          <Grid item xs></Grid> */}
        </Grid>
      </Container>
    </ThemeProvider>
  );
}

export default Home;
