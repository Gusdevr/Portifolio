import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        -webkit-font-smoothing: antialiased;
        background-image: linear-gradient(to right, #090909 , #222222);
        color: white;
       
    }

    body, input, header {
        font-family: 'Roboto', sans-serif;
    }

   
`