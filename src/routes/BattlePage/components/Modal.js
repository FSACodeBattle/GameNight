import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};


class ExampleModal extends React.Component {
  constructor(props) {
    super();
    
    this.state = {
      modalIsOpen: props.modalIsOpen
    };
  }

  render() {
    return (
      <div>
        <Modal
          isOpen={this.state.modalIsOpen}
          closeTimeoutMS={2500}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
          shouldCloseOnOverlayClick={false}
          contentLabel="No Overlay Click Modal"
        >
          <img
            alt='Ah Ah Ah! You didnt say the magic word'
            className='magicWord'
            src='https://media.giphy.com/media/uOAXDA7ZeJJzW/giphy.gif' />
        </Modal>
      </div>
    );
  }
}

export default ExampleModal;