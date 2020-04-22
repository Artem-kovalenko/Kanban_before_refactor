import styled from "styled-components";

export const Thumbnails = styled.div`
flex: 1;
  height: 50%;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`;

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
`;

export const CreateTitle = styled.h3`
  font-size: 28px;
  color: black;
  font-weight: bold;
  font-family: Arial, Helvetica, sans-serif;
`;

export const CreateInput = styled.input`
  width: 400px;
  height: 80px;
  font-size: 20px;
  padding: 7px;
  box-sizing: border-box;
  border-radius: 5px;
  border: none;
  outline-color: grey;
  box-shadow: 0 2px 4px grey;
  align-self: center;
`;

export const TextButton = styled.button`
  margin-left: -89px;
  padding: 18px;
  border: 1px solid black;
  outline: none;
  background: #ffcc3bf2;
  border-radius: 15px;
  box-sizing: border-box;
  font-family: inherit;
  font-size: 20px;
  color: black;
  cursor: pointer;
  transition: 0.3s;
  &:hover {
    background: #fffcdd;
  }
`;
