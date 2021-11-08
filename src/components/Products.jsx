import React from "react";
import styled from "styled-components";
import { popularProducts } from "../data";
import Product from "./Product";
import { mobile, mobileM } from "../responsive";

//
//
const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  ${mobile({ flexDirection: "column", padding: "none" })}
  ${mobileM({ flexDirection: "column", padding: "none" })}
`;

//
//

const Products = () => {
  return (
    <Container>
      {popularProducts.map((item) => (
        <Product item={item} key={item.id} />
      ))}
    </Container>
  );
};

export default Products;
