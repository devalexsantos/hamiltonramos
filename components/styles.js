import styled from 'styled-components';

export const Container = styled.div`
background-image: url("images/background-desk-50.jpg");
background-color: rgb(10, 24, 63);
background-size: cover;
background-repeat: no-repeat;
background-attachment: fixed;
width: 100vw;
height: 100%;

@media(max-width: 400px) {
  background-image: url("images/background-mobile-50.jpg");
  }
`;

export const Area = styled.div`
  max-width: 980px;
  margin: auto;
`;