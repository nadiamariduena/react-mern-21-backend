import React from "react";
import { mobile, mobileM, tablet  } from "../responsive";
//
//
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
//
import { Add, Remove } from "@material-ui/icons";
import styled from "styled-components";
//
// IMage
import { popularProducts } from "../data";

//

//
const Container = styled.div`
  width: 100%;
`;

//
const Wrapper = styled.div`
  width: 100%;
  padding: 50px;
  display: flex;
  //
  ${mobile({ padding: "10px", flexDirection: "column" })}
  ${mobileM({ padding: "10px", flexDirection: "column" })}
  ${tablet({ padding: "10px", flexDirection: "column" })}
`;
//
const ImgContainer = styled.div`
  flex: 1;
`;

const Image = styled.img`
  width: 100%;
  height: 90vh;
  object-fit: cover;
  ${mobile({ height: "60vh" })}
  ${mobileM({ height: "60vh" })}
`;

const InfoContainer = styled.div`
  flex: 1; //is will make 50%
  /* 
  
  InfoContainer and the ImgContainer are both flex 1 which means(50%),
 
  
  */
  padding: 0px 50px;
  ${mobile({ padding: "0 10px", width: "95%" })}
  ${mobileM({ padding: "0 10px", width: "95%" })}
`;

const Title = styled.h1`
  font-weight: 200;
  ${mobile({ marginTop: "60px", fontSize: "1.8em", lineHeight: "1.2em" })}
  ${mobileM({ marginTop: "60px", fontSize: "1.9em", lineHeight: "1.1em" })}
  ${tablet({ marginTop: "60px", fontSize: "2.2em", lineHeight: "1.1em" })}
`;

const Desc = styled.p`
  margin: 20px 0px;
`;

const Price = styled.span`
  font-weight: 100;
  font-size: 40px;
`;

//
//
//
//
//          **    option color  ***
//
const FilterContainer = styled.div`
  width: 50%;
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
`;

const Filter = styled.div`
  display: flex;
  align-items: center;
`;

//
// the title 'color'
const FilterTitle = styled.span`
  font-size: 20px;
  font-weight: 200;
  margin: 0px 10px 0 0px;
`;

// the circles with the colors
const FilterColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin: 0px 5px;
  cursor: pointer;
`;

const FilterSize = styled.select`
  margin-left: 10px;
  padding: 5px;
  border: none;
  background-color: #ffffff6a;
`;

const FilterSizeOption = styled.option``;

//
//
//            **    BUTTONS   ***
//
const AddContainer = styled.div`
  width: 60%;
  margin-top: 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  //to check the width where you are border: 1px solid red;

  //
  ${mobile({
    width: "auto",
  })}
  ${mobileM({
    width: "85%", //this is connected to the button, the smaller the size, the less space you will have for the button, this will cause that the button become a circle(related to the size of the padding and margin )
  })}
    ${tablet({
    width: "95%",
  })}
`;

const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
`;

const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 0.5px dotted black;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
`;

const Button = styled.button`
  display: inline-block;
  /* desktop   padding: 0.80em 1.5em; */
  /*oroginal padding: 0.35em 1.2em; */
  //
  //
  padding: 1.2em 1.6em;
  border: 0.1em solid #121212;
  margin: 0 0.3em 0.3em 0;
  border-radius: 8em;
  box-sizing: border-box;
  text-decoration: none;
  font-family: "Roboto", sans-serif;
  font-weight: 300;
  color: #121212;
  text-align: center;
  transition: all 0.2s;

  /*  font-weight: 300;
   color: #ffffff;
   text-align: center;
   transition: all 0.2s; */

  //background

  background-color: transparent;

  /* border-radius: 50px; */
  cursor: pointer;
  font-weight: 500;
  transition: all 1s ease-in-out;
  &:hover {
    border: 1px solid #121212;
    color: rgb(248, 248, 248);
    background-color: #121212;
  }
  //
  ${mobile({
    display: "block",
    margin: "0.2em 0.5em 0.2em 0.1em",
    //has to do with the  AddContainer on top of this file, the bigger the container is, the more you can expand the button or add margin right
    padding: "1em 0.8em",
    fontSize: "0.9em",
  })}
  ${mobileM({
    width: "55%",
    display: "block",
    margin: "0.2em 0.5em",
    //has to do with the  AddContainer on top of this file, the bigger the container is, the more you can expand the button or add margin right
    padding: "1em 0.8em",
    fontSize: "0.9em",
  })}
    ${tablet({
    width: "45%",
    padding: "13px 0",
    margin: "0 0 0 20px",
  })}
`;
//
//
//
//

const Product = () => {
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Wrapper>
      <ImgContainer>
          {popularProducts
            .filter((item) => item.title === "flower3")
            .map((item) => (
              <Image src={item.img} key={item.id} />
            ))}
        </ImgContainer>
        <InfoContainer>
          <Title>Crocodile Embossed bag</Title>
          <Desc>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            venenatis, dolor in finibus malesuada, lectus ipsum porta nunc, at
            iaculis arcu nisi sed mauris. Nulla fermentum vestibulum ex, eget
            tristique tortor pretium ut. Curabitur elit justo, consequat id
            condimentum ac, volutpat ornare.
          </Desc>
          <Price>$ 128</Price>
          {/* 

*/}
          <FilterContainer>
            <Filter>
              <FilterTitle>Color</FilterTitle>
              <FilterColor color="white" />
              <FilterColor color="#85390e " />
              <FilterColor color="#BEBAB0" />
            </Filter>
            <Filter>
              <FilterTitle>Size</FilterTitle>
              <FilterSize>
                <FilterSizeOption>XS</FilterSizeOption>
                <FilterSizeOption>S</FilterSizeOption>
                <FilterSizeOption>M</FilterSizeOption>
                <FilterSizeOption>L</FilterSizeOption>
                <FilterSizeOption>XL</FilterSizeOption>
              </FilterSize>
            </Filter>
          </FilterContainer>

          {/*  */}
          <AddContainer>
            <AmountContainer>
              <Remove />
              <Amount>1</Amount>
              <Add />
            </AmountContainer>
            <Button>ADD TO CART</Button>
          </AddContainer>
          {/*  
          
          */}
        </InfoContainer>
      </Wrapper>

      <Newsletter />
      <Footer />
    </Container>
  );
};

export default Product;
