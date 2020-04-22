import React, { useState } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { Thumbnails, HomeContainer, CreateTitle, CreateInput, TextButton } from "./HomeStyled"
import { addBoard } from "../../store/types";
import BoardThumbnail from "../BoardThumbnail/BoardThumbnail";

const Home = ({ boards, boardOrder, dispatch }) => {
  // this is the home site that shows you your boards and you can also create a Board here.

  // const board = useSelector(state => state.board);

  const [newBoardTitle, setNewBoardTitle] = useState("");

  const handleChange = ({ target: { value }}) => {
    setNewBoardTitle(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addBoard(newBoardTitle));
    setNewBoardTitle("");
  };

  // const show = () => {
  //   console.log(boards)
  //   console.log(boardOrder)
  // }

  const renderBoards = (boardID, index) => {  
      const board = boards[boardID]
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

const mapStateToProps = (state) => ({
  boards: state.boards,
  boardOrder: state.boardOrder
});
export default connect(mapStateToProps)(Home);
