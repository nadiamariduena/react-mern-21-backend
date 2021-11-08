import React from "react";
import { mobile, mobileM, tablet } from "../responsive";

import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

//
import { Add, Remove } from "@material-ui/icons";
import styled from "styled-components";
//
// IMage
import { popularProducts } from "../data";
//
const Container = styled.div``;
//
const Wrapper = styled.div`
  padding: 20px 20px 70px 20px;
  margin: 0px 0 70px 0;
  ${mobile({
    padding: "10px 10px 70px 10px",
  })}
`;

const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  margin: 3px 0 30px 0;
  /*HELPER border: 1px solid red; */
  //
  ${mobile({
    width: "auto",
    padding: "20px 5px",
  })}
  ${mobileM({
    width: "auto",
    padding: "20px 5px",
  })}
    ${tablet({
    width: "auto",
    padding: "20px 20px",
  })}
`;

const TopButton = styled.button`
  padding: 1.2em 1.6em;

  margin: 0 0.3em 0.3em 0;
  border-radius: 8em;
  box-sizing: border-box;
  text-decoration: none;
  font-family: "Roboto", sans-serif;
  font-weight: 300;

  text-align: center;
  transition: all 0.2s;
  /* width: 18%;
  padding: 10px 25px;
  border-radius: 50px;
  cursor: pointer;
  font-weight: 500;
  transition: all 1s ease-in-out; */
  //if props is equal to 'filled' then border none, in this case
  /* i want color in the border (props.color) just to test */
  border: 2px solid ${(props) => props.type === "filled" && props.color};
  //
  //
  //if props is equal to filled ? if its, then it will be black,
  /* if it s not filled it will be  transparent*/
  background-color: ${(props) =>
    props.type === "filled" ? "black" : "transparent"};
  //
  color: ${(props) => props.type === "filled" && "white"};
  //
  //
  //
  //

  &:hover {
    //if props is equal to 'filled' on HOVER ,props.color(check the props on filled button)
    border: 2px solid ${(props) => props.type === "filled" && props.color};

    color: #121212;
    /* border: 1px solid #121212; */
    background-color: ${(props) =>
      props.type === "transparento" ? props.bg : "transparent"};
  }

  //
  ${mobile({
    display: "block",
    margin: "0.2em 0.5em 0.2em 0.1em",
    //has to do with the  AddContainer on top of this file, the bigger the container is, the more you can expand the button or add margin right
    padding: "0.7em 0.5em",
    fontSize: "0.9em",
  })} //
    ${mobileM({
    display: "block",
    margin: "0.2em 0.5em 0.2em 0.1em",
    //has to do with the  AddContainer on top of this file, the bigger the container is, the more you can expand the button or add margin right
    padding: "0.7em 0.5em",
    fontSize: "0.9em",
  })} //
      ${tablet({
    width: "35%",
    display: "block",
    margin: "0.2em 0.5em 0.2em 0.1em",
    //has to do with the  AddContainer on top of this file, the bigger the container is, the more you can expand the button or add margin right
    padding: "0.7em 0.5em",
    fontSize: "0.9em",
  })} //
`;

const TopTexts = styled.div`
  ${mobile({ display: "none" })}
  ${mobileM({ display: "none" })}
  ${tablet({ display: "none" })}
`;
const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0px 10px;
`;
//
//
//
//
//
//
//
//
const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: #ddd8c74c;
  padding: 50px 0px;
  ${mobile({ flexDirection: "column", width: "100%" })}
  ${mobileM({ flexDirection: "column", width: "100%" })}
`;
//
//
//
const Info = styled.div`
  flex: 2; //the size of the block
  ${mobile({ flexDirection: "column", width: "100%", flex: "1" })}
  ${mobileM({ flexDirection: "column", width: "100%", flex: "1" })}
`;
//
//
//
//
//
//
// PRODUCT / PRODUCT-DETAIL  /IMG
//
//
const Product = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: "column" })}
  ${mobileM({ flexDirection: "column" })}
`;

const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`;

const ImgContainer = styled.div`
  width: 200px;
`;
//
const Image = styled.img`
  width: 100%;
  object-fit: cover;
`;
//
//
//
//
//
// DETAILS / PRDUCT NAME, ID, COLOR, SIZE
//
//
const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;
const ProductName = styled.span``;
const ProductId = styled.span``;
const ProductColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
`;
const ProductSize = styled.span``;

//
//
//
//
//
//
//
// PRICE DETAIL / PRODUCT AMOUNT, PRICE
//
//

const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

