import React, { useContext } from 'react';
import {AiOutlineClose} from 'react-icons/ai'
import { Container, Title, Field, Tag, TagName } from './styles';
import { AppContext } from '../../Store/context';
import { Types } from '../../Store/Schema/schema';
import { FilterType } from '../../Store/Schema/Filter.schema';

const Filters: React.FC = () => {
  const {state, dispatch} = useContext(AppContext)
  const {filter} = state
  const handleSetFilter = (value:any) => {
    dispatch({
      type: Types.Filter,
      payload: {
        key: value.key,
        value: value.value
      }
    })
  }

  const handleClearFilter = (filter:FilterType) => {
    dispatch({
      type: Types.ClearFilter
    })
  }


  return <Container>
    <Title>Filtros</Title>
    {
      filter.map(f => <Tag>
        <TagName>{f.key}</TagName>
        <AiOutlineClose onClick={() => handleClearFilter(f)} style={{cursor:'pointer'}}/>
      </Tag>)
    }
    
    {!filter.find(f => f.key === 'shippingFree' && f.value === 'true') && <Field onClick={() => handleSetFilter({key: 'shippingFree', value: 'true'})}>Frete grátis</Field>}
    {!filter.find(f => f.key === 'price') && <Field onClick={() => handleSetFilter({key: 'price', value: '140000'})}>Até R$ 200</Field>}
    {!filter.find(f => f.key === 'price') && <Field onClick={() => handleSetFilter({key: 'price', value: '201-800'})}>de R$ 200 até R$800</Field>}
    {!filter.find(f => f.key === 'price') && <Field onClick={() => handleSetFilter({key: 'price', value: '> 801'})}>maior que R$ 800</Field>}
    {/* <br />
    {filter && 
      <span onClick={handleClearFilter}>Limpar filtro</span>
    } */}
  </Container>;
}

export default Filters;