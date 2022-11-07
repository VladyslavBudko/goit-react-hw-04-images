import React, { Component } from 'react';
import { createPortal } from 'react-dom';
import { Overlay, ModalBackdrop } from './Modal.styled';

const modalRoot = document.querySelector('#modal-root');

class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount(){
    window.removeEventListener('keydown', this.handleKeyDown )
  }

  handleKeyDown = e => {
    if (e.code === 'Escape') {
        console.log('Escape');
        this.props.onClose();
      }
  }

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
