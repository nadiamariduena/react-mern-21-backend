import React, { useState } from "react";
import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons";
import { mobile, mobileM, tablet, laptop } from "../responsive";
import styled from "styled-components";
//
import { sliderItems } from "../data";
//
// import img1 from "../img-store/oladimeji-odunsi-2.jpg";
//

const Container = styled.div`
  width: 100%;
  height: 100vh;
  /* height: calc(100vh - 12.2vh); */
  /* height: calc(100vh - 43px); */

  display: flex;
  //background: #f09819; /* fallback for old browsers */
  //background: -webkit-linear-gradient(
  /*  to right,
    #edde5d,
    #f09819
  );  Chrome 10-25, Safari 5.1-6 */
  /*  background: linear-gradient(
    to right,
    #edde5d,
    #f09819
  );  W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

  //
  //mobileM
  position: relative;
  ${mobile({ display: "none" })}
  ${mobileM({ display: "none" })}
  ${tablet({ display: "none" })}
  ${laptop({ display: "none" })}
`;
//
// Arrows
const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: #fff7f7;
  //
  border-radius: 50%;

  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  //
  // props direction=
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  //
  margin: auto;
  opacity: 0.4;
  cursor: pointer;
  //
  z-index: 2;
`;

//
// ----------------------- slide --------------
const Wrapper = styled.div`
  height: 100%;

  /*  */
  display: flex;
  //
  transition: all 1.2s ease;
  transform: translateX(${(props) => props.slideIndex * -100}vw);
  //100 will move it to the right
  //-100 will move the slider to the left
`;
//
//

const Slide = styled.div`
  width: 100vw;
  /* height:100vh; */
  height: calc(100vh - 12vh);

  /*  */
  display: flex;
  align-items: center;
  /*  */
  /* background-image: url("../img-store/oladimeji-odunsi-2.jpg");
  background-size: cover; */
  //
  //creme color fcf1e
  //color PROPS
  background-color: #${(props) => props.bg};
  color: #${(props) => props.fColor};
`;
//blocl img 1   ---------------
const ImgContainer = styled.div`
  height: 100%;
  /*  */
  flex: 1;
  overflow: hidden;
  /* background-color: #fde9d7; */
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  aspect-ratio: 1;
`;

//
// block text 2  ---------------
const InfoContainer = styled.div`
  /* background-color: #ff0; */
  flex: 1;
  padding: 50px 50px 50px 30px;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
`;
//
const Title = styled.h1`
  font-size: 70px;
  line-height: 68px;
  font-family: "Poppins-medium";
  /* color: #121212; */
`;
const Desc = styled.p`
  margin: 50px 10px 50px 0px;
  font-size: 1.3em;
  font-weight: 500;
  font-family: "Poppins-light";
  letter-spacing: 3px;
`;
const Button = styled.button`
  padding: 10px;
  font-size: 1.3em;
  background-color: transparent;
  text-transform: uppercase;
  border: 1px solid #${(props) => props.fColor};
  color: #${(props) => props.fColor};
  cursor: pointer;
`;
//
//
//
// ----------------------- slide --------------

const Slider = () => {
  //
  const [slideIndex, setSlideIndex] = useState(0);
  //

  const handleClick = (direction) => {
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
    } else {
      setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
    }
  };

  //
  return (
    <Container>
      <Arrow direction="left" onClick={() => handleClick("left")}>
        <ArrowLeftOutlined />
      </Arrow>

      <Wrapper slideIndex={slideIndex}>
        {sliderItems.map((items) => (
          <Slide bg={items.bg} fColor={items.fColor} key={items.id}>
            <ImgContainer>
              <Image src={items.img} />
            </ImgContainer>

            <InfoContainer>
              <Title>{items.title}</Title>
              <Desc>{items.desc}</Desc>
              <Button fColor={items.fColor}>{items.button}</Button>
            </InfoContainer>
          </Slide>
        ))}

        {/*  */}
      </Wrapper>

      <Arrow direction="right" onClick={() => handleClick("right")}>
        <ArrowRightOutlined />
      </Arrow>
    </Container>
  );
};

export default Slider;
