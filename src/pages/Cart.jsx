import NavBar from "../components/NavBar"
import Announcement from "../components/Announcement"
import Footer from "../components/Footer"
import styled from "styled-components"
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { mobile } from "../reponsive";

const Container=styled.div`
    
`
const Wrapper=styled.div`
    padding: 20px;
    ${mobile({padding:"10px"})}
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
    ${mobile({display:"none"})}
`
const TopText=styled.span`
    text-decoration: underline;
    margin: 0 10px;
    cursor: pointer;
`

const Bottom=styled.div`
    display: flex;
    justify-content: space-between;
    ${mobile({flexDirection:"column"})}
`

const Info=styled.div`
    flex: 3;
`
const Product=styled.div`
    display: flex;
    justify-content: space-between;
    ${mobile({flexDirection:"column"})}
    
`
const ProductDetaill=styled.div`
    flex: 2;
    display: flex;
    margin: 20px;
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
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
const ProductAmountContainer=styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 20px;
`
const ProductAmount=styled.div`
    font-size: 24px;
    margin: 5px;
    ${mobile({margin:"5px 15px"})}
`
const ProductPrice=styled.div`
    font-size: 30px;
    font-weight: 200;
    ${mobile({marginBotom:"20px"})}
`
const Hr=styled.hr`
  background-color: #eee;
  border: none;
  height: 1px;
`

const Summary=styled.div`
    flex: 1;
    border: 0.5px solid lightgrey;
    border-radius: 10px;
    padding: 20px;
    height: 50vh;
`
const SummaryTitle=styled.h1`
    font-weight: 200;
`
const SummaryItem=styled.div`
    margin: 30px 0px;
    display: flex;
    justify-content: space-between;
    font-weight: ${(props)=>props.type === "total" && "500"};
    font-size: ${(props)=>props.type === "total" && "24px"};
`
const SummaryItemText=styled.span``
const SummaryItemPrice=styled.span``
const Button=styled.button`
    width: 100%;
    padding: 10px;
    background-color: black;
    color: white;
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
                            <ProductAmountContainer>
                                <AddIcon/>
                                <ProductAmount>2</ProductAmount>
                                <RemoveIcon/>
                            </ProductAmountContainer>
                            <ProductPrice>$ 30</ProductPrice>
                        </PriceDetails>
                    </Product>
                    <Hr/>
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
                            <ProductAmountContainer>
                                <AddIcon/>
                                <ProductAmount>2</ProductAmount>
                                <RemoveIcon/>
                            </ProductAmountContainer>
                            <ProductPrice>$ 30</ProductPrice>
                        </PriceDetails>
                    </Product>
                </Info>
                <Summary>
                <SummaryTitle>ORDER SUMMARY</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>Subtotal</SummaryItemText>
              <SummaryItemPrice>$ 30</SummaryItemPrice>
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
              <SummaryItemPrice>$ 30</SummaryItemPrice>
            </SummaryItem>
            <Button>CHECKOUT NOW</Button>
                </Summary>
            </Bottom>
        </Wrapper>
        <Footer/>
    </Container>
  )
}

export default Cart