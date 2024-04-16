import styled from "styled-components"
import { popularProducts } from "../data"
import Products from "./Products"

const Container=styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`

const Product = () => {
  return (
    <Container>
        {popularProducts.map(productItem=>(
            <Products item={productItem} key={productItem.id}/>
        ))}
    </Container>
  )
}

export default Product