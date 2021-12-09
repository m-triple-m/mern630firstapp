import { createTheme, ThemeProvider } from "@mui/material";
import { useState } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import AddVideo from "./components/addVideo";
import Chat from "./components/chat";
import EventHandling from "./components/eventhandling";
import Footer from "./components/footer";
import Gallery from "./components/gallery";
import Header from "./components/header";
import Home from "./components/home";
import ListVideos from "./components/listvideos";
import Login from "./components/login";
import ProductList from "./components/productlist";
import SignUp from "./components/signup";
import ViewVideo from "./components/view";
import { ProductProvider } from "./productContext";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const lightTheme = createTheme({
    palette: {
      mode: "light",
      primary: {
        main: "#390053",
        dark: "red",
      },
    },
  });

  const darkTheme = createTheme({
    palette: {
      mode: "dark",
      background: {
        paper: "#0a0d16",
      },
    },
  });

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <ProductProvider>
        <BrowserRouter>
          <Header darkMode={darkMode} setDarkMode={setDarkMode}></Header>
          <Route path="/home" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/event" component={EventHandling} />
          <Route path="/signup" component={SignUp} />
          <Route path="/gallery" component={Gallery} />
          <Route path="/browse" component={ProductList} />
          <Route path="/addvideo" component={AddVideo} />
          <Route path="/listvideos" component={ListVideos} />
          <Route path="/view/:id" component={ViewVideo} />
          <Route path="/chat" component={Chat} />
          <Footer></Footer>
        </BrowserRouter>
      </ProductProvider>
    </ThemeProvider>
  );
}

export default App;
