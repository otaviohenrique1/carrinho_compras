import React, { ImgHTMLAttributes } from 'react'
import styled from 'styled-components';

export default function Imagem(props: ImgHTMLAttributes<HTMLImageElement>) {
  return (
    <ImagemEstilizada {...props} />
  )
}

const ImagemEstilizada = styled.img`
  width: 100px;
`;
