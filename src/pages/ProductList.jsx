import styled from "styled-components"
import NavBar from "../components/NavBar"
import Announcement from "../components/Announcement"
import Product from "../components/Product"
import NewsLetter from "../components/NewsLetter"
import Footer from "../components/Footer"

const Container=styled.div`
    
`
const Title=styled.h1`
    margin: 20px;
`
const FilterContainer=styled.div`
    display: flex;
    justify-content: space-between;
`
const Filter=styled.div`
    margin: 20px;
`
const FilterText=styled.div`
    font-size: 20px;
    font-weight: 600;
`

const ProductList = () => {
  return (
    <Container>
        <NavBar/>
        <Announcement/>
        <Title>Dresses</Title>
        <FilterContainer>
            <Filter>
                <FilterText>Filter Products:</FilterText>
            </Filter>
            <Filter>
                <FilterText>Sort Products:</FilterText>
            </Filter>
        </FilterContainer>
        <Product/>
        <NewsLetter/>
        <Footer/>
    </Container>
  )
}

export default ProductList