// the + 2 -
const ProductAmount = styled.div`
  font-size: 1.4em;
  margin: 5px;
  //if you add too much to the top in mobile margin, the + and - wont follow, you will have to style the MUI icons
  ${mobile({ margin: "0.2em 0.5em 0em 0.5em " })}
  ${mobileM({ margin: "0.2em 0.5em 0em 0.5em " })}
`;
// 30$
const ProductPrice = styled.div`
  font-size: 30px;
  font-weight: 200;
  ${mobile({ margin: "0em 0.5em 0.8em 0.5em " })}
  ${mobileM({ margin: "0em 0.5em 0.8em 0.5em " })}
`;

//
// the line that will separate the products
const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 1px;
`;
//
//
//
//
//
//
// SUMMARY
//
const Summary = styled.div`
  flex: 1; //the size of the block
  border: 0.5px dotted lightgray;
  border-radius: 10px;
  padding: 20px;
  min-height: 50vh;
  text-align: right;
`;

const SummaryTitle = styled.h1`
  font-weight: 200;
`;

const SummaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "500"};
  font-size: ${(props) => props.type === "total" && "24px"};
`;

const SummaryItemText = styled.span``;

const SummaryItemPrice = styled.span``;

const Button = styled.button`
  margin: 10px 10px 0 0;
  width: 50%;
  padding: 10px;
  color: #121212;
  border: 2px solid #121212;
  background-color: transparent;

  cursor: pointer;
  font-weight: 600;
  transition: all 1s ease-in-out;
  &:hover {
    border-radius: 50px;
    border: 2px solid #121212;
    color: rgb(248, 248, 248);
    background-color: #121212;
  }
`;
//
//
//
//

//
const Cart = () => {
  return (
    <Container>
      <Navbar />
      <Announcement />

      <Wrapper>
        <Title>YOUR BAG</Title>
        <Top>
          <TopButton type="transparento" bg="#ffffff">
            CONTINUE SHOPPING
          </TopButton>
          <TopTexts>
            <TopText>Shopping Bag(2)</TopText>
            <TopText>Your Wishlist (0)</TopText>
          </TopTexts>
          <TopButton type="filled" color="#121212">
            CHECKOUT NOW
          </TopButton>
        </Top>
        {/* 


       */}

        <Bottom>
          <Info>
            <Product>
              <ProductDetail>
                {" "}
                {popularProducts
                  .filter((item) => item.title === "flower6")
                  .map((item) => (
                    <ImgContainer key={item.id}>
                      <Image src={item.img} />
                    </ImgContainer>
                  ))}
                <Details>
                  <ProductName>
                    <b>Product:</b> JESSIE THUNDER SHOES
                  </ProductName>
                  <ProductId>
                    <b>ID:</b> 93813718293
                  </ProductId>
                  <ProductColor color="black" />
                  <ProductSize>
                    <b>Size:</b> 37.5
                  </ProductSize>
                </Details>
              </ProductDetail>
              {/*  */}
              <PriceDetail>
                <ProductAmountContainer>
                  <Add />
                  <ProductAmount>2</ProductAmount>
                  <Remove />
                </ProductAmountContainer>
                <ProductPrice>$ 30</ProductPrice>
              </PriceDetail>
            </Product>
            {/*
            
            
            */}
            <Hr />
            {/* 
             
             
             */}

            <Product>
              <ProductDetail>
                {" "}
                {popularProducts
                  .filter((item) => item.title === "flower2")
                  .map((item) => (
                    <ImgContainer key={item.id}>
                      <Image src={item.img} />
                    </ImgContainer>
                  ))}
                <Details>
                  <ProductName>
                    <b>Product:</b> HAKURA T-SHIRT
                  </ProductName>
                  <ProductId>
                    <b>ID:</b> 93813718293
                  </ProductId>
                  <ProductColor color="gray" />
                  <ProductSize>
                    <b>Size:</b> M
                  </ProductSize>
                </Details>
              </ProductDetail>
              {/*  */}
              <PriceDetail>
                <ProductAmountContainer>
                  <Add />
                  <ProductAmount>1</ProductAmount>
                  <Remove />
                </ProductAmountContainer>
                <ProductPrice>$ 20</ProductPrice>
              </PriceDetail>
            </Product>
          </Info>
          {/* 
        
        */}
          <Summary>
            <SummaryTitle>ORDER SUMMARY</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>Subtotal</SummaryItemText>
              <SummaryItemPrice>$ 80</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Estimated Shipping</SummaryItemText>
              <SummaryItemPrice>$ 5.90</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Shipping Discount</SummaryItemText>
              <SummaryItemPrice>$ -5.90</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem type="total">
              <SummaryItemText>Total</SummaryItemText>
              <SummaryItemPrice>$ 80</SummaryItemPrice>
            </SummaryItem>
            <Button>CHECKOUT NOW</Button>
          </Summary>

          {/*  */}
        </Bottom>
      </Wrapper>
      {/* 
    
    */}
      <Footer />
    </Container>
  );
};

export default Cart;
