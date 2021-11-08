import React from "react";
import styled from "styled-components";
import {
  FavoriteBorderOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
} from "@material-ui/icons";
//
//

//
// This is going to be a mask on top of the products
const Info = styled.div`
  opacity: 0;
  //
  //
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: #0303031a;
  z-index: 3;
  //to center the icons
  display: flex;
  justify-content: center;
  align-items: center;
  //
  //related to the hover img
  transition: all 0.5s ease-in-out;
  cursor: pointer;
`;
//
const Container = styled.div`
  flex: 1;
  margin: 8px;
  min-width: 280px;
  height: 350px;
  display: flex;
  justify-content: center;
  align-items: center;
  //you dont really need the color
  background-color: #f3f0ec;
  /* border: 1px solid #000; */
  //related to info
  position: relative;
  //
  //opacity
  &:hover ${Info} {
    opacity: 1;
  }
`;
const Circle = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background-color: #e0edf0;
  position: absolute;
`;
const Image = styled.img`
  /* height: 75%; */
  width: 100%;
  height: 100%;
  z-index: 2;
  object-fit: cover;
  aspect-ratio: 1;
`;

//
//

const Icon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #ffffff;
  //
  display: flex;
  justify-content: center;
  align-items: center;
  //
  margin: 7px;
  transition: all 0.5s ease-in-out;
  //
  //hover
  &:hover {
    background-color: #f3f3f3;
    transform: scale(1.1);
  }
`;

//
//

const Product = ({ item }) => {
  return (
    <Container>
      <Circle />
      <Image src={item.img} />

      <Info>
        {/*  */}
        <Icon>
          <ShoppingCartOutlined />
        </Icon>
        {/*  */}
        <Icon>
          <SearchOutlined />
        </Icon>
        {/*  */}
        <Icon>
          <FavoriteBorderOutlined />
        </Icon>
      </Info>
    </Container>
  );
};

export default Product;
