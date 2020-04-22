import React, { useState } from "react";
import { connect } from "react-redux";
import { Draggable } from "react-beautiful-dnd";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import CardContent from "@material-ui/core/CardContent";
import TrelloForm from "../TrelloForm/TrelloForm";
import TrelloButton from "../TrelloButton/TrelloButton";
import Modal from "../Modal/Modal";
import { CardContainer, EditButton, DeleteButton, CreateDiv, TextButton, EditDescriptionButton } from "./TrelloCardStyled";
import { editCard, deleteCard } from "../../store/types";

const TrelloCard = React.memo(
  ({
    editedTime,
    createdTime,
    boardTitle,
    listTitle,
    text,
    descriptionText,
    id,
    listID,
    index,
    dispatch,
  }) => {
    // используем хук
    // если isEditing = true тогда у нас будет рендериться компонент для изменения карточки (TrelloForm)
    const [isEditing, setIsEditing] = useState(false);
    const [cardText, setText] = useState(text);
    const [cardIsEditing, setCardIsEditing] = useState(false);
    const [cardDescriptionText, setCardDescriptionText] = useState(descriptionText);
    const [cardDescriptionIsEditing, setCardDescriptionIsEditing] = useState(false);

    const closeForm = (e) => {
      setIsEditing(false);
      setCardIsEditing(false);
      setCardDescriptionIsEditing(false);
    };

    const handleChange = (e) => {
      setText(e.target.value);
    };
   
    // по нажатию на кнопку save убрать поле редактирования
    const saveCard = (e) => {
      let editedTime = new Date();
      e.preventDefault();
      dispatch(editCard({id, listID, cardText, editedTime, cardDescriptionText}));
      setIsEditing(false);
      setCardIsEditing(false);
    };
    
    const handleDeleteCard = (e) => {
      dispatch(deleteCard(id, listID));
    };

    const renderEditForm = () => {
      return (
        <TrelloForm
          text={cardText}
          onChange={handleChange}
          closeForm={closeForm}
        >
          <TrelloButton onClick={saveCard}>Save</TrelloButton>
        </TrelloForm>
      );
    };

    // -----------------------------------

    const handleDescriptionChange = (e) => {
      setCardDescriptionText(e.target.value);
    };

    const saveDescription = (e) => {
      let editedTime = new Date();
      e.preventDefault();
      dispatch(editCard(id, listID, cardText, editedTime, cardDescriptionText));
      setCardDescriptionIsEditing(false);
    } 

    const renderDescriptionForm = () => {
      return (
        <TrelloForm
          text={cardDescriptionText}
          onChange={handleDescriptionChange}
          closeForm={closeForm}
        >
          <TrelloButton onClick={saveDescription}>Save</TrelloButton>
        </TrelloForm>
      );
    };

    const modalRef = React.useRef();
    const renderCard = () => {
      const openModal = () => {
        modalRef.current.openModal();
      };
      const closeModal = () => {
        modalRef.current.closeModal();
      };

      return (
        <div>
          <Draggable draggableId={String(id)} index={index}>
            {(provided) => (
              <CardContainer
                {...provided.draggableProps}
                {...provided.dragHandleProps}
                ref={provided.innerRef}
                onDoubleClick={() => setIsEditing(true)}
                onClick={openModal}
              >
                <Card>
                  <EditButton
                    onMouseDown={() => setIsEditing(true)}
                    fontSize="small"
                  >edit</EditButton>
                  <DeleteButton fontSize="small" onMouseDown={handleDeleteCard}>
                    delete
                  </DeleteButton>
                  <CardContent>
                    <Typography gutterBottom>{text}</Typography>
                  </CardContent>
                </Card>
              </CardContainer>
            )}
          </Draggable>

          <Modal ref={modalRef}>
            <div className="card-position">
              Board - "{boardTitle}" / List - "{listTitle}" /
            </div>
            <hr />
            <div className="card-info">
              <CreateDiv className="card-title" onDoubleClick={() => setCardIsEditing(true)}>
                {cardIsEditing ? renderEditForm() : text}
              </CreateDiv>
              <CreateDiv  className="card-description" onDoubleClick={() => setCardDescriptionIsEditing(true)}>
                {cardDescriptionIsEditing ?  renderDescriptionForm() : descriptionText}
                {cardDescriptionIsEditing ? null : <EditDescriptionButton onClick={() => setCardDescriptionIsEditing(true)}>{descriptionText ? "Edit Description" : "Add Description"} </EditDescriptionButton>}
              </CreateDiv>
            </div>
            <hr />
            <div className="form-field-wrapper">
              <div className="card-details">{`Column: ${listTitle}`}</div>
              <div className="card-details">
                {`Created: ${
                  createdTime ? new Date(createdTime).toLocaleString() : ""
                }`}
              </div>
              <div className="card-details">
                {`Edited: ${
                  editedTime ? new Date(editedTime).toLocaleString() : ""
                }`}
              </div>
            </div>
            <hr />
            <div className="button-panel">
              <TextButton onClick={closeModal}>Cancel</TextButton>
              <TextButton onClick={handleDeleteCard}>Delete</TextButton>
            </div>
          </Modal>
        </div>
      );
    };
    return isEditing ? renderEditForm() : renderCard();
  }
);

export default connect()(TrelloCard);
