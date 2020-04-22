import styled from "styled-components";


export const OpenFormButton = styled.div`
      display: flex;
      align-items: center;
      cursor: pointer;
      border-radius: 3px;
      height: 36px;
      margin-left: 8px;
      width: 300px;
      padding-left: 10px;
      padding-right: 10px;
      opacity: ${(props) => props.list ? 1 : 0.5};
      color: ${(props) => props.list ? "white" : "inherit"};
      background-color: ${(props) => props.list ? "rgba(0,0,0,.15)" : "inherit"};
    `;