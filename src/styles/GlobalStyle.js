import { createGlobalStyle } from 'styled-components';
const GlobalStyle = createGlobalStyle`
  :root{
      --background-color: #FEF7DC;
      --light-color: #E6DDC6;
      --middle-color: #C2B8A3;
      --dark-color:  ;

  }
  *{
    padding:0;
    margin: 0;
    text-decoration: none;
    list-style: none;
    box-sizing: border-box;
}
/* body::-webkit-scrollbar {
    width: 1rem;
  }
   
  body::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);

  }
   
  body::-webkit-scrollbar-thumb {
    background-color:#736d77;
    outline: 1px solid  #dbc1c2;
    border-radius: 50px;
  } */
body{
    color:#403d44;
    font-family: 'Varela', sans-serif;
    font-size:1.2rem;
    background-color: var(---background-color);
    
}
@media  screen and (max-width: 411px) {
  font-size: 70%;
}
`;
 
export default GlobalStyle;