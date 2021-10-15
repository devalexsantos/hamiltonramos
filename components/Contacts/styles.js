import styled from 'styled-components';

export const Container = styled.div`
  margin: auto;
  margin-top: 50px;
  padding-bottom: 100px;
  text-align: center;

  h2 {
    background-color: #0A183F;
    padding: 1rem;
    display: inline-block;
    border: 1px solid rgb(255, 255, 255, 0.3);
    border-radius: 15px;

  }
`;

export const AreaButtons = styled.div`
  display: flex;
  justify-content: center;
  padding: 1rem;
`;

export const Buttons = styled.div`
  background-color: #0A183F;
  padding: 1rem;
  border: 1px solid rgb(255, 255, 255, 0.3);
  border-radius: 50%;
  margin: 10px 1rem;

    i {
      font-size: 24pt;
      width: 30px;
      height: 30px;
    }
`;