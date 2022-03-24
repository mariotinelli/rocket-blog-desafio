import { createGlobalStyle } from 'styled-components';
 
const GlobalStyle = createGlobalStyle`

    * {
        margin: 0;
        padding: 0;

    }

    body {        
        background: var(--light-purple);
        font-family: "Poppins", Sans-Serif;
    }

    :root {

        //Colors
        --purple-bg: #290742;
        --dark-bg: #170027;
        --button-bg: #9e6dc2;
        --white: #fff;
        --light-purple: #fbf6ff;
        --green: #4fff4b;
        --text-black: #000;

        // Fonts
        --font-1: 0.875rem; // 14px
        --font-2: 1.125rem; // 18px
        --font-3: 1rem; // 16px
        --font-4: 1.5rem; // 24px
    }
`;
 
export default GlobalStyle;