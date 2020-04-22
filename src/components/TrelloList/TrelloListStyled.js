import styled from "styled-components";
import Icon from "@material-ui/core/Icon";

export const ListContainer = styled.div`
  background-color: #dfe3e6;
  border-radius: 3px;
  width: 300px;
  height: 100%;
  padding: 8px;
  margin-right: 8px;
`;

export const StyledInput = styled.input`
  width: 97%;
  border: none;
  outline-color: blue;
  border-radius: 3px;
  margin-bottom: 3px;
  padding: 5px;
`;

export const TitleContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
`;

export const DeleteButton = styled(Icon)`
  cursor: pointer;
`;

export const ListTitle = styled.h4`
  word-break: break-all;
  transition: background 0.3s ease-in;
  ${TitleContainer}:hover & {
    background: #ccc;
  }
`;
