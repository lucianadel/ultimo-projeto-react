import Home from "./pages/Home";

import Header from "./components/Header";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./styles/GlobalStyle";
import theme from "./styles/theme";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
     <GlobalStyle />
<BrowserRouter>
  <Header />
  <Routes>

         <Route path="/" element={<Home />} />

          <Route path="/restaurant/:id" element={<h1>Restaurant Page</h1>} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}
