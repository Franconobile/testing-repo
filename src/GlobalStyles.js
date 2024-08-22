import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    @font-face {
        font-family: 'Mantinia';
        src: url('./fonts/Mantinia-Regular.otf') format('opentype');
        font-weight: normal;
        font-style: normal;
    }

    body {
        font-family: 'Mantinia', sans-serif;
        margin: 0;
        display: flex;
        flex-direction: column;
        height: 100vh;
        background-color: #000000;
        
    }

     /* Media Queries para hacer el diseño responsive */
  @media (max-width: 768px) {
    header, footer {
      flex-direction: column;
      align-items: center;
    }

    main {
      flex-direction: column;
      align-items: center;
    }

    .laburantes, .display-area, .clicker {
      width: 100%;
      margin: 10px 0;
    }

    .inventory-section {
      flex-direction: column;
    }
  }

`

export default GlobalStyles;