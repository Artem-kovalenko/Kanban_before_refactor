import React from "react";
import { StyledButton } from "./TrelloButtonStyled"

const TrelloButton = ({ children, onClick }) => {
  
    return (
      <StyledButton variant="contained" onMouseDown={onClick}>
        {children}
      </StyledButton>
    );
  };
  
export default TrelloButton;