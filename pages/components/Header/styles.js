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

export const Logo = styled.div`
  max-width: 200px;
  margin: 0 20px;

  img {
    width: 100%;
  }

`;

export const ProfileBusiness = styled.div`
  flex: 1; 
  h1 {
    font-size: 19px;
    font-weight: 500;
  }
  @media(max-width: 800px) {
    text-align: center;
  }
`;