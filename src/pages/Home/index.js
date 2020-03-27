import React, { useState } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';

import DesktopImg from '../../assets/desktop-responsive-design.png';
import TabletsImg from '../../assets/tablets-responsive-design.png';
import MobileImg from '../../assets/mobile-responsive-design.png';

import Modal from '../../components/Modal';

const Main = styled.div`
  max-width: 600px;
  margin: 60px auto;
  h2 {
    text-align: center;
    font-size: 32px;
    color: #007f56;
    font-weight: 300;
    margin-bottom: 20px;
    span {
      font-weight: 800;
    }
  }

  p {
    text-align: center;
    font-size: 26px;
  }

  ul {
    display: flex;
    flex-wrap: wrap;
    font-size: 24px;
    justify-content: center;

  }
  @media (min-width: 600px) {
    max-width: 1200px;

    h2 {
      font-size: 60px;
      line-height: 1em;
    }

    p {
      max-width: 900px;
      width: 100%;
      font-size: 32px;
      margin: 50px auto 0;
  }
  }
`;

const Li = styled.li`
      display: flex;
      align-items: center;

      ::before {
        content: '';
        display: inline-block;
        height: 15px;
        width: 15px;
        background-color: ${props => `#${props.color}`};
        border-radius: 50%;
      }
`;

const Container = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media (min-width: 600px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

const Device = styled.div`
  margin: 20px;
  display: flex;
  flex-direction: column;
  max-width: 360px;
  width: 100%;
  .img {
    padding: 10px;
    height: 244px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: ${props => `#${props.color}`};
    p {
      color: white;
      padding-top: 32px;
      font-size: 26px;
      text-shadow: none;
    }
  }

  .content {
    background-color: white;
    padding: 10px;
    p {
      font-size: 18px;
    }

    button {
      float: right;
      padding: 2px;
      font-size: 18px;
      width: 90px;
      height: 30px;
      border: none;
      background-color: ${props => `#${props.color}`};
      color: white;

      :hover {
        color: ${props => `#${props.color}`};
        background-color: white;
        border: 1px solid ${props => `#${props.color}`}
      }
    }
  }
`;

const Home = () => {
  const [scrollDown, setScrollDown] = useState(false);
  const [theme, setTheme] = useState({ mode: 'dark'});

  const modal = useSelector(state => state.toggleModal);

  const dispatch = useDispatch();

  const togMod = () => {
      dispatch({ type: 'TOGGLE_MODAL', status: !modal })
    }

  const togTheme = () => {
      setTheme(theme.mode === 'light' ? {mode: 'dark'} : {mode: 'light'});
      dispatch({type: 'TOGGLE_THEME', status: theme});
    }

  return(
    <div>
      <Main>
        <h2>
          Crie este site <span>responsivo</span> com <span>React</span>
          utilizando <span>styled-component</span>
        </h2>

        <p>
          A fonte utilizada é a Open Sans de 300 a 800. exemplo: "Open Sans", Helvetica, sans-serif, arial; Já as cores são:
        </p>
        <ul>
          <Li color="007f56">#007f56,</Li>
          <Li color="868686">#868686,</Li>
          <Li color="fe9481">#FE9481,</Li>
          <Li color="fcda92">#FCDA92e</Li>
          <Li color="9c8cb9">#9C8CB9</Li>
        </ul>
      </Main>

        <Container>
          <Device color="FE9481">
            <div className="img">
              <img src={DesktopImg} alt="desktop"/>
              <p>Site Responsivo Desktop</p>
            </div>
            <div className="content">
              <p>Quando pressionado o botão Leia mais... o restante da informação deverá aparecer em scroll down</p>

              <button
                onClick={() => setScrollDown(!scrollDown)}
              >Leia Mais</button>
            </div>
          </Device>

          <Device color="FCDA92">
            <div className="img">
              <img src={TabletsImg} alt="tablet"/>
              <p>Site Responsivo Tablet</p>
            </div>
            <div className="content">
              <p>Quando pressionado o botão Leia mais... o restante da informação deverá aparecer em scroll down</p>

              <button
                onClick={() => togMod()}
              >Leia Mais</button>
            </div>
          </Device>

          <Device color="9C8CB9">
            <div className="img">
              <img src={MobileImg} alt="mobile"/>
              <p>Site Responsivo Mobile</p>
            </div>
            <div className="content">
              <p>Quan`do pressionado o botão Leia mais... o restante da informação deverá aparecer em scroll down</p>

              <button
                onClick={() => togTheme()}
              >Leia Mais</button>
            </div>
          </Device>
        </Container>

        {
         modal ? <Modal toggleModal={() => togMod()}/> : null
        }
      </div>
  );
};

export default Home;
