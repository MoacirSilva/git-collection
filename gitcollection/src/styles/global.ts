import {createGlobalStyle} from 'styled-components'
import imgBackground from '../assets/background.svg'

export const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
font-size: 16px;

html{
    @media (max-width: 1080px){
        font-size:93.75%;
    }

    @media (max-width: 720px){
        font-size:87.5%;
    }
}

body{
    background: url(${imgBackground}) 70% top;
    -webkit-font-smoothing: antialiased;
}

#root{
    max-width: 960px;
    margin:0 auto;
    padding: 2.5rem 1.5rem;
}

button{
    cursor:pointer;
}

a{
    color:inherit;
    text-decoration: none;
}

`;
