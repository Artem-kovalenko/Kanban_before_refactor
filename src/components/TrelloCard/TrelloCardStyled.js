import styled from "styled-components";
import Icon from "@material-ui/core/Icon";

export const CardContainer = styled.div`
margin: 0 0 8px 0;
  position: relative;
  max-width: 100%;
  word-wrap: break-word;
`;

export const EditButton = styled(Icon)`
  position: absolute;
  display: none;
  right: 5px;
  top: 5px;
  opacity: 0.5;
  ${CardContainer}:hover & {
    display: block;
    cursor: pointer;
  }
  &:hover {
    opacity: 0.8;
  }
`;

export const DeleteButton = styled(Icon)`
  position: absolute;
  display: none;
  right: 5px;
  bottom: 5px;
  opacity: 0.5;
  ${CardContainer}:hover & {
    display: block;
    cursor: pointer;
  }
  &:hover {
    opacity: 0.8;
  }
`;

export const CreateDiv = styled.div`
  width: 96%;
  padding: 15px 15px 15px 24px;
  margin: 20px 6px ;
  box-sizing: border-box;
  outline: none;
  cursor: pointer;
  background-color: #d8d8d8;
  transition: .3s;
  border-radius:5px;
  
`;

export const TextButton = styled.button`
  min-width: 80px;
  padding: 2px;
  margin: 50px 10px 0 0;
  border: 1px solid #333333;
  outline: none;
  background: none;
  border-radius: 5px;
  box-sizing: border-box;
  font-family: inherit;
  font-size: 1.1rem;
  color: #333333;
  cursor: pointer;
  transition: 0.3s;
  &:hover {
    background: #fffcdd;
  }
`;

export const EditDescriptionButton = styled.div`
  width: 40%;
  padding: 2px 8px;
  margin: 19px 0px -6px -16px;
  border: 1px solid #333333;
  outline: none;
  background: none;
  border-radius: 5px;
  box-sizing: border-box;
  font-family: inherit;
  font-size: 0.9rem;
  color: black;
  cursor: pointer;
  transition: 0.3s;
  &:hover {
    background: #ffffff;
  }
`;
