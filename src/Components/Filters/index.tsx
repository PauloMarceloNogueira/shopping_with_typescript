import React, { useContext } from 'react';
import {AiOutlineClose} from 'react-icons/ai'
import { Container, Title, Field, Tag, TagName } from './styles';
import { AppContext } from '../../Store/context';
import { Types } from '../../Store/reducers';

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

  const handleClearFilter = () => {
    dispatch({
      type: Types.ClearFilter
    })
  }


  return <Container>
    <Title>Filtros</Title>
    {filter.key && <Tag>
      <TagName>Frete Grátis</TagName>
      <AiOutlineClose onClick={handleClearFilter} style={{cursor:'pointer'}}/>
    </Tag>}
    {!filter.key && <Field onClick={() => handleSetFilter({key: 'shippingFree', value: 'true'})}>Frete grátis</Field>}
    {/* <br />
    {filter && 
      <span onClick={handleClearFilter}>Limpar filtro</span>
    } */}
  </Container>;
}

export default Filters;