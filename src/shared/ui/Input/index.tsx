import styled from "styled-components";

const Input = styled.input`
  display: block;
  border: 1px solid #d0d0d0;
  padding: 10px;
  border-radius: 5px;
  outline: none;
  min-width: 30%;

  &::placeholder {
    font-size: 16px;
    font-weight: 500;
    font-family: sans-serif;
  }
`;

export default Input;