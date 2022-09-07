import React, { useEffect, useState } from 'react'
import { FaArrowUp } from 'react-icons/fa';
import styled from 'styled-components';

const GoToTop = () => {

    const [isVisible, setIsVisible] = useState(false);


    const gotToBtn =()=>{
        window.scrollTo({top:0,left:0,behavior:"smooth"});
        
    }

    const listenToScroll = ()=>{

        let heightToHide = 250;
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;

        if(winScroll>heightToHide){
            setIsVisible(true)
        }else{
            setIsVisible(false)
        }
    } 

    useEffect(()=>{
        window.addEventListener('scroll',listenToScroll);

        // when we r keep listeniing to event the load wll b high on website so we need to remove that useEffect offers return 
        return ()=> window.removeEventListener('scroll',listenToScroll);
    },[]);



  return (
    <Wrapper>
        {isVisible && (
    <div className='top-btn' onClick={gotToBtn}>
      <FaArrowUp className='top-btn--icon'/>
    </div>
    )}
    </Wrapper>
  )
}

const Wrapper = styled.section`
    /* display: flex;
    justify-content: end;
    align-items: center; */

    .top-btn{
    font-size: 2.4rem;
    width: 6rem;
    height: 6rem;
    color: #fff;
    background-color: ${({ theme }) => theme.colors.btn};
    box-shadow: ${({ theme }) => theme.colors.shadow};
    border-radius: 50%;
    position: fixed;
    bottom: 5rem;
    right: 5rem;
    z-index: 999;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    &--icon {
      animation: gototop 1.2s linear infinite alternate-reverse;
    }
    @keyframes gototop {
      0% {
        transform: translateY(-0.5rem);
      }
      100% {
        transform: translateY(1rem);
      }
    }
  }
  /* @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .top-btn {
      right: 3rem; 
       left: 0%;
    }
  } */
`;


export default GoToTop
