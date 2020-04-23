import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import TrelloList from "../TrelloList/TrelloList";
import TrelloCreate from "../TrelloCreate/TrelloCreate";
import { ListsContainer } from "./TrelloBoardStyled";
import { sort, setActiveBoard } from "../../store/types";
import { Link, useParams } from "react-router-dom";

const TrelloBoard = () => {
  const lists = useSelector((state) => state.lists);
  const cards = useSelector((state) => state.cards);
  const { boards } = useSelector((state) => state.boards);
  const dispatch = useDispatch();
  const { boardID } = useParams();

  useEffect(() => {
    dispatch(setActiveBoard(boardID));
  });

  const onDragEnd = (result) => {
    const { destination, source, draggableId, type } = result;
    if (!destination) {
      return;
    }
    dispatch(
      sort(
        source.droppableId,
        destination.droppableId,
        source.index,
        destination.index,
        draggableId,
        type
      )
    );
  };

  const board = boards[boardID];
  console.log(boards[boardID])
  if (!board) {
    return <p>Board not found</p>;
  }
  const listOrder = board.list;

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Link to="/">Go back</Link>
      <h2>{board.title}</h2>
      <Droppable droppableId="all-lists" direction="horizontal" type="list">
        {(provided) => (
          <ListsContainer {...provided.droppableProps} ref={provided.innerRef}>
            {listOrder.map((listID, index) => {
              const list = lists[listID];
              if (list) {
                const listCards = list.cards.map((cardID) => cards[cardID]);
                return (
                  <TrelloList
                    listID={list.id}
                    key={list.id}
                    title={list.title}
                    cards={listCards}
                    index={index}
                    boardTitle={board.title}
                  />
                );
              }
              return null;
            })}
            {provided.placeholder}
            <TrelloCreate list />
          </ListsContainer>
        )}
      </Droppable>
    </DragDropContext>
  );
};

// const mapStateToProps = state => ({
//   lists: state.lists,
//   cards: state.cards,
//   boards: state.boards
// });

// const mapStateToProps = {
//   lists,
//   cards,
//   boards
// };

export default TrelloBoard;
