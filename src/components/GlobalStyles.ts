import { createGlobalStyle } from "styled-components"

export const GlobalStyles = createGlobalStyle`
  :root {
    --smallMargin: 10px;
    --mediumMargin: 50px;
    --largeMargin: 100px;
    --mobile: 600px;
    --tablet: 900px;
    --smallDesktop: 1200px;
  }
  * {
    font-family: Arial, Helvetica, sans-serif;
  }
  html, body {
    margin: 0;
    padding: 0;
  }
  a {
    text-decoration: none;
    color: inherit;
    text-transform: uppercase;
  }
`