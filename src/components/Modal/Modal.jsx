import React, { Component } from 'react';
import { createPortal } from 'react-dom';
import { Overlay, ModalBackdrop } from './Modal.styled';

const modalRoot = document.querySelector('#modal-root');

class Modal extends Component {
  render() {
    return createPortal(
      <ModalBackdrop>
        <Overlay>{this.props.children} </Overlay>
      </ModalBackdrop>,
      modalRoot
    );
  }
}

export default Modal;
