import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import logoImg from '../../assets/logo.png';

const Container = styled.header`
  max-width: 600px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  border-bottom: 1px solid #E0E0E0;

  @media (min-width: 600px) {
    max-width: 1200px;
    justify-content: space-between;
    align-items: start;
  }
`;

const Button = styled.button`
  font-size: 18px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 80px;
  height: 40px;
  background-color: #007f56;
  color: white;
  border: none;

  ::before {
    content: '';
    display: inline-block;
    height: 2px;
    width: 12px;
    background-color: white;
    box-shadow: 0 4px white, 0 -4px white;
  }

  @media (min-width: 600px) {
    display: none;
  }
`;

const Nav = styled.div`
  .active {
    display: flex;
    flex-direction: column;
    left: 0;
    position: absolute;
    color: #007f56;
    width: 100%;
    height: 100%;
    top: 100px;
    background-color: #007f56;
    color: white;
    font-size: 22px;

    a {
      color: white;
      text-align: center;
      padding: 20px 0 10px 0;
    }
  }
  .inactive {
    display: none;
  }

  @media (min-width: 600px) {
    .inactive {
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      ilign-items: center;

      a {
        padding: 18px 0 0 20px;
        font-size: 22px;
        font-weight: 300;
        color: #007f56;
        letter-spacing: -.1em;
      }
    }
  }
`

const Header = () => {
  const [toggle, setToggle] = useState(false);
  //const [mobile, setMobile] = useState(false);

  useEffect(() => {
    /*const screen = () => {
      const screenValue = window.screen.width
      if(screenValue < 600) {
        return setMobile(true);
      }
    }
    screen()*/

  }, [])

  return (
    <Container>
      <Link to="/raiadrogasil">
        <img src={logoImg} alt="RaiaDrogasil"/>
      </Link>
      <Button
        aria-expanded="false"
        aria-controls="menu"
        onClick={() => setToggle(!toggle)}
      >Menu</Button>
      <Nav>
        <nav className={toggle ? "active" : "inactive"}>
        <Link to="/html5">HTML5</Link>
        <Link to="/css3">CSS3</Link>
        <Link to="/javascript">JAVASCRIPT</Link>
        <Link to="/react">REACT</Link>
        <Link to="/redux">REDUX</Link>
        </nav>
      </Nav>
    </Container>
  );
};

export default Header;
