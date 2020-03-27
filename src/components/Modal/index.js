import React from 'react';
import styled from 'styled-components'

const Container = styled.div`
  height: 100vh;
  width: 100%;
  background: rgba(0,0,0,.5);
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .modal {
    background-color: white;
    width: 300px;
    padding: 40px;
    position: relative;
  }

  button {
    position: absolute;
    top: -5px;
    right: -5px;
    width: 30px;
    height: 30px;
    border: none;
    border-radius: 50%;
    background-color: #007f56;
    font-size: 20px;
    color: white;
  }

`;

const Modal = ({toggleModal}) => {

  return(
      <Container>
        <div className="modal">
          <button
            onClick={toggleModal}
          >X</button>
          <h2>Where does it come from?</h2>
          <p>
            Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
          </p>
        </div>
      </Container>
  );
};

export default Modal;
