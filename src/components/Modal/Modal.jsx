import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Overlay, ModalBackdrop } from './Modal.styled';

const modalRoot = document.querySelector('#modal-root');

const Modal = ({ children, onClose }) => {
  useEffect(() => {
    const handleKeyDown = e => {
      if (e.code === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  const handleBackdropClick = e => {
    // console.log('CurrentTarget:', e.currentTarget);
    // console.log('target:', e.target);
    if (e.currentTarget === e.target) {
      onClose();
    }
  };

  return createPortal(
    <ModalBackdrop onClick={handleBackdropClick}>
      <Overlay>{children} </Overlay>
    </ModalBackdrop>,
    modalRoot
  );
};

export default Modal;

// class Modal extends Component {
//   componentDidMount() {
//     window.addEventListener('keydown', this.handleKeyDown);
//   }

//   componentWillUnmount() {
//     window.removeEventListener('keydown', this.handleKeyDown);
//   }

//   handleKeyDown = e => {
//     if (e.code === 'Escape') {
//       this.props.onClose();
//     }
//   };

//   handleBackdropClick = e => {
//     // console.log('CurrentTarget:', e.currentTarget);
//     // console.log('target:', e.target);
//     if (e.currentTarget === e.target) {
//       this.props.onClose();
//     }
//   };

//   render() {
//     return createPortal(
//       <ModalBackdrop onClick={this.handleBackdropClick}>
//         <Overlay>{this.props.children} </Overlay>
//       </ModalBackdrop>,
//       modalRoot
//     );
//   }
// }

// export default Modal;
