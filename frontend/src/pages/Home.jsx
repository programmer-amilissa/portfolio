import { Container, createTheme, ThemeProvider } from "@mui/material";
import { CountDown, Banner, MyWorks } from "../components";
// import logo from "https://photos.smugmug.com/AVTELCOM-WEBSITE/Amilissa/i-s2vjwGX/0/6cecf8fa/X2/Amilissa-X2.jpeg"

const homeTheme = createTheme({
  typography: {
    fontFamily: "Poppins",
    fontSize: 12,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
  },
});

function Home() {
  return (
    <>
      <ThemeProvider theme={homeTheme}>
        <Banner />
        <MyWorks />
        <CountDown />
      </ThemeProvider>
    </>
  );
}

export default Home;
