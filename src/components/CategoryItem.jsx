import React from "react";
// dont add queries inside the image, as it makes them ugly
import styled from "styled-components";

//
//
const Container = styled.div`
  flex: 1;
  margin: 3px;
  height: 70vh;
  position: relative;
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  aspect-ratio: 1;
  //
  //
`;
const Info = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  //
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
//
//
const Title = styled.h1`
  font-family: "Poppins-light";
  color: rgb(248, 248, 248);
  margin-bottom: 20px;
  letter-spacing: 1px;
`;
const Button = styled.button`
  padding: 10px 20px;
  font-size: 1em;
  color: rgb(248, 248, 248);
  border: 0.5px solid rgb(248, 248, 248);
  background-color: transparent;
  text-transform: uppercase;
  cursor: pointer;
  //
  transition: all 0.5s ease-in-out;
  //
  //hover
  &:hover {
    background-color: #13131318;
    color: rgb(255, 255, 255);
  }
`;

const CategoryItem = ({ item }) => {
  return (
    <Container>
      <Image src={item.img} />
      <Info>
        <Title>{item.title}</Title>
        <Button>SHOP NOW</Button>
      </Info>
    </Container>
  );
};

export default CategoryItem;
