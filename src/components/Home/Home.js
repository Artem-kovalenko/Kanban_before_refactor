import React, { useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { Link } from "react-router-dom";
import { Thumbnails, HomeContainer, CreateTitle, CreateInput, TextButton } from "./HomeStyled"
import { addBoard } from "../../store/types";
import BoardThumbnail from "../BoardThumbnail/BoardThumbnail";

const Home = () => {

  const {boards} = useSelector(state => state.boards);
  const boardOrder = useSelector(state => state.boardOrder)
  const dispatch   = useDispatch();

  const [newBoardTitle, setNewBoardTitle] = useState("");

  const handleChange = ({ target: { value }}) => {
    setNewBoardTitle(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addBoard(newBoardTitle));
    setNewBoardTitle("");
  };

  const renderBoards = (boardID, index) => {  
    
      const board = boards[boardID];
      console.log(boards, 'BOARDS')
      console.log(boardID)
      return (
        <div key={boardID}>
          <Link
            to={`/board/${board.id}`}
            style={{ textDecoration: "none" }}
          >
          <BoardThumbnail 
            boardID={boardID}
            index={index}  
            {...board} 
            />
          </Link> 
        </div>  
      );
  };

  return (
    <HomeContainer>
    <Thumbnails>{boardOrder.map(renderBoards)}</Thumbnails>
      <form onSubmit={handleSubmit} style={{textAlign: "center" }}>
        <CreateTitle>Create a new Board</CreateTitle>
        <CreateInput
          onChange={handleChange}
          value={newBoardTitle}
          placeholder="Your boards title..."
          type="text"
        />
        <TextButton>Add</TextButton>
      </form>
    </HomeContainer>
  );
};

export default Home;
