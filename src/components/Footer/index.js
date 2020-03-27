import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import raia from '../../assets/logo_drogaraia.png';
import drogasil from '../../assets/logo_drogasil.png';
import farmasil from '../../assets/logo_farmasil.png';
import bio4 from '../../assets/logo_4bio.png';
import univers from '../../assets/logo_univers.png';
import logoSmall from '../../assets/logo_small.png';

const Foot = styled.div`
  max-width: 600px;
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  justify: space-between;
  margin: 20px auto 0 auto;

  p{
   font-size: 14px;
  }
  .icons {

    margin: 20px auto;
    text-align: center;

    a {
      padding: 10px;
    }

  }

  @media (min-width: 600px) {
    max-width: 1200px;
    flex-direction: row;
  }
`;

const Footer = () => {
  return (
    <Foot>
      <p>
        RD 2017. Todos os direitos reservado
      </p>
      <div className="icons">
        <Link to="/raiadrogasil">
          <img src={raia} alt="drogaraia"/>
        </Link>

        <Link to="/drogasil">
          <img src={drogasil} alt="drogasil"/>
        </Link>

        <Link to="/farmasil">
          <img src={farmasil} alt="farmasil"/>
        </Link>

        <Link to="/4bio">
          <img src={bio4} alt="4bio"/>
        </Link>

        <Link to="/univers">
          <img src={univers} alt="univers"/>
        </Link>
      </div>
      <img src={logoSmall} alt="logosmall"/>
    </Foot>
    )
  };

  export default Footer;
