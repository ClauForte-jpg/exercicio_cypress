import styled from 'styled-components'

export const Container = styled.footer`
  background-color: #FFEBD9;
  padding: 40px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 120px;

  p {
    max-width: 480px;
    width: 100%;
    font-size: 10px;
    text-align: center;
    color: #E66767;
    margin-top: 80px;
  }
`

export const RedesSociais = styled.div`
  display: flex;
  gap: 8px;
  margin-top: 32.5px;
  
  img {
    width: 24px;
    height: 24px;
    cursor: pointer;
  }
`