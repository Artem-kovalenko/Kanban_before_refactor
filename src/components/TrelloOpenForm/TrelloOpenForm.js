import React from "react";
import Icon from "@material-ui/core/Icon";
import { OpenFormButton } from "./TrelloOpenFormStyle"

const TrelloOpenForm = ({ list, children, onClick }) => (
      <OpenFormButton onClick={onClick} list={list}>
        <Icon>add</Icon>
        <p style={{ flexShrink: 0 }}>{children}</p>
      </OpenFormButton>
    );
  
  export default TrelloOpenForm;