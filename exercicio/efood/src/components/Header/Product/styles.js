import styled from 'styled-components'

export const Card = styled.div`
  background-color: #FFF;
  border: 1px solid #E66767;
  position: relative;
  color: #E66767;

  img {
    width: 100%;
    display: block;
    max-height: 217px;
    object-fit: cover;
  }
`

export const Titulo = styled.h3`
  font-weight: bold;
  font-size: 18px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 16px;
`

export const Rating = styled.span`
  display: flex;
  align-items: center;
  gap: 8px;
`

export const Descricao = styled.p`
  font-size: 14px;
  line-height: 22px;
  margin-bottom: 16px;
`

export const Infos = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
`

export const Tag = styled.div`
  background-color: #E66767;
  color: #FFEBD9;
  padding: 6px 10px;
  font-size: 12px;
  font-weight: bold;
`