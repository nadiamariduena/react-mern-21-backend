import React from "react";
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
    url("../img-store/raphael-lovaski-M41QIR3v3SA-unsplash.jpg") center;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

//
const Wrapper = styled.div`
  width: 40%;
  padding: 30px 40px;
  background-color: white;
  box-shadow: rgba(90, 114, 138, 0.2) 0px 8px 24px;
  /*  */
`;
//
const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

//
//      ** FORM **
//
const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
  margin: 20px 0;
  //
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
`;

const Agreement = styled.span`
  font-size: 12px;
  margin: 40px 0px;
`;

const Button = styled.button`
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

//
//
//
const Register = () => {
  return (
    <Container>
      <Wrapper>
        <Title>CREATE AN ACCOUNT</Title>
        {/*  
        
        */}

        <Form>
          <Input placeholder="name" />
          <Input placeholder="last name" />
          <Input placeholder="username" />
          <Input placeholder="email" />
          <Input placeholder="password" />
          <Input placeholder="confirm password" />
          {/*  */}
          <Agreement>
            By creating an account, I consent to the processing of my personal
            data in accordance with the <b>PRIVACY POLICY</b>
          </Agreement>
          <Button>CREATE</Button>
        </Form>

        {/*  
        
        */}
      </Wrapper>
    </Container>
  );
};

export default Register;
