import styled from "styled-components";

export const CardWrapper = styled.div`
  border: 1px solid #ccc;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 1rem;
  background-color: ${(props) => props.styles.backgroundColor};
  color: ${(props) => props.styles.color};

  h2 {
    font-size: 1.5rem;
    margin: 0.5rem 0;
  }

  p {
    font-size: 1.2rem;
    margin: 0.5rem 0;
  }

  img {
    width: 100%;
    height: auto;
    margin: 1rem 0;
    border-radius: 4px;
  }
`;
