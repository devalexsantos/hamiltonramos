import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  margin:auto;
  margin-top: 50px;
  justify-content: center;
`;

export const Area = styled.div`
  max-width: 400px;
  margin: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  padding: 1rem;
  border: 1px solid rgb(255, 255, 255, 0.3);
  background-color: rgb(10, 24, 63, 0.8);
  text-align: center;
`;

export const Avatar = styled.div`
  max-width: 120px;
  margin: 0 20px;

  img {
    width: 100%;
    border-radius: 50%;
    background-size: cover;
    border: 2px solid white;
  }

`;

export const ProfileAbout = styled.div`
  flex: 1;
  font-size: 19px; 
  h4 {
    margin-top: 10px;
    margin-bottom: 10px;
    font-size: 22px;
    font-weight: 700;
  }
  @media(max-width: 800px) {
    text-align: center;
  }
`;