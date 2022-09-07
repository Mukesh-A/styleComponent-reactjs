import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { Button } from "../styles/Button";
import { FaDiscord, FaInstagram, FaYoutube } from "react-icons/fa";


function Footer() {
  return (
    <Wrapper>
      <section className="contact-short">
        <div className="grid grid-two-column">
          <div className="">
            <h3>Get Started</h3>
            <h3>Talk to us today</h3>
          </div>

          <div className="contact-short-btn ">
            <NavLink to="/">
              <Button>Contact us</Button>
            </NavLink>
          </div>
        </div>
      </section>


      {/* foot section */}

      <footer>
        <div className="container grid grid-four-column">
          <div className="footer-about">
            <h3>Mukesh</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, reprehenderit earum officia </p>
          </div>


          <div className="footer-subscribe">
            <h3>Subscribe to get import Updates</h3>
            <form action="#">
              <input type="email" required
              autoComplete="off"
              placeholder="Email" />
              <input type="submit" value="Subscribe" />
            </form>
          </div>

          <div className="footer-social">
            <h3>Follow us</h3>
            <div className="footer-social--icons">
              <div className="">

              <FaDiscord className="icons"/>
              </div>
              <div className="">

              <FaInstagram className="icons"/>
              </div>
              <div className="">

              <FaYoutube className="icons"/>
              </div>
            </div>
          </div>


          <div className="footer-contact">
            <h3>Call Us</h3>
            <h3>+91 12345678978</h3>
          </div>

        </div>
          {/* bottom section  */}
          <hr />
          <div className="footer-bottom--section">
          <div className="container ">
            <p>
              @{ new Date().getFullYear()}  Mukesh. All Rights Reserved
            </p>
            <div>
              <p>PRIVACY POLICY TERMS & CONDITIONS</p>
            
            </div>
          </div>
        </div>
      </footer>
    </Wrapper>
  );
}
 
const Wrapper = styled.section`
  .contact-short{
    max-width: 60vw;
    margin: auto;
    padding: 5rem 10rem;
    background-color: ${({theme})=> theme.colors.bg};
    border-radius: 1rem;
    box-shadow: ${({theme})=>theme.colors.shadowSupport};
    transform: translateY(50%);


  }
  .contact-short-btn{
    justify-self: end;
    align-self: center;
  }
    footer{
      padding: 14rem 0 5rem 0;
      background-color: ${({theme})=> theme.colors.footer_bg};

      h3{
        color: ${({theme})=> theme.colors.hr};
        margin-bottom: 2.4rem;

      }
      p{
        color: ${({theme})=> theme.colors.white};
      }

      .footer-social--icons {
      display: flex;
     
      gap: 2rem;
      div {
        padding: 1rem;
        border-radius: 50%;
        border: 2px solid ${({ theme }) => theme.colors.white};
        .icons {
          color: ${({ theme }) => theme.colors.white};
          font-size: 2.4rem;
          position: relative;
          cursor: pointer;
        }
      }
    }
    hr {
        margin-top : 2rem;
        color: ${({ theme }) => theme.colors.hr};
        height: 0.1px;
        opacity: 6%;
      } 
    .footer-bottom--section {
      display: flex;
      align-items: center;
      justify-content: center;
      /* padding-top: 9rem; */

     
    }
  }
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .contact-short {
      max-width: 95vw;
      padding: 2rem 0rem;
      display: flex;
      justify-content: center;
      align-items: center;
      .contact-short-btn {
        text-align: center;
        justify-self: flex-start;
      }
    }
    footer .footer-bottom--section {
      padding-top: 3.2rem;
    }
  }
`;

export default Footer;
