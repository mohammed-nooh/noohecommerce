import React from "react";
import styled from "styled-components";
import { mobile } from "../reponsive";

const Container = styled.div`
    flex: 1;
    margin: 3px;
    height: 70vh;
    position: relative;
`;

const Image=styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    ${mobile({height:"20vh"})}
`
const Info=styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`

const Title=styled.h1`
    color: white;
    margin-bottom: 20px;
`
const Button=styled.button`
    padding: 10px;
    background-color: white;
    color: grey;
    font-weight: 600;
    border: none;
    cursor: pointer;
`

const CategoryItem = ({ item }) => {
  return <Container>
    <Image src={item.img}></Image>
    <Info>
        <Title>{item.title}</Title>
        <Button>Shop Now</Button>
    </Info>
  </Container>;
};

export default CategoryItem;
