import styled from "styled-components";


export const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`;

export const ModalBackdrop = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 100;
  background-color: rgba(0,0,0,0.3);
`;

export const ModalBox = styled.div`
  word-break: break-all;
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  min-height: 50%;
  width: 20%;
  overflow-y: auto;
  background-color: white;
  box-shadow: 0 0 10px rgba(0,0,0,0.25);
  z-index: 101;
  padding: 30px;
  border-radius: 10px;
  font-size: 17px;
  line-height: 1.8;
  font-weight: 500px;
  font-family: Arial, Helvetica, sans-serif;
`;
