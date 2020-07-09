import styled from 'styled-components';

export const Container = styled.div`
  padding: 24px;
  width: 90%;
  border-bottom: 1px solid #ccc;
  display: flex;
`;

export const Picture = styled.img`
  height: 160px;
`
export const Content = styled.div`
  margin-left: 32px;
`
export const Shipping = styled.h4`
  font-size: 12px;
  color: #FFF;
  background: #3483FA;
  padding: 0 4px;
  border-radius: 3px;
  font-weight: 600;
  margin-bottom: 8px;
  width: 45%;
`
export const Title = styled.div`
  font-size: 16px;
  font-weight: 300;
  text-align: left;
`
export const PriceDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`
export const Amount = styled.div`
  padding: 16px 0;
`
export const Credits = styled.div`
  color: #00a650;
  font-size: 12px;
`

export const ButtonBuy = styled.button`
  margin-top: 16px;
  background: ${props => props.disabled ? '#bbb' : '#3483fa'};
  color: #FFF;
  width: 100%;
  height: 32px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`
