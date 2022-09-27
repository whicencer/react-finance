import styled from "styled-components";

export const Image = styled.img`
  width: 150px;
  @media screen and (max-height: 496px) {
    width: 95px;
  }
`;

export const Preview = styled.img`
  width: 300px;
  @media screen and (max-height: 496px) {
    width: 125px;
  }
`;

export const InvisibleButton = styled.button`
  background: none;
  outline: none;
  border: none;
  margin: 0 5px;
  z-index: 100;
`;