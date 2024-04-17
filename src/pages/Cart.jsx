import NavBar from "../components/NavBar"
import Announcement from "../components/Announcement"
import Footer from "../components/Footer"
import styled from "styled-components"

const Container=styled.div`
    
`
const Wrapper=styled.div`
    padding: 20px;
`
const Title=styled.h1`
    text-align: center;
    font-weight: 300;
`

const Top=styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`

const TopButton=styled.button`
    padding: 10px;
    font-weight: 600;
    cursor: pointer;
`
const TopTexts=styled.div`
    
`
const TopText=styled.span`
    text-decoration: underline;
    font-size: 500;
    margin: 0 10px;
    cursor: pointer;
`

const Bottom=styled.div``

const Cart = () => {
  return (
    <Container>
        <NavBar/>
        <Announcement/>
        <Wrapper>
            <Title>YOUR BAG</Title>
            <Top>
                <TopButton>CONTINUE SHOPPING</TopButton>
                <TopTexts>
                    <TopText>Shopping Bag(2)</TopText>
                    <TopText>Your Wishlist (0)</TopText>
                </TopTexts>
                <TopButton>CHECKOUT NOW</TopButton>
            </Top>
            <Bottom></Bottom>
        </Wrapper>
        <Footer/>
    </Container>
  )
}

export default Cart