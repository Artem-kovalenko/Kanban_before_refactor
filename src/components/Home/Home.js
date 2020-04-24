import React, { useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { Link } from "react-router-dom";
import { Thumbnails, HomeContainer, CreateTitle, CreateInput, TextButton } from "./HomeStyled"
import { addBoard } from "../../store/types";
import BoardThumbnail from "../BoardThumbnail/BoardThumbnail";

const Home = () => {

  const { boards } = useSelector(state => state.boards);
  // const { lists } = useSelector(state => state.lists)
  // debugger
  const dispatch = useDispatch();
  // const {boardOrder} = useSelector(state => state.boardOrder)

  const [newBoardTitle, setNewBoardTitle] = useState("");

  const handleChange = ({ target: { value }}) => {
    setNewBoardTitle(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addBoard(newBoardTitle));
    setNewBoardTitle("");
  };

  const renderBoards = (boardItiem) => {  
      const board = boards[boardItiem.id];
      console.log(boards, 'BOARDS')
      console.log(boardItiem)
      return (
        <div key={boardItiem.id}>
          <Link
            to={`/board/${board.id}`}
            style={{ textDecoration: "none" }}
          >
          <BoardThumbnail 
            boardID={boardItiem.id}
            {...board} 
            />
          </Link> 
        </div>  
      );
  };
  return (
    <HomeContainer>
    <Thumbnails>{Object.values(boards).map(renderBoards)}</Thumbnails>
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
