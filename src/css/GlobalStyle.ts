import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    body {
        background-color: #FAFAFA;
        font-family: 'Work Sans', sans-serif;
    }

    h1 {
        color: #1C2127;
        font-size: 1.7rem;
        margin-bottom: 15px !important;
    }

    h2 {
        font-size: 1.2rem;
    }

    .bp4-card {
        border-radius: 7px;
    }

    .bp4-button {
        border-radius: 5px;
    }

    // remove underline in navigation buttons
    a:hover {
        text-decoration: none;
    }

    // Kanban board
    div.ondragenter {
        border: 3px dotted #03B5AA;
        padding: 7px;
    }

    /* Setting the global fonts */
    html, body {
        font-family: 'Roboto', sans-serif;  /* Using Roboto as the default font */
        font-size: 16px;  /* You can adjust this based on your preference */
        line-height: 1.5;  /* Adjust for readability */
        color: #333;  /* Adjust font color if needed */
    }

    h1, h2, h3, h4, h5, h6 {
        font-family: 'Lato', sans-serif;  /* Using Lato for headings */
    }

`;
