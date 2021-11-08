import React from "react";
import styled from "styled-components";
import { mobile, mobileM, tablet } from "../responsive";

//
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Products from "../components/Products";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";

//

const Container = styled.div`
  //

  //
`;

//
//
//

const Title = styled.h1`
  margin: 70px 20px 20px 20px;
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Filter = styled.div`
  margin: 20px;
  ${mobile({ width: "0px 20px", display: "flex", flexDirection: "column" })}
  ${mobileM({ width: "0px 20px", display: "flex", flexDirection: "column" })}
  ${tablet({ width: "0px 20px", display: "flex", flexDirection: "column" })}
`;

//
const FilterText = styled.span`
  font-size: 1.1em;
  letter-spacing: 0.5px;
  font-weight: 600;
  margin-right: 20px;
  ${mobile({ marginRight: "0" })}
  ${mobileM({ marginRight: "0" })}
  ${tablet({ marginRight: "0" })}
`;

const Select = styled.select`
  padding: 10px;
  margin: 20px 2px;
  border: none;
  background-color: #ffffff6a;
  ${mobile({ margin: "7px 0" })}
  ${mobileM({ margin: "7px 0" })}
  ${tablet({ margin: "7px 0" })}
`;
const Option = styled.option`
  margin: 5px;
  border: none;
`;

//
//
//
//
const ProductList = () => {


  return (
    <Container>
      <Navbar />
      <Announcement />

      <Title>Dresses</Title>
      <FilterContainer>
        {/* 
              
              
            Filter Products

      
      */}
        <Filter>
          <FilterText>Filter Products:</FilterText>
          <Select>
            <Option disabled selected>
              Color
            </Option>
            <Option>White</Option>
            <Option>Black</Option>
            <Option>Red</Option>
            <Option>Blue</Option>
            <Option>Yellow</Option>
            <Option>Green</Option>
          </Select>
          <Select>
            <Option disabled selected>
              Size
            </Option>
            <Option>XS</Option>
            <Option>S</Option>
            <Option>M</Option>
            <Option>L</Option>
            <Option>XL</Option>
          </Select>
        </Filter>
        {/* 
              
              
              Sort Products

      
      */}
        <Filter>
          <FilterText>Sort Products:</FilterText>
          <Select>
            <Option selected>Newest</Option>
            <Option>Price (asc)</Option>
            <Option>Price (desc)</Option>
          </Select>
        </Filter>
      </FilterContainer>

      <Products />
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default ProductList;
