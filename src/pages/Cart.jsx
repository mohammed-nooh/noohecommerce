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
    padding:20px;
`

const TopButton=styled.button`
    padding: 10px;
    font-weight: 600;
    cursor: pointer;
    border: ${props=>props.type === "filled" && "none"};
    background-color: ${props=>props.type === "filled" ? "black" : "transparent"};
    color: ${props=>props.type === "filled" && "white"};
`
const TopTexts=styled.div`
    
`
const TopText=styled.span`
    text-decoration: underline;
    font-size: 500;
    margin: 0 10px;
    cursor: pointer;
`

const Bottom=styled.div`
    display: flex;
    justify-content: center;
`

const Info=styled.div`
    flex: 3;
`
const Product=styled.div`
    display: flex;
    justify-content: space-between;
`
const ProductDetaill=styled.div`
    flex: 2;
    display: flex;
`
const Image=styled.img`
    width: 200px;
`
const Details=styled.div`
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`
const ProductName=styled.span``
const ProductId=styled.span``
const ProductColor=styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    border: 1px solid black;
    background-color: ${(props)=>props.color};
`
const ProductSize=styled.span``
const PriceDetails=styled.span`
    flex: 1;
`

const Summary=styled.div`
    flex: 1;
`

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
                <TopButton type="filled">CHECKOUT NOW</TopButton>
            </Top>
            <Bottom>
                <Info>
                    <Product>
                        <ProductDetaill>
                            <Image src="https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSPrigyutrkRxSqxdzKGKwnT9V_Vv71uIXQadDEg0uGNOKe1mCfITZD_2gQnXPUIbeXU3VIJa3ueh9WkWrvARHSBaFshNa5JfNVoSRsulY_oGwIyCXYq7URIg"/>
                            <Details>
                                <ProductName><b>PRODUCT: </b> JESSIE THUNDER SHOES</ProductName>
                                <ProductId><b>ID: </b>234876</ProductId>
                                <ProductColor color="lightgrey"/>
                                <ProductSize><b>Size: </b>37.5</ProductSize>
                            </Details>
                        </ProductDetaill>
                        <PriceDetails>
                            Price
                        </PriceDetails>
                    </Product>
                </Info>
                <Summary>summary</Summary>
            </Bottom>
        </Wrapper>
        <Footer/>
    </Container>
  )
}

export default Cart