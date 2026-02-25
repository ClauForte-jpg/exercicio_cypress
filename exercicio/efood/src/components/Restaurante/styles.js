import styled from 'styled-components'

export const Card = styled.div`
  background-color: #FFF;
  border: 1px solid #E66767;
  position: relative;
  color: #E66767;

  img {
    width: 100%;
    max-height: 217px;
    object-fit: cover;
    display: block;
  }
`

export const Titulo = styled.h3`
  font-weight: bold;
  font-size: 18px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 8px 0;
`

export const Descricao = styled.p`
  font-size: 14px;
  line-height: 22px;
  margin-bottom: 16px;
`

export const Botao = styled.button`
  background-color: #E66767;
  color: #FFEBD9;
  border: none;
  padding: 4px 6px;
  font-weight: bold;
  font-size: 14px;
  cursor: pointer;
  margin-bottom: 8px;
`