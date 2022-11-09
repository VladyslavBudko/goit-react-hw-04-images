import React, { Component } from 'react';
import { createPortal } from 'react-dom';
import { Overlay, ModalBackdrop } from './Modal.styled';

const modalRoot = document.querySelector('#modal-root');

class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = e => {
    if (e.code === 'Escape') {
      // console.log('Escape');
      this.props.onClose();
    }
  };

  handleBackdropClick = e => {
    // !!!!!!!!!!!!! Проверить !!!!!!!!!!!!!!!
    // console.log('CurrentTarget:', e.currentTarget);
    // console.log('target:', e.target);
    if (e.currentTarget === e.target) {
      this.props.onClose();
    }
  };

  render() {
    return createPortal(
        // !!!!!!!!!! Убрать className !!!!!!!!!!!
      <ModalBackdrop  onClick={this.handleBackdropClick}>
        <Overlay >{this.props.children} </Overlay>
      </ModalBackdrop>,
      modalRoot
    );
  }
}

export default Modal;
