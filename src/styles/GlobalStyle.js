import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *{ box-sizing: border-box; }
  html, body, #root { height: 100%; }
  body{
    margin: 0;
    font-family: Inter, system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif;
    color: ${({ theme }) => theme.colors.text};
    background: ${({ theme }) => theme.colors.bg};
  }
  a{ color: inherit; text-decoration: none; }
  img{ max-width: 100%; display: block; }

  :root{
    --container: 1200px;
  }
`
export default GlobalStyle
