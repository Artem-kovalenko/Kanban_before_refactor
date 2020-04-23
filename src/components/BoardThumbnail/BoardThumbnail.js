import React from "react";
import { useDispatch } from "react-redux";
import { Thumbnail, Title, TextButton } from "./ThumbnailStyled";
import { deleteBoard } from "../../store/types";

const BoardThumbnail = ({ title, boardID, index }) => {
  const dispatch = useDispatch();

  const deleteCurrentBoard = (e) => {
    e.preventDefault();
    dispatch(deleteBoard(boardID, index))
  };
  return (
    <Thumbnail>
      <Title>{title}</Title>
      <TextButton onClick={deleteCurrentBoard}>Delete</TextButton>
    </Thumbnail>
  );
};

export default BoardThumbnail;