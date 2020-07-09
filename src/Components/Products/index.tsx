import React, { useContext, Fragment, useEffect } from 'react';

import { Container, Content } from './styles';
import Filters from '../Filters';
import Product from '../Product';
import { AppContext } from '../../Store/context';
import {Types} from '../../Store/reducers'
import productMock from './productMock.json'

type ProductType = {
  id: number;
  picture: string;
  title: string;
  price: number;
  qtd: number;
  shippingFree: boolean;
}

const Products: React.FC = () => {
  const {state, dispatch} = useContext(AppContext)
  const {products, filter} = state

  const handleSaveProduct = (item:ProductType) => {
    dispatch({
      type: Types.LoadingProducts,
      payload: item
    })
  }
  useEffect(() => {
    productMock.data.map(product => {
      handleSaveProduct(product)
    })
  }, [])
  
  return <Container>
    <Filters />
    <Content>
      {!products.length ? 
      <div>
        loading...
      </div>
      :
        !filter.key.length ? <Fragment>
          {
            products.map((product,key) =>{
              return <Product key={key} id={product.id} />
            })
          }
        </Fragment>
      :
          products.filter(product => product.shippingFree === Boolean(filter.value))
            .map((p, k) => {
              return <Product key={k} id={p.id} />
            })
      }
      
    </Content>
  </Container>;
}

export default Products;