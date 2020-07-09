import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 50px;
  background: #fff159;
  padding: 8px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Logo = styled.img`
  width: 134px;
  padding-left: 16px;  
`

export const LogoTitle = styled.h1`

`

export const LogoSubtitle = styled.h3``

export const Search = styled.input`
  width: 50%;
  height: 32px;
  background: #FFF;
  box-shadow: 0 1px 2px 0 rgba(0,0,0,.2);
  font-size: 14px;
  color: #333;
  border: 0 rgba(0,0,0,.2);
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding-left: 8px;
`

export const Profile = styled.div`
  display: flex;
  padding-right: 16px;  
  width: 10%;
`

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`

export const Notification = styled.div`
  position: relative;
`

export const Avatar = styled.div``

export const ShoppingCart = styled.div`
  position: relative;
`

export const NumberDisplay = styled.div`
  position: absolute;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  top: -5px;
  right: -4px;
  background: red;
  color: #FFF;
  font-size: 10px;
  font-weight: bold;
  text-align: center;
`
