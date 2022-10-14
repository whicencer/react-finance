import styled from "styled-components";

export const StyledTransactionItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #0f0f13;
  width: 96%;
  padding: 10px 20px;
  margin: 10px 0;
  border-radius: 10px;

  h3 {
    font-weight: 500;
    font-size: 16px;
  }
  p {
    color: #B9BDBB;
    font-size: 14px;
    font-weight: 100;
    margin-top: 5px;
  }
`;