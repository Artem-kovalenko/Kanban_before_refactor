import styled from "styled-components";
import Icon from "@material-ui/core/Icon";
import Card from "@material-ui/core/Card";
import Textarea from "react-textarea-autosize";

export const Container = styled.div`
      width: 300px;
      margin-bottom: 8px;
    `;

export const StyledCard = styled(Card)`
      min-height: 65px;
      padding: 6px 8px 2px;
    `;

export const StyledTextArea = styled(Textarea)`
      resize: none;
      width: 100%;
      overflow: hidden;
      outline: none;
      border: none;
    `;

export const ButtonContainer = styled.div`
      margin-top: 8px;
      display: flex;
      align-items: center;
      margin-left: 8px;
    `;

export const StyledIcon = styled(Icon)`
      margin-left: 8px;
      cursor: pointer;
    `;
