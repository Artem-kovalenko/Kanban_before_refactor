import React from "react";
import { Container, StyledCard, StyledTextArea, ButtonContainer, StyledIcon } from "./TrelloFormStyled"

const TrelloForm = React.memo(
  ({ list, text = "", onChange, closeForm, onKeyUp, children }) => {
      
    const placeholder = list
      ? "Enter list title..."
      : "Enter a title for this card...";

    
    return (
      <Container>
        <StyledCard>
          <StyledTextArea
            onKeyUp={onKeyUp}
            placeholder={placeholder}
            autoFocus
            value={text}
            onChange={e => onChange(e)}
            onBlur={closeForm}
          />
        </StyledCard>
        <ButtonContainer>
          {children}
          <StyledIcon onMouseDown={closeForm}>close</StyledIcon>
        </ButtonContainer>
      </Container>
    );
  }
);

export default TrelloForm;