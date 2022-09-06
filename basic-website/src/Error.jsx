import React from 'react'
import { NavLink } from 'react-router-dom';
import styled from 'styled-components'
import { Button } from './styles/Button';

const Error = () => {
  return (
    <Wrapper>
        <img className='errorimg' src="../images/error.svg" alt="" />
        <NavLink to="/">

        <Button className='btn'>Go Back</Button>
        </NavLink>
    </Wrapper>
  )
}
const Wrapper = styled.section`
padding: 9rem;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;

.errorimg{
    height: 30rem;
}

.btn{
    font-size: 1.8rem;
    margin-top: 5rem;
}
`;

export default Error
