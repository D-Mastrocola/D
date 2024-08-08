import logo from "./logo.svg";
import "./App.css";

import Header from "./components/Header/Header";
import Profile from "./components/Profile/Profile";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import { ThemeProvider, createTheme } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: ["Kanit", "Noto Sans", "sans-serif"].join(","),
  },
});

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Header />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Profile />}></Route>
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </div>
  );
}

export default App;
