import styled from 'styled-components';

export const Container = styled.div`
  width: 30%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  margin-left: 24px;
`;

export const Title = styled.h5`
  font-size: 16px;
  padding: 12px 0;
`

export const Field = styled.span`
  font-size: 14px;
  font-weight: 400;
  cursor: pointer;
`

export const Tag = styled.div`
  color: #ccc;
  background: #fff;
  display: flex;
  padding: 4px;
  margin-bottom: 12px;
`

export const TagName = styled.span`
  padding-right: 8px;
  font-size: 12px;
`