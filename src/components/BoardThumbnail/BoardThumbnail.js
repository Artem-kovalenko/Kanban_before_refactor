import React from "react";
import { connect } from "react-redux";
import { Thumbnail, Title, TextButton } from "./ThumbnailStyled";
import { deleteBoard } from "../../store/types";

const BoardThumbnail = ({ title, boardID, index, dispatch }) => {
  const deleteCurrentBoard = (e) => {
    e.preventDefault();
    dispatch(deleteBoard(boardID, index))
  }
  return (
    <Thumbnail>
      <Title>{title}</Title>
      <TextButton onClick={deleteCurrentBoard}>Delete</TextButton>
    </Thumbnail>
  );
};

export default connect()(BoardThumbnail);