import React from "react";
import { connect } from "react-redux";
import Icon from "@material-ui/core/Icon";
import TrelloButton from "../TrelloButton/TrelloButton";
import TrelloForm from "../TrelloForm/TrelloForm";
import TrelloOpenForm from "../TrelloOpenForm/TrelloOpenForm";
import { OpenFormButton } from "./TrelloCreateStyled"
import { addList, addCard } from "../../store/types";




class TrelloCreate extends React.PureComponent {
  state = { 
    formOpen: false,
    text: "",
    createdTime: new Date()
  };

  // change fromOpen = ture by clicking ADD
  openForm = () => {
    this.setState({
      formOpen: true,
    });
  };
  //  remove input when clicking outside
  closeForm = () => {
    this.setState({
      formOpen: false,
    });
  };

  handleInputChange = (e) => {
    this.setState({
      text: e.target.value,
    });
  };

  //function for dispatching the action
  handleAddList = () => {
    const { dispatch } = this.props;
    const { text } = this.state;

    if (text) {
      this.setState({
        text: "",
      });
      dispatch(addList(text));
    }
    return;
  };

  handleAddCard = () => {
    
    const { dispatch, listID } = this.props;
    const { text, createdTime } = this.state;

    if (text) {
      this.setState({
        text: "",
        createdTime: new Date()
      });
      dispatch(addCard(listID, text, createdTime));
    }
    
  };

  onKeyUp = (e) => {
    if(e.keyCode === 13) {
      this.props.list ? this.handleAddList() : this.handleAddCard()
    }
  }

  // creating button Add another card/list
  renderOpenForm = () => {
    const { list } = this.props;

    const buttonText = list ? "Add another list" : "Add another card";
  
    return (
        <OpenFormButton list={list} onClick={this.openForm}>
          <Icon>add</Icon>
          <p style={{ flexShrink: 0 }}>{buttonText}</p>
        </OpenFormButton>
      );
    };
    render() {
        const { text } = this.state;
        const { list } = this.props;
        return this.state.formOpen ? (
          
          <TrelloForm
            onKeyUp={this.onKeyUp}
            text={text}
            onChange={this.handleInputChange}
            closeForm={this.closeForm}
          >
            <TrelloButton onClick={list ? this.handleAddList : this.handleAddCard}>
              {list ? "Add List" : "Add Card"}
            </TrelloButton>
          </TrelloForm>

        ) : (
          <TrelloOpenForm list={list} onClick={this.openForm}>
            {list ? "Add another list" : "Add another card"}
          </TrelloOpenForm>
        );
      }


}


export default connect()(TrelloCreate);
