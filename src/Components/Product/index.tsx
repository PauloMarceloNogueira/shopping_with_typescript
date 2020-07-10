import React, { useContext, Fragment } from 'react';

import { 
  Container,
  Picture,
  Content,
  Shipping,
  Title,
  PriceDetails,
  Amount,
  ButtonBuy,
  Credits } from './styles';
import { AppContext } from '../../Store/context';
import { Types } from '../../Store/Schema/schema';
import maskNumberToReal from '../../Utils/monetaryMask';
  
type ReceiveProductType = {
  id: number;
}


const Product: React.FC<ReceiveProductType> = ({id}:ReceiveProductType) => {
  const {state, dispatch} = useContext(AppContext)
  const {products} = state
  const product = products.find(a => a.id === id)
  
  const handleAddCart = (value:number, id:number) => {
    
    dispatch({
      type: Types.AddProductToCart,
      payload: {
        value
      }
    })

    dispatch({
      type: Types.RefreshQuantity,
      payload: {
        id
      }
    })
    
  }

  const calculateCredit = (price?:number) => {
    return price && price/12
  }

  const disabled = product && product.qtd < 1

  console.log(product?.picture)
  return <Container>
    {product && <Fragment>
      <Picture src={product.picture}/>
    <Content>
      {product?.shippingFree && <Shipping>Enviando normalmente</Shipping>}
      <Title>{product?.title}</Title>
      <PriceDetails>
      <Amount>{maskNumberToReal(product?.price)}</Amount>
        <Credits>12x {maskNumberToReal(calculateCredit(product?.price))} sem juros</Credits>
      </PriceDetails>
      <ButtonBuy disabled={disabled} onClick={() => handleAddCart(product.price, product?.id)}>
        {disabled ? 'Produto Indisponível' :  'Adicionar ao carrinho'}
      </ButtonBuy>
    </Content>
    </Fragment>
      }
    
  </Container>
}

export default Product;