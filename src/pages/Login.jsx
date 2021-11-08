import React from 'react'

import { mobile, mobileM, tablet } from "../responsive";
import styled from "styled-components";

// 
// 
const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

  /*  */
  background: linear-gradient(
      rgba(255, 255, 255, 0.2),
      rgba(255, 255, 255, 0.2)
    ),
    url("../img-store/soroush-golpoor-Z4N2c8ZNUQ0-unsplash.jpg") center;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

//
const Wrapper = styled.div`
  width: 30%;
  padding: 30px 40px;
  background-color: white;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  ${mobile({ width: "90%" })}
  ${mobileM({ width: "75%" })}
  ${tablet({ width: "75%" })}
`;

const Title = styled.h1`
  font-size: 1.7em;
  font-weight: 300;
  margin: 10px 0;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 7px 0;
  padding: 13px;
  ${mobile({ padding: "12px" })}
  ${mobileM({ padding: "12px" })}
  ${tablet({ padding: "16px" })}
`;

const Button = styled.button`
  margin: 16px 0 15px 0;
  width: 40%;
  padding: 13px 20px;
  //background
  border: 1px solid #121212;
  color: rgb(248, 248, 248);
  background-color: #121212;

  border-radius: 50px;
  cursor: pointer;
  font-weight: 500;
  transition: all 1s ease-in-out;
  &:hover {
    color: #121212;
    border: 1px solid #121212;
    background-color: transparent;
  }
`;
//
//

const Link = styled.a`
  margin: 3px 0px;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
`;
//
// 

const Login = () => {
    return (
        <Container>
        <Wrapper>
        <Title>SIGN IN</Title>
        <Form>
          <Input placeholder="username" />
          <Input placeholder="password" />
          <Button>LOGIN</Button>
          <Link>DO NOT YOU REMEMBER THE PASSWORD?</Link>
          <Link>CREATE A NEW ACCOUNT</Link>
        </Form>
  
          {/*  
          
          */}
        </Wrapper>
      </Container>
    )
}

export default Login
