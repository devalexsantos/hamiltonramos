import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  margin:auto;
`;

export const Area = styled.div`
  margin: 30px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 1rem;
  border: 1px solid rgb(255, 255, 255, 0.3);
  background-color: rgb(10, 24, 63, 0.6);

  @media(max-width: 800px) {
    flex-direction: column;
  }
`;

export const Avatar = styled.div`
  max-width: 150px;
  margin: 0 20px;

  img {
    border-radius: 50%;
    background-size: cover;
    border: 10px solid white;
  }

`;

export const ProfileAbout = styled.div`
  flex: 1;
  font-size: 19px; 
  h4 {
    font-size: 22px;
    font-weight: 700;
  }
  @media(max-width: 800px) {
    text-align: center;
  }
`;