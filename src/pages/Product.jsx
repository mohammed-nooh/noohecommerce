import styled from "styled-components"
import NavBar from "../components/NavBar"
import Announcement from "../components/Announcement"
import NewsLetter from "../components/NewsLetter"
import Footer from "../components/Footer"
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import RemoveOutlinedIcon from '@mui/icons-material/RemoveOutlined';
import { mobile } from "../reponsive"

const Container=styled.div`
    
`
const Wrapper=styled.div`
    padding: 50px;
    display: flex;
    ${mobile({padding:"10px",flexDirection:"column"})}
`
const ImgContainer=styled.div`
    flex: 1;
    
`
const Image=styled.img`
  width: 100%;
    height: 90vh;
    ${mobile({height:"40vh"})}
`


const InfoContainer=styled.div`
    flex: 1;
    padding: 0 50px;
    ${mobile({padding:"10px"})}
`

const Title=styled.h1`
    font-weight: 200;
`
const Desc=styled.p`
    margin: 20px 0;
`
const Price=styled.span`
    font-weight: 100;
    font-size: 40px;
`
const FilterContainer=styled.div`
  display: flex;
  margin: 30px 0;
  justify-content: space-between;
  width: 40%;
  ${mobile({width:"100%"})}
`
const Filter=styled.div`
  display: flex;
  align-items: center;
`
const FilterTitle=styled.span`
  font-size: 20px;
  font-weight: 200;
`
const FilterColor=styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${props=>props.color};
  margin: 0 05px;
  cursor: pointer;

`
const FilterSize=styled.select`
  margin-left: 10px;
  padding: 5px;
`
const FilterSizeOption=styled.option``

const AddContainer=styled.div`
  display: flex;
  width: 40%;
  justify-content: space-between;
  align-items: center;
  margin: 30px 0;
  ${mobile({width:"100%"})}
`
const AmountContainer=styled.div`
  display: flex;
  font-weight: 700;
  align-items: center;
`
const Amount=styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid teal;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 5px;
`
const Button=styled.button`
  padding: 15px;
  background-color: white;
  border: 2px solid teal;
  cursor: pointer;
  font-weight: 500;

  &:hover{
    background-color: #f8f4f4;
  }
`

const Product = () => {
  return (
    <Container>
        <NavBar/>
        <Announcement/>
        <Wrapper>
            <ImgContainer >
              <Image src="https://www.pngarts.com/files/3/Women-Jacket-PNG-High-Quality-Image.png"/>
            </ImgContainer>
            <InfoContainer>
            <Title>Denim Jumpsuit</Title>
            <Desc>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque provident consequatur ducimus aperiam assumenda libero. Assumenda maiores ab dignissimos nostrum unde repudiandae. Placeat rem sequi error illum blanditiis? Cum, sint?</Desc>
            <Price>$ 20</Price>
            <FilterContainer>
            <Filter>
              <FilterTitle>Color</FilterTitle>
              <FilterColor color="black"/>
              <FilterColor color="green"/>
              <FilterColor color="darkblue"/>
            </Filter>
            <Filter>
              <FilterTitle>Size</FilterTitle>
              <FilterSize>
                <FilterSizeOption>S</FilterSizeOption>
                <FilterSizeOption>M</FilterSizeOption>
                <FilterSizeOption>L</FilterSizeOption>
                <FilterSizeOption>XL</FilterSizeOption>
              </FilterSize>
            </Filter>
            </FilterContainer>
            <AddContainer>
              <AmountContainer>
                <RemoveOutlinedIcon/>
                <Amount>1</Amount>
                <AddOutlinedIcon/>
              </AmountContainer>
              <Button>Add to Cart</Button>
            </AddContainer>
            </InfoContainer>
        </Wrapper>
        <NewsLetter/>
        <Footer/>
    </Container>
  )
}

export default Product