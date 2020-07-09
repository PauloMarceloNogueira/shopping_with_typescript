import React, { useContext } from 'react';
import {RiShoppingCartLine, RiUserLine} from 'react-icons/ri'
import {FiBell} from 'react-icons/fi'

import { 
  Container, 
  Logo, 
  Search, 
  Profile, 
  Content, 
  Avatar, 
  Notification,
  ShoppingCart, 
  NumberDisplay} from './styles';
import { AppContext } from '../../Store/context';


const Header: React.FC = () => {
  const {state} = useContext(AppContext)
  const {shoppingCart:{qtd}} = state
  return <Container>
    <Logo src={'https://http2.mlstatic.com/frontend-assets/ui-navigation/5.6.0/mercadolibre/logo-pt__large_plus.png'}>
    
    </Logo>
    <Search placeholder="Buscar produtos, marcas e muito mais..."/>
    <Profile>
      <Content>
        <Avatar>
          <RiUserLine />
        </Avatar>
        <Notification>
          
          <FiBell />
        </Notification>
        <ShoppingCart>
          {qtd > 0 && <NumberDisplay>{qtd}</NumberDisplay>}
          <RiShoppingCartLine />
        </ShoppingCart>
      </Content>
    </Profile>
  </Container>;
}

export default Header;