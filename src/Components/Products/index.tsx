import React, { useContext, Fragment, useEffect } from 'react';

import { Container, Content } from './styles';
import Filters from '../Filters';
import Product from '../Product';
import { AppContext } from '../../Store/context';
import {Types} from '../../Store/Schema/schema'
import productMock from './productMock.json'
import { ProductType } from '../../Store/Schema/Product.schema';
import { FilterType } from '../../Store/Schema/Filter.schema';

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
    if (!!filter.length) {
      // const pdts = []
      console.log(productMock.data.filter(p => p.price >= Number('140000')), 'FILTRDO')
      filter.map(f => {
        if (f.key === 'price') {
          productMock.data.filter(p => p.price >= Number(f.value)).map(pr => handleSaveProduct(pr))
        }
        // if (f.key === 'freeShipping') {
        //   pdts.push(productMock.data.filter(p => !!p.shippingFree))
        // }
      })
      // console.log(pdts)
      // handleSaveProduct(pdts)
    }
    productMock.data.map(product => {
      handleSaveProduct(product)
    })
  }, [filter])
  
  return <Container>
    <Filters />
    <Content>
      {!products.length ? 
      <div>
        loading...
      </div>
      :
        <Fragment>
        {
          products.map((product,key) =>{
            return <Product key={key} id={product.id} />
          })
        }
      </Fragment>
      }
      
    </Content>
  </Container>;
}

export default Products;